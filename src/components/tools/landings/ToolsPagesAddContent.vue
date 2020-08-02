<template>
  <div>
    <v-container-header @click="backHandler">Назад</v-container-header>

    <v-container-title-wrapper>
      <v-container-title-name>Добавить контент</v-container-title-name>
    </v-container-title-wrapper>

    <v-tabs :options="tabs" v-model="tab" />

    <div class="list-options">
      <div v-for="(item, id) in items" :key="id" class="list-options-item">
        <div class="list-options-item-content">
          <div class="builder-box__action">
            {{ item.label }}
            <v-icon v-if="hasBlock(item.value)" src="success" />
          </div>
          <button @click="addHandler(item.value)" type="button">
            <v-icon src="plus" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  PAGE_BLOCK_HERO,
  PAGE_BLOCK_GALLERY,
  PAGE_BLOCK_MEDIA,
  PAGE_BLOCK_TESTIMONIAL,
  PAGE_BLOCK_TEXTAREA,
  PAGE_BLOCK_TITLE,
  PAGE_CANVAS,
  PAGE_BLOCK_CONTACTS,
  PAGE_ADD_BUTTON
} from "../../../stubs/tools-pages";
import { mapActions } from "vuex";
import { getBlockContent } from "./blocks";

const TAB_SECTIONS = "sections";
const TAB_ELEMENTS = "elements";

export default {
  name: "ToolsPagesAddContent",
  props: {
    request: {}
  },
  data() {
    return {
      TAB_SECTIONS,
      TAB_ELEMENTS,
      tab: TAB_SECTIONS,
      tabs: [
        { label: "Секции", value: TAB_SECTIONS },
        { label: "Элементы", value: TAB_ELEMENTS }
      ]
    };
  },
  computed: {
    insertPosition() {
      return this.$store.state.toolsPages.insertPosition;
    },

    items() {
      if (this.tab === TAB_SECTIONS) {
        return [
          { label: "Контакты", value: PAGE_BLOCK_CONTACTS },
          { label: "Hero", value: PAGE_BLOCK_HERO },
          { label: "Gallery", value: PAGE_BLOCK_GALLERY },
          { label: "Media", value: PAGE_BLOCK_MEDIA },
          { label: "Testimonial", value: PAGE_BLOCK_TESTIMONIAL }
        ];
      } else if (this.tab === TAB_ELEMENTS) {
        return [
          { label: "Заголовок", value: PAGE_BLOCK_TITLE },
          { label: "Текст", value: PAGE_BLOCK_TEXTAREA },
          { label: "Кнопка", value: PAGE_ADD_BUTTON }
        ];
      }
      return [];
    }
  },
  methods: {
    ...mapActions("toolsPages", ["nextStep", "prevStep", "setContent", "setInsertPosition"]),

    backHandler() {
      this.setInsertPosition(null);
      this.prevStep();
    },
    addHandler(type) {
      if (type === PAGE_ADD_BUTTON) {
        this.nextStep(PAGE_ADD_BUTTON);
      } else {
        let content = getBlockContent(type);
        if (content) {
          if (this.insertPosition !== null) {
            this.request.blocks.splice(this.insertPosition, 0, content);
            this.setContent(this.request.blocks[this.insertPosition]);
          } else {
            this.request.blocks.push(content);
            let index = this.request.blocks.length - 1;
            this.setContent(this.request.blocks[index]);
          }
          this.nextStep(type);
        } else {
          this.nextStep(PAGE_CANVAS);
        }
      }
    },
    hasBlock(value) {
      return this.request.blocks.some(item => item.type === value);
    }
  }
};
</script>

<style scoped></style>
