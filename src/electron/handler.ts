import { ipcMain } from 'electron';
import rustModule from '../../rust/native/nodejs';


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
