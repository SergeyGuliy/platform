<template>
  <div id="formDescription" class="content-course-box__description-editor">
    <div class="content-course-box__description-editor-title block-title">Описание</div>
    <div class="content-course-box__description-editor-content">
      <platform-editor
        :richEditorOptions="descriptionEditorOptions"
        v-model="formData.description"
        title="Описание курса"
      ></platform-editor>
    </div>
    <div class="content-course-box__description-editor-actions">
      <div class="content-course-box__description-editor-action">
        <button type="button" id="resetDescription" class="btn btn_revert" @click="resetDescription">Отменить</button>
      </div>
      <div class="content-course-box__description-editor-action">
        <button type="button" id="saveDescription" class="btn" @click="saveDescription">Сохранить</button>
      </div>
    </div>
  </div>
</template>

<script>
import Editor from "../../../../../../common/components/Editor";
import { richEditorOptionPrimaryPack } from "@/updated/common/constants/rich-editor-options";
import AbstractLectureBinder from "@/updated/modules/learning/user-courses/new-course-plan/ChapterFilling/LectureComponent/AbstractLectureBuilder";
import { required } from "vuelidate/src/validators";
export default {
  name: "Description",
  props: ["config", "isEdit"],
  components: { "platform-editor": Editor },
  mixins: [AbstractLectureBinder({ formData: "config", formValidation: { description: { required } } })],
  created() {
    this.prevDescriptionMethod();
  },
  data() {
    return {
      prevDescription: "",
      descriptionEditorOptions: richEditorOptionPrimaryPack
    };
  }
};
</script>

<style scoped></style>
