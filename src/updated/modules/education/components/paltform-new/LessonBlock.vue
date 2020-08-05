<template>
  <div id="LessonBlock">
    <div class="edit-page container__small" v-if="!showPreview">
      <div class="header_block-forward" style="margin-bottom: 20px;">
        <v-button custom-type="text" custom-style="secondary" @click="cancelEditing">
          <div style="display: flex; align-items: center">
            <v-icon src="back" style="fill: #1D2228; margin-right: 10px;"></v-icon>
            <span class="bottom__inner" style="color: #1D2228">Стартовый блок</span>
          </div>
        </v-button>
        <v-button custom-type="text" custom-style="primary" @click="previewToggle()">
          <div style="display: flex; align-items: center">
            <v-icon src="eye" style="fill: #ffc107; margin-right: 10px;"></v-icon>
            <span class="bottom__inner">Предпросмотр урока</span>
          </div>
        </v-button>
      </div>
      <div class="section">
        <div class="section-header">
          <div class="header-left">
            <div class="title">Урок 1</div>
          </div>
          <div class="header-right">
            <v-icon src="delete" />
          </div>
        </div>
        <div class="section-body">
          <v-input
            name="telegram.login"
            title="Название урока"
            rules="required"
            v-model="lessonData.lessonName"
            counter
            :max="40"
          />
        </div>

        <template v-for="(block, id) in lessonData.lessonsBlocks">
          <div v-if="block.type === 'text' && id !== crossId" class="section-block" :key="id">
            <div class="section-header">
              <div class="header-left">
                <v-icon src="drag" />
                <div class="title">Текст</div>
              </div>
              <div class="header-right">
                <div @click="editById(id, block.type, block.data)">
                  <v-icon src="edit" style="margin-right: 16px" />
                </div>
                <div @click="deleteById(id)">
                  <v-icon src="delete" />
                </div>
              </div>
            </div>
            <div v-html="block.data"></div>
          </div>

          <div v-else-if="block.type === 'video' && id !== crossId" class="section-block" :key="id">
            <div class="section-header">
              <div class="header-left">
                <v-icon src="drag" />
                <div class="title">Видео</div>
              </div>
              <div class="header-right">
                <div @click="editById(id, block.type, block.data)">
                  <v-icon src="edit" style="margin-right: 16px" />
                </div>

                <div @click="deleteById(id)">
                  <v-icon src="delete" />
                </div>
              </div>
            </div>
            <div class="section-block-video">
              <video :poster="block.data.urlPhoto" :src="block.data.urlVideo" width="240px" controls id="videoBox" />
              <div class="video-header">
                {{ block.data.header }}
                <span>{{ block.data.duration }}</span>
              </div>
            </div>
          </div>

          <div v-else-if="block.type === 'photo' && id !== crossId" class="section-block" :key="id">
            <div class="section-header">
              <div class="header-left">
                <v-icon src="drag" />
                <div class="title">Картинка</div>
              </div>
              <div class="header-right">
                <div @click="editById(id, block.type, block.data)">
                  <v-icon src="edit" style="margin-right: 16px" />
                </div>
                <div @click="deleteById(id)">
                  <v-icon src="delete" />
                </div>
              </div>
            </div>
            <div class="section-block-video">
              <img v-show="block.data.urlPhoto" :src="block.data.urlPhoto" alt="" :style="calcStyle(block.data.size)" />
              <div class="photo-header">{{ block.data.header }}</div>
            </div>
          </div>
        </template>

        <div class="section-btn-block" v-if="!(editorsStatus.text || editorsStatus.video || editorsStatus.photo)">
          <v-button
            custom-type="text"
            custom-style="primary"
            @click="showButtonRadio = !showButtonRadio"
            class="btn__gray"
            :class="showButtonRadio ? 'active' : ''"
          >
            <div style="display: flex; align-items: center;">
              <v-icon src="plus" style="fill: #1d2228;"></v-icon>
              <span class="bottom__inner"></span>
            </div>
          </v-button>

          <div class="btn-block" v-if="showButtonRadio">
            <v-button custom-type="text" custom-style="primary" v-if="!lessonIsOpen" @click="editorsStatus.text = true">
              <div style="display: flex; align-items: center">
                <v-icon src="plus" style="fill: #ffc107; margin-right: 10px;"></v-icon>
                <span class="bottom__inner">Текст</span>
              </div>
            </v-button>
            <v-button custom-type="text" custom-style="primary" v-if="!lessonIsOpen" @click="triggerUploadVideo()">
              <div style="display: flex; align-items: center">
                <v-icon src="plus" style="fill: #ffc107; margin-right: 10px;"></v-icon>
                <span class="bottom__inner">Видео</span>
              </div>
            </v-button>
            <v-button
              custom-type="text"
              custom-style="primary"
              v-if="!lessonIsOpen"
              @click="editorsStatus.photo = true"
            >
              <div style="display: flex; align-items: center">
                <v-icon src="plus" style="fill: #ffc107; margin-right: 10px;"></v-icon>
                <span class="bottom__inner">Картинка</span>
              </div>
            </v-button>
          </div>
        </div>

        <TextInput
          v-if="editorsStatus.text"
          :closeTextEditor="closeTextEditor"
          :saveTextEditor="saveTextEditor"
          :crossData="crossData"
          :crossId="crossId"
        />
        <VideoInput
          v-if="editorsStatus.video"
          :closeVideoEditor="closeVideoEditor"
          :saveVideoEditor="saveVideoEditor"
          :crossData="crossData"
          :crossId="crossId"
        />
        <PhotoInput
          v-if="editorsStatus.photo"
          :closePhotoEditor="closePhotoEditor"
          :savePhotoEditor="savePhotoEditor"
          :crossData="crossData"
          :crossId="crossId"
        />
      </div>

      <div class="section-footer" v-if="!(editorsStatus.text || editorsStatus.video || editorsStatus.photo)">
        <v-radio
          name="cancel"
          :options="types"
          rules="required"
          v-model="lessonData.endData.endType"
          title="Завершение урока через:"
          v-if="showButtonRadio"
        />

        <v-input
          v-if="showButtonRadio && lessonData.endData.endType === 'button'"
          style="margin-top: 16px; width: 50%"
          name="telegram.login"
          title="Введите текст кнопки"
          rules="required"
          placeholder="Пример: Выполнено"
          v-model="lessonData.endData.buttonText"
          counter
          :max="14"
        />
        <v-input
          v-if="showButtonRadio && lessonData.endData.endType === 'key'"
          style="margin-top: 16px; width: 50%"
          name="telegram.login"
          title="Введите ключевое слово"
          rules="required"
          v-model="lessonData.endData.keyWord"
          counter
          :max="10"
        />
      </div>

      <div class="section-test-card" v-if="showButtonRadio && lessonData.endData.endType === 'test'">
        <div class="test-header">Тест к Уроку 1</div>
        <template v-for="(item, id) in lessonData.endData.testData">
          <div :key="id">
            <v-input
              style="margin-top: 10px; margin-bottom: 16px"
              name="telegram.login"
              title="Название теста"
              rules="required"
              placeholder="Пример: Выполнено"
              v-model="lessonData.endData.testData[id].test"
              counter
              :max="14"
            />
            <v-textarea
              style="margin-top: 16px; margin-bottom: 20px"
              title="Описание"
              name="text"
              rules="required"
              v-model="lessonData.endData.testData[id].answer"
              counter
              :max="200"
            />
          </div>
        </template>

        <v-button custom-type="text" custom-style="primary" @click="addTestData">
          <div style="display: flex; align-items: center">
            <v-icon src="plus" style="fill: #ffc107; margin-right: 10px;"></v-icon>
            <span class="bottom__inner">Добавить вопрос</span>
          </div>
        </v-button>
      </div>
    </div>

    <div class="container__big" v-else>
      <div class="preview-page">
        <v-button custom-type="text" custom-style="secondary" @click="previewToggle" style="margin-bottom: 40px;">
          <div style="display: flex; align-items: center">
            <v-icon src="back" style="fill: #1D2228; margin-right: 10px;"></v-icon>
            <span class="bottom__inner" style="color: #1D2228">Назад к настройкам обучения</span>
          </div>
        </v-button>
        <h2 class="preview-page-header">{{ lessonData.lessonName }}</h2>

        <template v-for="(block, id) in lessonData.lessonsBlocks">
          <div v-if="block.type === 'text'" class="preview-page-block" :key="id">
            <div v-html="block.data"></div>
          </div>

          <div v-else-if="block.type === 'video'" class="preview-page-block" :key="id">
            <div class="preview-page-video">
              <div class="preview-page-video-header">{{ block.data.header }}</div>
              <video
                :poster="block.data.urlPhoto"
                :src="block.data.urlVideo"
                controls
                class="preview-page-video-video"
              />
            </div>
          </div>

          <div v-else-if="block.type === 'photo'" class="preview-page-block" :key="id">
            <div class="preview-page-video">
              <img v-show="block.data.urlPhoto" :src="block.data.urlPhoto" alt="" :style="calcStyle(block.data.size)" />
            </div>
          </div>
        </template>

        <div class="preview-page-bottom-block" v-if="lessonData.endData.endType === 'button'">
          <v-button style="height: 48px;" class="desktop">
            {{ lessonData.endData.buttonText ? lessonData.endData.buttonText : "Кнопка завершения урока" }}
          </v-button>
        </div>
        <div class="preview-page-bottom-block" v-if="lessonData.endData.endType === 'key'">
          <v-input
            name="telegram.login"
            title="Название урока"
            rules="required"
            v-model="lessonData.endData.keyWord"
            counter
            :max="10"
          />

          <v-button style="height: 40px; margin-left: 8px; padding: 10px 32px" class="desktop">
            Завершить
          </v-button>
        </div>
        <div class="preview-page-bottom-block" v-if="lessonData.endData.endType === 'test'">
          <v-button style="height: 48px;" class="desktop">
            Пройти тест
          </v-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VButton from "../../../../common/components/VButton";
