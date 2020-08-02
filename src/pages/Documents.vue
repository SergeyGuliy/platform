<template>
  <v-container>
    <v-container-header :to="{ name: 'profile' }">Назад</v-container-header>

    <v-container-title-name>Документы</v-container-title-name>

    <div class="cabinet-course-box__body">
      <div class="cabinet-course-box__main-info">
        <div class="cabinet-course-box__main-info-nav">
          <ul class="list">
            <li>
              <v-btn href="/agent.pdf" target="_blank" clean>
                Агентская программа
              </v-btn>
            </li>
            <li>
              <v-btn href="/a_offer.pdf" target="_blank" clean>
                Договор оферты (агентский)
              </v-btn>
            </li>
            <li>
              <v-btn href="/offerta.pdf" target="_blank" clean>
                Публичная оферта на оказание инфор&shyмационно-консультацион&shyных услуг
              </v-btn>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Documents"
};
</script>

<style lang="scss" scoped></style>
