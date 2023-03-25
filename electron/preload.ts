import { Menu } from "electron/main"
import { writeFileSync } from "fs";
import { ipcRenderer } from "electron";

let openedFilePath;
let textarea = document.getElementById('opened-file') as HTMLInputElement;

ipcRenderer.on('openedFile', (event, {contents}, filePath:string ) => {
    openedFilePath = filePath;
    console.log(filePath);
    const filePathH3 = document.getElementById('file-path') as HTMLInputElement;
    textarea = document.getElementById('opened-file') as HTMLInputElement;
    textarea.value = contents;
    filePathH3.innerText = filePath;
})

ipcRenderer.on('saveFile', (event) => {
    const currentFileValue = textarea.value;
    //writeFileSync(openedFilePath, current)
})