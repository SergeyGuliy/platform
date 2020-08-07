<template>
  <v-modal-window id="UploadVideoModal">
    <div class="create-exit-box">
      <div class="create-exit-box__title">Добавить видео</div>
      <v-input name="value" title="По ссылка с YouTube, Vimeo и т.д." v-model="value" />
      <div class="create-exit-box__title or">или</div>
      <div class="create-exit-box__actions">
        <div class="create-exit-box__action">
          <v-btn @click="save" type="button">Загрузить</v-btn>
        </div>
      </div>
    </div>
  </v-modal-window>
</template>

<script>
import modal from "../../mixins/modal";

export default {
  data() {
    return {
      value: ""
    };
  },
  name: "UploadVideoModal",
  mixins: [modal],
  methods: {
    save() {
      try {
        if (this.value.split("ttp").length > 1) {
          this.close(this.value);
        } else {
          this.close(true);
        }
      } catch (e) {
        this.close(true);
      }
    }
  }
};
</script>

<style lang="scss">
#UploadVideoModal {
  .create-exit-box__title {
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;
    display: flex;
    color: #1d2228;
    margin-bottom: 16px;
  }
  .or {
    margin-top: 10px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 24px;
  }

  .modal-window__wrapper {
    @media (max-width: 834px) {
      padding: 20px;
    }
  }

  .create-exit-box__actions {
    margin-top: 8px;
    .create-exit-box__action {
      padding: 0;
      width: 100%;
      font-family: "Roboto", sans-serif;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #1d2228;
      width: 100%;
      button {
        width: 100%;
      }
    }
  }
}
</style>
