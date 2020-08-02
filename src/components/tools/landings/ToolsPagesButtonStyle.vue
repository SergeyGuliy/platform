<template>
  <div style="margin-top: -16px;margin-bottom: -16px;">
    <portal to="container-actions">
      <v-btn v-if="!stepComplete" @click="back" clear :key="`${_uid}-back`">Назад</v-btn>
      <v-btn form="page-create-form" :disable="request.button_type === null" :key="`${_uid}-continue`">
        Продолжить
      </v-btn>
    </portal>

    <v-container-title-wrapper>
      <v-container-title-name>Стиль кнопок</v-container-title-name>
    </v-container-title-wrapper>

    <v-form @submit="send" id="page-create-form">
      <v-radio
        name="text_color"
        kind="custom"
        :options="types"
        rules="required"
        v-model="request.button_type"
        class="create-course-box__body-buttons-style-wrapper"
      >
        <template slot-scope="item">
          <div class="guise-button-wrapper" style="text-align:center;">
            <label>
              <input type="radio" name="button" :checked="item.value === request.button_type" />
              <span class="guise-button" :class="item.class">Button Text</span>
            </label>
          </div>
        </template>
      </v-radio>
    </v-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { PAGE_BUTTON_STYLE_TYPES } from "../../../stubs/tools-pages";

export default {
  name: "ToolsPagesButtonStyle",
  $_veeValidate: {
    validator: "new"
  },
  props: {
    request: {}
  },
  data() {
    return {
      types: PAGE_BUTTON_STYLE_TYPES
    };
  },
  computed: {
    insertPosition() {
      return this.$store.state.toolsPages.stepComplete
    },
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
