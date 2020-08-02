<template>
  <div class="builder-box">
    <div class="builder-box__wrapper">
      <div v-if="hasActions || title" class="create-course-box__head">
        <div class="create-course-box__head-detail">
          <slot name="button"></slot>
          <div v-if="title" class="create-course-box__head-name">{{ title }}</div>
        </div>
        <portal-target name="container-actions" class="create-course-box__head-actions">
          <slot name="actions"></slot>
        </portal-target>
      </div>

      <div class="builder-box__body" :class="{ 'no-padding': noPadding, 'mob-mt56': !noPadding && !noMb }">
        <div class="builder-box__body-wrapper" :class="{ 'full-width': full }">
          <div :class="{ 'create-course-box__start': center }">
            <slot name="header"></slot>
            <v-loading v-if="loading"></v-loading>
            <slot v-else></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Container",
  props: {
    center: { type: Boolean, default: () => false },
    loading: { type: Boolean, default: () => false },
    full: { type: Boolean, default: () => false },
    title: {},
    noPadding: { type: Boolean, default: () => false },
    mobMt56: { type: Boolean, default: () => false },
    noMb: { type: Boolean, default: () => false }
  },
  computed: {
    hasActions() {
      return !!this.$slots.actions;
    }
  }
};
</script>

<style lang="scss">
.create-course-box__head-actions > *:not(:last-child) {
  margin-right: 24px;
}
</style>

<style lang="scss" scoped>
/*.builder-box__wrapper .builder-box__body {
        padding-left: 32px;
        padding-right: 32px;
    }*/

.full-width {
  max-width: unset;
}

.no-padding {
  padding: 0 !important;
}

.create-course-box__start {
  margin-top: 0;
}
</style>
