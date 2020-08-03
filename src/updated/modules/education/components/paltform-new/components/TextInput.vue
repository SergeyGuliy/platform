<template>
  <div id="TextInput">
    <Editor :richEditorOptions="descriptionEditorOptions" v-model="formData" title="Текст" />

    <div class="buttons-group" style="position: relative; z-index: 2">
      <v-button class="desktop" @click="closeTextEditor" custom-type="text" custom-style="primary">
        Отменить
      </v-button>
      <v-button class="desktop" @click="sendData">
        Сохранить
      </v-button>
    </div>
  </div>
</template>

<script>
import { richEditorOptionPrimary } from "@/updated/common/constants/rich-editor-options";

import Editor from "../../../../../common/components/Editor";
import VButton from "../../../../../common/components/VButton";
export default {
  name: "TextInput",
  data() {
    return {
      formData: "",
      descriptionEditorOptions: richEditorOptionPrimary
    };
  },
  methods: {
    sendData() {
      if (this.formData.length === 0) {
        this.closeTextEditor();
      } else {
        this.saveTextEditor(this.formData);
      }
    }
  },
  mounted() {
    this.formData = "";
  },
  props: {
    closeTextEditor: Function,
    saveTextEditor: Function
  },
  components: {
    Editor,
    VButton
  }
};
</script>

<style lang="scss">
#TextInput {
  margin: 0 18px;
  .buttons-group {
    display: flex;
    margin-top: 24px;
    button {
      height: 40px;
      padding: 0 32px;
    }
    button:first-child {
      border: 1px solid #ffc107;
      color: #8b5c00;
      margin-right: 16px;
    }
  }

  .ql-toolbar {
    border: 1px solid #c8d1e0 !important;
    border-radius: 6px 6px 0 0;
    height: 45px;
  }
  .ql-container {
    border: 1px solid #c8d1e0 !important;
    border-radius: 0 0 6px 6px;
    border-top: none;
  }
  .quill-editor {
    .ql-editor {
      height: 142px;
      border-radius: 6px !important;
    }
    .ql-formats {
      button:nth-child(4) {
        margin-left: 20px;
      }
      button {
        height: 32px;
        width: 32px;
        padding: 3px;
        margin: 0 3px;
        line,
        rect,
        path {
          stroke: #8e99ab !important;
        }
      }
      button:hover {
        line,
        rect,
        path {
          stroke: #8e99ab !important;
        }
      }
      button.ql-active {
        background-color: #f5f7fa;
        border-radius: 6px;
        line,
        rect,
        path {
          stroke: #8e99ab !important;
        }
      }
    }
  }
}
</style>
