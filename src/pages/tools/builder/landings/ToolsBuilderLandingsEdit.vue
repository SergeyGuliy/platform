<template>
  <v-container title="Редактирование страницы" no-mb :loading="loading">
    <div slot="button" class="create-course-box__head-exit">
      <button @click="close" type="button">
        <v-icon src="log-out" />
        <v-icon src="close" />
      </button>
    </div>

    <component :is="getComponent" :request.sync="request" />
  </v-container>
</template>

<script>
import {
  PAGE_TITLE,
  PAGE_BACKGROUND,
  PAGE_FONT_FAMILY,
  PAGE_FONT_COLOR,
  PAGE_BUTTON_STYLE,
  PAGE_CANVAS,
  PAGE_COMPONENTS_ORDER,
  PAGE_ADD_BUTTON,
  PAGE_ADD_CONTENT,
  PAGE_BLOCK_HERO,
  PAGE_BLOCK_MEDIA,
  PAGE_BLOCK_TESTIMONIAL,
  PAGE_BLOCK_TITLE,
  PAGE_BLOCK_TEXTAREA,
  PAGE_PREVIEW,
  PAGE_BLOCK_GALLERY,
  PAGE_BLOCK_CONTACTS,
  PAGE_BLOCK_BUTTON,
  PAGE_BLOCK_SOCIAL_BUTTON,
  PAGE_BLOCK_FOOTER,
  PAGE_BLOCK_HEADER
} from "../../../../stubs/tools-pages";
import { mapActions } from "vuex";
import { getBlockContent } from "../../../../components/tools/landings/blocks";
import { prepare } from "../../../../helpers";

