<template>
  <v-modal-window>
    <div class="create-exit-box">
      <div class="create-exit-box__view">
        <img src="../../assets/exit-modal.svg" alt="" />
      </div>
      <div class="create-exit-box__title">Вы действительно хотите завершить создание страницы?</div>
      <div class="create-exit-box__caption">Изменения будут сохранены в разделе “Страницы”</div>
      <div class="create-exit-box__actions">
        <div class="create-exit-box__action">
          <v-btn @click="close()" type="button" clear>Отменить</v-btn>
        </div>
        <div class="create-exit-box__action">
          <v-btn @click="close(true)" type="button">Завершить</v-btn>
        </div>
      </div>
    </div>
  </v-modal-window>
</template>

<script>
import modal from "../../mixins/modal";

export default {
  name: "LandingCloseModal",
  mixins: [modal]
};
</script>

<style lang="scss" scoped></style>
