import { app, BrowserWindow, dialog, Menu, ipcMain } from 'electron';
import { readFile, readFileSync } from 'fs';
import * as path from 'path';
// import installExtension, { REACT_DEVELOPER_TOOLS } from "electron-devtools-installer";

let mainWindow: BrowserWindow

function createWindow() {

  mainWindow = new BrowserWindow({
    width: 1200,
    height: 700,
    title: 'Friendly XML editor',
    frame: true,
    webPreferences: {
      // contextIsolation: false,
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: true
    }
  })
  // редактор первично-ролевой матрицы
  // создавать только теги предусмотрены целевой схемой
  // или делать как хмл редактор или как древовидную систему, где создаются нужные элементы


  const win_menu_template = [
    {
      label: 'Файл',
      submenu: [
        {
          label: 'Открыть данные авторизации',
          click: async () => {
            const selectedFile = await dialog.showOpenDialog({
              properties: ['openFile'], filters: [{ name: "XML", extensions: ['xml'] }]
            })
            // .then(function(fileObj) {
            //   if(!fileObj.canceled) {
            //     win.webContents.send('FILE_OPEN', fileObj.filePaths)
            //   }
            // }).catch(function(err) {
            //   console.error(err)
            // })
            const file = selectedFile.filePaths[0]
            const contents = readFileSync(file, 'utf-8')
            console.log(contents)
            mainWindow.webContents.send('open-file', { contents, filePath: file })
          }

        },
        {
          label: 'Сохранить',
          click: async () => {
            mainWindow.webContents.send('saveFile')
          }
        },
        {
          label: 'Закрыть',
          click: () => {
            app.quit()
          }
        }
      ]
    },
  ]

  //установка нативного оконного меню 
  // const menu = Menu.buildFromTemplate(win_menu_template)
  // Menu.setApplicationMenu(menu)

  if (app.isPackaged) {
    // прод
    mainWindow.loadURL(`file://${__dirname}/../index.html`);
  } else {
    // дев
    mainWindow.loadURL('http://localhost:3000/index.html');

    mainWindow.webContents.openDevTools();

    // рестарт приложения
    require('electron-reload')(__dirname, {
      electron: path.join(__dirname,
        '..',
        '..',
        'node_modules',
        '.bin',
        'electron' + (process.platform === "win32" ? ".cmd" : "")),
      forceHardReset: true,
      hardResetMethod: 'exit'
    });
  }
}

function OpenFileFomFiles() {

}

//ipcMain.handle()

app.whenReady().then(() => {
  // DevTools
  // installExtension(REACT_DEVELOPER_TOOLS)
  //   .then((name) => console.log(`Added Extension:  ${name}`))
  //   .catch((err) => console.log('An error occurred: ', err));

  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
});

ipcMain.handle("hello", async (event, message) => {
  const selectedFile = await dialog.showOpenDialog({
    properties: ['openFile'], filters: [{ name: "XML", extensions: ['xml'] }]
  })
  // .then(function(fileObj) {
  //   if(!fileObj.canceled) {
  //     win.webContents.send('FILE_OPEN', fileObj.filePaths)
  //   }
  // }).catch(function(err) {
  //   console.error(err)
  // })
  const file = selectedFile.filePaths[0]
  const contents = readFileSync(file, 'utf-8')
  return contents
})