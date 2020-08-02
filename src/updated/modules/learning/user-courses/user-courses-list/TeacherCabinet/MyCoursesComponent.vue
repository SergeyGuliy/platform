<template>
  <div class="cabinet-course-box__body">
    <div class="cabinet-course-box__body-title">
      <span>Мои курсы</span>
      <button type="button" class="btn btn_add">
        <svg class="svg-icon icon-plus">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-plus"></use></svg
        ><span>Новый курс</span>
      </button>
    </div>
    <div class="cabinet-course-box__body-content">
      <div class="cabinet-course-box__body-content-items">
        <CourseItemComponent v-for="item in config" :config="item" :key="item.id" />
      </div>
    </div>
  </div>
</template>

<script>
import CourseItemComponent from "./CourseItemComponent";
export default {
  name: "MyCoursesComponent",
  props: ["config"],
  components: {
    CourseItemComponent
  }
};
</script>

<style scoped></style>
