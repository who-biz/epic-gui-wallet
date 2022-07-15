'use strict'

import { app, protocol, BrowserWindow, ipcMain, dialog, Menu, shell } from 'electron'
import { exec } from 'child_process'

import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS3_DEVTOOLS } from 'electron-devtools-installer'

const isDevelopment = process.env.NODE_ENV !== 'production'
const path = require('path')
const ps = require('ps-node');
const findProcess = require('find-process');
let win;

async function kill(pid){
  return new Promise(function(resolve, reject) {
    let iskilled;
    if (process.platform === 'win32') {
        exec(`taskkill /pid ${pid} /f /t`, function( err ) {
           if (err) {
             resolve(false);
           }
           else {

             resolve(true);
           }
       });

    }else{
      //check if 3 seconds for node server is to short and makes problems
      ps.kill(pid, {timeout: 3},function( err ) {
          if (err) {
            resolve(false);
          }
          else {

            resolve(true);
          }
      });
    }
  });
}


//[13088:0215/073859.040:ERROR:gpu_init.cc(454)] Passthrough is not supported, GL is disabled, ANGLE is
app.disableHardwareAcceleration();

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])


async function createWindow() {
  // Create the browser window.

  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    minWidth: 1024,
    maxWidth: 1600,
    title: "Epiccash Wallet 4.0.0",
    webPreferences: {
      icon: path.join(__dirname, '../public/favicon.ico'),
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: false,
      contextIsolation: true,
      //enableRemoteModule: true,
      preload: path.join(__dirname, 'preload.js'),
      webSecurity: false
    }
  });


  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }
  if (!isDevelopment) {
    if(process.platform == 'darwin'){
      var menu = Menu.buildFromTemplate([
          {
              label: 'Menu',
              submenu: [
                  { label: "About Application", selector: "orderFrontStandardAboutPanel:" },
                  { label: "Source on GitHub", click ()
                    {
                      shell.openExternal('https://github.com/EpicCash/epic-gui-wallet');
                    }
                   },
                  { type: "separator" },
                  {
                      label:'Quit',
                      accelerator: "CmdOrCtrl+Q",
                      async click() {
                          let killPromise = [];
                          let killProcess = false;
                          let killPids = [];

                          let pWalletList = await findProcess('name', /.*?epic-wallet.*(owner_api|listen|scan)/);
                          let pEpicnodeList = await findProcess('name', /.*?epic.*server.*run/);
                          let pNgrokList = await findProcess('name', /.*?ngrok.*(start)/);
                          for(let process of pWalletList) {
                            if(process.cmd.includes('owner_api') || process.cmd.includes('listen') || process.cmd.includes('scan')){
                              killPids.push(process);
                            }
                          }
                          for(let process of pEpicnodeList) {
                            if(process.cmd.includes('server')){
                              killPids.push(process);
                            }
                          }
                          for(let process of pNgrokList) {
                            if(process.cmd.includes('ngrok')){
                              killPids.push(process);
                            }
                          }
                          if(killPids.length){
                            for(let process of killPids) {

                              killPromise.push(kill(process.pid))
                            }
                            await Promise.all(killPromise);
                          }


                          app.quit()
                      }
                  },

              ],

          },
          {
            label: "Application",
            submenu: [

              {
                label: "Edit",
                submenu: [
                    { label: "Undo", accelerator: "CmdOrCtrl+Z", selector: "undo:" },
                    { label: "Redo", accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:" },
                    { type: "separator" },
                    { label: "Cut", accelerator: "CmdOrCtrl+X", selector: "cut:" },
                    { label: "Copy", accelerator: "CmdOrCtrl+C", selector: "copy:" },
                    { label: "Paste", accelerator: "CmdOrCtrl+V", selector: "paste:" },
                    { label: "Select All", accelerator: "CmdOrCtrl+A", selector: "selectAll:" }
                ]
              }
            ]


          }

      ]);
    }else{
      var menu = Menu.buildFromTemplate([
          {
              label: 'Menu',
              submenu: [

                  { label: "Source on GitHub", click ()
                    {
                      shell.openExternal('https://github.com/EpicCash/epic-gui-wallet');
                    }
                   },
                  { type: "separator" },
                  {
                      label:'Quit',
                      accelerator: "CmdOrCtrl+Q",
                      async click() {
                        let killPromise = [];
                        let killProcess = false;
                        let killPids = [];

                        let pWalletList = await findProcess('name', /.*?epic-wallet.*(owner_api|listen|scan)/);
                        let pEpicnodeList = await findProcess('name', /.*?epic.*server.*run/);
                        let pNgrokList = await findProcess('name', /.*?ngrok.*(start)/);
                        for(let process of pWalletList) {
                          if(process.cmd.includes('owner_api') || process.cmd.includes('listen') || process.cmd.includes('scan')){
                            killPids.push(process);
                          }
                        }
                        for(let process of pEpicnodeList) {
                          if(process.cmd.includes('server')){
                            killPids.push(process);
                          }
                        }
                        for(let process of pNgrokList) {
                          if(process.cmd.includes('ngrok')){
                            killPids.push(process);
                          }
                        }
                        if(killPids.length){
                          for(let process of killPids) {

                            killPromise.push(kill(process.pid))
                          }
                          await Promise.all(killPromise);
                        }
                        app.quit()
                      }
                  },

              ],

          },
          {
            label: "Application",
            submenu: [

              {
                label: "Edit",
                submenu: [
                    { label: "Undo", accelerator: "CmdOrCtrl+Z", selector: "undo:" },
                    { label: "Redo", accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:" },
                    { type: "separator" },
                    { label: "Cut", accelerator: "CmdOrCtrl+X", selector: "cut:" },
                    { label: "Copy", accelerator: "CmdOrCtrl+C", selector: "copy:" },
                    { label: "Paste", accelerator: "CmdOrCtrl+V", selector: "paste:" },
                    { label: "Select All", accelerator: "CmdOrCtrl+A", selector: "selectAll:" }
                ]
              }
            ]


          }

      ]);
    }

    Menu.setApplicationMenu(menu);
  }
}



// Quit when all windows are closed.
app.on('window-all-closed', async() => {

  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }

});




