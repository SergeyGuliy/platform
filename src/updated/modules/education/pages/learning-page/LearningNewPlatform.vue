<template>
  <div id="LearningNewPlatform">
    <div class="learning-box" v-if="headerIsVisible">
      <div class="learning-box__body">
        <div class="learning-box__body-head-wrapper">
          <div class="learning-box__body-head">
            <div style="margin-bottom: 20px">
              <div class="learning-box__body-head-title">Учебный план</div>
              <div class="left-buttons">
                <v-button
                  style="height: 48px;"
                  class="desktop"
                  @click="endCreation()"
                  custom-type="text"
                  custom-style="primary"
                >
                  Отменить
                </v-button>
                <v-button style="height: 48px;" class="desktop">
                  Сохранить и завершить
                </v-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="builder-tabs-block block LearningNewPlatformMain">
      <div class="header_block">
        <div class="header_block-section" v-if="!lessonIsOpen">Секций (12); Уроков (98)</div>
      </div>

      <SectionBlock v-if="!lessonIsOpen" :lessonToggle="lessonToggle" />
      <LessonBlock v-else :toggleHeaderStatus="toggleHeaderStatus" :lessonToggle="lessonToggle" />

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
      lessonIsOpen: false,
      headerIsVisible: true
    };
  },
  methods: {
    toggleHeaderStatus() {
      this.headerIsVisible = !this.headerIsVisible;
    },
    endCreation() {
      this.openModal("Submit").then(() => {
        this.$router.back();
      });
    },
    lessonToggle() {
      this.lessonIsOpen = !this.lessonIsOpen;
    }
  }
};
</script>

<style lang="scss">
#LearningNewPlatform {
  .learning-box__body-head-wrapper {
    padding: 0;
  }
  .learning-box__body-head > div {
    display: flex;
    justify-content: space-between;
  }
  .left-buttons {
    display: flex;
    button:first-child {
      margin-right: 24px;
    }
  }
  .LearningNewPlatformMain {
    width: 604px;
    height: 100%;
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
}
</style>
