<template>
  <div id="PhotoInput">
    <div class="block">
      <div class="left">
        <v-button custom-type="text" custom-style="primary" @click="uploadPhoto" v-if="!formData.photo">
          <div style="display: flex; align-items: center">
            <v-icon src="plus" style="fill: #ffc107; margin-right: 10px;"></v-icon>
            <span class="bottom__inner">Добавить фото</span>
          </div>
        </v-button>
        <div class="file-input" v-else>
          <div class="lable">Фото {{ formData.photo ? `(${converterFileSize(formData.photo.size)})` : "" }}</div>
          <div class="input" :class="formData.photo ? 'active' : ''">
            <div class="file-name">{{ formData.photo ? formData.photo.name : "" }}</div>
            <div @click="cleanPhoto">
              <v-icon src="delete" />
            </div>
          </div>
        </div>

        <v-select
          name="country_id"
          title="Размер фото"
          rules="required"
          v-model="formData.size"
          @change="change"
          :options="options"
        />

        <v-button
          custom-type="text"
          custom-style="primary"
          v-if="formData.header === null"
          @click="formData.header = ''"
        >
          <div style="display: flex; align-items: center">
            <v-icon src="plus" style="fill: #ffc107; margin-right: 10px;"></v-icon>
            <span class="bottom__inner">Добавить заголовок к фото</span>
          </div>
        </v-button>
        <div v-else class="input-block">
          <v-input name="telegram.login" title="Заголовок" rules="required" v-model="formData.header" />
          <div @click="formData.header = null">
            <v-icon src="delete" />
          </div>
        </div>

        <input
          type="file"
          accept="image/*"
          style="display: none"
          id="selectPhoto"
          ref="selectPhoto"
          v-on:change="uploadPhotoAction"
        />
      </div>
      <div class="right">
        <img v-show="urlPhoto" :src="urlPhoto" alt="" width="240px" />
        <div class="right-header">{{ formData.photo ? formData.photo.name : "" }}</div>
      </div>
    </div>

    <div class="buttons-group">
      <button class="my-button outlined" @click="closePhotoEditor">Отменить</button>
      <button class="my-button filled" @click="sendData">Сохранить</button>
    </div>
  </div>
</template>

<script>
import VButton from "../../../../../common/components/VButton";

export default {
  name: "PhotoInput",
  data() {
    return {
      formData: {
        photo: null,
        header: null,
        size: "На 25% ширины"
      },
      options: [
        {
          label: "На всю ширину",
          value: "full"
        },
        {
          label: "Оригинальный размер",
          value: "original"
        },
        {
          label: "На 75% ширины",
          value: "75%"
        },
        {
          label: "На 50% ширины",
          value: "50%"
        },
        {
          label: "На 25% ширины",
          value: "25%"
        }
      ],
      urlPhoto: null
    };
  },
  watch: {
    urlVideo(val) {
      if (val) {
        let vid = document.getElementById("videoBox");
        let i = setInterval(() => {
          if (vid.readyState > 0) {
            let minutes = parseInt(vid.duration / 60, 10);
            let seconds = vid.duration % 60;
            seconds = `${seconds}`.split(".")[0];
            console.log(`${minutes}:${seconds}`);
            this.formData.duration = `${minutes}:${seconds}`;
            clearInterval(i);
          }
        }, 1);
      }
    }
  },
  methods: {
    change(val) {
      console.log(val);
    },
    cleanPhoto() {
      if (this.formData.photo) {
        this.formData.photo = null;
        this.urlPhoto = null;
      }
    },
    sendData() {
      if (this.formData.photo !== null) {
        this.savePhotoEditor(
          {
            ...this.formData,
            urlPhoto: this.urlPhoto
          },
          this.crossId
        );
      } else {
        this.closePhotoEditor();
      }
    },
    uploadPhoto() {
      document.getElementById("selectPhoto").click();
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
  created() {
    if (this.crossData) {
      this.formData = { ...this.crossData };
      this.urlPhoto = this.crossData.urlPhoto;
    } else {
      this.formData = {
        photo: null,
        header: null,
        size: "full"
      };
    }
  },
  props: {
    closePhotoEditor: Function,
    savePhotoEditor: Function,
    crossData: {
      required: false
    },
    crossId: {
      required: false
    }
  },
  components: {
    VButton
  }
};
</script>

<style lang="scss">
#PhotoInput {
  border-top: 1px solid #ebeff5;
  padding-top: 24px;

  svg {
    fill: #8e99ab;
  }
  & > div {
    padding: 0 18px;
  }
  .block {
    display: flex;
    justify-content: space-between;
    @media (max-width: 630px) {
      flex-direction: column;
      .right {
        order: 0;
        margin-bottom: 10px;
        img {
          min-width: 100%;
        }
      }
      .left {
        width: 100% !important;
        order: 1;
      }
    }
    .left {
      width: 336px;
      margin-right: 32px;
      .v-button {
        margin-top: 18px;
        margin-bottom: 18px;
      }
    }
    .right {
      flex: 1 1 auto;
      &-header {
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        display: flex;
        align-items: center;
        color: #1d2228;
      }
    }
  }
  .input-block {
    display: flex;
    align-items: flex-end;
    .form-group {
      flex: 1 1 auto;
    }
    svg {
      margin: 0 12px;
      margin-bottom: 7.5px;
    }
  }
  .file-input {
    position: relative;
    margin-bottom: 16px;
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
      &.active .svg-icon {
        cursor: pointer;
      }
    }
  }
  .buttons-group {
    display: flex;
    margin-top: 24px;
    @media (max-width: 630px) {
      button {
        width: 48%;
        justify-content: center;
        padding: 0 !important;
      }
    }
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
