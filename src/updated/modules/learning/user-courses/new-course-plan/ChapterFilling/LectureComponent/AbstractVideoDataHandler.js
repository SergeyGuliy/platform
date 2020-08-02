import { uploadFile } from "@/updated/modules/learning/services/learning-service";

const AbstractVideoDataHandler = () => ({
  data() {
    return {
      file: {
        video: "",
        img: "",
        titles: ""
      },
      showKey: 0,
      controls: [
        {
          id: 1,
          label: "Видео",
          name: "",
          preview: "Добавить видео",
          size: "",
          isActive: false,
          directiveId: "video",
          progress: "0%"
        },
        {
          id: 2,
          label: "Обложка",
          name: "",
          preview: "Добавить обложку видео",
          size: " ",
          isActive: false,
          directiveId: "poster",
          progress: "0%"
        },
        {
          id: 3,
          label: "Субтитры",
          name: "",
          preview: "Добавить субтитры",
          size: " ",
          isActive: false,
          directiveId: "track",
          progress: "0%"
        }
      ],
      videoData: {
        video: {
          src: "",
          name: "",
          type: ""
        },
        poster: {
          src: "",
          name: "",
          type: ""
        },
        track: {
          src: "",
          name: "",
          type: ""
        },
        trackLabel: "english",
        size: 576,
        trackLang: "en"
      }
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
      // const reader = new FileReader();
      // reader.onloadend = evt => {
      //     this.videoData[file.id].src = evt.target.result;
      //     this.videoData[file.id].type = file.file.type;
      //     this.videoData[file.id].name = file.file.name;
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
    reset() {
      this.$emit("emitData", { name: "navigation", to: "v-add-materials" });
    },
    onSaveVideo() {
      this.$emit("emitData", { name: "saveVideo", data: this.videoData });
    }
  }
});

export default AbstractVideoDataHandler;
