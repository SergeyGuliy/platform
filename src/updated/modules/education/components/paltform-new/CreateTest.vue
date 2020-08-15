<template>
  <div class="edit-page container__small" id="CreateTest">
    <div class="header_block-forward" style="margin-bottom: 20px;">
      <v-button custom-type="text" custom-style="secondary">
        <div style="display: flex; align-items: center">
          <v-icon src="back" style="fill: #1D2228; margin-right: 10px;"></v-icon>
          <span class="bottom__inner" style="color: #1D2228">Тест : Проверка</span>
        </div>
      </v-button>
    </div>
    <div class="section">
      <div class="section-header">
        <div class="header-left">
          <div class="title">Вопрос 1</div>
        </div>
        <!--          <div class="header-right">-->
        <!--            <v-icon src="delete" />-->
        <!--          </div>-->
      </div>
      <div class="section-body">
        <div>
          <Editor :richEditorOptions="descriptionEditorOptions" v-model="question.title" title="Вопрос" />
          <div class="subtitle">Ответы</div>
          <div class="text">
            Добавьте ответы; укажите почему ответ правильный или неправильный; отметьте правильный ответ
          </div>
          <div class="test">
            <div class="test-box" v-for="(answer, id) in question.answers" :key="id">
              <div class="test-box__left">
                <div class="test-box-radio" :class="answer.is_valid ? 'active' : ''" @click="setCorrect(id)">
                  <div class="test-box-radio__inner"></div>
                </div>
              </div>
              <div class="test-box__right">
                <v-input name="title" v-model="answer.title" placeholder="Вариант ответа" />
                <v-input
                  name="description"
                  v-model="answer.description"
                  placeholder="Объясните, почему этот ответ не является лучшим ответом."
                />
              </div>
            </div>
          </div>
          <v-button custom-type="text" custom-style="primary" @click="addAnswer">
            <div style="display: flex; align-items: center">
              <v-icon src="plus" style="fill: #ffc107; margin-right: 10px;"></v-icon>
              <span class="bottom__inner">Добавить ответ</span>
            </div>
          </v-button>
          <div class="buttons-group">
            <button class="my-button outlined" @click="closeTestEditor">Отменить</button>
            <button class="my-button filled" @click="submit">Сохранить</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VButton from "../../../../common/components/VButton";
import Editor from "../../../../common/components/Editor";
import { richEditorOptionPrimaryTest } from "@/updated/common/constants/rich-editor-options";

export default {
  name: "CreateTest",
  components: {
    VButton,
    Editor
  },
  props: {
    testId: Number,
    testData: Object,
    closeTestEditor: Function,
    editTest: Function
  },
  data() {
    return {
      descriptionEditorOptions: richEditorOptionPrimaryTest,
      question: {
        title: "",
        answers: []
      }
    };
  },
  created() {
    this.question = { ...this.testData };
    console.log(this.question);
  },
  methods: {
    submit() {
      console.log(this.question);
      this.editTest(this.testId, this.question);
    },
    setCorrect(id) {
      this.question.answers.forEach(answer => {
        answer.is_valid = false;
      });
      this.question.answers[id].is_valid = true;
    },
    addAnswer() {
      this.question.answers.push({
        title: "",
        description: "",
        is_valid: false
      });
    }
  }
};
</script>

<style lang="scss">
#CreateTest {
  .subtitle {
    margin-top: 24px;
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #58606e;
  }
  .text {
    font-size: 14px;
    line-height: 20px;
    color: #1d2228;
  }
  .test {
    margin-bottom: 28px;
    &-box {
      display: flex;
      margin: 12px 0;
      &__left {
        .test-box-radio {
          margin: 10px;
          border: 3px solid #8e99ab;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          cursor: pointer;
        }
        .test-box-radio.active {
          border: 3px solid #ffcd39;
          position: relative;
          .test-box-radio__inner {
            position: absolute;
            top: 3px;
            left: 3px;
            height: 8px;
            width: 8px;
            border-radius: 50%;
            background-color: #ffcd39;
          }
        }
      }
      &__right {
        flex: 1 1 auto;
        .form-group:first-child {
          margin-bottom: 8px;
        }
      }
    }
  }

  svg {
    fill: #8e99ab;
  }
  .section-body {
    display: block;
  }
  .section-body > div {
    width: 100%;
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

  .ql-toolbar {
    border: 1px solid #c8d1e0 !important;
    border-radius: 6px 6px 0 0;
    height: 45px;
  }
  .ql-container {
    border: 1px solid #c8d1e0 !important;
    border-radius: 0 0 6px 6px;
    border-top: none;
  }
  .quill-editor {
    .ql-editor {
      height: 142px;
      border-radius: 6px !important;
    }
    .ql-formats {
      button:nth-child(4) {
        margin-left: 20px;
      }
      button {
        height: 32px;
        width: 32px;
        padding: 3px;
        margin: 0 3px;
        line,
        rect,
        path {
          stroke: #8e99ab !important;
        }
      }
      button:hover {
        line,
        rect,
        path {
          stroke: #8e99ab !important;
        }
      }
      button.ql-active {
        background-color: #f5f7fa;
        border-radius: 6px;
        line,
        rect,
        path {
          stroke: #8e99ab !important;
        }
      }
    }
  }
}
</style>
