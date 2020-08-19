<template>
  <div class="builder-tabs-block block" id="LearningMyPlatformSettings">
    <div class="small-fixed-top">
      <div class="title">
        Настройка доступа

        <div class="tooltip__bottom">
          <v-icon src="info" />
          <div class="tooltiptext">
            Здесь вы можете настроить параметры зависимости между уроками и секциями.
            <br />
            <br />
            Например: позволить пользователям просматривать “Урок 2”, если они пересмотрели “Урок 1”
          </div>
        </div>
      </div>
      <div @click="$router.back()" style="cursor: pointer">
        <v-icon class="icon" src="close"></v-icon>
      </div>
    </div>
    <div class="learning-box" id="header">
      <div class="learning-box__body">
        <div class="learning-box__body-head-wrapper">
          <div class="learning-box__body-head">
            <div style="margin-bottom: 10px">
              <div class="learning-box__body-head-title">Настройка доступа</div>
              <div class="left-buttons">
                <v-button
                  style="height: 48px;"
                  class="desktop"
                  custom-type="text"
                  custom-style="primary"
                  @click="endCreation"
                >
                  Отменить
                </v-button>
                <v-button style="height: 48px;" class="desktop" @click="submitCreation">
                  Сохранить
                </v-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="accessSettings" v-if="sectionsList">
      <p>
        Здесь вы можете настроить параметры зависимости между уроками и секциями. <br />
        Например: позволить пользователям просматривать “Урок 2”, если они пересмотрели “Урок 1
      </p>
      <div class="section" v-for="(section, sectionId) in sectionsList" :key="sectionId">
        <div class="section-head">
          <div class="section-head-left">
            <div
              class="arrow"
              :class="sectionOpenedId === sectionId ? '' : 'active'"
              @click="sectionOpenedId === sectionId ? (sectionOpenedId = null) : (sectionOpenedId = sectionId)"
            >
              <v-icon src="arrow-down"></v-icon>
            </div>
            <div class="title">Секция {{ sectionId + 1 }}</div>
          </div>
          <div class="section-head-right " v-if="sectionOpenedId !== sectionId">
            <Tooltip text="Выключить доступ к уроку" class="PlatformSettings-radio">
              <Radio v-model="section.is_active" />
            </Tooltip>
            <Tooltip text="Поделиться уроком" @click="copyLink(section.link)" class="PlatformSettings-copy">
              <v-icon src="link" style="font-size: 24px; fill: #8E99AB;" />
            </Tooltip>
          </div>
        </div>
        <div class="section-body" :class="sectionOpenedId === sectionId ? '' : 'hiden'">
          <div class="section-body-container">
            <div class="left">
              <div class="section-title">{{ section.title }}</div>
              <div
                class="dropdown"
                @click.stop="setDropdown(`section-${sectionId}`)"
                :class="dropdownSelected === `section-${sectionId}` ? '' : 'disactive'"
                v-click-outside="cleanDropdown"
              >
                <!--                <span>{{ section.requirements.sections.join(", ") }}</span>-->
                <span>{{ calcSectionString(sectionId, section.requirements.sections) }}</span>
                <v-icon src="arrow-down"></v-icon>
                <div class="dropdown__inner">
                  <div
                    class="item"
                    v-for="(item, id) in calculateSections(sectionId)"
                    :key="id"
                    :class="section.requirements.sections.filter(e => e.id === item.id).length > 0 ? '' : 'disactive'"
                    @click="select(section.requirements.sections, item)"
                  >
                    <div class="item-checkbox">
                      <div class="item-checkbox-inner">
                        <v-icon src="arrow-down" />
                      </div>
                    </div>
                    <div class="item-text">{{ item.label }}</div>
                  </div>
                </div>
              </div>
              <Tooltip text="Выключить доступ к уроку" class="PlatformSettings-radio">
                <Radio v-model="section.is_active" />
              </Tooltip>
              <Tooltip text="Поделиться уроком" @click="copyLink(section.link)" class="PlatformSettings-copy">
                <v-icon src="link" style="font-size: 24px; fill: #8E99AB;" />
              </Tooltip>
            </div>
          </div>
          <div v-for="(lesson, lessonId) in section.lessons" :key="lessonId" class="section-body-container">
            <div class="left" v-if="lesson">
              <div class="lesson">Урок {{ lessonId + 1 }}: {{ lesson.title }}</div>
              <div
                class="dropdown"
                @click.stop="setDropdown(`${sectionId}-${lessonId}`)"
                :class="dropdownSelected === `${sectionId}-${lessonId}` ? '' : 'disactive'"
                v-click-outside="cleanDropdown"
              >
                <!--                <span>{{ lesson.requirements.lessons.join(", ") }}</span>-->
                <span>{{ calcLessonsString(sectionId, lessonId, lesson.requirements.lessons) }}</span>
                <v-icon src="arrow-down"></v-icon>
                <div class="dropdown__inner">
                  <div
                    class="item"
                    v-for="(item, id) in calculateLessons(sectionId, lessonId)"
                    :key="id"
                    :class="lesson.requirements.lessons.filter(e => e.id === item.id).length > 0 ? '' : 'disactive'"
                    @click="select(lesson.requirements.lessons, item)"
                  >
                    <div class="item-checkbox">
                      <div class="item-checkbox-inner">
                        <v-icon src="arrow-down" />
                      </div>
                    </div>
                    <div class="item-text">{{ item.label }}</div>
                  </div>
                </div>
              </div>
              <Tooltip text="Выключить доступ к уроку" class="PlatformSettings-radio">
                <Radio v-model="lesson.is_active" />
              </Tooltip>
              <Tooltip text="Поделиться уроком" @click="copyLink(lesson.link)" class="PlatformSettings-copy">
                <v-icon src="link" style="font-size: 24px; fill: #8E99AB;" />
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="my-button filled save">
      Сохранить
    </button>
  </div>
