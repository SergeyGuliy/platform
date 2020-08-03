<template>
  <div id="VideoInput">
    <div class="block">
      <div class="left">
        <div class="file-input">
          <div class="lable">Видео {{ formData.video ? `(${converterFileSize(formData.video.size)})` : "" }}</div>
          <div class="input" :class="formData.video ? 'active' : ''" @click="uploadVideo">
            <div class="file-name">{{ formData.video ? formData.video.name : "" }}</div>
          </div>
          <v-icon src="delete" @click="cleanVideo" />
        </div>
        <div class="file-input">
          <div class="lable">Оболожка {{ formData.photo ? `(${converterFileSize(formData.photo.size)})` : "" }}</div>
          <div class="input" :class="formData.photo ? 'active' : ''" @click="uploadPhoto">
            <div class="file-name">{{ formData.photo ? formData.photo.name : "" }}</div>
          </div>
          <v-icon src="delete" @click="cleanPhoto" />
        </div>
        <input
          type="file"
          accept="video/*"
          style="display: none"
          id="selectVideo"
          ref="selectVideo"
          v-on:change="uploadVideoAction"
        />
        <input
          type="file"
          accept="image/*"
          style="display: none"
          id="selectPhoto"
          ref="selectPhoto"
          v-on:change="uploadPhotoAction"
        />
        <v-input name="telegram.login" title="Заголовок" rules="required" v-model="formData.header" />
      </div>
      <div class="right">
        <video v-if="urlVideo || urlPhoto" :poster="urlPhoto" :src="urlVideo" width="240px" controls />
        <div class="right-header">{{ formData.header }}</div>
      </div>
    </div>

    <div class="buttons-group" style="position: relative; z-index: 2">
      <v-button class="desktop" @click="closeVideoEditor" custom-type="text" custom-style="primary">
        Отменить
      </v-button>
      <v-button class="desktop" @click="sendData">
        Сохранить
      </v-button>
    </div>
  </div>
</template>

<script>
import VButton from "../../../../../common/components/VButton";

export default {
  name: "VideoInput",
  data() {
    return {
      formData: {
        video: null,
        photo: null,
        header: ""
      },
      urlPhoto: null,
      urlVideo: null
    };
  },
  methods: {
    sendData() {
      if (this.formData.video !== null) {
        this.closeVideoEditor();
      } else {
        this.saveVideoEditor(this.formData);
      }
    },
    cleanPhoto() {
      console.log("sdfsdfdsdfs");
      console.log("sdfsdfdsdfs");
      if (this.formData.photo) {
        this.formData.photo = null;
      }
    },
    cleanVideo() {
      console.log("sdfsdfdsdfs");
      console.log("sdfsdfdsdfs");
      console.log("sdfsdfdsdfs");
      if (this.formData.video) {
        console.log("sdfsdfdsdfs");
        this.formData.video = null;
      }
    },
    uploadVideo() {
      if (this.formData.video) return;
      document.getElementById("selectVideo").click();
    },
    uploadPhoto() {
      document.getElementById("selectPhoto").click();
    },
    uploadVideoAction(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;

      this.formData.video = files[0];
      this.urlVideo = URL.createObjectURL(this.formData.video);
    },
    uploadPhotoAction(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;

      this.formData.photo = files[0];
      this.urlPhoto = URL.createObjectURL(this.formData.photo);
    },
    converterFileSize(bytes, dp = 1) {
      const thresh = 1000;

      if (Math.abs(bytes) < thresh) {
        return bytes + " B";
      }

      const units = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
      let u = -1;
      const r = 10 ** dp;

      do {
        bytes /= thresh;
        ++u;
      } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);
      return bytes.toFixed(dp) + " " + units[u];
    }
  },
  mounted() {
    this.formData = {
      video: null,
      photo: null,
      header: ""
    };
  },
  props: {
    closeVideoEditor: Function,
    saveVideoEditor: Function
  },
  components: {
    VButton
  }
};
</script>

<style lang="scss">
#VideoInput {
  margin: 0 18px;
  .block {
    display: flex;
    justify-content: space-between;
    .left {
      width: 336px;
      margin-right: 32px;
    }
    .right {
      flex: 1 1 auto;
    }
  }
  .file-input {
    position: relative;
    .label {
      font-family: "Roboto", sans-serif;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      color: #58606e;
    }
    .input {
      border: 1px solid #c8d1e0;
      box-sizing: border-box;
      border-radius: 6px;
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 12px;
      &.active {
        background-color: #f5f7fa;
        border: 1px solid #f5f7fa;
      }
      &.active + .svg-icon {
        display: block;
        position: absolute;
        z-index: 5;
        bottom: 7.5px;
        right: 10px;
      }
    }
    svg {
      display: none;
    }
  }
  .buttons-group {
    display: flex;
    margin-top: 24px;
    button {
      height: 40px;
      padding: 0 32px;
    }
    button:first-child {
      border: 1px solid #ffc107;
      color: #8b5c00;
      margin-right: 16px;
    }
  }
}
</style>
