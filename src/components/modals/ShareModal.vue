<template>
  <v-modal-window id="ShareModal">
    <div class="create-exit-box">
      <div class="create-exit-box__title" style="text-align: left">Предоставление доступа</div>
      <div class="create-exit-box__caption" style="text-align: left">
        Это ссылка, с помощью которой другие пользователи смогут скопировать ваш урок или секцию
      </div>
      <v-input name="link" v-model="$store.state.modal.data" :disabled="true">
        <div class="copy" @click="copyLink">
          <v-icon src="link"></v-icon>
        </div>
      </v-input>
      <div class="create-exit-box__actions">
        <div class="create-exit-box__action">
          <v-btn @click="close()" type="button">Сгенерировать новую ссылку</v-btn>
        </div>
      </div>
    </div>
  </v-modal-window>
</template>

<script>
import modal from "../../mixins/modal";

export default {
  name: "LandingCloseModal",
  mixins: [modal],
  methods: {
    copyLink() {
      this.$copyText(this.$store.state.modal.data);
    }
  }
};
</script>

<style lang="scss">
#ShareModal {
  .form-group {
    margin: 24px 0;
    border: 1px solid #c8d1e0;
    box-sizing: border-box;
    border-radius: 6px;
    background-color: #ffffff;
    .builder-input-box__input-wrapper {
      position: relative;
      .copy {
        position: absolute;
        z-index: 1;
        right: 10px;
        svg {
          fill: #ffc107;
        }
      }
    }
  }
  .modal-window__wrapper {
    @media (max-width: 834px) {
      padding: 20px;
    }
  }
  .create-exit-box__actions {
    margin-top: 0;
    .create-exit-box__action {
      padding: 0;
      width: 100%;
      button {
        padding: 0 5px;
        width: 100%;
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #1d2228;
      }
    }
  }
}
</style>
