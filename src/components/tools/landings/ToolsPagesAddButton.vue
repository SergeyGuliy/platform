<template>
  <div>
    <v-container-header @click="backHandler">Назад</v-container-header>

    <div class="cabinet-course-box__main-info-nav">
      <ul class="list">
        <li>
          <v-btn @click="addButton(PAGE_BLOCK_BUTTON)" clean>Кнопка с ссылкой</v-btn>
        </li>
        <li>
          <v-btn @click="addButton(PAGE_BLOCK_SOCIAL_BUTTON)" clean>Кнопка соц. сети</v-btn>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { PAGE_ADD_CONTENT, PAGE_BLOCK_BUTTON, PAGE_BLOCK_SOCIAL_BUTTON, PAGE_CANVAS } from "../../../stubs/tools-pages";
import { mapActions } from "vuex";
import { getBlockContent } from "./blocks";

export default {
  name: "ToolsPagesAddButton",
  props: {
    request: {}
  },
  data() {
    return {
      PAGE_BLOCK_BUTTON,
      PAGE_BLOCK_SOCIAL_BUTTON
    };
  },
  computed: {
    insertPosition() {
      return this.$store.state.toolsPages.insertPosition;
    }
  },
  methods: {
    ...mapActions("toolsPages", ["nextStep", "prevStep", "setContent", "setInsertPosition"]),

    backHandler() {
      this.setInsertPosition(null);
      this.prevStep(PAGE_ADD_CONTENT);
    },
    addButton(type) {
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
  }
};
</script>

<style scoped></style>