import TextInput from "./components/TextInput";
import VideoInput from "./components/VideoInput";
import PhotoInput from "./components/PhotoInput";

export default {
  name: "LessonBlock",
  props: {
    toggleHeaderStatus: Function,
    lessonToggle: Function,
    callBackLesson: Function,
    editCallBackLesson: Function,
    activeSectionId: Number,
    activeLessonId: Number,
    crossLessonId: String,
    crossLessonData: Object
  },
  data() {
    return {
      showPreview: false,
      showButtonRadio: false,
      lessonIsOpen: false,
      editorsStatus: {
        text: false,
        video: false,
        photo: false
      },
      types: [
        { label: "Кнопку", value: "button" },
        { label: "Ключевое слово", value: "key" },
        { label: "Тест", value: "test" }
      ],
      lessonData: {
        lessonName: "",
        lessonsBlocks: [],
        endData: {
          endType: "button",
          testData: [
            {
              test: "",
              answer: ""
            }
          ],
          keyWord: "",
          buttonText: ""
        }
      },
      crossData: null,
      crossId: null
    };
  },
  mounted() {
    if (this.crossLessonData) {
      this.lessonData = { ...this.crossLessonData };
    } else {
      this.lessonData = {
        lessonName: "",
        lessonsBlocks: [],
        endData: {
          endType: "button",
          testData: [
            {
              test: "",
              answer: ""
            }
          ],
          keyWord: "",
          buttonText: ""
        }
      };
    }
  },
  methods: {
    cancelEditing() {
      if (this.crossLessonId) {
        this.editCallBackLesson(this.crossLessonId, this.lessonData);
      } else {
        this.callBackLesson(this.activeSectionId, this.activeLessonId, this.lessonData);
      }
    },
    triggerUploadVideo() {
      this.openModal("UploadVideo")
        .then(data => {
          if (typeof data === "boolean") {
            this.editorsStatus.video = true;
          } else {
            this.lessonData.lessonsBlocks.push({
              type: "video",
              data: {
                urlVideo: data
              }
            });
          }
        })
        .catch(e => {
          console.log(e);
        });
      // this.editorsStatus.video = true
    },
    previewToggle() {
      this.showPreview = !this.showPreview;
      this.toggleHeaderStatus();
    },
    addTestData() {
      this.lessonData.endData.testData.push({
        test: "",
        answer: ""
      });
    },
    editById(id, type, data) {
      this.crossData = data;
      this.crossId = id;
      if (type === "text") {
        this.editorsStatus.text = true;
      } else if (type === "video") {
        this.editorsStatus.video = true;
      } else if (type === "photo") {
        this.editorsStatus.photo = true;
      }
    },
    deleteById(id) {
      this.lessonData.lessonsBlocks.splice(id, 1);
    },
    calcStyle(size) {
      console.log(size);
      if (size === "full") {
        return "width: 100%";
      } else if (size === "75%") {
        return `width: ${size}`;
      } else if (size === "50%") {
        return `width: ${size}`;
      } else if (size === "25%") {
        return `width: ${size}`;
      } else {
        return ``;
      }
    },
    closeTextEditor() {
      this.editorsStatus.text = false;
      this.crossId = null;
      this.crossData = null;
    },
    closeVideoEditor() {
      this.editorsStatus.video = false;
      this.crossId = null;
      this.crossData = null;
    },
    closePhotoEditor() {
      this.editorsStatus.photo = false;
      this.crossId = null;
      this.crossData = null;
    },
    saveTextEditor(val, id) {
      if (typeof id === "number") {
        this.lessonData.lessonsBlocks[id].data = val;
      } else {
        this.lessonData.lessonsBlocks.push({
          type: "text",
          data: val
        });
      }
      this.closeTextEditor();
    },
    saveVideoEditor(val, id) {
      if (typeof id === "number") {
        this.lessonData.lessonsBlocks[id].data = val;
      } else {
        this.lessonData.lessonsBlocks.push({
          type: "video",
          data: val
        });
      }
      this.closeVideoEditor();
    },
    savePhotoEditor(val, id) {
      if (typeof id === "number") {
        this.lessonData.lessonsBlocks[id].data = val;
      } else {
        this.lessonData.lessonsBlocks.push({
          type: "photo",
          data: val
        });
      }
      this.closePhotoEditor();
    }
  },
  components: {
    VButton,
    VideoInput,
    TextInput,
    PhotoInput
  }
};
</script>

