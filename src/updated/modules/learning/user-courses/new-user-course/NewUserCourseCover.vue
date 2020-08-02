<template>
  <div>
    <div class="abstract-new-course-step__title">
      <div class="abstract-new-course-step__title-name">
        Обложка курса
      </div>
      <div class="abstract-new-course-step__title-caption">
        Выделите свой курс среди остальных с помощью красивого изображения. О том как сделать красивую обложку вы можете
        посмотреть
        <a class="abstract-new-course-step__title-caption-link" href="#">здесь.</a>
        Ключевые требования: 750x422 пикселей; .jpg, .jpeg, .gif, или .png.; изображение не должно содержать текст.
      </div>
    </div>
    <div class="abstract-new-course-step__content">
      <div class="create-course-box__body-content">
        <div class="uploader-box">
          <div class="uploader-box__view">
            <v-icon v-if="!formData.url" src="img"></v-icon>
            <img v-if="formData.url" :src="formData.url" alt="" />
          </div>
          <div v-show="!formData.url" class="uploader-box__file" v-upload:cover="coverUpload">
            <span class="btn">Выбрать фото</span>
          </div>
          <div class="uploader-box__result" v-if="formData.url">
            <button type="button" class="__clean-btn upload-result" @click="onDeleteImg">
              <span>{{ formData.name }}</span>
              <v-icon src="delete"></v-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { UploadDirective } from "@/updated/directives/uploadDirective";
import { uploadFile } from "@/updated/modules/learning/services/learning-service";
import AbstractNewCourseStepFormBinder from "@/updated/modules/learning/user-courses/new-user-course/AbstractNewCourseStepFormBinder";

export default {
  directives: { upload: UploadDirective },
  mixins: [
    AbstractNewCourseStepFormBinder({
      fieldName: "cover",
      formValidation: {}
    })
  ],
  data() {
    return {
      imgConfig: {
        src: "",
        name: ""
      }
    };
  },
  methods: {
    coverUpload(file) {
      uploadFile({ file: file.file })
        .then(res => {
          const data = res.data.data;

          this.formData.url = data.url;
          this.formData.name = data.name;
          this.formData.id = data.id;
        })
        .catch(err => {
          alert(err.statusText);
        });
      // const reader = new FileReader();
      // reader.onload = evt => {
      //     this.imgConfig.src = evt.target.result;
      //     this.imgConfig.name = file.file.name;
      // };
      // reader.readAsDataURL(file.file);
    },
    onDeleteImg() {
      this.formData.url = null;
      this.formData.name = null;
      this.formData.id = null;
    }
  }
};
</script>

<style scoped lang="scss">
@import "./abstract-new-course-step";

.uploader-box__view img {
  visibility: visible;
}

.uploader-box__result {
  display: block;
}
</style>
