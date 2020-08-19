<template>
  <div class="tooltip" @click="$emit('click')">
    <slot />
    <span class="tooltiptext">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "Tooltip",
  data() {
    return {};
  },
  components: {},
  props: {
    text: String
  }
};
</script>

<style lang="scss">
.tooltip {
  position: relative;
  cursor: pointer;
}
.tooltip .tooltiptext {
  visibility: hidden;
  padding: 0 8px;
  width: 168px;
  height: 34px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  top: -5px;
  left: 110%;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  line-height: 18px;
  color: #ffffff;
}
.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 100%;
  margin-top: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent black transparent transparent;
}
.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>
