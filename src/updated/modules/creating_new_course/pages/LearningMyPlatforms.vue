<template>
  <div class="builder-tabs-block block" id="LearningMyPlatform">
    <div class="learning-box__body-content">
      <div class="learn-course__header">
        <div class="learn-course__header-text-title" v-if="headerData.title">
          {{ headerData.title }}
          <span @click="$router.push({ name: 'educationNewPlatformMainInfo' })">
            <v-icon src="edit"></v-icon>
          </span>
        </div>
        <div class="learn-course__header-text-wrapper">
          <div class="learn-course__header-text">
            <div class="learn-course__header-text-subtitle" v-html="headerData.description"></div>
            <div class="learn-course__header-text-start">
              <v-button class="desktop" @click="$router.push({ name: 'educationNewPlatform' })">
                Управление учебным планом
              </v-button>
              <v-button
                custom-type="text"
                custom-style="primary"
                @click="$router.push({ name: 'educationNewPlatformSettings' })"
              >
                <div style="display: flex; align-items: center">
                  <v-icon src="settings" style="margin-right: 10px;"></v-icon>
                  <span class="bottom__inner">Настройка доступа</span>
                </div>
              </v-button>
            </div>
          </div>
          <div class="learn-course__header-video" v-if="headerData.video">
            <video :src="headerData.video.url" poster="../../../../assets/images/base-photo3.png" controls></video>
          </div>
        </div>
        <v-button class="tablet" @click="$router.push({ name: 'educationNewPlatform' })">
          Управление учебным планом
        </v-button>
      </div>
    </div>
    <PlatformPreview v-if="accordion.items.length > 0" :items="accordion.items" />
  </div>
</template>

<script>
import VButton from "../../../common/components/VButton";
import PlatformPreview from "../components/paltform-new/PlatformPreview";
import { api } from "../services/learning";

export default {
  name: "EducationPlatform",
  components: {
    VButton,
    PlatformPreview
  },
  data() {
    return {
      headerData: {},
      accordion: {
        title: "Учебный план",
        subtitle: "Уроков (12); Тестов (2); Всего (7 ч., 18 мин.)",
        items: []
      }
    };
  },
  async created() {
    await api.learning.tutorial
      .getTutorial()
      .then(data => {
        console.log(data.data.learning_plan);
        this.headerData = data.data.general_information;
        this.accordion.items = data.data.learning_plan.sections;
      })
      .catch(e => {
        console.log(e);
      });
  }
};
</script>
<style lang="scss">
.learning-box__body-head-title {
  @media (max-width: 769px) {
    display: none;
  }
}
#LearningMyPlatform {
  .learn-course__header-text-title {
    margin-bottom: 20px;
  }
  .learn-course__header-text {
    width: 80%;
    .learn-course__header-text-subtitle {
      width: 50%;
      @media (max-width: 1500px) {
        width: 100%;
      }
      @media (max-width: 1024px) {
        width: 100%;
      }
    }
  }
  .curriculum__item {
    svg {
      font-size: 24px;
      order: 0;
      fill: #8e99ab;
      margin: 5px 14px 0 0;
    }
  }
  .active-block,
  .curriculum__item-title {
    padding-right: 18px;

    .lessons {
      padding-right: 0;
    }
  }
  .curriculum__item-title .icon-ok-yellow {
    margin: 0;
    margin-left: 25px;
    font-size: 40px;
    height: 22px;
    transform: rotate(0deg) !important;
  }
  .link {
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      fill: #434a54 !important;
      margin: 0;
      margin-left: 25px;
      font-size: 25px;
    }
  }
  .lesson-duration {
    text-align: center;
    line-height: 25px;
  }
  .learn-course__header-text-title {
    display: flex;
    align-items: center;
    span {
      background: #f5f7fa;
      border-radius: 6px;
      margin: 0;
      margin-left: 35px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      @media (max-width: 769px) {
        display: none;
      }
    }
  }

  .learn-course__header-text-start {
    display: flex;
    button {
      width: auto;
    }
    button:first-child {
      margin-right: 25px;
      svg {
        font-size: 22px;
        fill: #ffc107;
      }
    }
    button:last-child {
      @media (max-width: 1026px) {
        display: none;
      }
      svg,
      use,
      path {
        font-size: 22px;
        fill: #ffc107;
      }
    }
  }
  .quantity-lessons {
    @media (max-width: 769px) {
      display: none;
    }
  }
}
</style>
