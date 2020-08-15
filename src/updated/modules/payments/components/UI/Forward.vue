<template>
  <div class="forward" @click="action">
    <div class="forward-arrow">
      <v-icon src="back" />
    </div>
    <div class="forward-text">Назад</div>
  </div>
</template>

<script>
export default {
  name: "Forward",
  data() {
    return {};
  },
  components: {},
  props: {
    action: Function
  }
};
</script>

<style lang="scss">
.forward {
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 35px;
  &-arrow {
    display: flex;
    align-items: center;
    font-size: 24px;
    margin-right: 12px;
    svg {
      fill: #8e99ab;
    }
  }
  &-text {
    font-weight: 500;
    font-size: 20px;
    color: #58606e;
  }
}
</style>
