import logo from './logo.svg';
import styles from './App.module.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { TreePanel } from './components/TreePanel/TreePanel';
import { EditPanel } from './components/EditPanel/EditPanel';
import { ButtonsPanel } from './components/ButtonsPanel/ButtonsPanel';
// import {IpcRenderer, ipcRenderer} from 'electron';


// declare global {
//   interface Window {
//     //require: (module: 'electron') => {
//       ipcRenderer: IpcRenderer
//     //};
//   }
// }

//const { ipcRenderer } = window.require('electron');
//******* */
// export interface IElectronAPI {
//     loadPreferences: () => Promise<void>,
    
//   }

//*** */
  
//   declare global {
//     interface Window {
//       electronAPI: IElectronAPI
//     }
//   }

// //   //invoke load-prefs
//   //  window.electronAPI.loadPreferences()




function App() {
  const [file, setFile] = useState("")

  const fetchFile = async () => {
    const result = await window.electron.openFile();
    setFile(result)
  }
  
  return (
    <div className={styles.App}>
      {/* { <header className="App-header">
      </header> } */}
        <h3 id='file-path'></h3>
        <ButtonsPanel getFile={fetchFile}/>
        <div className={styles.Layout}>
          <TreePanel file={file}/>
          <EditPanel/>
        </div>
        {/* <button onClick={fetchFile}>Открыть ролевую матрицу</button> */}
        {/* <textarea id='opened-file' value={file}></textarea> */}
    </div>
  );
}

export default App;
