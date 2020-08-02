<template>
  <div class="line-chart">
    <canvas ref="canvas"></canvas>
  </div>
</template>
<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: {
    apiData: Object,
    multiplicity: {
      type: Number,
      default: null
    },
    dateWithMonth: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      component: null,
      gradients: [
        { offset: 1, color: "#f2f5f8" },
        { offset: 0, color: "rgba(242, 245, 248, 0)" }
      ],
      chartData: {
        labels: [],
        datasets: [
          {
            borderWidth: 2,
            borderColor: "#faac15",
            pointBorderWidth: 2,
            pointHitRadius: 8,
            pointHoverBorderColor: "#faac15",
            pointHoverBackgroundColor: "#fff",
            pointBackgroundColor: "#fff",
            fill: false,
            data: []
          },
          {
            borderWidth: 2,
            borderColor: "#ebeff5",
            pointBorderColor: "transparent",
            pointBackgroundColor: "transparent",
            pointBorderWidth: 0,
            data: []
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          yAxes: [
            {
              ticks: {
                stacked: true,
                fontColor: "#9ca1ab",
                fontFamily: "'Roboto', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                lineHeight: "14px",
                beginAtZero: true,
                padding: 6,
                labelOffset: 0,
                maxRotation: 0
              },
              gridLines: false
            }
          ],
          xAxes: [
            {
              ticks: {
                fontColor: "#9ca1ab",
                fontFamily: "'Roboto', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                beginAtZero: false,
                lineHeight: "14px",
                padding: 8,
                labelOffset: 0,
                maxRotation: 0
              },
              gridLines: false
            }
          ]
        },
        tooltips: {
          enable: false,
          mode: "nearest",
          position: "nearest",
          bodyAlign: "center",
          titleAlign: "center",
          titleFontSize: 0,
          bodyFontColor: "#ffc107",
          backgroundColor: "#fff",
          caretSize: 5
        }
      },
      labelsLength: 0,
      oldChart: {},
      currentChart: {},
      currentLineOptions: {},
      chartLabels: []
    };
  },
  watch: {
    apiData() {
      this.chartData.labels = [];
      this.onSetup().then(() => this.renderChart(this.chartData, this.options));
    }
  },
  mounted() {
    this.onSetup().then(() => this.renderChart(this.chartData, this.options));
  },
  methods: {
    onSetup() {
      this.currentChart = this.chartData.datasets[0];
      this.oldChart = this.chartData.datasets[1];
      this.setOptions();
      this.createGradient()
        .then(canvas => {
          this.addGradientSettings(canvas);
          return canvas;
        })
        .then(gradient => {
          this.setGradientColor(gradient);
          this.renderChart(this.chartData, this.options);
        })
        .catch(e => console.log(e));

      return Promise.resolve();
    },
    setOptions() {
      if (this.maxTicks) {
        this.options.scales.xAxes[0].ticks.maxTicksLimit = this.apiData.previous.length / this.maxTicks;
      }
      this.setDataset();
      this.setCurrentLineOptions();
    },
    createGradient() {
      return new Promise(resolve => {
        let canvas = this.$refs.canvas;
        let ctx = canvas.getContext("2d");
        let gradient = ctx.createLinearGradient(0, 190, 0, 0);
        resolve(gradient);
      });
    },
    addGradientSettings(canvas) {
      this.gradients.forEach(grad => {
        canvas.addColorStop(grad.offset, grad.color);
      });
      return canvas;
    },
    setGradientColor(gradient) {
      this.oldChart.backgroundColor = gradient;
    },
    setCurrentLineOptions() {
      let currentLineDataLength = this.apiData.current.length;
      let pointBorderColor = (this.currentLineOptions.pointBorderColor = []),
        pointBackgroundColor = (this.currentLineOptions.pointBackgroundColor = []);

      for (let index = 0; index < currentLineDataLength; index++) {
        if (index === currentLineDataLength - 1) {
          this.$set(pointBorderColor, index, "#faac15");
          this.$set(pointBackgroundColor, index, "#faac15");
        } else {
          this.$set(pointBorderColor, index, "transparent");
          this.$set(pointBackgroundColor, index, "transparent");
        }
      }
      this.currentChart = Object.assign(this.currentChart, this.currentLineOptions);
    },
    setDataset() {
      const { current, previous } = this.apiData;
      let labelLength = this.maxLength(current, previous);
      this.oldChart.data = previous.map(item => item.total);
      this.currentChart.data = current.map(item => item.total);
      this.createLabels(labelLength);
    },
    maxLength(curr, prev) {
      return curr.length > prev.length ? "current" : "previous";
    },
    createLabels(apiMonth) {
      let index;

      if (this.dateWithMonth) index = 5;
      else index = 2;

      this.apiData[apiMonth].forEach(({ date }) => this.chartData.labels.push(date.slice(0, index)));
    }
  }
};
</script>

<style lang="scss">
.line-chart {
  height: 155px;
}
</style>
