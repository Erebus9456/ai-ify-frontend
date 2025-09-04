import { createStore } from "vuex";
import ping from "./modules/ping";

export default createStore({
  modules: {
    ping,
  },
});
