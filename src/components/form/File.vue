<template>
  <div>
    <div v-if="title" class="builder-input-box__label">
      <div class="input-box-label">{{ title }}</div>

      <div v-if="multiple && value.length" class="builder-input-box__change-button">
        <button @click="chooseFile" type="button" class="third-btn">
          <v-icon src="edit" />
          Добавить
        </button>
      </div>
    </div>

    <template v-if="multiple">
      <template v-if="value.length">
        <div
          v-for="(file, index) in value"
          class="uploader-box"
          style="margin-bottom: 10px;"
          :key="`image-${_uid}-${index}`"
        >
          <div class="uploader-box__view">
            <v-icon src="img" />
            <img class="image" :src="file.preview" />
          </div>
          <div v-if="value" class="uploader-box__result">
            <button @click="clear(index)" type="button" class="__clean-btn upload-result">
              <span>{{ file.filename }}</span>
              <v-icon src="delete" />
            </button>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="uploader-box">
          <div class="uploader-box__view">
            <v-icon src="img" />
          </div>
          <div class="uploader-box__file">
            <v-btn @click="chooseFile" type="button" style="width: 100%;">Выбрать фото</v-btn>
          </div>
        </div>
      </template>
    </template>

    <template v-else>
      <div class="uploader-box">
        <div class="uploader-box__view">
          <v-icon src="img" />
          <img v-if="value" class="image" :src="value.preview" />
        </div>
        <div v-if="!value" class="uploader-box__file">
          <v-btn @click="chooseFile" type="button" style="width: 100%;">Выбрать фото</v-btn>
        </div>
        <div v-if="value" class="uploader-box__result">
          <button @click="clear" type="button" class="__clean-btn upload-result">
            <span>{{ value.filename }}</span>
            <v-icon src="delete" />
          </button>
        </div>
      </div>
    </template>

    <label v-if="errors.has(name, scope)" class="input-error">
      {{ errors.first(name, scope) }}
    </label>
  </div>
</template>

<script>
import input from "../../mixins/input";

export default {
  name: "File",
  mixins: [input],
  props: {
    type: { type: String },
    title: {},
    multiple: { type: Boolean, default: () => false }
  },
  computed: {},
  methods: {
    chooseFile() {
      this.openModal("Files", {
        multiple: this.multiple,
        type: this.type
      }).then(data => {
        if (this.multiple) {
          this.value.splice(this.value.length, 0, ...data);
          this.inputHandler(this.value);
        } else {
          this.inputHandler(data);
        }
      });
    },
    clear(index) {
      if (this.multiple) {
        this.value.splice(index, 1);
        this.inputHandler(this.value);
      } else {
        this.inputHandler(null);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.uploader-box__result {
  display: block;
}

.image {
  visibility: visible;
}
</style>
