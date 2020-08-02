import ClickOutside from "vue-click-outside";
import { mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    $user() {
      console.log(this.$store.state.auth.user);
      return this.$store.state.auth.user;
    }
  },
  methods: {
    ...mapActions("modal", ["setModal"]),

    openModal(modalName, data = {}) {
      this.setModal({
        component: modalName + "Modal",
        data: data
      });

      return new Promise(function(resolve, reject) {
        let callback = data => {
          if (data.detail !== null) {
            resolve(data.detail);
          } else {
            reject();
          }
          window.removeEventListener("modalClose", callback);
        };
        window.addEventListener("modalClose", callback);
      });
    },
    validate(scope = "form") {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll(scope).then(data => {
          if (data) {
            window.dispatchEvent(new CustomEvent(`validate-${scope}`));
            resolve();
          } else {
            reject("Error validation");
          }
        });
      });
    }
  },
  filters: {},
  directives: {
    ClickOutside
  }
};
