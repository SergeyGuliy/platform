import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      loading: false
    };
  },
  computed: {
    ...mapState("modal", ["data"])
  },
  methods: {
    ...mapActions("modal", ["closeModal"]),

    close(data = null) {
      if (!this.loading) {
        window.dispatchEvent(
          new CustomEvent("modalClose", {
            detail: data
          })
        );
        this.closeModal();
      }
    }
  }
};
