import {
  PAGE_BLOCK_BUTTON,
  PAGE_BLOCK_CONTACTS,
  PAGE_BLOCK_FOOTER,
  PAGE_BLOCK_GALLERY,
  PAGE_BLOCK_HEADER,
  PAGE_BLOCK_HERO,
  PAGE_BLOCK_MEDIA,
  PAGE_BLOCK_SOCIAL_BUTTON,
  PAGE_BLOCK_TESTIMONIAL,
  PAGE_BLOCK_TEXTAREA,
  PAGE_BLOCK_TITLE,
  PAGE_BUTTON_STYLE_TYPES,
  PAGE_FONT_COLOR_TYPES,
  PAGE_FONT_FAMILY_TYPES
} from "../../../../stubs/tools-pages";

export function getBlockContent(type) {
  let content = {
    min_height: null,
    color: null,
    opacity: 100,
    layout: null
  };
  if (type === PAGE_BLOCK_CONTACTS) {
    content.type = PAGE_BLOCK_CONTACTS;
    content.title = null;
    content.text = null;
    content.email = null;
    content.socials_accounts = [];
  } else if (type === PAGE_BLOCK_HEADER) {
    content.type = PAGE_BLOCK_HEADER;
    content.media = null;
    content.title = null;
    content.button = { type: null, text: null, link: null };
    content.phone = null;
  } else if (type === PAGE_BLOCK_FOOTER) {
    content.type = PAGE_BLOCK_FOOTER;
    content.media = null;
    content.title = null;
    content.button = { type: null, text: null, link: null };
  } else if (type === PAGE_BLOCK_HERO) {
    content.type = PAGE_BLOCK_HERO;
    content.title = null;
    content.media = null;
    content.subtitle = null;
    content.button = { type: null, text: null, link: null };
  } else if (type === PAGE_BLOCK_GALLERY) {
    content.type = PAGE_BLOCK_GALLERY;
    content.media = [];
    content.title = null;
  } else if (type === PAGE_BLOCK_MEDIA) {
    content.type = PAGE_BLOCK_MEDIA;
    content.media = null;
    content.title = null;
    content.text = null;
    content.button = { type: null, text: null, link: null };
  } else if (type === PAGE_BLOCK_MEDIA) {
    content.type = PAGE_BLOCK_MEDIA;
    content.media = null;
    content.title = null;
    content.text = null;
    content.button = { type: null, text: null, link: null };
  } else if (type === PAGE_BLOCK_TESTIMONIAL) {
    content.type = PAGE_BLOCK_TESTIMONIAL;
    content.title = null;
    content.text = null;
    content.media = null;
    content.username = null;
    content.position = null;
  } else if (type === PAGE_BLOCK_TITLE) {
    content.type = PAGE_BLOCK_TITLE;
    content.title = null;
  } else if (type === PAGE_BLOCK_TEXTAREA) {
    content.type = PAGE_BLOCK_TEXTAREA;
    content.text = null;
  } else if (type === PAGE_BLOCK_BUTTON) {
    content.type = PAGE_BLOCK_BUTTON;
    content.button = { type: null, text: null, link: null };
  } else if (type === PAGE_BLOCK_SOCIAL_BUTTON) {
    content.type = PAGE_BLOCK_SOCIAL_BUTTON;
    content.social_settings = {};
  }
  return content;
}

export function getAccountLink(item) {
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

export function getAccountContent(type) {
  if (type === "whatsapp") {
    return {
      type: "whatsapp",
      phone: null,
      text: null
    };
  } else if (type === "telegram") {
    return {
      type: "telegram",
      login: null,
      text: null
    };
  } else if (type === "instagram") {
    return {
      type: "instagram",
      login: null,
      text: null
    };
  } else if (type === "viber") {
    return {
      type: "viber",
      phone: null,
      text: null
    };
  } else if (type === "messenger") {
    return {
      type: "messenger",
      link: null,
      text: null
    };
  } else if (type === "vk") {
    return {
      type: "vk",
      link: null,
      text: null
    };
  } else if (type === "youtube") {
    return {
      type: "youtube",
      link: null,
      text: null
    };
  } else if (type === "facebook") {
    return {
      type: "facebook",
      link: null,
      text: null
    };
  } else if (type === "twitter") {
    return {
      type: "twitter",
      link: null,
      text: null
    };
  }
}

export function getBlockComponent(block) {
  if (block.type === PAGE_BLOCK_CONTACTS) {
    return "v-tools-pages-blocks-contacts-preview";
  } else if (block.type === PAGE_BLOCK_HERO) {
    return "v-tools-pages-blocks-hero-preview";
  } else if (block.type === PAGE_BLOCK_FOOTER) {
    return "v-tools-pages-blocks-footer-preview";
  } else if (block.type === PAGE_BLOCK_HEADER) {
    return "v-tools-pages-blocks-header-preview";
  } else if (block.type === PAGE_BLOCK_GALLERY) {
    return "v-tools-pages-blocks-gallery-preview";
  } else if (block.type === PAGE_BLOCK_MEDIA) {
    return "v-tools-pages-blocks-media-preview";
  } else if (block.type === PAGE_BLOCK_TESTIMONIAL) {
    return "v-tools-pages-blocks-testimonial-preview";
  } else if (block.type === PAGE_BLOCK_TEXTAREA) {
    return "v-tools-pages-blocks-textarea-preview";
  } else if (block.type === PAGE_BLOCK_TITLE) {
    return "v-tools-pages-blocks-title-preview";
  } else if (block.type === PAGE_BLOCK_BUTTON) {
    return "v-tools-pages-blocks-button-preview";
  } else if (block.type === PAGE_BLOCK_SOCIAL_BUTTON) {
    return "v-tools-pages-blocks-social-button-preview";
  }
  return null;
}

export function getClasses() {
  let classes = [];

  let layout = this.layouts.find(item => item.value === this.getLayout);
  if (layout) {
    classes.push(layout.class);
  }

  let buttonStyle = PAGE_BUTTON_STYLE_TYPES.find(item => item.value === this.request.button_type);
  if (buttonStyle) {
    classes.push(buttonStyle.class);
  }

  let fontColor = PAGE_FONT_COLOR_TYPES.find(item => item.value === this.request.text_color);
  if (fontColor) {
    classes.push(fontColor.class);
  }

  return classes.join(" ");
}

export function getStyle() {
  let styles = [];

  if (this.block.min_height) {
    styles.push(`min-height: ${this.block.min_height}px`);
  }

  styles.push(`opacity: ${this.getOpacity}`);

  if (this.block.color) {
    styles.push(`color: ${this.block.color}`);
  }

  let fontFamily = PAGE_FONT_FAMILY_TYPES.find(item => item.value === this.request.font_type);
  if (fontFamily) {
    styles.push(fontFamily.style);
  }

  return styles.join(";");
}

export function mapWatch(key, newValue = null) {
  return {
    handler: function(value) {
      if (!value) {
        this.$set(this.content, key, JSON.parse(JSON.stringify(newValue)));
      }
    },
    deep: true
  };
}
