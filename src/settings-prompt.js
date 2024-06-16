const { ipcRenderer } = require('electron');

document.addEventListener('DOMContentLoaded', function() {
  // Retrieve and set the stored value on page load
  ipcRenderer.invoke('get-store-data', 'customInstructionsPrompt').then(result => {
    if (result) {
      document.getElementById('custom-instructions-prompt').value = result;
    }
  });

  ipcRenderer.invoke('get-store-data', 'customNotToDoPrompt').then(result => {
    if (result) {
      document.getElementById('custom-not-to-do-prompt').value = result;
    }
  });
});

document.getElementById('save-prompt-button').addEventListener('click', function() {
  const customInstructionsPrompt = document.getElementById('custom-instructions-prompt').value;
  const customNotToDoPrompt = document.getElementById('custom-not-to-do-prompt').value;
  // Save the values using IPC
  ipcRenderer.invoke('set-store-data', 'customInstructionsPrompt', customInstructionsPrompt);
  ipcRenderer.invoke('set-store-data', 'customNotToDoPrompt', customNotToDoPrompt);
  // Provide feedback to the user that the prompts are saved
  alert('Prompts saved successfully!');
});
