<template>
  <div>
    <portal to="container-actions">
      <v-btn form="page-create-form" :key="`${_uid}-continue`">{{ getContinueTitle }}</v-btn>
    </portal>

    <v-container-header v-if="canBack" @click="back">{{ getBackTitle }}</v-container-header>

    <v-container-title-wrapper>
      <v-container-title-name>
        {{ localStep === STEP_MAIN ? "Footer" : "" }}
        {{ localStep === STEP_LAYOUT ? "Шаблон" : "" }}
      </v-container-title-name>
      <v-container-title-caption v-if="localStep === STEP_LAYOUT">
        Выберите размещение контента на странице. Обратите внимание на целостность дизайна, и придерживайтесь одной
        стилистики.
      </v-container-title-caption>
    </v-container-title-wrapper>

    <v-form @submit="send" id="page-create-form">
      <template v-if="localStep === STEP_MAIN">
        <v-content-showable title="Логотип" showable v-model="show.media">
          <v-file name="media" rules="required" v-model="content.media" />
        </v-content-showable>

        <v-content-showable title="Business Name" showable v-model="show.title">
          <v-input name="title" rules="required" v-model="content.title" />
        </v-content-showable>

        <v-content-showable title="Кнопка" showable v-model="show.button">
          <v-input name="button.text" title="Текст кнопки" rules="required" v-model="content.button.text">
            <button @click="setLocalStep(STEP_BUTTON_SETTINGS)" type="button">
              <v-icon src="link" />
            </button>
          </v-input>
        </v-content-showable>
      </template>

      <template v-else-if="localStep === STEP_BUTTON_SETTINGS">
        <v-btn-settings v-model="content.button" />
      </template>

      <template v-else-if="localStep === STEP_LAYOUT">
        <v-radio name="layout" kind="custom" :options="layouts" rules="required" v-model="content.layout">
          <template slot-scope="item">
            <div class="builder-box__layouts">
              <label>
                <input type="radio" name="hero" :checked="item.value === content.layout" />
                <div class="builder-box__layouts-wrapper">
                  <v-tools-pages-blocks-footer-preview :request="request" :block="content" :layout="item.value">
                    <v-icon v-if="item.value === content.layout" class="check-yelow-white" src="check-yelow-white" />
                  </v-tools-pages-blocks-footer-preview>
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
import { PAGE_BLOCK_FOOTER_LAYOUTS } from "../../../../../stubs/tools-pages";
import pagesBlock from "../../../../../mixins/pages-block";
import { mapWatch } from "../index";

const STEP_MAIN = "main";
const STEP_BUTTON_SETTINGS = "button_settings";
const STEP_LAYOUT = "layout";

export default {
  name: "ToolsPagesBlocksFooter",
  mixins: [pagesBlock],
  data() {
    console.log(this.$store)

    let content = this.$store.state.toolsPages.content;
    return {
      content,

      STEP_MAIN,
      STEP_BUTTON_SETTINGS,
      STEP_LAYOUT,
      STEPS: [STEP_MAIN, STEP_BUTTON_SETTINGS, STEP_LAYOUT],
      STEPS_ORDER: [STEP_MAIN, STEP_LAYOUT],

      localStep: STEP_MAIN,
      show: {
        media: content.media ? true : false,
        title: content.title ? true : false,
        button: content.button.text ? true : false
      },

      layouts: PAGE_BLOCK_FOOTER_LAYOUTS
    };
  },
  watch: {
    "show.media": mapWatch("media"),
    "show.title": mapWatch("title"),
    "show.button": mapWatch("button", { type: null, text: null, link: null })
  }
};
</script>

<style scoped></style>
