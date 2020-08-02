<template>
  <div style="margin-top: -16px;margin-bottom: -16px;">
    <portal to="container-actions">
      <v-btn v-if="!stepComplete" @click="back" clear :key="`${_uid}-back`">Назад</v-btn>
      <v-btn form="page-create-form" :key="`${_uid}-continue`">Продолжить</v-btn>
    </portal>

    <v-container-title-wrapper>
      <v-container-title-name>Семейство Шрифтов</v-container-title-name>
    </v-container-title-wrapper>

    <v-form @submit="send" id="page-create-form">
      <v-radio name="font_type" kind="list" :options="types" rules="required" v-model="request.font_type" />
    </v-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { PAGE_FONT_FAMILY_TYPES } from "../../../stubs/tools-pages";

export default {
  name: "ToolsPagesStepFamily",
  $_veeValidate: {
    validator: "new"
  },
  props: {
    request: {}
  },
  data() {
    return {
      types: PAGE_FONT_FAMILY_TYPES
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
