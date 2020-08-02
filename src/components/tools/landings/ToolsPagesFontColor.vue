<template>
  <div style="margin-top: -16px;margin-bottom: -16px;">
    <portal to="container-actions">
      <v-btn v-if="!stepComplete" @click="back" clear :key="`${_uid}-back`">Назад</v-btn>
      <v-btn form="page-create-form" :key="`${_uid}-continue`">Продолжить</v-btn>
    </portal>

    <v-container-title-wrapper>
      <v-container-title-name>Цвет текста</v-container-title-name>
    </v-container-title-wrapper>

    <v-form @submit="send" id="page-create-form">
      <v-radio
        name="text_color"
        title="Виберите стиль"
        kind="custom"
        :options="types"
        rules="required"
        v-model="request.text_color"
        class="create-course-box__body-text-color"
      >
        <template slot-scope="item">
          <div class="create-course-box__body-text-color-wrapper" :style="getBackgroundColor">
            <label>
              <input type="radio" name="color" :checked="item.value === request.text_color" />
              <div class="create-course-box__body-text-color-conteiner" :class="item.class">
                <div class="create-course-box__body-text-color-title">Some Great Title Here</div>
                <div class="create-course-box__body-text-color-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </div>
                <v-icon v-if="item.value === request.text_color" src="check-yelow-white" />
              </div>
            </label>
          </div>
        </template>
      </v-radio>
    </v-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { PAGE_FONT_COLOR_TYPES } from "../../../stubs/tools-pages";

export default {
  name: "ToolsPagesStepColor",
  $_veeValidate: {
    validator: "new"
  },
  props: {
    request: {}
  },
  data() {
    return {
      types: PAGE_FONT_COLOR_TYPES
    };
  },
  computed: {
    insertPosition() {
      return this.$store.state.toolsPages.stepComplete;
    },

    getBackgroundColor() {
      if (this.request.background_type === "image") {
        if (this.request.background_image) {
          return `background-image: url(${this.request.background_image.preview})`;
        }
        return null;
      }
      return `background-color: ${this.request.background_color}`;
    }
  },
  methods: {
    ...mapActions("toolsPages", ["prevStep", "nextStep", "addRequestToHistory"]),

    back() {
      this.prevStep();
    },
    send() {
      this.validate().then(() => {
        this.addRequestToHistory(this.request);
        this.nextStep();
      });
    }
  }
};
</script>

<style scoped></style>
