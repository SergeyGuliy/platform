<template>
  <div id="VideoInput">
    <div class="block">
      <VideoUpload
        @uploadFileData="coverUpload"
        :cleanById="cleanById"
        :video-data="data"
        :show-key="showKey"
        :controls="controls"
      ></VideoUpload>
      <v-button custom-type="text" custom-style="primary" v-if="formData.title === null" @click="formData.title = ''">
        <div style="display: flex; align-items: center">
          <v-icon src="plus" style="fill: #ffc107; margin-right: 10px;"></v-icon>
          <span class="bottom__inner">Добавить заголовок к видео</span>
        </div>
      </v-button>
      <div v-else class="input-block">
        <v-input name="telegram.login" title="Заголовок" rules="required" v-model="formData.title" />
        <div @click="formData.title = null">
          <v-icon src="delete" />
        </div>
      </div>
    </div>

    <div class="buttons-group">
      <button class="my-button outlined" @click="closeVideoEditor">Отменить</button>
      <button class="my-button filled" @click="sendData">Сохранить</button>
    </div>
  </div>
</template>

<script>
import { UploadDirective } from "../../../../directives/uploadDirective";
import VideoUpload from "../../../learning/user-courses/components/VideoUpload";
import { uploadFile } from "@/updated/modules/learning/services/learning-service";
import VButton from "../../../../common/components/VButton";

export default {
  name: "VideoInput",
  directives: { upload: UploadDirective },
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
        title: null
      },
      urlPhoto: null,
      urlVideo: null
    };
  },
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

    sendData() {
      if (this.data.video.src) {
        console.log();
        this.saveVideoEditor(
          {
            title: this.formData.title ? this.formData.title : this.data.video.name,
            video_id: this.data.video.id,
            image_id: this.data.poster.id
          },
          this.crossId
        );
      } else {
        this.closeVideoEditor();
      }
    }
  },
  created() {
    console.log(this.crossData);
    console.log(this.crossId);
    if (this.crossData) {
      this.formData = { ...this.crossData };
      this.urlPhoto = this.crossData.urlPhoto;
      this.urlVideo = this.crossData.urlVideo;
    } else {
      this.formData = {
        video: null,
        photo: null,
        title: null
      };
    }
  },
  props: {
    closeVideoEditor: Function,
    saveVideoEditor: Function,
    crossData: {
      required: false
    },
    crossId: {
      required: false
    }
  },
  components: {
    VideoUpload,
    VButton
  }
};
</script>

<style lang="scss">
#VideoInput {
  border-top: 1px solid #ebeff5;
  padding-top: 24px;

  svg {
    fill: #8e99ab;
  }

  & > div {
    padding: 0 18px;
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
  .block {
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
