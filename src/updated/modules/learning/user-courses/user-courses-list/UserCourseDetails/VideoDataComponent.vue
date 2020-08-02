<template>
  <div id="id4" class="cabinet-course-box__main-info-content-item active">
    <div class="cabinet-course-box__main-info-content-item-description">
      После просмотра качественного промовидео вероятность того, что студенты запишутся на ваш курс, может увеличиться в
      5 раз. А при наличии исключительно хороших видео — даже в 10 раз.
    </div>
    <!--        <VideoUpload-->
    <!--            @uploadFileData="coverUpload"-->
    <!--            :video-data="config.videoData"-->
    <!--            :show-key="showKey"-->
    <!--            :controls="config.controls"-->
    <!--        ></VideoUpload>-->
  </div>
</template>

<script>
// import VideoUpload from "../../components/VideoUpload";
import { uploadFile } from "@/updated/modules/learning/services/learning-service";
export default {
  name: "VideoDataComponent",
  props: ["config"],
  // components: { VideoUpload },
  data() {
    return {
      file: {
        video: "",
        img: "",
        titles: ""
      },
      showKey: 1
    };
  },
  methods: {
    coverUpload(file) {
      uploadFile(
        { file: file.file },
        {
          onUploadProgress: e => {
            this.controls = this.controls.map(item => {
              if (item.directiveId === file.id) {
                item.isActive = true;
                item.progress = Math.round((e.loaded * 100) / e.total) + "%";
                item.name = file.file.name;
                item.size = Math.ceil(e.loaded / (1024 * 1024)).toFixed(2);
              }
              return item;
            });
          }
        }
      )
        .then(res => {
          const data = res.data.data;

          this.videoData[file.id].src = data.url;
          this.videoData[file.id].type = file.file.type;
          this.videoData[file.id].name = data.name;
          this.videoData[file.id].id = data.id;
          this.controls = this.controls.map(item => {
            if (item.directiveId === file.id) {
              item.name = data.name;
              item.size = Math.ceil(data.size / (1024 * 1024)).toFixed(2);
            }
            return item;
          });
          this.showKey++;
        })
        .catch(err => {
          this.controls = this.controls.map(item => {
            if (item.directiveId === file.id) {
              item.isActive = false;
              item.progress = "0%";
            }
            return item;
          });
          alert(err.statusText);
        });
    }
  }
};
</script>

<style scoped></style>
