import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';
import Store from 'electron-store';

const store = new Store();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false // For compatibility with common JavaScript libraries
    }
  });

  win.loadFile(path.join(__dirname, 'index.html'));
}

function createSettingsWindow() {
  const settingsWin = new BrowserWindow({
    width: 450,
    height: 500,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false // For compatibility with common JavaScript libraries
    }
  });

  settingsWin.loadFile(path.join(__dirname, 'settings.html'));
}

function createPromptWindow() {
  const settingsWin = new BrowserWindow({
    width: 450,
    height: 500,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false // For compatibility with common JavaScript libraries
    }
  });

  settingsWin.loadFile(path.join(__dirname, 'settings-prompt.html'));
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.on('open-settings', () => {
  console.log('Opening settings window'); // Debugging log
  createSettingsWindow();
});

ipcMain.on('open-prompt', () => {
  console.log('Opening prompt window'); // Debugging log
  createPromptWindow();
});

ipcMain.handle('get-store-data', (event, key) => {
  return store.get(key);
});

ipcMain.handle('set-store-data', (event, key, value) => {
  //console.log(`Setting store data: key=${key}, value=${value}`); // Debugging log
  if (value === undefined) {
    //console.log(`Deleting key: ${key}`); // Debugging log
    store.delete(key);
  } else {
    //console.log(`Setting key: ${key} to value: ${value}`); // Debugging log
    store.set(key, value);
  }
  return true;
});

ipcMain.handle('get-settings', async () => {
  const settings = {
    apiToken: store.get('apiToken'),
    redashToken: store.get('redashToken'),
    chatModel: store.get('chatModel'),
    currentQueryId: store.get('currentQueryId')
  };
  console.log('Settings from storage:', settings); // Debugging log
  return settings
});

ipcMain.handle('save-settings', (event, newSettings) => {
  store.set(newSettings);
  console.log('Settings saved:', newSettings); // Debugging log
});

ipcMain.handle('get-prompt', async () => {
  const customInstructionsPrompt = store.get('customInstructionsPrompt');
  const customNotToDoPrompt = store.get('customNotToDoPrompt');
  return { customInstructionsPrompt, customNotToDoPrompt };
});

ipcMain.handle('save-prompt', (event, newPrompt) => {
  store.set('customPrompt', newPrompt.customPrompt);
  console.log('Prompt saved:', newPrompt); // Debugging log
});
