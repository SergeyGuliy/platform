<template>
  <div class="learn-course__header" @click="startCourse">
    <div class="learn-course__header-text-title" v-html="headerData.title" v-if="headerData.title"></div>
    <div class="learn-course__header-text-wrapper">
      <div class="learn-course__header-text">
        <div class="learn-course__header-text-subtitle" v-html="headerData.subTitle"></div>
        <course-info-labels v-if="headerData.topicData" :topic-data="headerData.topicData" />
        <div class="learn-course__header-text-start">
          <v-button class="desktop">
            {{ headerData.buttonText }}
          </v-button>
        </div>
      </div>
      <div class="learn-course__header-video">
        <slot name="video"></slot>
      </div>
    </div>
    <v-button class="tablet">
      {{ headerData.buttonText }}
    </v-button>
  </div>
</template>

<script>
import CourseInfoLabels from "../CourseInfoLabels";
import VButton from "../../../common/components/VButton";
export default {
  name: "EducationHeaderContainer",
  components: {
    VButton,
    CourseInfoLabels
  },
  props: {
    headerData: Object
  },
  methods: {
    startCourse(event) {
      if (event.target.classList.contains("v-button")) {
        this.$emit("click", event);
      }
    }
  }
};
</script>

<style scoped></style>
