<template>
  <v-container>
    <v-container-header :to="{ name: 'tools' }">Назад</v-container-header>

    <v-container-title-wrapper>
      <v-container-title-name>*Название инструмента*</v-container-title-name>
      <v-container-title-caption>
        Создавайте веб-страницы, публикуйте по именной ссылке, поднимайте конверсию и все в одном инструменте.
      </v-container-title-caption>
    </v-container-title-wrapper>

    <div class="cabinet-course-box__main-info-nav">
      <ul class="list">
        <li>
          <v-btn :to="{ name: 'tools.landings' }" clean>Страницы</v-btn>
        </li>
        <li>
          <v-btn clean>Поп-апы и стики бары</v-btn>
        </li>
        <li>
          <v-btn clean>Домены</v-btn>
        </li>
      </ul>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "ToolsBuilderLandings",
  data() {
    return {
      items: {
        data: [],
        total: 0
      }
    };
  }
};
</script>

<style scoped></style>
