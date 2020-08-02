<template>
  <div>
    <portal to="container-actions">
      <v-btn form="page-create-form" :key="`${_uid}-continue`">{{ getContinueTitle }}</v-btn>
    </portal>

    <v-container-header v-if="canBack" @click="back">{{ getBackTitle }}</v-container-header>

    <v-container-title-wrapper>
      <v-container-title-name>
        {{ localStep === STEP_MAIN ? "Testimonial" : "" }}
        {{ localStep === STEP_LAYOUT ? "Шаблон" : "" }}
      </v-container-title-name>
      <v-container-title-caption v-if="localStep === STEP_LAYOUT">
        Выберите размещение контента на странице. Обратите внимание на целостность дизайна, и придерживайтесь одной
        стилистики.
      </v-container-title-caption>
    </v-container-title-wrapper>

    <v-form @submit="send" id="page-create-form">
      <template v-if="localStep === STEP_MAIN">
        <v-content-showable title="Заголовок" showable v-model="show.title">
          <v-input name="title" rules="required" v-model="content.title" />
        </v-content-showable>

        <v-content-showable title="Текст">
          <v-textarea name="text" rules="required" v-model="content.text" />
        </v-content-showable>

        <v-content-showable title="Изображение" showable v-model="show.media">
          <v-file name="media" rules="required" v-model="content.media" />
        </v-content-showable>

        <v-content-showable title="ФИО" showable v-model="show.username">
          <v-input name="username" rules="required" v-model="content.username" />
        </v-content-showable>

        <v-content-showable title="Должность" showable v-model="show.position">
          <v-input name="position" rules="required" v-model="content.position" />
        </v-content-showable>
      </template>

      <template v-else-if="localStep === STEP_LAYOUT">
        <v-radio name="layout" kind="custom" :options="layouts" rules="required" v-model="content.layout">
          <template slot-scope="item">
            <div class="builder-box__layouts">
              <label>
                <input type="radio" name="hero" :checked="item.value === content.layout" />
                <div class="builder-box__layouts-wrapper">
                  <v-tools-pages-blocks-testimonial-preview :request="request" :block="content" :layout="item.value">
                    <v-icon v-if="item.value === content.layout" class="check-yelow-white" src="check-yelow-white" />
                  </v-tools-pages-blocks-testimonial-preview>
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
import { PAGE_BLOCK_TESTIMONIAL_LAYOUTS } from "../../../../../stubs/tools-pages";
import { mapWatch } from "../index";
import pagesBlock from "../../../../../mixins/pages-block";

const STEP_MAIN = "main";
const STEP_LAYOUT = "layout";

export default {
  name: "ToolsPagesBlocksTestimonial",
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
        title: content.title ? true : false,
        media: content.media ? true : false,
        username: content.username ? true : false,
        position: content.position ? true : false
      },
      layouts: PAGE_BLOCK_TESTIMONIAL_LAYOUTS
    };
  },
  watch: {
    "show.title": mapWatch("title"),
    "show.media": mapWatch("media"),
    "show.username": mapWatch("username"),
    "show.position": mapWatch("position")
  }
};
</script>

<style scoped></style>
