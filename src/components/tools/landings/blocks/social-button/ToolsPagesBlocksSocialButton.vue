<template>
  <div>
    <portal to="container-actions">
      <v-btn form="page-create-form" :key="`${_uid}-continue`">{{ getContinueTitle }}</v-btn>
    </portal>

    <v-container-header v-if="canBack" @click="back">{{ getBackTitle }}</v-container-header>

    <v-container-title-wrapper v-if="localStep !== STEP_BUTTON_SETTINGS">
      <v-container-title-name>
        {{ localStep === STEP_MAIN ? "Кнопка соц. сети" : "" }}
        {{ localStep === STEP_LAYOUT ? "Шаблон" : "" }}
      </v-container-title-name>
      <v-container-title-caption v-if="localStep === STEP_LAYOUT">
        Выберите размещение контента на странице. Обратите внимание на целостность дизайна, и придерживайтесь одной
        стилистики.
      </v-container-title-caption>
    </v-container-title-wrapper>

    <v-form @submit="send" id="page-create-form">
      <template v-if="localStep === STEP_MAIN">
        <v-content-showable title="Кнопка соц. сети">
          <v-social-accounts
            type="addList"
            name="social_account"
            rules="required"
            @input="updateSocialAccount"
            v-model="accountType"
          />
        </v-content-showable>
      </template>

      <template v-else-if="localStep === STEP_BUTTON_SETTINGS">
        <v-social-accounts-settings single v-model="content.social_settings" />
      </template>

      <template v-else-if="localStep === STEP_LAYOUT">
        <v-radio name="layout" kind="custom" :options="layouts" rules="required" v-model="content.layout">
          <template slot-scope="item">
            <div class="builder-box__layouts">
              <label>
                <input type="radio" name="hero" :checked="item.value === content.layout" />
                <div class="builder-box__layouts-wrapper">
                  <v-tools-pages-blocks-social-button-preview :request="request" :block="content" :layout="item.value">
                    <v-icon v-if="item.value === content.layout" class="check-yelow-white" src="check-yelow-white" />
                  </v-tools-pages-blocks-social-button-preview>
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
import { PAGE_BLOCK_SOCIAL_BUTTON_LAYOUTS } from "../../../../../stubs/tools-pages";
import pagesBlock from "../../../../../mixins/pages-block";
import { getAccountContent } from "../index";

const STEP_MAIN = "main";
const STEP_BUTTON_SETTINGS = "button_settings";
const STEP_LAYOUT = "layout";

export default {
  name: "ToolsPagesBlocksSocialButton",
  mixins: [pagesBlock],
  data() {
    console.log(this.$store);

    let content = this.$store.state.toolsPages.content;
    return {
      content,

      accountType: null,

      STEP_MAIN,
      STEP_BUTTON_SETTINGS,
      STEP_LAYOUT,
      STEPS: [STEP_MAIN, STEP_BUTTON_SETTINGS, STEP_LAYOUT],
      STEPS_ORDER: [STEP_MAIN, STEP_BUTTON_SETTINGS, STEP_LAYOUT],
      localStep: STEP_MAIN,

      layouts: PAGE_BLOCK_SOCIAL_BUTTON_LAYOUTS
    };
  },
  methods: {
    updateSocialAccount(type) {
      let content = getAccountContent(type);
      this.$set(this.content, "social_settings", { title: null, ...content });
      this.setLocalStep(STEP_BUTTON_SETTINGS);
    }
  }
};
</script>

<style scoped></style>
