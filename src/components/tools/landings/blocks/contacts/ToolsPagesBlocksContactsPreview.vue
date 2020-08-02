<template>
  <div :class="getClasses" :style="getStyle">
    <div v-if="block.title" class="builder-box__layouts-text-title">
      {{ block.title }}
    </div>
    <div v-if="block.text" class="builder-box__layouts-text-subtitle">
      {{ block.text }}
    </div>
    <div class="builder-box__layouts-input">
      <div class="builder-input-box__input-wrapper">
        <div class="builder-input-box__input">
          <div class="form-group">
            <input type="text" placeholder="Your mail" />
          </div>
        </div>
        <button type="button">
          <v-icon src="button-plus-yellow" />
        </button>
      </div>
    </div>
    <div v-if="block.socials_accounts.length" class="builder-box__layouts-social">
      <a v-for="item in block.socials_accounts" :href="getLink(item)">
        <v-icon :src="item.type" />
      </a>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { PAGE_BLOCK_CONTACTS_LAYOUTS } from "../../../../../stubs/tools-pages";
import previewMixin from "../../../../../mixins/pages-block-preview";

export default {
  name: "ToolsPagesBlocksContactsPreview",
  mixins: [previewMixin],
  data() {
    return {
      layouts: PAGE_BLOCK_CONTACTS_LAYOUTS
    };
  },
  methods: {
    getLink(item) {
      if (item.type === "whatsapp") {
        return item.phone;
      } else if (item.type === "telegram") {
        return item.login;
      } else if (item.type === "instagram") {
        return item.login;
      } else if (item.type === "viber") {
        return item.phone;
      } else if (item.type === "messenger") {
        return item.link;
      } else if (item.type === "vk") {
        return item.link;
      } else if (item.type === "youtube") {
        return item.link;
      } else if (item.type === "facebook") {
        return item.link;
      } else if (item.type === "twitter") {
        return item.link;
      }
    }
  }
};
</script>

<style scoped></style>
