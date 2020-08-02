<template>
  <div :class="{ 'open-menu': menuOpen, 'mobile-menu-open': mobileMenuOpen }" class="small-menu">
    <div class="page-wrapper">
      <v-header></v-header>
      <main>
        <slot></slot>
      </main>
    </div>

    <component v-if="getComponent" :is="getComponent"></component>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: { "v-header": Header },
  data() {
    return {};
  },
  computed: {
    component() {
      return this.$store.state.modal.component
    },
    mobileMenuOpen() {
      return this.$store.state.general.mobileMenuOpen
    },
    menuOpen() {
      return this.$store.state.general.menuOpen
    },

    getComponent() {
      if (this.component) {
        return require(`../modals/${this.component}`).default;
      }
      return null;
    }
  }
};
</script>

<style lang="scss" scoped></style>
