<template>
  <div>
    <portal to="container-actions">
      <v-btn :to="{ name: 'tools.landings' }" clear :key="`${_uid}-back`">Назад</v-btn>
      <v-btn v-if="!stepComplete" form="page-create-form" :key="`${_uid}-continue`">Продолжить</v-btn>
    </portal>

    <v-warning title="Предупреждение">
      Вы можете создать только мобильную версию страницы. Для создания компьютерной страницы продолжите с компьютера.
    </v-warning>

    <v-container-title-wrapper>
      <v-container-title-name>Название страницы</v-container-title-name>
      <v-container-title-caption>
        Если вы пока не придумали окончательное название страницы, ничего страшнего. Название можно будет потом
        отредактировать
      </v-container-title-caption>
    </v-container-title-wrapper>

    <v-form @submit="send" id="page-create-form">
      <v-input name="title" rules="required" v-model="request.title" counter :max="60" />
    </v-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ToolsPagesTitle",
  $_veeValidate: {
    validator: "new"
  },
  props: {
    request: {}
  },
  data() {
    return {
      qwe: null
    };
  },
  computed: {
    insertPosition() {
      return this.$store.state.toolsPages.stepComplete;
    }
  },
  methods: {
    ...mapActions("toolsPages", ["nextStep", "addRequestToHistory"]),

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
