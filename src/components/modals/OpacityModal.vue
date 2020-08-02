<template>
  <v-modal title="Прозрачность">
    <div class="modal-wrapper">
      <v-slider name="opacity" title="Выберите прозрачность" v-model="value" />
    </div>

    <template #footer>
      <v-btn @click="save" type="button" clear>Отменить</v-btn>
      <v-btn @click="save" type="button">Сохранить</v-btn>
    </template>
  </v-modal>
</template>

<script>
import ColorPicker from "vue-iro-color-picker";
import modal from "../../mixins/modal";
import "vue-slider-component/theme/default.css";

export default {
  name: "OpacityModal",
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
      return this.data["value"] || 0;
    }
  },
  methods: {
    save() {
      if (this.value !== null) {
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

.color-picker__variable {
  margin-top: 16px;
}
</style>
