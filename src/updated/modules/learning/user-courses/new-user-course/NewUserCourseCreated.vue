<template>
  <div class="platform-user-course-created">
    <div class="abstract-new-course-step__title">
      <div class="abstract-new-course-step__title-name">
        Курс создан 🎉
      </div>
      <div class="abstract-new-course-step__title-caption">
        <p>
          Теперь осталось наполнить курс контентом. Добавьте учебный план создав разделы, лекции и практические задания
        </p>
        <div class="platform-user-course-created__preview">
          <v-icon src="eye" class="platform-user-course-created__preview-icon"></v-icon>
          Предпросмотр курса
        </div>
      </div>
    </div>
    <div class="abstract-new-course-step__content platform-user-course-created__content">
      <v-btn class="platform-user-course-created__action-button" @click="saveCourse">Сохранить и завершить</v-btn>
      <v-btn class="platform-user-course-created__action-button" @click="goToFillingCourse"
        >Перейти к наполнению курса</v-btn
      >
    </div>
  </div>
</template>

<script>
import { LEARNING_SAVE } from "../../store/mutation-types";
import { mapActions } from "vuex";
import router from "@/config/router";
import { newCourseChapterList } from "@/updated/modules/learning/models/learning-courses-router-names";

export default {
  methods: {
    ...mapActions("learning", [LEARNING_SAVE]),
    saveCourse() {
      this[LEARNING_SAVE]();
    },
    goToFillingCourse() {
      router.push({ name: newCourseChapterList });
    }
  }
};
</script>

<style scoped lang="scss">
@import "./abstract-new-course-step";

.platform-user-course-created {
  &__preview {
    display: flex;
    align-items: center;
    color: #ffc107;
    font-size: 16px;
    font-weight: 500;
    margin-top: 25px;
    cursor: pointer;

    &:hover {
      .platform-user-course-created__preview-icon {
        color: #faac15;
      }
    }
  }

  &__preview-icon {
    font-size: 24px;
    margin-right: 8px;
  }

  &__content {
    display: flex;
  }

  &__action-button {
    white-space: nowrap;

    &:not(:last-of-type) {
      margin-right: 24px;
    }
  }
}
</style>
