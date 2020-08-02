<template>
  <v-modal :title="multiple ? 'Выбор файлов' : 'Выбор файла'" text="left">
    <template #header>
      <v-tabs :options="tabs" @input="changeTab" v-model="tab" />
    </template>

    <div class="modal-window__cloud-drive__content">
      <div
        v-for="(file, index) in files"
        @click="select(file)"
        class="modal-window__cloud-drive__content-item"
        :key="`file-${_uid}-${file.id}`"
      >
        <v-icon v-if="isSelected(file)" src="check-yelow" />
        <img :src="file.preview" />
      </div>

      <input ref="file" type="file" :multiple="multiple" @change="changeFileHandler" style="display:none;" />
    </div>

    <template #footer>
      <v-btn v-if="hasSelectedFiles" @click="add" type="button">Добавить</v-btn>
      <v-btn v-else @click="pickFiles" type="button">Загрузить</v-btn>

      <button v-if="hasSelectedFiles" @click="unselect" type="button" class="third-btn">Отменить</button>
    </template>
  </v-modal>
</template>

<script>
import modal from "../../mixins/modal";

export default {
  name: "FilesModal",
  mixins: [modal],
  mounted() {
    if (this.type) {
      this.$set(this, "tab", this.type);
    }
    this.load();
  },
  data() {
    return {
      tab: "photos",
      selected: null,
      multipleSelected: [],
      files: []
    };
  },
  computed: {
    multiple() {
      return this.data["multiple"] || false;
    },
    type() {
      let type = this.data["type"];
      return ["photos", "videos", "files"].indexOf(type) !== -1 ? type : null;
    },
    tabs() {
      return [
        { label: "Фото", value: "photos", disable: !(this.type === null || this.type === "photos") },
        { label: "Видео", value: "videos", disable: !(this.type === null || this.type === "videos") },
        { label: "Другое", value: "files", disable: !(this.type === null || this.type === "files") }
      ];
    },

    selectedFiles() {
      return this.multiple ? this.multipleSelected : this.selected;
    },
    hasSelectedFiles() {
      if (this.multiple) {
        return this.multipleSelected.length;
      } else {
        return this.selected;
      }
    }
  },
  methods: {
    load() {
      this.$set(this, "files", []);
      this.$api.files.get(this.tab).then(({ data }) => {
        let files = data.data.map(item => ({
          id: item.id,
          src: item.url,
          preview: item.preview,
          filename: item.name,
          type: this.tab
        }));
        this.$set(this, "files", files);
      });
    },
    select(file) {
      if (this.multiple) {
        if (this.multipleSelected.some(item => item.id === file.id)) {
          this.$set(
            this,
            "multipleSelected",
            this.multipleSelected.filter(item => item.id !== file.id)
          );
        } else {
          this.multipleSelected.push(file);
        }
      } else {
        if (this.selected && this.selected.id === file.id) {
          this.$set(this, "selected", null);
        } else {
          this.$set(this, "selected", file);
        }
      }
    },
    unselect() {
      if (this.multiple) {
        this.$set(this, "multipleSelected", []);
      } else {
        this.$set(this, "selected", null);
      }
    },
    isSelected(file) {
      if (this.multiple) {
        return this.multipleSelected.some(item => item.id === file.id);
      } else {
        return this.selected && this.selected.id === file.id;
      }
    },

    changeTab(value) {
      this.load();
    },

    pickFiles() {
      this.$refs.file.click();
    },
    changeFileHandler(e) {
      if (this.multiple) {
        let files = [...e.target.files];
        this.$api.files.multipleUpload(files).then(({ data }) => {
          let files = data.data;
          files.forEach(item => {
            let file = {
              id: item.id,
              src: item.url,
              preview: item.preview,
              filename: item.name,
              type: this.tab
            };
            this.files.splice(0, 0, file);
            this.multipleSelected.push(file);
          });
        });
      } else {
        let file = e.target.files[0];
        this.$api.files.upload(file).then(({ data }) => {
          let item = data.data;
          this.$set(this, "selected", {
            id: item.id,
            src: item.url,
            preview: item.preview,
            filename: item.name,
            type: this.tab
          });
          this.files.splice(0, 0, item);
        });
      }
      this.$refs.file.value = "";
    },

    add() {
      if (this.hasSelectedFiles) {
        this.close(this.selectedFiles);
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
