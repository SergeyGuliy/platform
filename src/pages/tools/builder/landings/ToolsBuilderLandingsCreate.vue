<template>
  <v-container>
    <template #actions>
      <v-btn :to="{ name: 'tools.landings' }" clear>Назад</v-btn>
      <v-btn form="page-create-form">Продолжить</v-btn>
    </template>

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

    <v-form id="page-create-form" @submit="send">
      <v-input name="title" rules="required" v-model="request.title" counter :max="60" />
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "ToolsBuilderLandingsCreate",
  $_veeValidate: {
    validator: "new"
  },
  mounted() {
    this.$store.dispatch("general/hideMobileMenu");
  },
  beforeDestroy() {
    this.$store.dispatch("general/showMobileMenu");
  },
  data() {
    return {
      request: {
        title: null
      }
    };
  },
  methods: {
    send() {
      this.validate().then(() => {
        this.$api.landings.create(this.request).then(({ data }) => {
          this.$router.push({ name: "tools.landings.edit", params: { id: data.data.id } });
        });
      });
    }
  }
};
</script>

<style scoped></style>
