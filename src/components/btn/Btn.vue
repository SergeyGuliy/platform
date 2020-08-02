<template>
  <!-- clean type -->
  <router-link v-if="to && clean" @click.native="clickHandler" :to="to" class="__clean-btn">
    <slot></slot>
    <v-icon src="back" />
  </router-link>
  <a v-else-if="href && clean" @click="clickHandler" :href="href" class="__clean-btn">
    <slot></slot>
    <v-icon src="back" />
  </a>
  <button v-else-if="clean" @click="clickHandler" :type="type" class="__clean-btn">
    <slot></slot>
    <v-icon src="back" />
  </button>

  <!-- third type -->
  <router-link v-else-if="to && third" @click.native="clickHandler" :to="to" class="third-btn">
    <v-icon :src="icon" />
    <slot></slot>
  </router-link>
  <a v-else-if="href && third" @click="clickHandler" :href="href" class="third-btn">
    <v-icon :src="icon" />
    <slot></slot>
  </a>
  <button v-else-if="third" @click="clickHandler" :type="type" class="third-btn">
    <v-icon :src="icon" />
    <slot></slot>
  </button>

  <!-- default type -->
  <router-link
    v-else-if="to"
    @click.native="clickHandler"
    :to="to"
    class="btn"
    :class="{ btn_revert: clear, 'btn-disabled': disable }"
    :disabled="disable"
  >
    <slot></slot>
  </router-link>
  <a
    v-else-if="href"
    @click="clickHandler"
    :href="href"
    class="btn"
    :class="{ btn_revert: clear, 'btn-disabled': disable }"
    :disabled="disable"
  >
    <slot></slot>
  </a>
  <button
    v-else
    @click="clickHandler"
    :type="type"
    class="btn"
    :class="{ btn_revert: clear, 'btn-disabled': disable }"
    :disabled="disable"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Btn",
  props: {
    type: {},
    clean: { type: Boolean, default: () => false },
    third: { type: Boolean, default: () => false },
    clear: { type: Boolean, default: () => false },
    disable: { type: Boolean, default: () => false },
    icon: { type: String },
    to: {},
    href: {}
  },
  methods: {
    clickHandler(e) {
      this.$emit("click", e);
    }
  }
};
</script>

<style scoped></style>
