<template>
  <div>
    <component
      :is="getAllCourses && getAllCourses.length ? 'v-cabinet' : 'v-create-first'"
      :config="getAllCourses"
    ></component>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TeacherCabinet from "./TeacherCabinet/TeacherCabinet";
import CreateFirstCourse from "./CreateFirstCourse";
import { LEARNING_GET_ALL_COURSES } from "@/updated/modules/learning/store/mutation-types";
export default {
  name: "CreateFirstCourse",
  components: {
    "v-cabinet": TeacherCabinet,
    "v-create-first": CreateFirstCourse
  },
  computed: {
    ...mapGetters("learning", ["getAllCourses"])
  },
  created() {
    this[LEARNING_GET_ALL_COURSES]();
  },
  methods: {
    ...mapActions("learning", [LEARNING_GET_ALL_COURSES])
  },
  data() {
    return {
      currentComponent: "v-create-first"
    };
  }
};
</script>
