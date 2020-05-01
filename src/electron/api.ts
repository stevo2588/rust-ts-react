const { api } = window;
import Api from '../shared/api';


export default class implements Api {
  async hello() {
    return api.invoke("toMain", "hello");
  }
};
