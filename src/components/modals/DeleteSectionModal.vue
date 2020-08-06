<template>
  <v-modal-window>
    <div class="create-exit-box">
      <div class="create-exit-box__view">
        <img src="../../assets/exit-modal.svg" alt="" />
      </div>
      <div class="create-exit-box__title">Вы уверены что хотите удалить секцию?</div>
      <div class="create-exit-box__caption">Все загруженные файлы и данные не будут сохранены</div>
      <div class="create-exit-box__actions">
        <div class="create-exit-box__action close">
          <v-btn @click="close()" type="button" clear>Отменить</v-btn>
        </div>
        <div class="create-exit-box__action ">
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

<style lang="scss"></style>
