const { ipcRenderer } = require('electron');

export let chatHistory = [];
export let currentQueryId = undefined;

import { addMessageToUI } from './ui.js'

 export function saveState() {
    saveMessages();
    saveCurrentQueryId();
  }
  
  export function saveMessages() {
    const messages = Array.from(document.querySelectorAll('.message')).map(message => ({
      className: message.classList[1],
      text: message.querySelector('.message-content').innerHTML,
      type: message.type
    }));
  
    ipcRenderer.invoke('set-store-data', 'chatHistory', messages).then(() => {
      console.log('Chat history saved:', messages);
    });
  }

  export function loadMessages() {
    ipcRenderer.invoke('get-store-data', 'chatHistory').then(result => {
      if (result && result.length) {
        console.log('Loaded messages:', result);
        result.forEach(msg => {
          addMessageToUI(msg.className, msg.text, msg.type === 'service-message');
          const message = { role: msg.className === 'user-message' ? 'user' : 'assistant', content: msg.text };
          if (msg.type) {
            message.type = msg.type;
          }
          chatHistory.push(message);
        });
        updateDefaultMessageVisibility();
      } else {
        console.log('No saved messages found.');
      }
    });
  }
  
  export function updateDefaultMessageVisibility() {
    const messagesContainer = document.getElementById('messages');
    const defaultMessage = document.getElementById('default-message');
    if (messagesContainer.children.length === 0) {
      defaultMessage.style.display = 'block';
    } else {
      defaultMessage.style.display = 'none';
    }
  }
  
  function saveCurrentQueryId() {
    ipcRenderer.invoke('set-store-data', 'currentQueryId', currentQueryId).then(() => {
      console.log('Current query ID saved:', currentQueryId);
    });
  }
  
  export function loadCurrentQueryId() {
    ipcRenderer.invoke('get-store-data', 'currentQueryId').then(result => {
      if (result) {
        currentQueryId = result;
      }
    });
  }