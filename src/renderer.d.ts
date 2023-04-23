
export interface IElectronAPI {
    hello: () => any,
}

declare global {
    interface Window {
        electron: IElectronAPI
    }
}