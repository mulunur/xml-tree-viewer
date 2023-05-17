
export interface IElectronAPI {
    openFile: () => any,
}

declare global {
    interface Window {
        electron: IElectronAPI
    }
}