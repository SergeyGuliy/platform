<template>
  <div class="cabinet-course-box__body-content-item">
    <div class="info-card">
      <div class="info-card__wrapper">
        <div class="info-card__photo">
          <img :src="config.preview.url" alt="" />
          <button @click="toggleModal" class="open-btn" @blur="onBlur">
            <v-icon src="more"></v-icon>
          </button>
          <div class="info-card__small-modal " :class="{ 'small-modal-visible': isActiveModal }">
            <div class="info-card__small-modal-row">
              <button class="course-preview">
                <div class="small-modal__svg">
                  <v-icon src="eye"></v-icon>
                </div>
                Предпросмотр курса
              </button>
            </div>
            <div class="info-card__small-modal-row">
              <button class="course-link">
                <div class="small-modal__svg">
                  <v-icon src="link"></v-icon>
                </div>
                Получить ссылку на курс
              </button>
            </div>
            <div class="info-card__small-modal-row">
              <button class="course-post">
                <div class="small-modal__svg">
                  <v-icon src="play"></v-icon>
                </div>
                Опубликовать курс
              </button>
            </div>
          </div>
        </div>
        <div class="info-card__title-tags">
          <div class="info-card__title title-teachers">
            {{ config.name }}
          </div>
          <div class="info-card__tags">
            <button class="tag-btn">Черновик</button>
          </div>
        </div>
        <div class="info-card__change-course">
          <button class="third-btn" @click="goToDetails(config.id)">
            <v-icon src="edit" />
            Изменение / управление курсом {{ config.id }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/config/router";
import { courseDetails } from "@/updated/modules/learning/models/learning-courses-router-names";

export default {
  name: "CourseItemComponent",
  props: ["config"],
  data() {
    return {
      isActiveModal: false
    };
  },
  methods: {
    goToDetails(id) {
      console.log(id);
      router.push({ name: courseDetails, params: { courseId: 2 } });
    },
    toggleModal() {
      this.isActiveModal = !this.isActiveModal;
    },
    onBlur() {
      this.isActiveModal = false;
    }
  }
};
</script>

<style scoped></style>
