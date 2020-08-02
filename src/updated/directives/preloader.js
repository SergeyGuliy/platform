import Vue from "vue";
import VPreloader from "../common/components/VPreloader";

let preloader;
export const preloaderDirective = {
  bind(el, binding) {
    console.log(el, binding, VPreloader);
    if (binding.value) {
      preloader = Vue.compile("<div>wadaw</div>");
      // preloader = new Vue({render: h => h(VPreloader)})
      console.log(preloader);
      preloader.$mount();
      console.log("preloader", preloader);
      console.log("el", preloader.$el);
      preloader.$mount();
      preloader.$destroy();
      el.append(preloader.$el);
      // preloader.$el.style.background = el.style.background
    }
  }
  /* update() {
        preloader.$el.remove();
        preloader.$destroy();
        /!*
        if (binding.value) {
            preloader.$mount();
            el.append(preloader.$el);
            // preloader.$el.style.background = el.style.background
        } else if (preloader.$el) {
            preloader.$el.remove();
            preloader.$destroy();
        } else return*!/
    },*/
};
