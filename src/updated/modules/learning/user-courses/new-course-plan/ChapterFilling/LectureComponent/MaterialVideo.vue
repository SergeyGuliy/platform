<template>
  <div class="content-course-box__add-materials">
    <VideoUpload
      @uploadFileData="coverUpload"
      :video-data="videoData"
      :show-key="showKey"
      :controls="controls"
    ></VideoUpload>
    <div class="content-course-box__add-materials__save">
      <div class="content-course-box__add-materials__save-items">
        <button type="button" class="btn btn_revert" @click="reset">Отменить</button>
      </div>
      <div class="content-course-box__add-materials__save-items">
        <button type="button" class="btn" @click="onSaveVideo">Сохранить</button>
      </div>
    </div>
  </div>
</template>

<script>
import VideoUpload from "../../../components/VideoUpload";
import AbstractVideoDataHandler from "@/updated/modules/learning/user-courses/new-course-plan/ChapterFilling/LectureComponent/AbstractVideoDataHandler";

export default {
  name: "MaterialVideo",
  props: ["config"],
  components: { VideoUpload },
  mixins: [AbstractVideoDataHandler()]
};
</script>

<style scoped></style>
