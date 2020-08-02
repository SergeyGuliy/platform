<template>
  <div class="maxw352" style="margin-top: -16px;margin-bottom: -16px;">
    <portal to="container-actions">
      <v-btn v-if="!stepComplete" @click="back" clear :key="`${_uid}-back`">Назад</v-btn>
      <v-btn form="page-create-form" :key="`${_uid}-continue`">Продолжить</v-btn>
    </portal>

    <v-container-title-wrapper v-if="localStep === STEP_MAIN">
      <v-container-title-name>
        Фон страницы
        <button v-if="!stepComplete" @click="skip" type="button" class="all-btn third-btn">Пропустить</button>
      </v-container-title-name>
    </v-container-title-wrapper>

    <v-form @submit="send" id="page-create-form">
      <template v-if="localStep === STEP_MAIN">
        <v-content-showable title="Виберите стиль" no-border>
          <v-radio name="background_type" :options="colorTypes" v-model="request.background_type" />
        </v-content-showable>

        <template v-if="request.background_type === TYPE_COLOR">
          <v-color name="background_color" title="Выберите цвет" rules="required" v-model="request.background_color" />
        </template>

        <template v-else-if="request.background_type === TYPE_IMAGE">
          <v-content-showable title="Загрузите картинку" no-border>
            <v-file name="background_image" type="photos" rules="required" v-model="request.background_image" />
          </v-content-showable>
        </template>
      </template>

      <template v-else-if="localStep === STEP_CROP_IMAGE">
        <v-content-showable title="Обрежте изображение">
          <v-crop name="background_image_crop" :image="request.background_image.preview" v-model="croppedImage" />
        </v-content-showable>
      </template>
    </v-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import {
  PAGE_BUTTON_STYLE_TYPES,
  PAGE_CANVAS,
  PAGE_FONT_COLOR_TYPES,
  PAGE_FONT_FAMILY_TYPES
} from "../../../stubs/tools-pages";

const STEP_MAIN = "main";
const STEP_CROP_IMAGE = "crop_image";

const TYPE_DEFAULT = null;
const TYPE_COLOR = "color";
const TYPE_IMAGE = "image";

export default {
  name: "ToolsPagesBackground",
  $_veeValidate: {
    validator: "new"
  },
  props: {
    request: {}
  },
  data() {
    return {
      STEP_MAIN,
      STEP_CROP_IMAGE,
      localStep: STEP_MAIN,

      TYPE_DEFAULT,
      TYPE_COLOR,
      TYPE_IMAGE,
      colorTypes: [
        { label: "Цвет", value: TYPE_COLOR },
        { label: "Картинка", value: TYPE_IMAGE }
      ],

      croppedImage: null
    };
  },
  computed: {
    insertPosition() {
      return this.$store.state.toolsPages.stepComplete
    },
  },
  methods: {
    ...mapActions("toolsPages", ["prevStep", "nextStep", "addRequestToHistory"]),

    skip() {
      if (
        this.request.background_type === null ||
        (this.request.background_type === TYPE_COLOR && this.request.background_color === null)
      ) {
        if (this.request.background_type === null) {
          this.$set(this.request, "background_type", this.colorTypes[0].value);
          this.$set(this.request, "background_color", "#FFFFFF");
        } else if (this.request.background_type === TYPE_COLOR && this.request.background_color === null) {
          this.$set(this.request, "background_color", "#FFFFFF");
        }
      }

      this.$nextTick(() => {
        this.validate().then(() => {
          this.$set(this.request, "font_type", PAGE_FONT_FAMILY_TYPES[0].value);
          this.$set(this.request, "text_color", PAGE_FONT_COLOR_TYPES[0].value);
          this.$set(this.request, "button_type", PAGE_BUTTON_STYLE_TYPES[0].value);
          this.nextStep(PAGE_CANVAS);
        });
      });
    },
    back() {
      if (this.localStep === STEP_CROP_IMAGE) {
        this.$set(this, "localStep", STEP_MAIN);
      } else {
        this.prevStep();
      }
    },
    send() {
      if (this.request.background_type === null) {
        this.$set(this.request, "background_type", this.colorTypes[0].value);
        this.$set(this.request, "background_color", "#FFFFFF");
      } else if (this.request.background_type === TYPE_COLOR && this.request.background_color === null) {
        this.$set(this.request, "background_color", "#FFFFFF");
      }

      this.$nextTick(() => {
        this.validate().then(() => {
          if (this.request.background_type === TYPE_IMAGE) {
            if (this.localStep === STEP_CROP_IMAGE) {
              // upload image

              let file = this.croppedImage;
              this.$api.files.upload(file).then(({ data }) => {
                let item = data.data;
                this.$set(this.request, "background_image", {
                  id: item.id,
                  src: item.url,
                  preview: item.preview,
                  filename: item.name,
                  type: this.tab
                });

                this.addRequestToHistory(this.request);
                this.nextStep();
              });
            } else {
              this.$set(this, "localStep", STEP_CROP_IMAGE);
            }
          } else {
            this.addRequestToHistory(this.request);
            this.nextStep();
          }
        });
      });
    }
  }
};
</script>

<style scoped></style>
