<template>
  <div id="LessonBlock">
    <div class="section-header">
      <div class="header-left">
        <div class="title">Урок 1</div>
      </div>
      <div class="header-right">
        <v-icon src="delete" />
      </div>
    </div>
    <div class="section-body">
      <v-input name="telegram.login" title="Название урока" rules="required" v-model="lessonName" counter :max="40" />
    </div>
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
        <v-button custom-type="text" custom-style="primary" v-if="!lessonIsOpen" @click="editorsStatus.video = true">
          <div style="display: flex; align-items: center">
            <v-icon src="plus" style="fill: #ffc107; margin-right: 10px;"></v-icon>
            <span class="bottom__inner">Видео</span>
          </div>
        </v-button>
        <v-button custom-type="text" custom-style="primary" v-if="!lessonIsOpen" @click="editorsStatus.photo = true">
          <div style="display: flex; align-items: center">
            <v-icon src="plus" style="fill: #ffc107; margin-right: 10px;"></v-icon>
            <span class="bottom__inner">Картинка</span>
          </div>
        </v-button>
      </div>
    </div>
    <template v-for="(block, id) in LessonsBlocks">
      <div v-if="block.type === 'text'" class="section-block" :key="id">
        <div class="section-header">
          <div class="header-left">
            <v-icon src="drag" />
            <div class="title">Текст</div>
          </div>
          <div class="header-right">
            <v-icon src="edit" style="margin-right: 16px" />
            <v-icon src="delete" />
          </div>
        </div>
        <div v-html="block.data"></div>
      </div>
    </template>
    <TextInput v-if="editorsStatus.text" :closeTextEditor="closeTextEditor" :saveTextEditor="saveTextEditor" />
    <VideoInput v-if="editorsStatus.video" :closeVideoEditor="closeVideoEditor" :saveVideoEditor="saveVideoEditor" />

    <div class="section-footer" v-if="!(editorsStatus.text || editorsStatus.video || editorsStatus.photo)">
      <v-radio
        name="cancel"
        :options="types"
        rules="required"
        v-model="initValue"
        title="Завершение урока через:"
        v-if="showButtonRadio"
      />

      <v-input
        v-if="showButtonRadio"
        style="margin-top: 16px; width: 50%"
        name="telegram.login"
        title="Введите текст кнопки"
        rules="required"
        placeholder="Пример: Выполнено"
        v-model="lessonName"
        counter
        :max="14"
      />
    </div>
  </div>
</template>

<script>
import VButton from "../../../../common/components/VButton";
import TextInput from "./components/TextInput";
import VideoInput from "./components/VideoInput";

export default {
  name: "LessonBlock",
  data() {
    return {
      showButtonRadio: false,
      lessonIsOpen: false,
      lessonName: "",
      types: [
        { label: "Кнопку", value: "qwe0" },
        { label: "Ключевое слово", value: "qwe1" },
        { label: "Текс", value: "qwe2" }
      ],
      initValue: {},
      editorsStatus: {
        text: false,
        video: false,
        photo: false
      },
      LessonsBlocks: []
    };
  },
  methods: {
    inputType() {
      this.$set(this.initValue, "link", null);
    },
    closeTextEditor() {
      this.editorsStatus.text = false;
    },
    closeVideoEditor() {
      this.editorsStatus.video = false;
    },
    closePhotoEditor() {
      this.editorsStatus.photo = false;
    },
    saveTextEditor(val) {
      this.LessonsBlocks.push({
        type: "text",
        data: val
      });
      this.editorsStatus.text = false;
    },
    saveVideoEditor() {
      this.editorsStatus.video = false;
    },
    savePhotoEditor() {
      this.editorsStatus.photo = false;
    }
  },
  components: {
    VButton,
    VideoInput,
    TextInput
  }
};
</script>

<style lang="scss">
#LessonBlock {
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(57, 70, 111, 0.06), 0px 6px 20px rgba(57, 70, 111, 0.08);
  border-radius: 8px;
  padding: 28px 0;
  margin-bottom: 28px;

  .section-header {
    padding: 0 18px;
    display: flex;
    justify-content: space-between;
    height: 24px;
    align-items: center;
    margin-bottom: 10px;
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
    .form-group:first-child {
      width: 100%;
    }
  }
  .section-footer {
    margin: 0 18px;
    margin-bottom: 28px;
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
        font-size: 16px;
        line-height: 24px;
        color: #1d2228;
        margin-bottom: 8px;
      }
    }
  }
}
</style>
