const { ipcRenderer } = require('electron');

import { updateDefaultMessageVisibility } from './state.js'
import { chatHistory } from './state.js'
import { fetchResponse } from './service.js'
import { saveState } from './state.js'
import { handleSqlResponse } from './service.js'

export async function sendMessageClick(message) {
    if (message) {
      addMessageToUI('user-message', message);
    } else {
      const userInput =  document.getElementById('user-input');
      const text = userInput.value.trim();
      if (!text) return;
  
      addMessageToUI('user-message', text);
      userInput.value = '';
  
      addTypingIndicator();
  
      chatHistory.push({ role: "user", content: text });
    }
  
    fetchResponse(chatHistory).then(response => {
      console.log("processing response", response);
      removeTypingIndicator();
      parseChatGPTResponse(response)
      saveState();
    }).catch(error => {
      removeTypingIndicator();
      console.error('Error:', error);
      addMessageToUI('bot-message', 'An error occurred while fetching the response.', true);
    });
  }

  async function parseChatGPTResponse(response) {
    const redashToken = await ipcRenderer.invoke('get-store-data', 'redashToken');
    if (response.startsWith("An error occurred")) {
      addMessageToUI('bot-message', response);
    } else if (response.includes("Could you please clarify or provide more context?")) {
      addMessageToUI('bot-message', response);
    } else {
      console.log("parsing SQL from response");
      const match = response.match(/```sql\s*([\s\S]*?)\s*```/);
      if (match) {
        const sqlCode = match[1].trim(); // Access the captured group directly
        const textBeforeSql = response.split(match[0])[0].trim();
        console.log("Text before SQL:");
        console.log(textBeforeSql);
        console.log("SQL Code:");
        console.log(sqlCode);
        addMessageToUI('bot-message', textBeforeSql);
        addMessageToUI('openai-sql', sqlCode);
        handleSqlResponse(sqlCode, redashToken);
      } else {
        console.log("No SQL code block found in the response.");
        addMessageToUI('bot-message', response);
      }
    }
  }
  
export function addMessageToUI(className, text, isServiceMessage = false, failedQuery = false) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', className);
  
    const messageContentDiv = document.createElement('div');
    messageContentDiv.classList.add('message-content');

    const formatAsSQL = className === 'openai-sql'

    if (formatAsSQL) {
        messageContentDiv.innerHTML = `<pre><code class="language-sql">${text}</code></pre>`
    } else {
        messageContentDiv.innerHTML = isServiceMessage ? `<i>${text}</i>` : text;
    }
  
    messageDiv.appendChild(messageContentDiv);
  
    if (formatAsSQL) {
      Prism.highlightElement(messageContentDiv.querySelector('code'));
      const copyButton = document.createElement('button');
      copyButton.classList.add('copy-button');
      copyButton.innerHTML = 'Copy';
      copyButton.addEventListener('click', () => copyToClipboard(text));
      messageDiv.appendChild(copyButton);
    }

    if (failedQuery) {
      const fixButton = document.createElement('button');
      fixButton.classList.add('fix-automatically-button');
      fixButton.innerHTML = 'Try fix automatically';
      fixButton.addEventListener('click', () => sendMessageClick(text));
      messageDiv.appendChild(fixButton);
    }
  
    document.getElementById('messages').appendChild(messageDiv);
    document.getElementById('chat-window').scrollTop = document.getElementById('chat-window').scrollHeight;
  
    updateDefaultMessageVisibility();
  }
  
 export function addTypingIndicator() {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', 'bot-message');
    messageDiv.id = 'typing-indicator';
  
    const dotsContainer = document.createElement('div');
    dotsContainer.classList.add('typing-indicator');
  
    // Three dots for the typing animation
    for (let i = 0; i < 3; i++) {
      const dot = document.createElement('span');
      dotsContainer.appendChild(dot);
    }
  
    messageDiv.appendChild(dotsContainer);
    document.getElementById('messages').appendChild(messageDiv);
    document.getElementById('chat-window').scrollTop = document.getElementById('chat-window').scrollHeight;
  }
  
  export function removeTypingIndicator() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
      typingIndicator.parentNode.removeChild(typingIndicator);
    }
  }
  
  export function clearState() {
    document.getElementById('messages').innerHTML = '';
  
    ipcRenderer.invoke('set-store-data', 'chatHistory', []);
    console.log('Chat history and current query ID cleared.');
  
    updateDefaultMessageVisibility();
  }
  
  export function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      alert('Text copied to clipboard');
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  }
  
  export function handleKeyDown(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      sendMessageClick();
    }
  }
  
  export function openSettingsClick() {
    ipcRenderer.send('open-settings');
  }

  export function openPromptClick() {
    ipcRenderer.send('open-prompt');
  }