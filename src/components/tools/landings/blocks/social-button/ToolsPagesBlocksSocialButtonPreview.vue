<template>
  <div :class="getClasses" :style="getStyle">
    <a @click.prevent :href="getLink" target="_blank" class="btn whatsapp-btn">
      <v-icon :src="getIcon" />
      {{ block.social_settings.text }}
    </a>
    <slot></slot>
  </div>
</template>

<script>
import { PAGE_BLOCK_SOCIAL_BUTTON_LAYOUTS } from "../../../../../stubs/tools-pages";
import previewMixin from "../../../../../mixins/pages-block-preview";
import { TYPES } from "../../../../../stubs/social-accounts";
import { getAccountLink } from "../index";

export default {
  name: "ToolsPagesBlocksSocialButtonPreview",
  mixins: [previewMixin],
  data() {
    return {
      layouts: PAGE_BLOCK_SOCIAL_BUTTON_LAYOUTS
    };
  },
  computed: {
    getLink() {
      return getAccountLink(this.block.social_settings);
    },
    getIcon() {
      let social = TYPES.find(item => item.type === this.block.social_settings);
      return social ? social.icon : null;
    }
  }
};
</script>

<style scoped></style>
