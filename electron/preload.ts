import { Menu } from "electron/main"
import { writeFileSync } from "fs";
import { ipcRenderer } from "electron";
import {parseInputXML} from "../src/treeview/parse_xml"

let openedFilePath;
let textarea = document.getElementById('opened-file') as HTMLInputElement;

ipcRenderer.on('openedFile', (event, {contents}, filePath:string ) => {
    openedFilePath = filePath;
    console.log(filePath);
    const filePathH3 = document.getElementById('file-path') as HTMLInputElement;
    textarea = document.getElementById('opened-file') as HTMLInputElement;
    textarea.value = contents;
    filePathH3.innerText = filePath;
    parseInputXML(contents)
})

ipcRenderer.on('saveFile', (event) => {
    const currentFileValue = textarea.value;
    //writeFileSync(openedFilePath, current)
})
