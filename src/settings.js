const { ipcRenderer } = require('electron');

document.addEventListener('DOMContentLoaded', function() {
  // Retrieve and set the stored values on page load
  ipcRenderer.invoke('get-settings').then(result => {
    if (result.apiToken) {
      document.getElementById('api-token').value = result.apiToken;
    }
    if (result.redashToken) {
      document.getElementById('redash-token').value = result.redashToken;
    }
    if (result.chatModel) {
      document.getElementById('model-select').value = result.chatModel;
    }
    if (result.currentQueryId) {
      document.getElementById('currentQueryId').value = result.currentQueryId;
    }
  });
});

document.getElementById('save-button').addEventListener('click', function() {
  const apiToken = document.getElementById('api-token').value;
  const redashToken = document.getElementById('redash-token').value;
  const chatModel = document.getElementById('model-select').value;
  const currentQueryId = document.getElementById('currentQueryId').value;

  // Save the values using IPC
  ipcRenderer.invoke('save-settings', { apiToken, redashToken, chatModel, currentQueryId });
  // Provide feedback to the user that settings are saved
  alert('Settings saved successfully!');
});