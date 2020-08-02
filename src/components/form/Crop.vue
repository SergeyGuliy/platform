<template>
  <div>
    <div v-if="title" class="builder-input-box__label">
      <div class="input-box-label">{{ title }}</div>
    </div>

    <div ref="image-wrapper" class="wrapper-image">
      <img ref="image" :src="image" />
    </div>

    <div class="cropper-box__background">
      <div class="background-range-box">
        <div class="background-range-box__detail">
          <span>Затемнение фона</span>
          <i>{{ opacity }}%</i>
        </div>

        <v-vue-slider class="cropper-slider" :min="0" :max="100" :value="opacity" @change="changeOpacity" />
      </div>
    </div>

    <label v-if="errors.has(name, scope)" class="input-error">
      {{ errors.first(name, scope) }}
    </label>
  </div>
</template>

<script>
import input from "../../mixins/input";
import Cropper from "cropperjs";
import VueSlider from "vue-slider-component";

export default {
  name: "Crop",
  mixins: [input],
  components: { "v-vue-slider": VueSlider },
  props: {
    title: {},
    image: {}
  },
  mounted() {
    this.$refs.image.addEventListener("load", this.initCrop);
  },
  beforeDestroy() {
    this.$refs.image.removeEventListener("load", this.initCrop);
  },
  data() {
    return {
      crop: null,
      opacity: 0,
      opacityHnadler: null,
      box: null
    };
  },
  methods: {
    saveFile(blob, filename) {
      if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(blob, filename);
      } else {
        const a = document.createElement("a");
        document.body.appendChild(a);
        const url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = filename;
        a.click();
        setTimeout(() => {
          window.URL.revokeObjectURL(url);
          document.body.removeChild(a);
        }, 0);
      }
    },
    changeOpacity(value) {
      clearTimeout(this.opacityHnadler);
      this.$set(this, "opacity", value);
      if (this.crop) {
        this.$set(
          this,
          "opacityHnadler",
          setTimeout(() => {
            this.createImage();
          }, 200)
        );
        this.updateBoxOpacity();
      }
    },
    updateBoxOpacity() {
      this.box.style.opacity = this.opacity / 100;
    },
    initCrop() {
      this.$set(
        this,
        "crop",
        new Cropper(this.$refs.image, {
          // aspectRatio: 294 / 430,
          checkCrossOrigin: false,
          movable: false,
          rotatable: false,
          scalable: false,
          zoomable: false,
          toggleDragModeOnDblclick: false,
          ready: () => {
            this.$set(this, "box", this.$refs["image-wrapper"].querySelector(".cropper-face.cropper-move"));
            this.updateBoxOpacity();
            this.createImage();
          },
          cropend: this.createImage
        })
      );
    },
    createImage() {
      let { width, height } = this.crop.getCroppedCanvas();
      let canvas = this.crop.getCroppedCanvas();
      let ctx = canvas.getContext("2d");
      ctx.fillStyle = `rgba(0, 0, 0, ${this.opacity / 100})`;
      ctx.fillRect(0, 0, width, height);

      canvas.toBlob(blob => {
        // this.saveFile(blob)
        this.inputHandler(new File([blob], "untitled", { type: blob.type }));
      }, "image/png");
    }
  }
};
</script>

<style lang="scss">
.wrapper-image {
  .cropper-face.cropper-move {
    &:after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: #000;
    }
  }
}

.cropper-slider {
  .vue-slider-rail {
    height: 8px;
    border-radius: 8px;
    background-size: contain;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC);

    &:after {
      content: "";
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      content: "";
      display: block;
      position: absolute;
      background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0, #000 100%);
      border-radius: 8px;
    }
  }

  .vue-slider-dot-tooltip {
    display: none;
  }

  .vue-slider-dot {
    width: 6px !important;
    height: 24px !important;
    border-radius: 8px;
    background: #fff;
    border: 1px solid #8e99ab;
  }
}
</style>
