<template>
  <chartist ratio="ct-major-second" type="Line" :data="data" :options="defaultOptions" class="info-chart"></chartist>
</template>
<script>
export default {
  name: "v-chartist",
  props: {
    data: {
      required: true,
      type: Object
    },
    options: {
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      defaultOptions: {
        ...this.options,
        fullWidth: true,
        showArea: true,
        axisX: {
          showGrid: false,
          showLabel: false
        },
        axisY: {
          showGrid: false,
          showLabel: false
        },
        series: {
          "series-1": {
            showArea: true,
            showPoint: false
          },
          "series-2": {
            showArea: false,
            showPoint: true
          }
        }
      }
    };
  }
};
</script>
