<template>
  <div class="content-course-box__item swap-item">
    <div class="content-course-box__head">
      <div class="content-course-box__action">
        <v-icon src="drag" />
      </div>
      <div class="content-course-box__title content-course-box__title_delete">
        Лекция {{ config.id }}
        <button class="__clean-btn">
          <v-icon src="delete" />
        </button>
      </div>
    </div>
    <div class="content-course-box__body">
      <div class="content-course-box__name">
        <div class="form-group form-group_numeric">
          <label>Название лекции</label>
          <v-input
            :max="40"
            :counter="true"
            name="name"
            placeholder="Например: “Photoshop с нуля”"
            v-model="config.name"
          ></v-input>
        </div>
      </div>
      <MaterialFilledComponent
        v-if="!['v-material', 'v-material-video', 'v-description'].includes(currentComponent)"
        :materials="{
          videoData: config.videoData,
          resources: resources,
          description: config.description
        }"
        :fillerId="config.id"
        @emitData="handlerData"
      />

      <component :is="currentComponent" @emitData="setCurrentComponent" :config="config" :isEdit="isEdit"></component>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import LectureAddMaterial from "./LectureAddMaterial";
import Description from "./Description";
import Material from "./Material";
import MaterialVideo from "./MaterialVideo";

import MaterialFilledComponent from "./MaterialFilledComponent";
import {
  LEARNING_LECTURE_DESCRIPTION_SAVE,
  LEARNING_LECTURE_RESOURCE_ADD,
  LEARNING_LECTURE_VIDEO_SAVE
} from "../../../../store/mutation-types";

export default {
  name: "LectureComponent",
  props: ["config", "chapterId"],
  // eslint-disable-next-line vue/no-unused-components
  components: {
    "v-add-materials": LectureAddMaterial,
    "v-description": Description,
    "v-material": Material,
    "v-material-video": MaterialVideo,
    MaterialFilledComponent
  },
  computed: {
    ...mapGetters("learning", ["coursePlanChapters", "getLectureResourcesByField"]),
    resources() {
      return this.getLectureResourcesByField(this.chapterId, this.config.id, "resources").map(el => el.name);
    }
  },
  data() {
    return {
      currentComponent: "v-add-materials",
      isEdit: false
    };
  },
  methods: {
    ...mapMutations("learning", [
      LEARNING_LECTURE_VIDEO_SAVE,
      LEARNING_LECTURE_RESOURCE_ADD,
      LEARNING_LECTURE_DESCRIPTION_SAVE
    ]),
    handlerData(action) {
      if (action.name === "navigation") {
        this.isEdit = true;
        this.currentComponent = action.to;
      }
      if (action.name === "remove") {
        this.updateDescription("");
      }
    },
    setCurrentComponent(action) {
      if (action.name === "navigation") {
        this.isEdit = false;
        this.currentComponent = action.to;
      }
      if (action.name === "resource") {
        this.addResource(action.file);
      }
      if (action.name === "saveVideo") {
        this.saveVideoData(action.data);
      }
      if (action.name === "saveDesc") {
        this.updateDescription(action.text);
      }
    },
    addResource(file) {
      const data = {
        name: "",
        src: ""
      };
      const reader = new FileReader();
      reader.onloadend = evt => {
        data.name = file.file.name;
        data.src = evt.target.result;
        this[LEARNING_LECTURE_RESOURCE_ADD]({
          chapterId: this.chapterId,
          lectureId: this.config.id,
          data
        });
      };
      reader.readAsDataURL(file.file);
    },
    saveVideoData(data) {
      this[LEARNING_LECTURE_VIDEO_SAVE]({
        chapterId: this.chapterId,
        lectureId: this.config.id,
        videoData: data
      });
      this.currentComponent = "v-add-materials";
    },
    updateDescription(text) {
      this[LEARNING_LECTURE_DESCRIPTION_SAVE]({
        chapterId: this.chapterId,
        lectureId: this.config.id,
        data: text
      });
      this.currentComponent = "v-add-materials";
    }
  },
  watch: {
    config: {
      handler(e) {
        console.log(e);
        console.log(this.coursePlanChapters);
      },
      deep: true
    }
  }
};
</script>

<style scoped></style>
