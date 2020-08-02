<template>
  <div class="notranslate">
    <template v-if="layout">
      <component :is="getLayout">
        <router-view :key="$route.fullPath"></router-view>
      </component>
    </template>
    <template v-else>
      <router-view :key="$route.fullPath"></router-view>
    </template>

    <notifications group="default"></notifications>

    <div ref="mobile" id="mobile"></div>
    <div ref="desktop" id="desktop"></div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  mounted() {
    this.resize();
    window.addEventListener("resize", this.resize);
  },
  computed: {
    layout() {
      let layoutName = this.$route.meta.layout;
      if (layoutName) {
        return layoutName.charAt(0).toUpperCase() + layoutName.slice(1);
      }
      return null;
    },
    getLayout() {
      if (this.layout) {
        return require(`./components/layouts/${this.layout}.vue`).default;
      }
      return null;
    }
  },
  methods: {
    ...mapActions("general", ["setIsMobile", "setIsDesktop"]),

    resize() {
      let mobile = this.$refs.mobile;
      let desktop = this.$refs.desktop;
      this.setIsMobile(window.getComputedStyle(mobile).display === "block");
      this.setIsDesktop(window.getComputedStyle(desktop).display === "block");
    }
  }
};
</script>

<style lang="scss">
@import "./assets/styles/app.scss";

.vue-notification {
  padding: 10px;
  margin: 10px 10px 0 0;
  font-size: 12px;
  color: #ffffff;
  background: #44a4fc;
  border-left: 5px solid #187fe7;

  &.warning {
    background: #ffb648;
    border-left-color: #f48a06;
  }

  &.danger {
    background: #e54d42;
    border-left-color: #b82e24;
  }

  &.success {
    background: #68cd86;
    border-left-color: #42a85f;
  }
}
</style>

<style lang="scss" scoped>
@media screen and (max-width: 1240px) {
  #mobile {
    display: block;
  }
  #desktop {
    display: none;
  }
}

@media screen and (min-width: 1241px) {
  #mobile {
    display: none;
  }
  #desktop {
    display: block;
  }
}
</style>
