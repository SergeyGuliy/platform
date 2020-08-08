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
          <div class="learn-course__header-video">
            <video :src="headerData.video_id" poster="../../../../../assets/images/base-photo3.png" controls></video>
          </div>
        </div>
        <v-button class="tablet" @click="$router.push({ name: 'educationNewPlatform' })">
          Управление учебным планом
        </v-button>
      </div>
    </div>
    <div class="curriculum__body">
      <div class="curriculum__list">
        <div class="curriculum__list-header">
          <div class="curriculum__list-header-title" v-if="accordion && accordion.title">{{ accordion.title }}</div>
        </div>
        <template v-if="accordion && accordion.items">
          <div
            v-for="(item, index) in accordion.items"
            :key="index"
            :class="`curriculum__item ${item.locked ? 'curriculum__item-disabled' : ''}`"
          >
            <div
              :class="`curriculum__item-title ${show === index ? 'open-plan' : ''}`"
              @click="show === index ? (show = null) : (show = index)"
            >
              <v-icon src="arrow-down" />
              <div class="theme-courses">{{ item.title }}</div>
              <div class="quantity-lessons">{{ item.childs.length }} уроков</div>
              <div class="lesson-duration">{{ item.duration }}</div>

              <div class="link">
                <v-icon v-if="item.locked" src="locked" />
                <v-icon v-else-if="item.icon" :src="item.icon" />
                <div v-else style="width: 65px; height: 1px"></div>
              </div>

              <div class="link"></div>
              <div class="link" @click.stop="copyLink(item.link)">
                <v-icon src="link"></v-icon>
              </div>
            </div>
            <div :class="`curriculum__item-content ${show === index ? 'active-block' : ''}`">
              <template v-if="item.childs">
                <div v-for="(child, child_index) in item.childs" :key="child_index" class="lessons">
                  <div class="number-lessons" v-if="child.number">{{ child.number }}</div>
                  <div class="theme-lessons" v-if="child.title">
                    {{ child.title }}
                  </div>
                  <v-icon v-if="child.icon" :src="child.icon" />
                  <div class="link" @click.stop="copyLink(item.link)">
                    <v-icon src="link"></v-icon>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import VButton from "../../../../common/components/VButton";

export default {
  name: "EducationPlatform",
  components: {
    VButton
  },
  data() {
    return {
      show: null,
      headerData: {},
      accordion: {
        title: "Учебный план",
        subtitle: "Уроков (12); Тестов (2); Всего (7 ч., 18 мин.)",
        items: [
          {
            title: "О платформе",
            duration: "03:36",
            link: "https://internet-platform.ru/register/2a0",
            icon: "ok-yellow",
            locked: false,
            childs: [
              {
                number: 1,
                title: "Что такое платформа?",
                subtitle: "Video - 02:36 min.",
                icon: "ok-yellow",
                link: "https://internet-platform.ru/register/2a0",
                locked: false
              },
              {
                number: 2,
                title: "Introduction to the Course",
                subtitle: "Video - 02:36 min.",
                icon: "load",
                link: "https://internet-platform.ru/register/2a0",
                locked: false
              }
            ]
          },
          {
            title: "70 балов",
            duration: "03:36",
            link: "https://internet-platform.ru/register/2a0",
            locked: false,
            childs: [
              {
                number: 1,
                title: "Что такое платформа?",
                subtitle: "Video - 02:36 min.",
                icon: "ok-yellow",
                link: "https://internet-platform.ru/register/2a0",
                locked: false
              },
              {
                number: 2,
                title: "Introduction to the Course",
                subtitle: "Video - 02:36 min.",
                icon: "load",
                link: "https://internet-platform.ru/register/2a0",
                locked: false
              }
            ]
          },
          {
            title: "Работа в VK",
            quantity: "8 уроков",
            duration: "03:36",
            link: "https://internet-platform.ru/register/2a0",
            locked: false,
            childs: [
              {
                number: 1,
                title: "Что такое платформа?",
                subtitle: "Video - 02:36 min.",
                icon: "ok-yellow",
                link: "https://internet-platform.ru/register/2a0",
                locked: false
              },
              {
                number: 2,
                title: "Introduction to the Course",
                subtitle: "Video - 02:36 min.",
                icon: "load",
                link: "https://internet-platform.ru/register/2a0",
                locked: false
              }
            ]
          },
          {
            title: "Работа в Instagram",
            quantity: "8 уроков",
            duration: "03:36",
            link: "https://internet-platform.ru/register/2a0",
            locked: false,
            childs: [
              {
                number: 1,
                title: "Что такое платформа?",
                subtitle: "Video - 02:36 min.",
                icon: "ok-yellow",
                link: "https://internet-platform.ru/register/2a0",
                locked: false
              },
              {
                number: 2,
                title: "Introduction to the Course",
                subtitle: "Video - 02:36 min.",
                icon: "load",
                link: "https://internet-platform.ru/register/2a0",
                locked: false
              }
            ]
          },
          {
            title: "Работа в Facebook",
            quantity: "8 уроков",
            duration: "03:36",
            link: "https://internet-platform.ru/register/2a0",
            locked: false,
            childs: [
              {
                number: 1,
                title: "Что такое платформа?",
                subtitle: "Video - 02:36 min.",
                icon: "ok-yellow",
                link: "https://internet-platform.ru/register/2a0",
                locked: false
              },
              {
                number: 2,
                title: "Introduction to the Course",
                subtitle: "Video - 02:36 min.",
                icon: "load",
                link: "https://internet-platform.ru/register/2a0",
                locked: false
              }
            ]
          },
          {
            title: "Звонок",
            quantity: "8 уроков",
            duration: "03:36",
            locked: true,
            link: "https://internet-platform.ru/register/2a0",
            childs: [
              {
                number: 1,
                title: "Что такое платформа?",
                subtitle: "Video - 02:36 min.",
                icon: "ok-yellow",
                link: "https://internet-platform.ru/register/2a0",
                locked: false
              },
              {
                number: 2,
                title: "Introduction to the Course",
                subtitle: "Video - 02:36 min.",
                icon: "load",
                link: "https://internet-platform.ru/register/2a0",
                locked: false
              }
            ]
          }
        ]
      }
    };
  },
  async created() {
    await this.$api.learning.tutorial
      .getTutorial()
      .then(data => {
        this.headerData = data.data.general_information;
      })
      .catch(e => {
        console.log(e);
      });
  },
  methods: {
    copyLink(val) {
      console.log(val);
      this.$copyText(val);
      this.openModal("Copy", val);
    }
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
  .learn-course__header-text {
    width: 80%;
    .learn-course__header-text-subtitle {
      width: 50%;
      @media (max-width: 910px) {
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
