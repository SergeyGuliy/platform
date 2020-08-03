<template>
  <div id="SectionBlock">
    <div class="section-header">
      <div class="header-left">
        <v-icon src="drag" />
        <div class="title">Секция 1</div>
      </div>
      <div class="header-right">
        <v-icon src="delete" />
      </div>
    </div>
    <div class="section-body">
      <v-input name="telegram.login" title="Название секции" rules="required" v-model="content" counter :max="32" />
      <v-select
        name="country_id"
        title="Доступен для (мин. ранг)"
        rules="required"
        v-model="request"
        :options="countries"
      />
    </div>
    <v-button custom-type="text" custom-style="primary" @click="lessonToggle">
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
    lessonToggle: Function
  },
  data() {
    return {
      content: "",
      request: null,
      countries: ["DT4", "DT5", "STAR"]
    };
  }
};
</script>

<style lang="scss">
#SectionBlock {
  height: 208px;
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(57, 70, 111, 0.06), 0px 6px 20px rgba(57, 70, 111, 0.08);
  border-radius: 8px;
  padding: 28px 18px;
  margin-bottom: 28px;

  .section-header {
    display: flex;
    justify-content: space-between;
    height: 24px;
    align-items: center;
    margin-bottom: 16px;
    .header-left {
      display: flex;
      align-items: center;
      .title {
        margin-left: 8px;
        font-family: "Roboto", sans-serif;
        font-weight: bold;
        font-size: 16px;
        line-height: 16px;
        color: #1d2228;
      }
    }
  }
  .section-body {
    margin-bottom: 28px;
    display: flex;
    justify-content: space-between;
    .form-group:first-child {
      width: 368px;
      margin-right: 16px;
    }
    .form-group:last-child {
      width: 224px;
      .v-select,
      #vs1__combobox {
        height: 40px;
      }
      .vs__selected-options {
      }
      input {
        border: none;
      }
      .vs__selected {
        bottom: 3px;
      }
      .vs--open {
        #vs1__combobox {
          border: 1px solid #ffc107;
        }
        #vs1__listbox {
          border: 1px solid #ffc107;
          border-top: none;
        }
      }
    }
  }
}
</style>
