import Vue from "vue";
import * as config from "./config";
import VCalendar from "v-calendar";

Promise.prototype.finally = function(cb) {
  const res = () => this;
  const fin = () => Promise.resolve(cb()).then(res);
  return this.then(fin, fin);
};
window.moment = require("moment");
window.moment.locale("ru");

Vue.use(require("./plugins/chartist"));
Vue.use(VCalendar);

config.store.dispatch("general/init", null, { root: true }).finally(() => {
  console.log(config);
  window.vue = new Vue({
    ...config,
    render: h => h(require("./App.vue").default)
  }).$mount("#app");
});
