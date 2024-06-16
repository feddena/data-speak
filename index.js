document.getElementById('send-button').addEventListener('click', () => sendMessageClick());
document.getElementById('settings-button').addEventListener('click', openSettingsClick);
document.getElementById('prompt-button').addEventListener('click', openPromptClick);
document.getElementById('user-input').addEventListener('keydown', handleKeyDown);
document.addEventListener('DOMContentLoaded', function() {
  loadMessages();
  updateDefaultMessageVisibility();
});
document.addEventListener('DOMContentLoaded', loadCurrentQueryId);
document.getElementById('clear-button').addEventListener('click', clearState);

// ---------------- UI ----------------
import { sendMessageClick } from './ui.js'
import { clearState } from './ui.js'
import { handleKeyDown } from './ui.js'
import { openSettingsClick } from './ui.js'
import { openPromptClick } from './ui.js'
// ---------------- STATE ----------------
import { loadMessages } from './state.js'
import { updateDefaultMessageVisibility } from './state.js'
import { loadCurrentQueryId } from './state.js'
// ---------------- DINYMIC WINDOW SIZE ----------------
window.addEventListener('resize', adjustChatContainerHeight);

function adjustChatContainerHeight() {
  const headerHeight = document.getElementById('header').offsetHeight;
  const chatWindowHeight = window.innerHeight - headerHeight;
  const chatContainer = document.getElementById('chat-container');
  const chatWindow = document.getElementById('chat-window');
  
  chatContainer.style.height = `${window.innerHeight}px`;
  chatWindow.style.height = `${chatWindowHeight}px`;
}

document.addEventListener('DOMContentLoaded', adjustChatContainerHeight);
adjustChatContainerHeight();