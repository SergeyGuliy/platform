<template>
  <div class="builder-tabs-block block" id="LearningMyPlatformSettings">
    <div class="small-fixed-top">
      <div class="title">Основная информация</div>
      <div @click="$router.back()" style="cursor: pointer">
        <v-icon class="icon" src="close"></v-icon>
      </div>
    </div>
    <div class="learning-box" id="header">
      <div class="learning-box__body">
        <div class="learning-box__body-head-wrapper">
          <div class="learning-box__body-head">
            <div style="margin-bottom: 10px">
              <div class="learning-box__body-head-title">Основная информация</div>
              <div class="left-buttons">
                <v-button
                  style="height: 48px;"
                  class="desktop"
                  custom-type="text"
                  custom-style="primary"
                  @click="endCreation"
                >
                  Отменить
                </v-button>
                <v-button style="height: 48px;" class="desktop" @click="submit">
                  Сохранить
                </v-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="mainInfo">
      <v-input name="telegram.login" title="Заголовок" rules="required" v-model="formData.title" class="input__field" />
      <v-textarea
        name="text"
        title="Описание"
        rules="required"
        v-model="formData.description"
        class="textarea__field"
      />

      <div class="title">Промовидео для курса</div>
      <p>
        После просмотра качественного промовидео вероятность того, что студенты запишутся на ваш курс, может увеличиться
        в 5 раз. А при наличии исключительно хороших видео — даже в 10 раз.
      </p>
      <div class="block">
        <div class="left">
          <v-button custom-type="text" custom-style="primary" @click="uploadVideo" v-if="!formData.video_id">
            <div style="display: flex; align-items: center">
              <v-icon src="plus" style="fill: #ffc107; margin-right: 10px;"></v-icon>
              <span class="bottom__inner">Добавить видео</span>
            </div>
          </v-button>
          <div class="file-input" v-else>
            <div class="lable">
              Видео {{ formData.video_id ? `(${converterFileSize(formData.video_id.size)})` : "" }}
            </div>
            <div class="input" :class="formData.video_id ? 'active' : ''">
              <div class="file-name">{{ formData.video_id ? formData.video_id.name : "" }}</div>
              <div @click.stop="cleanVideo">
                <v-icon src="delete" />
              </div>
            </div>
          </div>
          <v-button custom-type="text" custom-style="primary" @click="uploadPhoto" v-if="!formData.photo">
            <div style="display: flex; align-items: center">
              <v-icon src="plus" style="fill: #ffc107; margin-right: 10px;"></v-icon>
              <span class="bottom__inner">Добавить обложку видео</span>
            </div>
          </v-button>
          <div class="file-input" v-else>
            <div class="lable">Оболожка {{ formData.photo ? `(${converterFileSize(formData.photo.size)})` : "" }}</div>
            <div class="input" :class="formData.photo ? 'active' : ''">
              <div class="file-name">{{ formData.photo ? formData.photo.name : "" }}</div>
              <div @click="cleanPhoto">
                <v-icon src="delete" />
              </div>
            </div>
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
        </div>
        <div class="right">
          <video
            v-show="formData.urlVideo || formData.urlPhoto"
            :poster="formData.urlPhoto"
            :src="formData.urlVideo"
            width="240px"
            controls
            id="videoBox"
          />
          <div class="right-header">
            {{ formData.video_id ? formData.video_id.name : "" }}
            <div>{{ formData.duration }}</div>
          </div>
        </div>
      </div>
    </div>
    <button class="my-button filled save" @click="submit">
      Сохранить
    </button>
  </div>
</template>

<script>
import VButton from "../../../../common/components/VButton";

