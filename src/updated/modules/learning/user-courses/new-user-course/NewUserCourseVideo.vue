<template>
  <div>
    <div class="abstract-new-course-step__title">
      <div class="abstract-new-course-step__title-name">
        Рекламное видео
      </div>
      <div class="abstract-new-course-step__title-caption">
        После просмотра качественного промовидео вероятность того, что студенты запишутся на ваш курс, может увеличиться
        в 5 раз. А при наличии исключительно хороших видео — даже в 10 раз.
      </div>
    </div>
    <div class="create-course-box__body-content fill-width">
      <VideoUpload
        @uploadFileData="coverUpload"
        :video-data="formData"
        :show-key="showKey"
        :controls="controls"
      ></VideoUpload>
    </div>
  </div>
</template>

<script>
import VideoUpload from "../components/VideoUpload";
import AbstractNewCourseStepFormBinder from "@/updated/modules/learning/user-courses/new-user-course/AbstractNewCourseStepFormBinder";
import { uploadFile } from "@/updated/modules/learning/services/learning-service";

export default {
  components: { VideoUpload },
  mixins: [
    AbstractNewCourseStepFormBinder({
      fieldName: "video",
      formValidation: {}
    })
  ],
  data() {
    return {
      show: false,
      showKey: 0,
      controls: [
        {
          id: 1,
          label: "Видео",
          name: "",
          preview: "Добавить видео",
          size: "",
          isActive: false,
          directiveId: "video"
        },
        {
          id: 2,
          label: "Обложка",
          name: "",
          preview: "Добавить обложку видео",
          size: " ",
          isActive: false,
          directiveId: "poster"
        },
        {
          id: 3,
          label: "Субтитры",
          name: "",
          preview: "Добавить субтитры",
          size: " ",
          isActive: false,
          directiveId: "track"
        }
      ]
    };
  },
  methods: {
    coverUpload(file) {
      uploadFile({ file: file.file })
        .then(res => {
          const data = res.data.data;

          this.formData[file.id].src = data.url;
          this.formData[file.id].name = data.name;
          this.formData[file.id].id = data.id;
          this.controls = this.controls.map(item => {
            if (item.directiveId === file.id) {
              item.isActive = true;
              item.name = file.file.name;
              item.size = Math.ceil(file.file.size / (1024 * 1024)).toFixed(2);
            }
            return item;
          });
          this.showKey++;
        })
        .catch(err => {
          alert(err.statusText);
        });
      // const reader = new FileReader();
      // reader.onloadend = evt => {
      //     this.formData[file.id].src = evt.target.result;
      //     this.formData[file.id].name = file.file.name;
      //     this.controls = this.controls.map(item => {
      //         if (item.directiveId === file.id) {
      //             item.isActive = true;
      //             item.name = file.file.name;
      //             item.size = Math.ceil(file.file.size / (1024 * 1024)).toFixed(2);
      //         }
      //         return item;
      //     });
      //     this.showKey++;
      // };
      // reader.readAsDataURL(file.file);
    },
    onDeleteMethod(id) {
      this.formData[id] = {
        src: null,
        name: null
      };
    }
  }
};
</script>

<style scoped lang="scss">
@import "./abstract-new-course-step";
</style>
