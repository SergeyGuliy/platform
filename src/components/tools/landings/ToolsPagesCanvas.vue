<template>
  <div class="tools-pages-canvas" style="margin: -16px -12px;">
    <portal to="container-actions">
      <v-btn @click="send" :key="`${_uid}-save`">Сохранить</v-btn>
    </portal>

    <v-loading v-if="loading" />

    <template v-else>
      <div class="constructor-box__header">
        <div class="constructor-box__controls">
          <ul class="list">
            <li v-for="(button, id) in topButtons" :key="id">
              <button @click="button.handler" :disabled="!button.show" type="button" class="__clean-btn">
                <v-icon :src="button.icon" />
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div class="constructor-box__body">
        <div class="constructor-box-unit">
          <v-resizable
            class="block"
            @changeHeight="changeHeight(PAGE_BLOCK_HEADER, $event)"
            :show-resizable="PAGE_BLOCK_HEADER === activeBlock"
          >
            <div @click="activate(PAGE_BLOCK_HEADER)" class="block-wrapper">
              <v-tools-pages-blocks-header-preview :block="request.block_header" :request="request" />
            </div>
          </v-resizable>

          <div class="block_add">
            <button @click="addBlock(0)" type="button" class="constructor-box__add">
              <v-icon src="plus-type" />
            </button>
          </div>

          <template v-if="request.blocks.length === 0">
            <div class="constructor-box-unit__body clean"></div>
            <div class="block_add">
              <button @click="addBlock(0)" type="button" class="constructor-box__add">
                <v-icon src="plus-type" />
              </button>
            </div>
          </template>
          <template v-else>
            <v-resizable
              v-for="(block, index) in request.blocks"
              class="block"
              @changeHeight="changeHeight(index, $event)"
              :key="`${_uid}-block-${index}`"
              :show-resizable="index === activeBlock"
            >
              <div @click="activate(index)" class="block-wrapper">
                <component :is="getBlockComponent(block)" :block="block" :request="request"></component>
              </div>

              <div class="block_add">
                <button @click="addBlock(index + 1)" type="button" class="constructor-box__add">
                  <v-icon src="plus-type" />
                </button>
              </div>
            </v-resizable>
          </template>

          <v-resizable
            class="block"
            @changeHeight="changeHeight(PAGE_BLOCK_FOOTER, $event)"
            :show-resizable="PAGE_BLOCK_FOOTER === activeBlock"
          >
            <div @click="activate(PAGE_BLOCK_FOOTER)" class="block-wrapper">
              <v-tools-pages-blocks-footer-preview :block="request.block_footer" :request="request" />
            </div>
          </v-resizable>
        </div>
      </div>

      <div v-if="activeBlock !== null" class="constructor-box__footer">
        <div class="constructor-box__footer-list">
          <ul class="list">
            <li v-for="(button, id) in bottomButtons" :key="id">
              <button @click="button.handler" type="button" class="__clean-btn">
                <v-icon v-if="button.icon" :src="button.icon" />
                <img v-else :src="button.image" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import {
  PAGE_ADD_CONTENT,
  PAGE_BACKGROUND,
  PAGE_BLOCK_FOOTER,
  PAGE_BLOCK_HEADER,
  PAGE_BUTTON_STYLE,
  PAGE_COMPONENTS_ORDER,
  PAGE_FONT_COLOR,
  PAGE_PREVIEW
} from "../../../stubs/tools-pages";
import { mapActions, mapGetters } from "vuex";
import { getBlockComponent } from "./blocks";
import { prepare } from "../../../helpers";