<style lang="scss">
#LessonBlock {
  margin-bottom: 28px;

  @media (max-width: 630px) {
    video,
    img {
      width: 100% !important;
    }
  }
  .edit-page {
    width: 604px;
    .section {
      background: #ffffff;
      box-shadow: 0px 1px 4px rgba(57, 70, 111, 0.06), 0px 6px 20px rgba(57, 70, 111, 0.08);
      border-radius: 8px;
      padding: 28px 0;
      margin-bottom: 28px;
    }

    .section-header {
      padding: 0 18px;
      display: flex;
      justify-content: space-between;
      height: 24px;
      align-items: center;
      margin-bottom: 10px;
      @media (max-width: 630px) {
        padding: 0 8px;
      }
      svg,
      use,
      path {
        fill: #8e99ab;
      }
      .header-left {
        display: flex;
        align-items: center;
        .title {
          font-family: "Roboto", sans-serif;
          font-weight: bold;
          font-size: 16px;
          line-height: 16px;
          color: #1d2228;
        }
      }
    }

    .section-block {
      padding: 20px 18px;
      font-size: 14px;
      line-height: 14px;
      border-top: 1px solid #ebeff5;
      @media (max-width: 630px) {
        padding: 20px 8px;
      }
      .section-header {
        padding: 0;
        .header-right {
          display: flex;
        }
        .title {
          font-family: "Roboto", sans-serif;
          font-weight: 500;
          font-size: 14px;
          line-height: 24px;
          color: #58606e;
        }
      }
      .section-block-video {
        .video-header,
        .photo-header {
          margin-top: 10px;
          font-family: "Roboto", sans-serif;
          font-weight: 500;
          font-size: 14px;
          line-height: 24px;
          color: #1d2228;
          span {
            font-family: "Roboto", sans-serif;
            font-size: 12px;
            line-height: 14px;
            color: #58606e;
          }
        }
      }
    }
    .section-btn-block,
    .btn-block {
      margin: 0 18px;
      display: flex;
      .btn-block .v-button-text--primary {
        margin-left: 20px;
      }
      .btn__gray {
        background-color: #f5f7fa !important;
        border-radius: 6px;
      }
      .btn__gray.active svg {
        transform: rotate(45deg);
      }
      .btn-block {
        margin: 0;
      }
    }
    .section-body {
      margin: 0 18px;
      margin-bottom: 24px;
      display: flex;
      justify-content: space-between;

      @media (max-width: 630px) {
        margin: 0 8px;
      }
      .form-group:first-child {
        width: 100%;
      }
    }
    .section-footer {
      margin: 0 18px;
      margin-bottom: 28px;

      @media (max-width: 630px) {
        margin: 0 8px;
        margin-bottom: 28px;
      }
      .radio-checker-box {
        .list {
          display: flex;
          li {
            margin-bottom: 0;
            span {
              font-family: "Roboto", sans-serif;
              font-weight: 500;
              font-size: 14px;
              line-height: 24px;
              color: #58606e;
            }
          }
          li:not(:first-child) {
            margin-left: 26px;
          }
        }
        .input-box-label {
          font-family: "Roboto", sans-serif;
          font-weight: 700;
          font-size: 12px;
          line-height: 24px;
          color: #1d2228;
          margin-bottom: 8px;
        }
      }
    }
    .section-test-card {
      padding: 16px 18px 20px 18px;
      width: 100%;
      background: #ffffff;
      box-shadow: 0px 1px 4px rgba(57, 70, 111, 0.06), 0px 6px 20px rgba(57, 70, 111, 0.08);
      border-radius: 8px;
      .test-header {
        font-family: "Roboto", sans-serif;
        font-weight: bold;
        font-size: 14px;
        line-height: 24px;
        color: #1d2228;
      }
      textarea {
        min-height: 136px;
        max-height: 136px;
      }
    }
  }
}
</style>
