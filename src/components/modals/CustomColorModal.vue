<template>
  <v-modal title="Выбор цвета" medium>
    <div class="modal-wrapper">
      <v-color-picker v-model="value" />

      <div class="color-picker__variables">
        <div :style="`background: ${getValue}`" class="color-picker__variable"></div>
        <div :style="`background: ${value}`" class="color-picker__variable"></div>
      </div>
    </div>

    <template #footer>
      <v-btn @click="save" type="button" style="width: 100%;">Выбрать</v-btn>
    </template>
  </v-modal>
</template>

<script>
import ColorPicker from "vue-iro-color-picker";
import modal from "../../mixins/modal";

export default {
  name: "CustomColorModal",
  mixins: [modal],
  components: { "v-color-picker": ColorPicker },
  mounted() {
    this.$set(this, "value", this.getValue);
  },
  data() {
    return {
      value: null
    };
  },
  computed: {
    getValue() {
      return this.data["value"] || "#FFFFFF";
    }
  },
  methods: {
    save() {
      if (this.value) {
        this.close(this.value);
      } else {
        this.close();
      }
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

.color-picker__variables {
  width: 100%;
}
</style>
