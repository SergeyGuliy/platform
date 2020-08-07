<template>
  <div id="LearningMyNewPlatformPreview">
    <div class="preview-page" v-if="previewData">
      <v-button custom-type="text" custom-style="secondary" @click="$router.back()" style="margin-bottom: 40px;">
        <div style="display: flex; align-items: center">
          <v-icon src="back" style="fill: #1D2228; margin-right: 10px;"></v-icon>
          <span class="bottom__inner" style="color: #1D2228">Назад к настройкам обучения</span>
        </div>
      </v-button>
      <h2 class="preview-page-header">{{ previewData.lessonName }}</h2>

      <template v-for="(block, id) in previewData.lessonsBlocks">
        <div v-if="block.type === 'text'" class="preview-page-block" :key="id">
          <div v-html="block.data"></div>
        </div>

        <div v-else-if="block.type === 'video'" class="preview-page-block" :key="id">
          <div class="preview-page-video">
            <div class="preview-page-video-header">{{ block.data.header }}</div>
            <video :poster="block.data.urlPhoto" :src="block.data.urlVideo" controls class="preview-page-video-video" />
          </div>
        </div>

        <div v-else-if="block.type === 'photo'" class="preview-page-block" :key="id">
          <div class="preview-page-video">
            <img v-show="block.data.urlPhoto" :src="block.data.urlPhoto" alt="" :style="calcStyle(block.data.size)" />
          </div>
        </div>
      </template>

      <div class="preview-page-bottom-block" v-if="previewData.endData.endType === 'button'">
        <v-button style="height: 48px;" class="desktop">
          {{ previewData.endData.buttonText ? previewData.endData.buttonText : "Кнопка завершения урока" }}
        </v-button>
      </div>
      <div class="preview-page-bottom-block" v-if="previewData.endData.endType === 'key'">
        <v-input
          name="telegram.login"
          title="Название урока"
          rules="required"
          v-model="previewData.endData.keyWord"
          counter
          :max="10"
        />

        <v-button style="height: 40px; margin-left: 8px; padding: 10px 32px" class="desktop">
          Завершить
        </v-button>
      </div>
      <div class="preview-page-bottom-block" v-if="previewData.endData.endType === 'test'">
        <v-button style="height: 48px;" class="desktop">
          Пройти тест
        </v-button>
      </div>
    </div>
  </div>
</template>

<script>
import VButton from "../../../../common/components/VButton";

export default {
  name: "LearningMyNewPlatformPreview",
  data() {
    return {
      previewData: null
    };
  },
  created() {
    if (this.$store.state.general.previewData) {
      this.previewData = { ...this.$store.state.general.previewData };
    } else {
      this.$router.back();
    }
  },
  components: {
    VButton
  },
  methods: {
    calcStyle(size) {
      console.log(size);
      if (size === "full") {
        return "width: 100%";
      } else if (size === "75%") {
        return `width: ${size}`;
      } else if (size === "50%") {
        return `width: ${size}`;
      } else if (size === "25%") {
        return `width: ${size}`;
      } else {
        return ``;
      }
    }
  }
};
</script>

<style lang="scss">
#LearningMyNewPlatformPreview {
  width: 80%;
  margin: 0 auto;
  @media (max-width: 630px) {
    width: 100%;
  }
  .preview-page {
    &-bottom-block {
      display: flex;
      align-items: flex-end;
    }
    &-header {
      margin-bottom: 22px;
      font-family: "Roboto", sans-serif;
      font-weight: 500;
      font-size: 44px;
      line-height: 44px;
      color: #1d2228;
    }
    .preview-page-block {
      margin-bottom: 64px;
      p,
      li {
        margin-bottom: 5px;
        font-family: "Roboto", sans-serif;
        font-size: 20px;
        line-height: 32px;
        color: #1d2228;
      }
    }
    .preview-page-video {
      &-header {
        font-family: "Roboto", sans-serif;
        font-weight: bold;
        font-size: 28px;
        line-height: 40px;
        color: #1d2228;
        margin-bottom: 24px;
      }
      &-video {
        width: 100%;
      }
    }
    video,
    img {
      border-radius: 8px;
    }
  }
}
</style>
