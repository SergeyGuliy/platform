<template>
  <div class="course-test__content">
    <div class="course-test__content-wrapper">
      <template v-if="firstLoad">
        <div class="course-test__content-title">Using the Exercise Files</div>
        <div class="course-test__content-subtitle">Тест 1 | 3 вопроса</div>
        <div class="course-test__content-text">Ответьте на вопросы, для лучшего усвоения материала</div>
        <div class="course-test__buttons">
          <v-button @click="start" class="btn">Начать тест</v-button>
          <v-button custom-type="text" class="all-btn third-btn">Пропустить тест</v-button>
        </div>
      </template>
      <template v-else>
        <v-notification v-if="isChecked" :type="status" class="test-notify">
          <template #title>hello</template>
          <template #description>hello2</template>
        </v-notification>
        <div class="course-test__content-questions">
          <div class="course-test__content-question">
            <div class="course-test__content-question-number">Вопрос 1:</div>
            <div class="course-test__content-question-text">
              What's the best way to get your designs reviewed or your questions answered?
            </div>
          </div>
          <div class="course-test__content-answers">
            <div class="radio-checker-box">
              <ul class="list">
                <li v-for="(question, index) of questions" :key="index">
                  <v-radio
                    :config="question"
                    v-model="answer"
                    @change="checkItem(question)"
                    :disabled="question.isChecked"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </template>
    </div>
    <div v-if="!firstLoad" class="course-test__buttons-block">
      <div class="course-test__buttons-block-counter">Вопрос 1 из 3</div>
      <div class="course-test__buttons-block-buttons">
        <button class="all-btn third-btn test-btn">Пропустить</button>
        <v-button :disabled="!answer" @click="checkAnswer">Проверить ответ</v-button>
      </div>
    </div>
    <v-preloader v-if="loading"></v-preloader>
  </div>
</template>

<script>
import VButton from "../../../../../../common/components/VButton";
import VNotification from "../../../../../../common/components/VNotification";
import VRadio from "../../../../../../common/components/form/VRadio";
import VPreloader from "../../../../../../common/components/VPreloader";

export default {
  components: {
    VButton,
    VNotification,
    VRadio,
    VPreloader
  },
  data() {
    return {
      firstLoad: true,
      questions: [
        {
          label: "QA",
          value: "1"
        },
        {
          label: "Frontend",
          value: "2"
        },
        {
          label: "Backend",
          value: "3"
        }
      ],
      answer: "3",
      loading: false,
      isChecked: false,
      data: {
        validAnswer: "3"
      }
    };
  },
  computed: {
    isValid() {
      return this.answer === this.data.validAnswer;
    },
    status() {
      return this.isValid ? "success" : "error";
    }
  },
  methods: {
    checkItem(question) {
      question.isChecked = true;
      // target.isChecked = true;
    },
    start() {
      this.firstLoad = false;
    },
    checkAnswer() {
      new Promise(resolve => {
        this.loading = true;
        resolve();
      }).then(() => {
        setTimeout(() => {
          this.isChecked = true;
          new Promise(resolve => resolve((this.loading = false)));
        }, 2000);
      });
    }
  }
};
</script>

<style scoped>
.test-notify {
  margin-bottom: 24px;
}
.course-test__content {
  position: relative;
}
</style>