export default {
  name: "ToolsBuilderLandingsEdit",
  mounted() {
    this.load();
    this.$store.dispatch("general/hideMobileMenu");
  },
  beforeDestroy() {
    this.$store.dispatch("general/showMobileMenu");
  },
  data() {
    return {
      init: false,
      loading: false,
      request: {
        // PAGE_TITLE
        title: null,

        // PAGE_BACKGROUND
        background_type: null,
        background_color: null,
        background_image: null,

        // PAGE_FONT_FAMILY
        font_type: null,

        // PAGE_FONT_COLOR
        text_color: null,

        // PAGE_BUTTON_STYLE
        button_type: null,

        // PAGE_CANVAS
        block_header: getBlockContent(PAGE_BLOCK_HEADER),
        block_footer: getBlockContent(PAGE_BLOCK_FOOTER),
        blocks: []
      }
    };
  },
  computed: {
    step() {
      return this.$store.state.toolsPages.step
    },
    insertPosition() {
      return this.$store.state.toolsPages.insertPosition
    },

    id() {
      return this.$route.params.id;
    },
    getComponent() {
      if (this.step === PAGE_CANVAS) {
        return "v-tools-pages-canvas";
      } else if (this.step === PAGE_ADD_BUTTON) {
        return "v-tools-pages-add-button";
      } else if (this.step === PAGE_ADD_CONTENT) {
        return "v-tools-pages-add-content";
      } else if (this.step === PAGE_COMPONENTS_ORDER) {
        return "v-tools-pages-components-order";
      } else if (this.step === PAGE_PREVIEW) {
        return "v-tools-pages-preview";
      } else if (this.step === PAGE_TITLE) {
        return "v-tools-pages-title";
      } else if (this.step === PAGE_BACKGROUND) {
        return "v-tools-pages-background";
      } else if (this.step === PAGE_FONT_FAMILY) {
        return "v-tools-pages-font-family";
      } else if (this.step === PAGE_FONT_COLOR) {
        return "v-tools-pages-font-color";
      } else if (this.step === PAGE_BUTTON_STYLE) {
        return "v-tools-pages-button-style";
      } else if (this.step === PAGE_BLOCK_CONTACTS) {
        return "v-tools-pages-blocks-contacts";
      } else if (this.step === PAGE_BLOCK_HEADER) {
        return "v-tools-pages-blocks-header";
      } else if (this.step === PAGE_BLOCK_FOOTER) {
        return "v-tools-pages-blocks-footer";
      } else if (this.step === PAGE_BLOCK_HERO) {
        return "v-tools-pages-blocks-hero";
      } else if (this.step === PAGE_BLOCK_GALLERY) {
        return "v-tools-pages-blocks-gallery";
      } else if (this.step === PAGE_BLOCK_MEDIA) {
        return "v-tools-pages-blocks-media";
      } else if (this.step === PAGE_BLOCK_TESTIMONIAL) {
        return "v-tools-pages-blocks-testimonial";
      } else if (this.step === PAGE_BLOCK_TEXTAREA) {
        return "v-tools-pages-blocks-textarea";
      } else if (this.step === PAGE_BLOCK_TITLE) {
        return "v-tools-pages-blocks-title";
      } else if (this.step === PAGE_BLOCK_BUTTON) {
        return "v-tools-pages-blocks-button";
      } else if (this.step === PAGE_BLOCK_SOCIAL_BUTTON) {
        return "v-tools-pages-blocks-social-button";
      }
      return null;
    }
  },
  methods: {
    ...mapActions("toolsPages", ["addRequestToHistory", "nextStep", "setStepComplete"]),

    load() {
      // this.$set(this, "loading", true);
      // this.$api.landings
      //   .get(this.id)
      //   .then(({ data }) => {
      //     let temp = localStorage.getItem(`tools-pages-${this.id}`);
      //     let historyRequest = temp ? JSON.parse(temp) : null;
      //     if (historyRequest && moment(historyRequest.time).diff(moment(data.data.updated_at), "s") > 0) {
      //       this.setModel(historyRequest.value);
      //     } else {
      //       this.setModel(data.data);
      //     }
      //     this.detectStep();
      //   })
      //   .finally(() => {
      //     this.$set(this, "loading", false);
      //   });
    },
    setModel(data) {
      // PAGE_TITLE
      this.$set(this.request, "title", data.title);

      // PAGE_BACKGROUND
      this.$set(this.request, "background_type", data.background_type);
      this.$set(this.request, "background_color", data.background_color);

      let background_image = data.background_image || null;
      if (data.backgroundImage && !Array.isArray(data.backgroundImage.data)) {
        background_image = {
          id: data.backgroundImage.data.id,
          src: data.backgroundImage.data.url,
          preview: data.backgroundImage.data.preview,
          filename: data.backgroundImage.data.name,
          type: "photos" /*data.backgroundImage.data.type*/
        };
      }
      this.$set(this.request, "background_image", background_image);

      // PAGE_FONT_FAMILY
      this.$set(this.request, "font_type", data.font_type);

      // PAGE_FONT_COLOR
      this.$set(this.request, "text_color", data.text_color);

      // PAGE_BUTTON_STYLE
      this.$set(this.request, "button_type", data.button_type);

      // PAGE_CANVAS
      let blockHeader = prepare(
        () => ({
          min_height: data.block_header.min_height,
          color: data.block_header.color,
          opacity: data.block_header.opacity,
          layout: data.block_header.layout,
          type: PAGE_BLOCK_HEADER,
          media: data.block_header.media,
          title: data.block_header.title,
          button: {
            type: data.block_header.button.type,
            text: data.block_header.button.text,
            link: data.block_header.button.link
          },
          phone: data.block_header.phone
        }),
        {
          min_height: null,
          color: null,
          opacity: 100,
          layout: null,
          type: PAGE_BLOCK_HEADER,
          media: null,
          title: null,
          button: {
            type: null,
            text: null,
            link: null
          },
          phone: null
        }
      );
      this.$set(this.request, "block_header", blockHeader);

      let blockFooter = prepare(
        () => ({
          min_height: data.block_footer.min_height,
          color: data.block_footer.color,
          opacity: data.block_footer.opacity,
          layout: data.block_footer.layout,
          type: PAGE_BLOCK_FOOTER,
          media: data.block_footer.media,
          title: data.block_footer.title,
          button: {
            type: data.block_footer.button.type,
            text: data.block_footer.button.text,
            link: data.block_footer.button.link
          }
        }),
        {
          min_height: null,
          color: null,
          opacity: 100,
          layout: null,
          type: PAGE_BLOCK_FOOTER,
          media: null,
          title: null,
          button: {
            type: null,
            text: null,
            link: null
          }
        }
      );
      this.$set(this.request, "block_footer", blockFooter);

      this.$set(this.request, "blocks", data.blocks || []);

      this.addRequestToHistory(this.request);
      this.$set(this, "init", true);
    },
    detectStep() {
      let newStep = PAGE_CANVAS;
      if (!this.request.title) {
        newStep = PAGE_TITLE;
      } else if (!this.request.font_type) {
        if (!this.request.background_type) {
          newStep = PAGE_BACKGROUND;
        } else {
          newStep = PAGE_FONT_FAMILY;
        }
      } else if (!this.request.text_color) {
        newStep = PAGE_FONT_COLOR;
      } else if (!this.request.button_type) {
        newStep = PAGE_BUTTON_STYLE;
      }
      if (newStep === PAGE_CANVAS) {
        this.setStepComplete(true);
      }
      this.nextStep(newStep);
    },
    close() {
      this.openModal("LandingClose").then(() => {
        this.$router.push({ name: "tools.landings" });
      });
    }
  },
  watch: {
    request: {
      handler: function(value) {
        if (this.init) {
          let result = {
            time: new Date(),
            value: JSON.parse(JSON.stringify(value))
          };
          localStorage.setItem(`tools-pages-${this.id}`, JSON.stringify(result));
        }
      },
      deep: true
    },
    step: function() {
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style scoped></style>
