<template>
  <div class="curriculum__body-wrapper">
    <div class="curriculum__body">
      <div class="curriculum__list">
        <div class="curriculum__list-header">
          <div class="curriculum__list-header-title">Учебный план</div>
          <div class="curriculum__list-header-subtitle">Уроков (12); Тестов (2); Всего (7 ч., 18 мин.)</div>
        </div>
        <div
          class="curriculum__item"
          :class="{ 'open-plan': isActive && section.id === activeId }"
          v-for="section of accordionData.data"
          :key="section.id"
        >
          <div class="curriculum__item-title" @click="getLectures(section.id)">
            <v-icon src="arrow-down" />
            <div class="theme-courses">{{ section.name }}</div>
            <div class="quantity-lessons">2 урока</div>
          </div>
          <div class="curriculum__item-content" :class="{ 'active-block': isActive && section.id === activeId }">
            <div class="lessons" v-for="lecture of lectures" :key="lecture.id">
              <div class="number-lessons">1</div>
              <div class="theme-lessons">
                Что такое платформа?<br />
                <span>Video - 02:36 min.</span>
              </div>
              <v-icon src="ok-yellow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCourseLessons } from "../services/education-service";

export default {
  name: "test-accordion",
  props: {
    accordionData: {
      type: Object
    }
  },
  data() {
    return {
      activeId: null,
      isActive: false,
      sections: {
        data: [
          {
            object: "CourseSection",
            id: 4,
            name: "Introduction",
            slug: "introduction-3"
          },
          {
            object: "CourseSection",
            id: 3,
            name: "Introduction1",
            slug: "introduction-2"
          },
          {
            object: "CourseSection",
            id: 2,
            name: "Introduction2",
            slug: "introduction-1"
          }
        ]
      },
      lectures: null
    };
  },
  methods: {
    getLectures(id) {
      this.activeId = id;
      if (this.isActive) {
        this.isActive = false;
        this.activeId = null;
      } else {
        this.isActive = true;
        getCourseLessons(id).then(({ data }) => (this.lectures = data));
      }
    },
    routeToLesson() {}
  }
};
</script>

<style lang="scss">
.open-plan svg {
  transform: rotate(0);
}
.curriculum__item-title svg {
  transition: 0.3s ease;
}
.curriculum__item.open-plan {
  & .curriculum__item-title svg {
    transform: rotate(180deg);
  }
}
</style>
