import { validationMixin } from "vuelidate";
import { mapGetters, mapMutations } from "vuex";
import {
  LEARNING_ADD_LECTURE_TO_CHAPTER,
  LEARNING_ADD_TEST_TO_CHAPTER
  // LEARNING_CHANGE_ORDER_AFTER_DRAG
} from "@/updated/modules/learning/store/mutation-types";
import { newCoursePlan } from "@/updated/modules/learning/models/learning-courses-router-names";

const AbstractChapterFillerBinder = () => ({
  mixins: [validationMixin],
  created() {
    if (!this.lectures.length) {
      this[LEARNING_ADD_LECTURE_TO_CHAPTER]({
        chapterId: this.$route.params.chapterId,
        payload: { id: 1, name: "", videoData: {}, label: "lecture", description: null, resources: [] }
      });
    }
  },
  computed: {
    ...mapGetters("learning", ["getCharterParamValueById", "coursePlanChapters"]),
    lectures() {
      return this.getCharterParamValueById("filler", this.$route.params.chapterId);
    },
    lastLectureId() {
      const lectures = this.lectures.filter(el => el.label === "lecture");
      return lectures[lectures.length - 1].id;
    },
    lastTestId() {
      const lectures = this.lectures.filter(el => el.label === "test");
      return lectures.length ? lectures[lectures.length - 1].id : 0;
    },
    getChapter() {
      return this.getCharterParamValueById("name", this.$route.params.chapterId);
    },
    getChapterName() {
      return this.getChapter || "";
    }
  },
  methods: {
    ...mapMutations("learning", [
      LEARNING_ADD_LECTURE_TO_CHAPTER,
      LEARNING_ADD_TEST_TO_CHAPTER
      // LEARNING_CHANGE_ORDER_AFTER_DRAG
    ]),
    goToChapter() {
      this.$router.push({ name: newCoursePlan });
    },
    toggle() {
      this.isActive = !this.isActive;
    },
    addLecture(id, label) {
      if (label === "lecture") {
        this[LEARNING_ADD_LECTURE_TO_CHAPTER]({
          chapterId: this.$route.params.chapterId,
          payload: { id: id + 1, name: "", videoData: {}, label, description: null, resources: [] }
        });
      }
      if (label === "test") {
        this[LEARNING_ADD_TEST_TO_CHAPTER]({
          chapterId: this.$route.params.chapterId,
          payload: { id: id + 1, name: "", description: "", label, questions: [] }
        });
      }
    }
    // dragHandler(data) {
    //     this[LEARNING_CHANGE_ORDER_AFTER_DRAG]({
    //         chapterId: this.$route.params.chapterId,
    //         payload: data
    //     });
    // }
  }
});

export default AbstractChapterFillerBinder;
