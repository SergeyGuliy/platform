<script>
import tooltip from "primevue/tooltip";
export default {
  tooltip: tooltip
};
</script>

<style lang="scss">
.p-tooltip {
  position: absolute;
  padding: 12px 16px;
  color: #1d2228;
  border-radius: 8px;
  box-shadow: 0 0 56px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.08);
  max-width: 300px;
  background: #fff;
}

.p-tooltip.p-tooltip-right {
  margin-left: 30px;
}
.p-tooltip.p-tooltip-left {
  margin-left: -30px;
}
.p-tooltip.p-tooltip-top {
  margin-top: -30px;
}
.p-tooltip.p-tooltip-bottom {
  margin-top: 30px;
}
.p-tooltip .p-tooltip-text {
  white-space: pre-line;
  word-break: break-all;
}

.p-tooltip-arrow {
  display: block;
  position: absolute;
  background: #333;
  width: 13px;
  height: 36px;
  background: url("../../../assets/arrow.svg") no-repeat center / cover;
}
.p-tooltip-top .p-tooltip-arrow {
  top: 100%;
  left: 50%;
  transform: translate(-50%, -32%) rotate(-90deg);
}
.p-tooltip-bottom .p-tooltip-arrow {
  bottom: 100%;
  left: 50%;
  transform: translate(-50%, 32%) rotate(90deg);
}
.p-tooltip-right .p-tooltip-arrow {
  top: 50%;
  left: 0;
  transform: translate(-100%, -50%);
}

.p-tooltip-left .p-tooltip-arrow {
  top: 50%;
  right: 0;
  transform: rotate(180deg) translate(-100%, 50%);
}
</style>