</template>

<script>
import VButton from "../../../common/components/VButton";
import { api } from "../services/learning";

export default {
  name: "EducationPlatform",
  components: {
    VButton,
    Radio: () => import("../components/UI/Radio"),
    Tooltip: () => import("../components/UI/Tooltip")
  },
  data() {
    return {
      dropdownSelected: null,
      sectionOpenedId: 0,
      sectionsList: null
    };
  },

  created() {
    api.learning.sections
      .getSections()
      .then(data => {
        console.log(data.data.data);
        this.sectionsList = data.data.data;
        // this.formData = {
        //   title: data.data.general_information.title,
        //   description: data.data.general_information.description,
        //   urlVideo: data.data.general_information.video
        // };
        // this.isUpdating = true;
      })
      .catch(e => {
        console.log(e);
      });
  },
  methods: {
    calculateSections(sectionId) {
      let sections = [];
      this.sectionsList.forEach(item => {
        sections.push({
          label: item.title,
          id: item.id
        });
      });
      sections.splice(sectionId, 1);
      return sections;
    },
    calculateLessons(sectionId, lessonId) {
      let lessons = [];
      this.sectionsList[sectionId].lessons.forEach(item => {
        lessons.push({
          label: item.title,
          id: item.id
        });
      });
      lessons.splice(lessonId, 1);
      return lessons;
    },
    calcLessonsString(sectionId, lessonId, itemsSelected) {
      let lessons = [];
      let lessonsAll = this.calculateLessons(sectionId, lessonId);
      for (let item of itemsSelected) {
        lessonsAll.find((lesson, id) => {
          if (lesson.id == item.id) {
            lessons.push(`Урок ${id + 1}`);
          }
        });
      }
      return lessons.join(", ");
    },
    calcSectionString(sectionId, itemsSelected) {
      let sections = [];
      let lessonsAll = this.calculateSections(sectionId);
      for (let item of itemsSelected) {
        lessonsAll.find((section, id) => {
          if (section.id == item.id) {
            sections.push(`Секция ${id + 1}`);
          }
        });
      }
      return sections.join(", ");
    },
    select(target, inputValue) {
      if (target.filter(e => e.id === inputValue.id).length > 0) {
        let id = target.findIndex(item => {
          return item.id === inputValue.id;
        });
        target.splice(id, 1);
      } else {
        target.push(inputValue);
      }
    },

    setDropdown(type) {
      this.dropdownSelected = type;
    },
    cleanDropdown() {
      this.dropdownSelected = null;
    },

    endCreation() {
      this.openModal("Submit").then(() => {
        this.$router.push("/education/my-platform");
      });
    },
    submitCreation() {
      let sections = [];
      this.sectionsList.forEach(section => {
        let lessons = [];
        section.lessons.forEach(lesson => {
          lessons.push({
            id: lesson.id,
            is_active: lesson.is_active,
            required: lesson.requirements.lessons.map(item => item.id)
          });
        });
        sections.push({
          id: section.id,
          is_active: section.is_active,
          required: section.requirements.sections.map(item => item.id),
          lessons
        });
      });
      console.log(sections);
      api.learning.sections
        .setAccessSections({ sections })
        .then(data => {
          console.log(data);
        })
        .catch(e => {
          console.log(e);
        });

      // this.$router.push("/education/my-platform");
    },
    copyLink(val) {
      this.openModal("Share", val);
    }
  }
};
</script>
<style lang="scss">
#LearningMyPlatformSettings {
  @media (max-width: 740px) {
    margin-top: 65px;
  }
  .my-button {
    outline: none;
    height: 40px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #1d2228;
    padding: 0 10px;
  }
  .outlined {
    background: #ffffff;
    border: 1px solid #ffc107;
    border-radius: 6px;
  }
  .filled {
    background: #ffc107;
    border-radius: 6px;
  }
  .save {
    display: none;
    @media (max-width: 1025px) {
      display: block;
      width: 100%;
      margin: 40px 0;
      height: 48px !important;
    }
  }
  .small-fixed-top {
    display: none;
    @media (max-width: 630px) {
      background: #ffffff;
      width: 100%;
      height: 56px;
      position: fixed;
      top: 56px;
      left: 0;
      box-shadow: 0px 1px 4px rgba(57, 70, 111, 0.06), 0px 6px 20px rgba(57, 70, 111, 0.08);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 16px;
      z-index: 1;
      .title {
        font-family: "Roboto", sans-serif;
        font-weight: bold;
        font-size: 18px;
        line-height: 24px;
        color: #1d2228;
        display: flex;
        align-items: center;
        div {
          margin-left: 10px;
          height: 18px;
        }
      }
      .tooltip__bottom {
        position: relative;
        display: inline-block;
      }

      .tooltip__bottom .tooltiptext {
        visibility: hidden;
        width: 340px;
        height: 145px;
        background-color: #ffffff;
        border-radius: 6px;
        position: absolute;
        z-index: 1;
        top: 150%;
        left: calc(50% - 110px);
        margin-left: -60px;
        font-family: "Roboto", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        color: #1d2228;
        padding: 12px 16px;
      }

      .tooltip__bottom .tooltiptext::after {
        content: "";
        position: absolute;
        bottom: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent #ffffff transparent;
      }

      .tooltip__bottom:hover .tooltiptext {
        visibility: visible;
      }
      .icon {
        font-size: 24px;
      }
    }
  }

  .hide-small {
    @media (max-width: 850px) {
      display: none !important;
    }
  }
  .learning-box__body-head-wrapper {
    padding: 0;
  }

  .dropdown {
    box-sizing: content-box;
    border: 1px solid #ffc107;
    border-radius: 6px 6px 0 0;
    width: 47%;
    height: 40px;
    position: relative;
    display: flex;
    align-items: center;
    border-bottom: none;
    justify-content: space-between;
    cursor: pointer;
    background-color: white;
    @media (max-width: 850px) {
      flex: 1 1 auto;
      order: 3;
    }
    span {
      margin-left: 12px;
      font-family: "Roboto", sans-serif;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      color: #9ca1ab;
    }
    & > svg {
      margin-right: 10px;
      fill: #434a54;
      transform: rotate(180deg);
    }
    .dropdown__inner {
      z-index: 5;
      width: calc(100% + 2px);
      position: absolute;
      top: 39px;
      left: -1px;
      padding: 0 19px;
      background-color: #ffffff;
      border: 1px solid #ffc107;
      border-top: 1px solid #ebeff5;
      border-radius: 0 0 6px 6px;
      .item {
        height: 36px;
        display: flex;
        align-items: center;
        &-checkbox {
          height: 18px;
          width: 18px;
          border: 2px solid #ffc107;
          border-radius: 2px;
          &-inner {
            svg {
              fill: #ffc107;
            }
          }
        }
        &-text {
          margin-left: 11px;
          color: #ffc107;
          font-family: "Roboto", sans-serif;
          font-weight: 500;
          font-size: 14px;
          line-height: 24px;
        }
      }
      .item.disactive {
        .item-checkbox {
          border: 2px solid #8e99ab;
        }
        .item-text {
          color: #8e99ab;
        }
        svg {
          display: none;
        }
      }
    }
  }
  .dropdown.disactive {
    border: 1px solid #c8d1e0;
    border-radius: 6px;
    & > svg {
      transform: rotate(0deg);
    }
    .dropdown__inner {
      display: none;
    }
  }

  .PlatformSettings-radio {
    margin: 0 26px 0 32px;
    @media (max-width: 850px) {
      order: 2;
      margin: 0;
      margin-left: 18px;
    }
  }
  .PlatformSettings-copy {
    @media (max-width: 850px) {
      order: 4;
      margin-left: 18px;
    }
  }

  #accessSettings {
    p {
      width: 630px;
      font-family: "Roboto", sans-serif;
      font-size: 14px;
      line-height: 24px;
      color: #58606e;
      margin-bottom: 24px;

      @media (max-width: 740px) {
        width: 100%;
      }
    }
    .section {
      margin: 24px 0;
      width: 832px;
      background: #ffffff;
      box-shadow: 0px 1px 4px rgba(57, 70, 111, 0.06), 0px 6px 20px rgba(57, 70, 111, 0.08);
      border-radius: 8px;
      padding: 0 16px;
      @media (max-width: 1000px) {
        width: 700px;
      }
      @media (max-width: 740px) {
        width: 100%;
        margin-top: 56px;
      }
      .arrow {
        display: flex;
        align-items: center;
        svg {
          font-size: 15px;
          transform: rotate(180deg);
          fill: #ffc107;
        }
      }
      .arrow.active {
        svg {
          transform: rotate(0deg);
          fill: #434a54;
        }
      }
      &-head {
        height: 72px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &-left {
          display: flex;
          align-items: center;
          .title {
            margin-left: 15px;
            font-family: "Roboto", sans-serif;
            font-weight: bold;
            font-size: 16px;
            line-height: 24px;
            color: #1d2228;
          }
        }
        &-right {
          display: flex;
          align-items: center;
        }
      }

      &-body {
        &-container {
          border-top: 1px solid #ebeff5;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          @media (max-width: 850px) {
            height: 126px;
            align-content: center;
          }
          .left {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            @media (max-width: 850px) {
              height: 100%;
              flex-wrap: wrap;
              align-items: center;
              justify-content: space-between;
            }
            .section-title {
              padding-left: 10px;
              display: flex;
              align-items: center;
              background: #ebeff5;
              border-radius: 6px;
              height: 40px;
              width: 47%;
              font-family: "Roboto", sans-serif;
              font-style: normal;
              font-weight: 700;
              font-size: 14px;
              color: #1d2228;
              margin-right: 18px;
              @media (max-width: 850px) {
                flex: 1 1 auto;
                order: 1;
                margin-right: 0px;
              }
            }
            .lesson {
              font-family: "Roboto", sans-serif;
              width: 47%;
              font-weight: 500;
              font-size: 14px;
              line-height: 18px;
              color: #58606e;
              margin-right: 18px;
              @media (max-width: 850px) {
                flex: 1 1 auto;
                order: 1;
                margin-right: 0px;
              }
            }
          }
          .right {
          }
        }
      }
      &-body.hiden {
        overflow: hidden;
        height: 0px;
        transition: all ease 1s;
      }
    }
  }
}
</style>
