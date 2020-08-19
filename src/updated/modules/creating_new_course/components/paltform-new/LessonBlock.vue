<template>
  <div id="LessonBlock">
    <div class="edit-page container__small" v-if="!testIsOpen">
      <div class="header_block-forward" style="margin-bottom: 20px;">
        <v-button custom-type="text" custom-style="secondary" @click="submitEditing">
          <div style="display: flex; align-items: center">
            <v-icon src="back" style="fill: #1D2228; margin-right: 10px;"></v-icon>
            <span class="bottom__inner" style="color: #1D2228">Стартовый блок</span>
          </div>
        </v-button>
        <v-button custom-type="text" custom-style="primary" @click="showPreview">
          <div style="display: flex; align-items: center">
            <v-icon src="eye" style="fill: #ffc107; margin-right: 10px;"></v-icon>
            <span class="bottom__inner">Предпросмотр урока</span>
          </div>
        </v-button>
      </div>
      <div class="section" v-if="lessonData">
        <div class="section-header">
          <div class="header-left">
            <div class="title">Урок 1</div>
          </div>
          <!--          <div class="header-right">-->
          <!--            <v-icon src="delete" />-->
          <!--          </div>-->
        </div>
        <div class="section-body">
          <v-input
            name="telegram.login"
            title="Название урока"
            rules="required"
            v-model="lessonData.title"
            counter
            :max="40"
          />
        </div>

        <v-draggable-provider v-model="lessonData.contents" name="contents">
          <template v-for="(block, id) in lessonData.contents">
            <div v-if="block.content_type === 'html' && id !== crossId" class="section-block" :key="id">
              <div class="section-header">
                <div class="header-left">
                  <v-icon src="drag" />
                  <div class="title">Текст</div>
                </div>
                <div class="header-right">
                  <div @click="editById(id, block.content_type, block.content_object.html)">
                    <v-icon src="edit" style="margin-right: 16px" />
                  </div>
                  <div @click="deleteBlockById(id)">
                    <v-icon src="delete" />
                  </div>
                </div>
              </div>
              <div v-html="block.content_object.html"></div>
            </div>

            <div v-else-if="block.content_type === 'video' && id !== crossId" class="section-block" :key="id">
              <div class="section-header">
                <div class="header-left">
                  <v-icon src="drag" />
                  <div class="title">Видео</div>
                </div>
                <div class="header-right">
                  <div @click="editById(id, block.content_type, block.content_object)">
                    <v-icon src="edit" style="margin-right: 16px" />
                  </div>

                  <div @click="deleteBlockById(id)">
                    <v-icon src="delete" />
                  </div>
                </div>
              </div>
              <div class="section-block-video">
                <video
                  :poster="block.content_object.urlPhoto"
                  :src="block.content_object.video.url"
                  width="240px"
                  controls
                  id="videoBox"
                />
                <div class="video-header">
                  {{ block.content_object.title }}
                  <span>{{ block.content_object.duration }}</span>
                </div>
              </div>
            </div>

            <div v-else-if="block.content_type === 'image' && id !== crossId" class="section-block" :key="id">
              <div class="section-header">
                <div class="header-left">
                  <v-icon src="drag" />
                  <div class="title">Картинка</div>
                </div>
                <div class="header-right">
                  <div @click="editById(id, block.content_type, block.content_object)">
                    <v-icon src="edit" style="margin-right: 16px" />
                  </div>
                  <div @click="deleteBlockById(id)">
                    <v-icon src="delete" />
                  </div>
                </div>
              </div>
              <div class="section-block-video">
                <img
                  v-show="block.content_object"
                  :src="block.content_object.image.preview"
                  alt=""
                  :style="calcStyle(block.content_object.size)"
                />
                <div class="photo-header">{{ block.content_object.title }}</div>
              </div>
            </div>
          </template>
        </v-draggable-provider>

        <div class="section-btn-block" v-if="!(editorsStatus.html || editorsStatus.video || editorsStatus.image)">
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
            <v-button custom-type="text" custom-style="primary" v-if="!lessonIsOpen" @click="editorsStatus.html = true">
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
              @click="editorsStatus.image = true"
            >
              <div style="display: flex; align-items: center">
                <v-icon src="plus" style="fill: #ffc107; margin-right: 10px;"></v-icon>
                <span class="bottom__inner">Картинка</span>
              </div>
            </v-button>
          </div>
        </div>

        <TextInput
          v-if="editorsStatus.html"
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
          v-if="editorsStatus.image"
          :closePhotoEditor="closePhotoEditor"
          :savePhotoEditor="savePhotoEditor"
          :crossData="crossData"
          :crossId="crossId"
        />
      </div>

      <div class="section-footer" v-if="!(editorsStatus.html || editorsStatus.video || editorsStatus.image)">
        <v-radio
          name="cancel"
          :options="types"
          rules="required"
          v-model="lessonData.finish.type"
          title="Завершение урока через:"
          v-if="showButtonRadio"
        />

        <v-input
          v-if="showButtonRadio && lessonData.finish.type === 'button'"
          style="margin-top: 16px; width: 50%"
          name="telegram.login"
          title="Введите текст кнопки"
          rules="required"
          placeholder="Пример: Выполнено"
          v-model="lessonData.finish.data.title"
          counter
          :max="14"
        />
        <v-input
          v-if="showButtonRadio && lessonData.finish.type === 'code'"
          style="margin-top: 16px; width: 50%"
          name="telegram.login"
          title="Введите ключевое слово"
          rules="required"
          v-model="lessonData.finish.data.code"
          counter
          :max="10"
        />
      </div>

      <div class="section-test-card" v-if="showButtonRadio && lessonData.finish.type === 'test'">
        <div class="test-header">Тест к Уроку 1</div>
        <div style="margin-bottom: 20px">
          <v-input
            style="margin-top: 10px; margin-bottom: 16px"
            name="telegram.login"
            title="Название теста"
            rules="required"
            placeholder="Пример: Выполнено"
            v-model="lessonData.finish.title"
            counter
            :max="14"
          />
          <v-textarea
            style="margin-top: 16px; margin-bottom: 20px"
            title="Описание"
            name="text"
            rules="required"
            v-model="lessonData.finish.description"
            counter
            :max="200"
          />
        </div>

        <v-draggable-provider v-model="lessonData.finish.data.questions" name="tests">
          <div v-for="(item, id) in lessonData.finish.data.questions" :key="id" class="test-list">
            <div class="left">
              <v-icon src="drag" style="cursor: grab;" />
              <div class="title">{{ id }}. {{ item.title }}</div>
            </div>
            <div class="right">
              <div @click="editTestActivate(id, item)">
                <v-icon src="edit" style="margin-right: 16px" />
              </div>
              <div @click="deleteTest(id)" style="margin-right: 5px; fill: #8E99AB">
                <v-icon src="delete" />
              </div>
            </div>
          </div>
        </v-draggable-provider>
        <v-button custom-type="text" custom-style="primary" @click="addTest" style="margin-top: 20px">
          <div style="display: flex; align-items: center">
            <v-icon src="plus" style="fill: #ffc107; margin-right: 10px;"></v-icon>
            <span class="bottom__inner">Добавить вопрос</span>
          </div>
        </v-button>
      </div>
    </div>
    <CreateTest v-else :testData="testData" :testId="testId" :closeTestEditor="closeTestEditor" :editTest="editTest" />
  </div>
