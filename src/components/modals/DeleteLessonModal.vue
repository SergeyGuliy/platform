<template>
  <v-modal-window id="DeleteLessonModal">
    <div class="create-exit-box">
      <div class="create-exit-box__view">
        <img src="../../assets/exit-modal.svg" alt="" />
      </div>
      <div class="create-exit-box__title">Вы уверены что хотите удалить урок?</div>
      <div class="create-exit-box__caption">Все загруженные файлы и данные не будут сохранены</div>
      <div class="create-exit-box__actions">
        <div class="create-exit-box__action close">
          <v-btn @click="close()" type="button" clear>Отменить</v-btn>
        </div>
        <div class="create-exit-box__action close">
          <v-btn @click="close(true)" type="button">Завершить</v-btn>
        </div>
      </div>
    </div>
  </v-modal-window>
</template>

<script>
import modal from "../../mixins/modal";

export default {
  name: "DeleteLessonModal",
  mixins: [modal]
};
</script>

<style lang="scss">
#DeleteLessonModal {
  .create-exit-box__caption.link {
    margin-top: 16px;
    display: block;
    text-decoration: underline;
    cursor: pointer;
    &:hover {
      color: #ffc107;
      text-decoration: underline;
    }
  }
  .create-exit-box__actions {
    margin-top: 26px;
  }

  .create-exit-box__title {
    padding: 0 85px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    color: #1d2228;
    @media (max-width: 834px) {
      padding: 0;
    }
  }
  @media (max-width: 834px) {
    .modal-window__exit {
      display: none;
    }
    .modal-window__wrapper {
      padding: 0;
      background-color: #e1e2e2;
      overflow: hidden;
      padding-top: 20px;
    }
    .create-exit-box__action.close button {
      color: #58606e !important;
      &:hover {
        border: 1px solid #8e99ab;
      }
    }
    .create-exit-box__action {
      flex: 1 1 100%;
      width: 100%;
      padding: 0;
      button {
        width: 100%;
        border-radius: 0;
        border: 1px solid #8e99ab;
        background-color: #e1e2e2 !important;
        color: #faac15;
        font-weight: 500;
        padding: 0;
      }
    }
    .create-exit-box__title {
      font-weight: bold;
      font-size: 16px;
      line-height: 20px;
      color: #1d2228;
    }

    .create-exit-box__view {
      display: none;
    }
    .create-exit-box__caption {
      margin-top: 16px;
      display: block;
      text-decoration: underline;
      cursor: pointer;
      &:hover {
        color: #1d2228 !important;
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 540px) {
    .modal-window__wrapper {
      margin: 0 52px;
    }
    .create-exit-box__title,
    .create-exit-box__caption {
      margin: 0 5px;
    }
  }
  @media (max-width: 450px) {
    .modal-window__wrapper {
      margin: 0 30px;
    }
  }
  @media (max-width: 375px) {
    .modal-window__wrapper {
      margin: 0 20px;
    }
  }
}

@media (max-width: 834px) {
  #DeleteLessonModal.open {
    background-color: #595d61;
  }
}
</style>