app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS3_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }

  let currentLocale = app.getLocale();
  console.log('currentLocale',currentLocale);
  createWindow()
})


// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {

      app.quit()
    })
  }
}


ipcMain.handle('show-save-dialog', async (event, title, message, defaultPath) => {
    // do stuff
    let responce = await dialog.showSaveDialog({
      title: title,
      message: message,
      defaultPath: defaultPath
    });
    return responce;
});

ipcMain.handle('show-open-dialog', async (event, title, message, defaultPath) => {
    // do stuff
    let responce = await dialog.showOpenDialog({
      properties:["openDirectory", "showHiddenFiles", "createDirectory"]
    });
    return responce;
});

ipcMain.handle('locale', async() => {
  return await app.getLocale();
});

ipcMain.handle('resize', (event, width, height) => {
  let browserWindow = BrowserWindow.fromWebContents(event.sender)
  browserWindow.setSize(width,height);
});

ipcMain.on('scan-stdout', (event, data) => {
  event.reply('scan-stdout', { data });
});

ipcMain.on('firstscan-stdout', (event, data) => {
  event.reply('firstscan-stdout', { data });
});

ipcMain.on('scan-finish', (event, data) => {
  event.reply('scan-finish', { data });
});
ipcMain.on('scan-error', (event, data) => {
  event.reply('scan-error', { data });
});

ipcMain.on('walletCreated', (event, data) => {
  event.reply('walletCreated', { data });
});

ipcMain.on('walletExisted', (event, data) => {
  event.reply('walletExisted', {  });
});

ipcMain.on('walletCreateFailed', (event, data) => {
  event.reply('walletCreateFailed', {  });
});
