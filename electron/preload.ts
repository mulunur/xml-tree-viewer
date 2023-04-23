import { Menu } from "electron/main"
import { writeFileSync } from "fs";
import { contextBridge, ipcRenderer } from "electron";
import {parseInputXML} from "../src/services/parse_xml"

//
// Preload скрипты содержат код, который выполняется в процессе 
// renderer до того, как веб-контент окна начнет загружаться. 
// Эти сценарии выполняются в контексте renderer, 
// но им предоставляются дополнительные привилегии благодаря 
// доступу к API-интерфейсам Node.js.
//
let openedFilePath;
let textarea = document.getElementById('opened-file') as HTMLInputElement;

contextBridge.exposeInMainWorld('electron', {
    loadPreferences: () => ipcRenderer.invoke('load-prefs'),
    hello: () => ipcRenderer.invoke('hello').then(async (result) => {console.log(result);return result}),
    homeDir: () => {console.log("some function in contextbridge")},
    xmlFile: openedFilePath,
    onOpenFile: (callback: (args: any) => any) => ipcRenderer.on('opened-file', callback)
  })

  contextBridge.exposeInMainWorld('ipcRenderer', {
    send: (channel: string, data: any) => ipcRenderer.send(channel, data),
    on: (channel: string, func: (args: any) => void) => 
    ipcRenderer.on(channel, (event, ...args) => func(args))
  })

ipcRenderer.on('open-file', (event, {contents}, filePath:string ) => {
    openedFilePath = filePath;
    console.log(filePath);
    const filePathH3 = document.getElementById('file-path') as HTMLInputElement;
    textarea = document.getElementById('opened-file') as HTMLInputElement;
    textarea.value = contents;
    filePathH3.innerText = filePath;

    contextBridge.exposeInMainWorld('xmlFile', contents)

    //parseInputXML(contents)
    
})

ipcRenderer.on('saveFile', (event) => {
    const currentFileValue = textarea.value;
    //writeFileSync(openedFilePath, current)
})
