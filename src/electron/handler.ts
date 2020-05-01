import { ipcMain } from 'electron';
import rustModule from '../shared/rust';


export default class IpcServer {
  constructor() {}
 
  start() {
    ipcMain.handle("toMain", async (event, ...args) => {
      const [func, ...params] = args;

      switch (func) {
        case 'hello':
          return rustModule();
      
        default:
          break;
      }
    });
  }
};
