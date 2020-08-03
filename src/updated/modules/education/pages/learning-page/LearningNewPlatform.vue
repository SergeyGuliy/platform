<template>
  <div class="builder-tabs-block block" id="LearningNewPlatform">
    <div class="learning-box__body-content">
      <div class="header_block">
        <div class="header_block-section" v-if="!lessonIsOpen">Секций (12); Уроков (98)</div>
        <div class="header_block-forward" v-else>
          <v-button custom-type="text" custom-style="secondary" @click="lessonToggle">
            <div style="display: flex; align-items: center">
              <v-icon src="back" style="fill: #1D2228; margin-right: 10px;"></v-icon>
              <span class="bottom__inner" style="color: #1D2228">Стартовый блок</span>
            </div>
          </v-button>
          <v-button custom-type="text" custom-style="primary">
            <div style="display: flex; align-items: center">
              <v-icon src="eye" style="fill: #ffc107; margin-right: 10px;"></v-icon>
              <span class="bottom__inner">Предпросмотр урока</span>
            </div>
          </v-button>
        </div>
      </div>

      <SectionBlock v-if="!lessonIsOpen" :lessonToggle="lessonToggle" />
      <LessonBlock v-else />

      <v-button custom-type="text" custom-style="primary" v-if="!lessonIsOpen">
        <div style="display: flex; align-items: center">
          <v-icon src="plus" style="fill: #ffc107; margin-right: 10px;"></v-icon>
          <span class="bottom__inner">Добавить секцию</span>
        </div>
      </v-button>
    </div>
  </div>
</template>

<script>
import SectionBlock from "../../components/paltform-new/SectionBlock";
import LessonBlock from "../../components/paltform-new/LessonBlock";
import VButton from "../../../../common/components/VButton";
export default {
  name: "LearningNewPlatform",
  components: {
    SectionBlock,
    LessonBlock,
    VButton
  },
  data() {
    return {
      sections: [],
      lessonIsOpen: false
    };
  },
  methods: {
    lessonToggle() {
      console.log("lessonToggle");
      this.lessonIsOpen = !this.lessonIsOpen;
    }
  }
};
</script>

<style lang="scss">
#LearningNewPlatform {
  width: 604px;
  height: 100%;
  .learning-box__body-content {
    margin-bottom: 0;
    height: 100%;
    padding-bottom: 0;
  }
  .header_block {
    margin-bottom: 20px;
    &-section {
      height: 25px;
      line-height: 25px;
      font-family: "Roboto", sans-serif;
      font-size: 14px;
      color: #9ca1ab;
    }
    &-forward {
      display: flex;
      justify-content: space-between;
    }
  }
  .bottom__inner {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
  }

  svg {
    font-size: 25px;
  }
}
</style>