export default {
  name: "EducationPlatform",
  components: {
    VButton
  },
  created() {
    this.$api.learning.tutorial
      .getTutorial()
      .then(data => {
        this.formData = {
          title: data.data.general_information.title,
          description: data.data.general_information.description,
          urlVideo: data.data.general_information.video
        };
        this.isUpdating = true;
      })
      .catch(e => {
        console.log(e);
      });
  },
  data() {
    return {
      formData: {
        title: null,
        description: null,
        video_id: null,
        urlVideo: null,
        photo: null,
        urlPhoto: null,
        duration: ""
      },
      isUpdating: false
    };
  },
  watch: {
    "formData.urlVideo"(val) {
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
    async submit() {
      if (this.isUpdating) {
        this.$api.learning.tutorial
          .updateTutorial(this.formData)
          .then(data => {
            console.log(data);
            this.$router.push("/education/my-platform");
          })
          .catch(e => {
            console.log(e);
          });
      } else {
        this.$api.learning.tutorial
          .createTutorial(this.formData)
          .then(data => {
            console.log(data);
            this.$router.push("/education/my-platform");
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    endCreation() {
      this.openModal("Submit").then(() => {
        this.$router.push("/education/my-platform");
      });
    },
    cleanPhoto() {
      if (this.formData.photo) {
        this.formData.photo = null;
        this.formData.urlPhoto = null;
      }
    },
    cleanVideo() {
      if (this.formData.video_id) {
        this.formData.video_id = null;
        this.formData.urlVideo = null;
        this.formData.duration = null;
      }
    },
    uploadVideo() {
      if (this.formData.video_id) return;
      document.getElementById("selectVideo").click();
    },
    uploadPhoto() {
      document.getElementById("selectPhoto").click();
    },
    uploadVideoAction(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;

      this.formData.video_id = files[0];
      this.formData.urlVideo = URL.createObjectURL(this.formData.video_id);
    },
    uploadPhotoAction(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;

      this.formData.photo = files[0];
      this.formData.urlPhoto = URL.createObjectURL(this.formData.photo);
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
  }
};
</script>
<style lang="scss">
#LearningMyPlatformSettings {
  @media (max-width: 740px) {
    margin-top: 65px;
  }
  .my-button {
    outline: none;
    height: 40px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #1d2228;
    padding: 0 10px;
  }
  .outlined {
    background: #ffffff;
    border: 1px solid #ffc107;
    border-radius: 6px;
  }
  .filled {
    background: #ffc107;
    border-radius: 6px;
  }
  .save {
    display: none;
    @media (max-width: 630px) {
      display: block;
      width: 100%;
      margin: 40px 0;
      height: 48px !important;
    }
  }
  .learning-box__body-head-wrapper {
    padding: 0;
  }
  .small-fixed-top {
    display: none;
    @media (max-width: 630px) {
      background: #ffffff;
      width: 100%;
      height: 56px;
      position: fixed;
      top: 56px;
      left: 0;
      box-shadow: 0px 1px 4px rgba(57, 70, 111, 0.06), 0px 6px 20px rgba(57, 70, 111, 0.08);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 16px;
      z-index: 1;
      .title {
        font-family: "Roboto", sans-serif;
        font-weight: bold;
        font-size: 18px;
        line-height: 24px;
        color: #1d2228;
      }
      .icon {
        font-size: 24px;
      }
    }
  }

  .dropdown {
    border: 1px solid #ffc107;
    box-sizing: border-box;
    border-radius: 6px 6px 0 0;
    width: 47%;
    height: 40px;
    position: relative;
    display: flex;
    align-items: center;
    border-bottom: none;
    span {
      margin-left: 12px;
      font-family: "Roboto", sans-serif;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      color: #9ca1ab;
    }
    .dropdown__inner {
      width: 100%;
      position: absolute;
      top: 39px;
      padding: 0 19px;
      background-color: #ffffff;
      border: 1px solid #ffc107;
      border-top: 1px solid #ebeff5;
      border-radius: 0 0 6px 6px;
      .item {
        height: 36px;
        display: flex;
        align-items: center;
        &-checkbox {
          height: 18px;
          width: 18px;
          border: 2px solid #ffc107;
          border-radius: 2px;
          &-inner {
            svg {
              fill: #ffc107;
            }
          }
        }
        &-text {
          margin-left: 11px;
          color: #ffc107;
          font-family: "Roboto", sans-serif;
          font-weight: 500;
          font-size: 14px;
          line-height: 24px;
        }
      }
    }
  }
  .tooltip {
    position: relative;
  }

  .tooltip .tooltiptext {
    visibility: hidden;
    padding: 0 8px;
    width: 168px;
    height: 34px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 6px;
    position: absolute;
    z-index: 1;
    top: -5px;
    left: 110%;
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    line-height: 18px;
    color: #ffffff;
  }

  .tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 100%;
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent black transparent transparent;
  }
  .tooltip:hover .tooltiptext {
    visibility: visible;
  }
  #header {
  }
  #mainInfo {
    width: 604px;
    @media (max-width: 834px) {
      width: 100%;
    }
    .input__field,
    .textarea__field {
      margin-bottom: 25px;
    }
    .title {
      font-family: "Roboto", sans-serif;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      color: #1d2228;
      margin-bottom: 10px;
    }
    p {
      font-family: "Roboto", sans-serif;
      font-size: 14px;
      line-height: 20px;
      color: #58606e;
      width: 520px;
      @media (max-width: 834px) {
        width: 100%;
      }
    }

    svg {
      font-size: 24px;
      fill: #8e99ab;
    }
    .block {
      margin-top: 24px;
      display: flex;
      justify-content: space-between;
      @media (max-width: 630px) {
        flex-direction: column;
        .right {
          order: 0;
          video {
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
          div {
            margin-left: 10px;
            font-family: "Roboto", sans-serif;
            font-weight: 500;
            font-size: 12px;
            line-height: 14px;
            color: #58606e;
          }
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
}
</style>
