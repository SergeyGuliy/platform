<template>
  <div class="content-course-box__add-materials">
    <div class="content-course-box__add-materials-back">
      <button type="button" class="__clean-btn btn-back"><v-icon src="back"></v-icon><span>Материалы</span></button>
    </div>
    <div class="content-course-box__add-materials-caption">
      Выберите главный тип материалов. Файлы и ссылки можно добавлять в качестве ресурсов.
    </div>
    <div class="content-course-box__add-materials-actions">
      <div class="content-course-box__add-materials-action">
        <button type="button" class="btn btn_materials" @click="actionMethod('v-material-video')">
          <v-icon src="play"></v-icon>
          <span>Видео</span>
        </button>
      </div>
      <div class="content-course-box__add-materials-action" @click="actionMethod('article')">
        <button type="button" class="btn btn_materials"><v-icon src="sheet"></v-icon><span>Статья</span></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Material",
  methods: {
    actionMethod(action) {
      this.$emit("emitData", { name: "navigation", to: action });
    }
  }
};
</script>

<style scoped></style>