export default {
  name: "ToolsPagesCanvas",
  props: {
    request: {}
  },
  data() {
    return {
      PAGE_BLOCK_HEADER,
      PAGE_BLOCK_FOOTER,

      loading: false,
      activeBlock: null
    };
  },
  computed: {
    requestHistoryPosition() {
      return this.$store.state.toolsPages.requestHistoryPosition
    },
    requestHistory() {
      return this.$store.state.toolsPages.requestHistory
    },
    ...mapGetters("toolsPages", ["prevRequestHistory", "nextRequestHistory"]),

    topButtons() {
      return [
        {
          handler: () => {
            if (this.prevRequestHistory) {
              this.$emit("update:request", JSON.parse(JSON.stringify(this.prevRequestHistory)));
              this.backRequestHistory();
            }
          },
          show: this.prevRequestHistory,
          icon: "arrow-undo"
        },
        {
          handler: () => {
            if (this.nextRequestHistory) {
              this.$emit("update:request", JSON.parse(JSON.stringify(this.nextRequestHistory)));
              this.forwardRequestHistory();
            }
          },
          show: this.nextRequestHistory,
          icon: "arrow-resume"
        },
        {
          handler: () => {
            this.nextStep(PAGE_BACKGROUND);
          },
          show: true,
          icon: "color-palette"
        },
        {
          handler: () => {
            this.nextStep(PAGE_FONT_COLOR);
          },
          show: true,
          icon: "typography"
        },
        {
          handler: () => {
            this.nextStep(PAGE_BUTTON_STYLE);
          },
          show: true,
          icon: "button"
        },
        {
          handler: () => {
            this.nextStep(PAGE_COMPONENTS_ORDER);
          },
          show: true,
          icon: "layers"
        },
        {
          handler: () => {
            this.nextStep(PAGE_PREVIEW);
          },
          show: true,
          icon: "eye-type"
        }
      ];
    },
    bottomButtons() {
      let buttons = [
        {
          handler: () => {
            let color = 100;
            if (this.activeBlock === PAGE_BLOCK_HEADER) {
              color = this.request.block_header.color;
            } else if (this.activeBlock === PAGE_BLOCK_FOOTER) {
              color = this.request.block_footer.color;
            } else {
              color = this.request.blocks[this.activeBlock].color;
            }
            this.openModal("Color", {
              value: color
            }).then(value => {
              if (this.activeBlock === PAGE_BLOCK_HEADER) {
                this.$set(this.request.block_header, "color", value);
              } else if (this.activeBlock === PAGE_BLOCK_FOOTER) {
                this.$set(this.request.block_footer, "color", value);
              } else {
                this.$set(this.request.blocks[this.activeBlock], "color", value);
              }
              this.addRequestToHistory(this.request);
            });
          },
          show: true,
          icon: "ellipse-white"
        },
        {
          handler: () => {
            let opacity = 100;
            if (this.activeBlock === PAGE_BLOCK_HEADER) {
              opacity = this.request.block_header.opacity;
            } else if (this.activeBlock === PAGE_BLOCK_FOOTER) {
              opacity = this.request.block_footer.opacity;
            } else {
              opacity = this.request.blocks[this.activeBlock].opacity;
            }
            this.openModal("Opacity", {
              value: opacity
            }).then(value => {
              if (this.activeBlock === PAGE_BLOCK_HEADER) {
                this.$set(this.request.block_header, "opacity", value);
              } else if (this.activeBlock === PAGE_BLOCK_FOOTER) {
                this.$set(this.request.block_footer, "opacity", value);
              } else {
                this.$set(this.request.blocks[this.activeBlock], "opacity", value);
              }
              this.addRequestToHistory(this.request);
            });
          },
          show: true,
          image: require("../../../assets/transparent-palitra.svg")
        },
        {
          handler: () => {
            let item;
            if (this.activeBlock === PAGE_BLOCK_HEADER) {
              item = this.request.block_header;
            } else if (this.activeBlock === PAGE_BLOCK_FOOTER) {
              item = this.request.block_footer;
            } else {
              item = this.request.blocks[this.activeBlock];
            }
            this.setContent(item);
            this.nextStep(item.type);
            this.setStepQuery({ step: "layout" });
          },
          show: true,
          icon: "align"
        },
        {
          handler: () => {
            let item;
            if (this.activeBlock === PAGE_BLOCK_HEADER) {
              item = this.request.block_header;
            } else if (this.activeBlock === PAGE_BLOCK_FOOTER) {
              item = this.request.block_footer;
            } else {
              item = this.request.blocks[this.activeBlock];
            }
            this.setContent(item);
            this.nextStep(item.type);
          },
          show: true,
          icon: "edit-type"
        },
        {
          handler: () => {
            let item = JSON.parse(JSON.stringify(this.request.blocks[this.activeBlock]));
            this.request.blocks.splice(this.activeBlock, 0, item);
            this.addRequestToHistory(this.request);
          },
          show: typeof this.activeBlock === "number",
          icon: "duplicate"
        },
        {
          handler: () => {
            this.request.blocks.splice(this.activeBlock, 1);
            this.activate(null);
            this.addRequestToHistory(this.request);
          },
          show: typeof this.activeBlock === "number",
          icon: "delete-type"
        }
      ];
      return buttons.filter(item => item.show);
    },
    id() {
      return this.$route.params.id;
    },
    getRequest() {
      return {
        title: this.request.title,
        background_type: this.request.background_type,
        background_color: this.request.background_color,
        background_image_id: prepare(() => this.request.background_image.id),
        font_type: this.request.font_type,
        text_color: this.request.text_color,
        button_type: this.request.button_type,
        block_header: JSON.parse(JSON.stringify(this.request.block_header)),
        block_footer: JSON.parse(JSON.stringify(this.request.block_footer)),
        blocks: JSON.parse(JSON.stringify(this.request.blocks))
      };
    }
  },
  methods: {
    ...mapActions("toolsPages", ["nextStep", "setStepQuery", "setInsertPosition", "setContent"]),
    ...mapActions("toolsPages", ["addRequestToHistory", "backRequestHistory", "forwardRequestHistory"]),

    send() {
      this.$set(this, "loading", true);
      this.$api.landings
        .update(this.id, this.getRequest, this._uid)
        .then(() => {
          this.$router.push({ name: "tools.landings" });
        })
        .finally(() => {
          this.$set(this, "loading", false);
        });
    },
    addBlock(index) {
      this.setInsertPosition(index);
      this.nextStep(PAGE_ADD_CONTENT);
    },

    getBlockComponent,

    activate(index) {
      this.$set(this, "activeBlock", index);
    },
    changeHeight(index, height) {
      if (index === "header") {
        this.$set(this.request.block_header, "min_height", height);
      } else if (index === "footer") {
        this.$set(this.request.block_footer, "min_height", height);
      } else {
        let padding = 32;
        height -= padding;
        this.$set(this.request.blocks[index], "min_height", height);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.constructor-box-unit__body {
  border-top: none;
  border-bottom: none;
}

.block {
  /*padding-bottom: 32px;*/

  &-wrapper {
    overflow: hidden;
    height: 100%;
  }

  .block_add {
    position: absolute !important;
    bottom: -2px;
    left: 0;
    right: 0;
    background: #f8f8f9;
  }
}

.constructor-box-unit {
  .block_add {
    display: flex;
    justify-content: center;
    position: relative;

    .constructor-box__add {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -52%);
      z-index: 2;
      opacity: 1;
    }

    &:after {
      content: "";
      position: absolute;
      bottom: 50%;
      left: 0;
      right: 0;
      border-top: 1px dashed #c8d1e0;
      z-index: 1;
    }
  }

  .constructor-box-unit__footer {
    margin-top: 15px;
  }
}

.list button[disabled] {
  opacity: 0.4;
}

.block-wrapper {
  padding: 16px 0;
}
</style>
