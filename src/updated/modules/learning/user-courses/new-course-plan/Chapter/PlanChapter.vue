<template>
  <div id="swap-box" class="content-course-box__items swap-box">
    <div class="content-course-box__item swap-item">
      <div class="content-course-box__head">
        <div class="content-course-box__action">
          <v-icon src="drug" />
        </div>
        <div class="content-course-box__title">Раздел {{ config.id }}</div>
      </div>
      <div class="content-course-box__body">
        <div class="content-course-box__name">
          <div class="form-group form-group_numeric">
            <label>Название раздела</label>
            <v-input
              :max="60"
              :counter="true"
              name="name"
              placeholder="Например: “Photoshop с нуля”"
              v-model="chapterName"
            ></v-input>
          </div>
        </div>
        <div class="content-course-box__result-info" v-if="fillers.length">
          <div class="content-course-box__result-info-item" v-for="(filler, idx) in fillers" :key="idx">
            <div class="content-course-box__result-info-item-name">
              {{ filler.label === "lecture" ? "Лекция" : "Тест" }} {{ filler.id }}: {{ filler.name }}
            </div>
            <div class="content-course-box__result-info-item-actions">
              <button type="button" class="__clean-btn" @click="next">
                <v-icon src="edit" />
              </button>
              <button type="button" class="__clean-btn" @click="remove(filler.id, filler.label)">
                <v-icon src="delete" />
              </button>
            </div>
          </div>
        </div>
        <div class="content-course-box__add-section">
          <button type="button" class="btn btn_add" @click="next">
            <v-icon src="plus" />
            <span class="fs16">Добавить наполнения в раздел</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/src/validators";
import AbstractChapterBinder from "@/updated/modules/learning/user-courses/new-course-plan/Chapter/AbstractChapterBuilder";
export default {
  name: "PlanChapter",
  props: ["config", "index"],
  mixins: [AbstractChapterBinder({ fieldName: "name", formValidation: required })]
};
</script>

<style lang="scss" scoped>
.content-course-box__items {
  margin-top: 20px;
}
</style>
