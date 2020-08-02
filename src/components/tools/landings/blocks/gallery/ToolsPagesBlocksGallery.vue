<template>
  <div>
    <portal to="container-actions">
      <v-btn form="page-create-form" :key="`${_uid}-continue`">{{ getContinueTitle }}</v-btn>
    </portal>

    <v-container-header v-if="canBack" @click="back">{{ getBackTitle }}</v-container-header>

    <v-container-title-wrapper>
      <v-container-title-name>
        {{ localStep === STEP_MAIN ? "Gallery" : "" }}
        {{ localStep === STEP_LAYOUT ? "Шаблон" : "" }}
      </v-container-title-name>
      <v-container-title-caption v-if="localStep === STEP_LAYOUT">
        Выберите размещение контента на странице. Обратите внимание на целостность дизайна, и придерживайтесь одной
        стилистики.
      </v-container-title-caption>
    </v-container-title-wrapper>

    <v-form @submit="send" id="page-create-form">
      <template v-if="localStep === STEP_MAIN">
        <v-field-wrapper>
          <v-file type="photos" name="media" rules="required" multiple v-model="content.media" />
        </v-field-wrapper>

        <v-content-showable title="Заголовок" showable v-model="show.title">
          <v-input name="title" rules="required" v-model="content.title" />
        </v-content-showable>
      </template>

      <template v-else-if="localStep === STEP_LAYOUT">
        <v-radio name="layout" kind="custom" :options="layouts" rules="required" v-model="content.layout">
          <template slot-scope="item">
            <div class="builder-box__layouts">
              <label>
                <input type="radio" name="hero" :checked="item.value === content.layout" />
                <div class="builder-box__layouts-wrapper">
                  <v-tools-pages-blocks-gallery-preview :request="request" :block="content" :layout="item.value">
                    <v-icon v-if="item.value === content.layout" class="check-yelow-white" src="check-yelow-white" />
                  </v-tools-pages-blocks-gallery-preview>
                </div>
              </label>
            </div>
          </template>
        </v-radio>
      </template>
    </v-form>
  </div>
</template>

<script>
import { PAGE_BLOCK_GALLERY_LAYOUTS } from "../../../../../stubs/tools-pages";
import { mapWatch } from "../index";
import pagesBlock from "../../../../../mixins/pages-block";

const STEP_MAIN = "main";
const STEP_LAYOUT = "layout";

export default {
  name: "ToolsPagesBlocksGallery",
  mixins: [pagesBlock],
  data() {
    console.log(this.$store);

    let content = this.$store.state.toolsPages.content;
    return {
      content,

      STEP_MAIN,
      STEP_LAYOUT,
      STEPS: [STEP_MAIN, STEP_LAYOUT],
      STEPS_ORDER: [STEP_MAIN, STEP_LAYOUT],

      localStep: STEP_MAIN,
      show: {
        title: content.title ? true : false
      },
      layouts: PAGE_BLOCK_GALLERY_LAYOUTS
    };
  },
  watch: {
    "show.title": mapWatch("title")
  }
};
</script>

<style scoped></style>