</template>

<script>
import VButton from "../../../../common/components/VButton";
import TextInput from "./TextInput";
import VideoInput from "./VideoInput";
import PhotoInput from "./PhotoInput";
import Draggable from "vuedraggable";
import CreateTest from "../../components/paltform-new/CreateTest";

export default {
  name: "LessonBlock",
  components: {
    VButton,
    VideoInput,
    TextInput,
    PhotoInput,
    CreateTest,
    "v-draggable-provider": Draggable
  },
  props: {
    sectionServerId: String,
    lessonServerId: String,
    serverLessonData: Object
  },
  data() {
    return {
      showButtonRadio: true,
      lessonIsOpen: false,
      testIsOpen: false,
      editorsStatus: {
        html: false,
        video: false,
        image: false
      },
      types: [
        { label: "Кнопку", value: "button" },
        { label: "Ключевое слово", value: "code" },
        { label: "Тест", value: "test" }
      ],
      lessonData: null,
      crossData: null,
      crossId: null,
      testId: null,
      testData: null
    };
  },
  watch: {
    "lessonData.finish.type"(val) {
      console.log(val);
      if (val === "button") {
        this.lessonData.finish.data = Object.assign(
          {},
          {
            title: "Текст кнопки"
          }
        );
      } else if (val === "code") {
        this.lessonData.finish.data = Object.assign(
          {},
          {
            title: "Текст кнопки",
            code: "Code"
          }
        );
      } else if (val === "test") {
        this.lessonData.finish.data = Object.assign(
          {},
          {
            description: "Описание теста",
            questions: []
          }
        );
      }
    }
  },
  created() {
    console.log(this.serverLessonData);
    let lessonData = { ...this.serverLessonData };
    if (!lessonData.contents) {
      lessonData.contents = [];
    }
    if (!lessonData.finish) {
      lessonData.finish = {
        type: "button",
        data: {
          title: "Текст кнопки"
        }
      };
    }
    this.lessonData = { ...lessonData };
    console.log(this.lessonData);
  },
  methods: {
    showPreview() {
      this.$store.commit("newCourse/SET_PREVIEW_DATA", { ...this.lessonData });
      this.$router.push({ name: "educationNewPlatformPreview" });
    },
    submitEditing() {
      console.log(this.crossLessonId);
      console.log(this.lessonData);
      if (this.lessonData.contents.length > 0) {
        this.$api.learning.lessons
          .changeLesson(this.sectionServerId, this.lessonServerId, this.lessonData)
          .then(data => {
            console.log(data);
            this.$router.push({ name: "educationNewPlatform" });
          })
          .catch(e => {
            console.log(e);
          });
      } else {
        this.$router.push({ name: "educationNewPlatform" });
      }
    },
    triggerUploadVideo() {
      this.openModal("UploadVideo")
        .then(data => {
          if (typeof data === "boolean") {
            this.editorsStatus.video = true;
          } else {
            this.lessonData.contents.push({
              content_type: "video",
              content_object: {
                video_id: data
              }
            });
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    addTest() {
      console.log(32434);
      this.lessonData.finish.data.questions.push({
        ...{
          title: "",
          answers: []
        }
      });
      this.editTestActivate(
        this.lessonData.finish.data.questions.length - 1,
        this.lessonData.finish.data.questions[this.lessonData.finish.data.questions.length - 1]
      );
    },
    deleteTest(id) {
      this.lessonData.finish.data.questions.splice(id, 1);
    },
    editTestActivate(id, data) {
      this.testId = id;
      this.testData = data;
      this.testIsOpen = true;
    },
    editTest(id, data) {
      console.log(data);
      this.lessonData.finish.data.questions[id] = { ...data };
      this.closeTestEditor();
    },
    closeTestEditor() {
      this.testId = null;
      this.testData = null;
      this.testIsOpen = false;
    },
    editById(id, content_type, content_object) {
      this.closeTextEditor();
      this.closeVideoEditor();
      this.closePhotoEditor();

      this.crossData = content_object;
      this.crossId = id;
      if (content_type === "html") {
        this.editorsStatus.html = true;
      } else if (content_type === "video") {
        this.editorsStatus.video = true;
      } else if (content_type === "image") {
        this.editorsStatus.image = true;
      }
    },
    deleteBlockById(id) {
      this.lessonData.contents.splice(id, 1);
    },
    calcStyle(size) {
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
      this.editorsStatus.html = false;
      this.crossId = null;
      this.crossData = null;
    },
    closeVideoEditor() {
      this.editorsStatus.video = false;
      this.crossId = null;
      this.crossData = null;
    },
    closePhotoEditor() {
      this.editorsStatus.image = false;
      this.crossId = null;
      this.crossData = null;
    },
    saveTextEditor(val, id) {
      if (typeof id === "number") {
        this.lessonData.contents[id].content_object.html = val;
      } else {
        this.lessonData.contents.push({
          content_type: "html",
          content_object: {
            title: "Html #2",
            html: val
          }
        });
      }
      this.closeTextEditor();
    },
    saveVideoEditor(val, id) {
      if (typeof id === "number") {
        this.lessonData.contents[id].content_object = val;
      } else {
        this.lessonData.contents.push({
          content_type: "video",
          content_object: val
        });
      }
      this.closeVideoEditor();
    },
    savePhotoEditor(val, id) {
      if (typeof id === "number") {
        this.lessonData.contents[id].data = val;
      } else {
        this.lessonData.contents.push({
          content_type: "image",
          content_object: val
        });
      }
      this.closePhotoEditor();
    }
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
  .test-list {
    height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      align-items: center;
      .title {
        margin-left: 5px;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: #1d2228;
      }
    }
    .right {
      display: flex;
      align-items: center;
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
