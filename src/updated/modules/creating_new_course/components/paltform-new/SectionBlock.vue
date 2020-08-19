<template>
  <div class="SectionBlock">
    <div class="section-header">
      <div class="header-left">
        <v-icon src="drag" />
        <div class="title">Секция {{ id + 1 }}</div>
      </div>
      <div class="header-right">
        <div @click="deleteSection(id)">
          <v-icon src="delete" />
        </div>
      </div>
    </div>
    <div class="section-body">
      <v-input name="telegram.login" title="Название секции" rules="required" v-model="content" counter :max="32" />
      <v-select
        name="country_id"
        title="Доступен для (мин. ранг)"
        rules="required"
        v-model="limit"
        :options="options"
      />
    </div>

    <v-button custom-type="text" custom-style="primary" @click="addLesson(id)">
      <div style="display: flex; align-items: center">
        <v-icon src="plus" style="fill: #ffc107; margin-right: 10px;"></v-icon>
        <span class="bottom__inner">Добавить урок</span>
      </div>
    </v-button>
  </div>
</template>

<script>
import VButton from "../../../../common/components/VButton";

export default {
  name: "SectionBlock",
  components: {
    VButton
  },
  props: {
    lessonToggle: Function,
    deleteSection: Function,
    addLesson: Function,
    id: Number,
    section: Object
  },
  data() {
    return {
      content: "",
      limit: null,
      options: [
        {
          value: "DT4",
          label: "DT4"
        },
        {
          value: "DT5",
          label: "DT5"
        },
        {
          value: "STAR",
          label: "STAR"
        },
        {
          value: "ЛО = < 70",
          label: "ЛО = < 70"
        },
        {
          value: "ЛО = 70",
          label: "ЛО = 70"
        }
      ]
    };
  }
};
</script>

<style lang="scss"></style>
