<template>
  <v-modal title="Выбор цвета" medium>
    <div class="modal-wrapper">
      <div v-if="step === DEFAULT_COLORS" class="add-color-box__colors-content">
        <div v-for="color in colors" @click="inputHandler(color)" class="add-color-box__colors-item">
          <div class="color-radio-box">
            <input type="radio" name="color" :checked="value === color" />
            <span :style="`background-color: ${color}`"></span>
          </div>
        </div>

        <div v-if="customColor" class="add-color-box__colors-item">
          <div class="color-radio-box">
            <input type="radio" name="color" checked="true" />
            <span :style="`background-color: ${value}`"></span>
          </div>
        </div>

        <div class="add-color-box__colors-item">
          <button @click="chooseColor" type="button" class="btn btn_plus">
            <v-icon src="plus" />
          </button>
        </div>
      </div>

      <div v-else-if="step === CUSTOM_COLOR">
        <v-color-picker v-model="value" />

        <div :style="`background: ${value}`" class="color-picker__variable"></div>
      </div>
    </div>

    <template #footer>
      <v-btn @click="save" type="button">Сохранить</v-btn>
    </template>
  </v-modal>
</template>

<script>
import ColorPicker from "vue-iro-color-picker";
import modal from "../../mixins/modal";

const DEFAULT_COLORS = "default";
const CUSTOM_COLOR = "custom";

export default {
  name: "CustomColorModal",
  mixins: [modal],
  components: { "v-color-picker": ColorPicker },
  mounted() {
    this.$set(this, "value", this.getValue);
  },
  data() {
    return {
      DEFAULT_COLORS,
      CUSTOM_COLOR,
      value: null,
      step: DEFAULT_COLORS,
      colors: [
        "#FFFFFF",
        "#FFFBEE",
        "#F7F9EF",
        "#F5F7FB",
        "#D3DFE6",
        "#F2E6D7",
        "#D0D6CD",
        "#6F131E",
        "#1B5A94",
        "#325851",
        "#32314D",
        "#1F2223"
      ]
    };
  },
  computed: {
    getValue() {
      return this.data["value"] || null;
    },
    customColor() {
      return this.value && this.colors.every(item => item !== this.value);
    }
  },
  methods: {
    save() {
      if (this.value) {
        this.close(this.value);
      } else {
        this.close();
      }
    },
    inputHandler(value) {
      this.$set(this, "value", value);
    },
    chooseColor() {
      this.$set(this, "step", CUSTOM_COLOR);
    }
  }
};
</script>

<style lang="scss" scoped>
.modal-wrapper {
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.color-picker__variable {
  margin-top: 16px;
  width: 100%;
}
</style>
