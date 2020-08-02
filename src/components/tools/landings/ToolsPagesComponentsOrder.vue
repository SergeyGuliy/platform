<template>
  <div>
    <v-container-header @click="backHandler">Назад</v-container-header>

    <v-container-title-wrapper>
      <v-container-title-name>
        Секции
        <button @click="addBlock" class="button">
          <v-icon src="primery-yellow" />
        </button>
      </v-container-title-name>
    </v-container-title-wrapper>

    <div class="list-options">
      <div class="list-options-item">
        <div class="builder-box__action"></div>
        <div class="list-options-item-content">
          <div>Header</div>
          <v-dropdown>
            <button @click="editBlock(PAGE_BLOCK_HEADER)" type="button">
              <v-icon src="edit" />
              Редактировать
            </button>
          </v-dropdown>
        </div>
      </div>

      <v-draggable v-model="request.blocks" handle=".handler">
        <div slot-scope="item" class="list-options-item">
          <div class="builder-box__action handler">
            <v-icon src="drag" />
          </div>
          <div class="list-options-item-content">
            <div>{{ getTitle(item.type) }}</div>
            <v-dropdown>
              <button @click="editBlock(item.index - 1)" type="button">
                <v-icon src="edit" />
                Редактировать
              </button>
              <button @click="deleteBlock(item.index - 1)" type="button">
                <v-icon src="delete" />
                Удалить
              </button>
            </v-dropdown>
          </div>
        </div>
      </v-draggable>

      <div class="list-options-item">
        <div class="builder-box__action"></div>
        <div class="list-options-item-content">
          <div>Footer</div>
          <v-dropdown>
            <button @click="editBlock(PAGE_BLOCK_FOOTER)" type="button">
              <v-icon src="edit" />
              Редактировать
            </button>
          </v-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import {
  PAGE_ADD_BUTTON,
  PAGE_ADD_CONTENT,
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
  PAGE_BLOCK_TITLE
} from "../../../stubs/tools-pages";

export default {
  name: "ToolsPagesComponentsOrder",
  props: {
    request: {}
  },
  data() {
    return {
      PAGE_BLOCK_HEADER,
      PAGE_BLOCK_FOOTER
    };
  },
  methods: {
    ...mapActions("toolsPages", ["nextStep", "setInsertPosition", "setContent", "addRequestToHistory"]),

    getTitle(type) {
      if (type === PAGE_BLOCK_CONTACTS) {
        return "Контакты";
      } else if (type === PAGE_BLOCK_HERO) {
        return "Hero";
      } else if (type === PAGE_BLOCK_GALLERY) {
        return "Gallery";
      } else if (type === PAGE_BLOCK_MEDIA) {
        return "Media";
      } else if (type === PAGE_BLOCK_TESTIMONIAL) {
        return "Testimonial";
      } else if (type === PAGE_BLOCK_TITLE) {
        return "Заголовок";
      } else if (type === PAGE_BLOCK_TEXTAREA) {
        return "Текст";
      } else if (type === PAGE_BLOCK_BUTTON) {
        return "Кнопка";
      } else if (type === PAGE_BLOCK_SOCIAL_BUTTON) {
        return "Соц. кнопка";
      }
      return "";
    },
    backHandler() {
      this.addRequestToHistory(this.request);
      this.nextStep();
    },
    addBlock(index) {
      this.setInsertPosition(this.request.blocks.length);
      this.nextStep(PAGE_ADD_CONTENT);
    },
    editBlock(index) {
      if (index === PAGE_BLOCK_HEADER) {
        let item = this.request.block_header;
        this.setContent(item);
        this.nextStep(item.type);
      } else if (index === PAGE_BLOCK_FOOTER) {
        let item = this.request.block_footer;
        this.setContent(item);
        this.nextStep(item.type);
      } else {
        let item = this.request.blocks[index];
        this.setContent(item);
        this.nextStep(item.type);
      }
    },
    deleteBlock(index) {
      this.request.blocks.splice(index, 1);
    }
  }
};
</script>

<style lang="scss" scoped></style>
