<template>
  <div class="content-course-box__questions-items">
    <div class="content-course-box__questions-item">
      <div class="content-course-box__questions-item-drag">
        <button type="button" class="__clean-btn">
          <v-icon src="drag"></v-icon>
        </button>
      </div>
      <div class="content-course-box__questions-item-name">
        <b>{{ index + 1 }}.</b><span v-html="config.questionText"></span>
      </div>
      <div class="content-course-box__questions-item-control">
        <button type="button" class="__clean-btn" @click="edit">
          <v-icon src="edit"></v-icon>
        </button>
        <button type="button" class="__clean-btn" @click="remove">
          <v-icon src="delete"></v-icon>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { newCourseQuestion } from "@/updated/modules/learning/models/learning-courses-router-names";
import { mapMutations } from "vuex";
import { LEARNING_REMOVE_QUESTION_FROM_TEST } from "@/updated/modules/learning/store/mutation-types";

export default {
  name: "QuestionStick",
  props: ["config", "index"],
  methods: {
    ...mapMutations("learning", [LEARNING_REMOVE_QUESTION_FROM_TEST]),
    edit() {
      this.$router.push({
        name: newCourseQuestion,
        params: { testId: this.config.testId, questionId: this.config.id }
      });
    },
    remove() {
      this[LEARNING_REMOVE_QUESTION_FROM_TEST]({
        chapterId: this.$route.params.chapterId,
        lectureId: this.config.testId,
        id: this.config.id
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.content-course-box__questions-item-name {
  display: flex;
  span {
    margin-bottom: -10px;
  }
}
</style>
