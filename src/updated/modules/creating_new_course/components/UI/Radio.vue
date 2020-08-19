<template>
  <div class="radio" :class="value ? 'active' : ''" @click="$emit('input', !value)">
    <input type="checkbox" :value="value" style="display: none" />
    <div class="radio__inner" />
  </div>
</template>

<script>
export default {
  name: "Radio",
  data() {
    return {};
  },
  components: {},
  props: {
    value: Boolean
  },
  methods: {}
};
</script>

<style lang="scss">
.radio {
  width: 40px;
  height: 24px;
  background: #ebeff5;
  border-radius: 48px;
  position: relative;
  transition: all ease 0.3s;
  &__inner {
    transition: all ease 0.3s;
    position: absolute;
    left: 2px;
    top: 1px;
    width: 22px;
    height: 22px;
    background: #ffffff;
    border-radius: 50%;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.01), 0px 3px 1px rgba(0, 0, 0, 0.03);
  }
}
.radio.active {
  background: #ffc107 !important;
  .radio__inner {
    left: 16px;
  }
}
</style>
