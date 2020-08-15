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
        <!--        <div class="left">-->
        <!--          <v-button custom-type="text" custom-style="primary" @click="uploadVideo" v-if="!formData.video_id">-->
        <!--            <div style="display: flex; align-items: center">-->
        <!--              <v-icon src="plus" style="fill: #ffc107; margin-right: 10px;"></v-icon>-->
        <!--              <span class="bottom__inner">Добавить видео</span>-->
        <!--            </div>-->
        <!--          </v-button>-->
        <!--          <div class="file-input" v-else>-->
        <!--            <div class="lable">-->
        <!--              Видео {{ formData.video_id ? `(${converterFileSize(formData.video_id.size)})` : "" }}-->
        <!--            </div>-->
        <!--            <div class="input" :class="formData.video_id ? 'active' : ''">-->
        <!--              <div class="file-name">{{ formData.video_id ? formData.video_id.name : "" }}</div>-->
        <!--              <div @click.stop="cleanVideo">-->
        <!--                <v-icon src="delete" />-->
        <!--              </div>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--          <v-button custom-type="text" custom-style="primary" @click="uploadPhoto" v-if="!formData.photo">-->
        <!--            <div style="display: flex; align-items: center">-->
        <!--              <v-icon src="plus" style="fill: #ffc107; margin-right: 10px;"></v-icon>-->
        <!--              <span class="bottom__inner">Добавить обложку видео</span>-->
        <!--            </div>-->
        <!--          </v-button>-->
        <!--          <div class="file-input" v-else>-->
        <!--            <div class="lable">Оболожка {{ formData.photo ? `(${converterFileSize(formData.photo.size)})` : "" }}</div>-->
        <!--            <div class="input" :class="formData.photo ? 'active' : ''">-->
        <!--              <div class="file-name">{{ formData.photo ? formData.photo.name : "" }}</div>-->
        <!--              <div @click="cleanPhoto">-->
        <!--                <v-icon src="delete" />-->
        <!--              </div>-->
        <!--            </div>-->
        <!--          </div>-->

        <!--          <input-->
        <!--            type="file"-->
        <!--            accept="video/*"-->
        <!--            style="display: none"-->
        <!--            id="selectVideo"-->
        <!--            ref="selectVideo"-->
        <!--            v-on:change="uploadVideoAction"-->
        <!--          />-->
        <!--          <input-->
        <!--            type="file"-->
        <!--            accept="image/*"-->
        <!--            style="display: none"-->
        <!--            id="selectPhoto"-->
        <!--            ref="selectPhoto"-->
        <!--            v-on:change="uploadPhotoAction"-->
        <!--          />-->
        <!--        </div>-->
        <!--        <div class="right">-->
        <!--          <video-->
        <!--            v-show="formData.urlVideo || formData.urlPhoto"-->
        <!--            :poster="formData.urlPhoto"-->
        <!--            :src="formData.urlVideo"-->
        <!--            width="240px"-->
        <!--            controls-->
        <!--            id="videoBox"-->
        <!--          />-->
        <!--          <div class="right-header">-->
        <!--            {{ formData.video_id ? formData.video_id.name : "" }}-->
        <!--            <div>{{ formData.duration }}</div>-->
        <!--          </div>-->
        <!--        </div>-->
        <VideoUpload
          @uploadFileData="coverUpload"
          :cleanById="cleanById"
          :video-data="data"
          :show-key="showKey"
          :controls="controls"
        ></VideoUpload>
      </div>
      <button class="my-button filled save" @click="submit">
        Сохранить
      </button>
    </div>
  </div>
</template>

<script>
import VButton from "../../../../common/components/VButton";
import VideoUpload from "../../../learning/user-courses/components/VideoUpload";
import { uploadFile } from "@/updated/modules/learning/services/learning-service";

export default {
  name: "EducationPlatform",
  components: {
    VButton,
    VideoUpload
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
      showKey: 0,
      controls: [
        {
          id: 1,
          label: "Видео",
          name: "ew",
          preview: "Добавить видео",
          size: "",
          isActive: false,
          directiveId: "video"
        },
        {
          id: 2,
          label: "Обложка",
          name: "qwe",
          preview: "Добавить обложку видео",
          size: "",
          isActive: false,
          directiveId: "poster"
        }
      ],

      data: {
        video: {
          name: "",
          src: "",
          id: ""
        },
        poster: {
          name: "",
          src: "",
          id: ""
        }
      },
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
  // watch: {
  //   "formData.urlVideo"(val) {
  //     if (val) {
  //       let vid = document.getElementById("video_player");
  //       let i = setInterval(() => {
  //         if (vid.readyState > 0) {
  //           let minutes = parseInt(vid.duration / 60, 10);
  //           let seconds = vid.duration % 60;
  //           seconds = `${seconds}`.split(".")[0];
  //           console.log(`${minutes}:${seconds}`);
  //           this.formData.duration = `${minutes}:${seconds}`;
  //           clearInterval(i);
  //         }
  //       }, 1);
  //     }
  //   }
  // },

  methods: {
    cleanById(directiveId) {
      let item = null;
      console.log(item);
      this.data[directiveId] = {
        name: "",
        src: "",
        id: ""
      };
      this.controls.forEach(id => {
        if (id.directiveId === directiveId) {
          id.isActive = false;
        }
      });
    },
    coverUpload(file) {
      console.log(file);
      uploadFile({ file: file.file })
        .then(res => {
          const data = res.data.data;

          this.data[file.id].src = data.url;
          this.data[file.id].name = data.name;
          this.data[file.id].id = data.id;
          this.controls = this.controls.map(item => {
            if (item.directiveId === file.id) {
              item.isActive = true;
              item.name = file.file.name;
              item.size = Math.ceil(file.file.size / (1024 * 1024)).toFixed(2);
            }
            return item;
          });
          this.showKey++;
        })
        .catch(err => {
          alert(err.statusText);
        });
    },

    async submit() {
      if (this.isUpdating) {
        this.$api.learning.tutorial
          .updateTutorial({
            title: this.formData.title,
            description: this.formData.description,
            video_id: this.data.video.id
          })
          .then(data => {
            console.log(data);
            this.$router.push("/education/my-platform");
          })
          .catch(e => {
            console.log(e);
          });
      } else {
        this.$api.learning.tutorial
          .createTutorial({
            title: this.formData.title,
            description: this.formData.description,
            video_id: this.data.video.src
          })
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
    }
  }
};
</script>
<style lang="scss">
#LearningMyPlatformSettings {
  @media (max-width: 740px) {
    margin-top: 65px;
  }
  .uploader-descriptor {
    width: 100%;
    svg {
      fill: #ffc107 !important;
    }
    .uploader-descriptor__control,
    .uploader-descriptor__view {
      width: 45%;
      .uploader-descriptor__view-preview {
        margin: 0;
        #video_player {
          width: 100%;
        }
        video {
          width: 100%;
        }
      }
    }
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
    @media (max-width: 1025px) {
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
