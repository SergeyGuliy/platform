<template>
  <div id="LearningMyNewPlatform">
    <div class="learning-box" v-if="headerIsVisible && !previewData">
      <div class="learning-box__body">
        <div class="learning-box__body-head-wrapper">
          <div class="learning-box__body-head">
            <div style="margin-bottom: 20px">
              <div class="learning-box__body-head-title">Учебный план</div>
              <div class="left-buttons" v-if="!lessonIsOpen">
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
    <div class="small-fixed-top">
      <div class="title">Учебный план</div>
      <div @click="endCreation()">
        <v-icon class="icon" src="close"></v-icon>
      </div>
    </div>
    <div class="block LearningMyNewPlatformMain" v-if="!previewData">
      <div class="header_block container__small">
        <div class="header_block-section" v-if="!lessonIsOpen">Секций ({{ sectionsList.length }}); Уроков (98)</div>
      </div>

      <div v-if="!lessonIsOpen" class="container__small">
        <div class="sectionBlock" v-for="(section, id) in sectionsList" :key="id">
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
            <v-input
              name="telegram.login"
              title="Название секции"
              rules="required"
              v-model="sectionsList[id].sectionName"
              counter
              :max="32"
            />
            <v-select
              name="country_id"
              title="Доступен для (мин. ранг)"
              rules="required"
              v-model="sectionsList[id].limit"
              :options="options"
            />
          </div>
          <div class="lessons" v-for="(lesson, lessonId) in section.lessonList" :key="lessonId">
            <div class="section-header">
              <div class="header-left">
                <v-icon src="drag" />
                <div class="title-block">
                  <div class="title">Урок {{ lessonId + 1 }}: {{ lesson.lessonName }}</div>
                  <div class="bottom-title" v-if="lessonId">
                    Необходимо пройти: Урок {{ -(section.lessonList.length - section.lessonList.length - lessonId) }},
                    Тест 1
                  </div>
                </div>
              </div>
              <div class="header-right">
                <div class="more" v-click-outside="cleanDropdown">
                  <div @click.stop="dropdownActive = `${id}-${lessonId}`">
                    <v-icon src="more" class="more-icon" />
                  </div>
                  <div
                    class=" more-container"
                    :class="dropdownActive === `${id}-${lessonId}` ? 'more-container-active' : ''"
                  >
                    <div class="more-container-item">
                      <button @click="editLesson(id, lessonId, lesson)">
                        <v-icon src="edit" />
                        <div>Редактировать урок</div>
                      </button>
                    </div>
                    <div class="more-container-item">
                      <button @click="previewLesson(lesson)">
                        <v-icon src="eye" />
                        <div>Предпросмотр урока</div>
                      </button>
                    </div>
                    <div class="more-container-item delete">
                      <button @click="deleteLesson(id, lessonId)">
                        <v-icon src="delete" />
                        <div>Удалить</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <v-button custom-type="text" custom-style="primary" @click="addLesson(id)" style="margin-top: 20px">
            <div style="display: flex; align-items: center">
              <v-icon src="plus" style="fill: #ffc107; margin-right: 10px;"></v-icon>
              <span class="bottom__inner">Добавить урок</span>
            </div>
          </v-button>
        </div>
      </div>
      <LessonBlock
        v-else
        :toggleHeaderStatus="toggleHeaderStatus"
        :lessonToggle="lessonToggle"
        :callBackLesson="callBackLesson"
        :editCallBackLesson="editCallBackLesson"
        :activeSectionId="activeSectionId"
        :activeLessonId="activeLessonId"
        :crossLessonId="crossLessonId"
        :crossLessonData="crossLessonData"
      />

      <v-button custom-type="text" custom-style="primary" v-if="!lessonIsOpen">
        <div style="display: flex; align-items: center">
          <v-icon src="plus" style="fill: #ffc107; margin-right: 10px;"></v-icon>
          <span class="bottom__inner" @click="addSection">Добавить секцию</span>
        </div>
      </v-button>
    </div>
    <div v-else class="container__big">
      <div class="preview-page">
        <v-button custom-type="text" custom-style="secondary" @click="previewData = null" style="margin-bottom: 40px;">
          <div style="display: flex; align-items: center">
            <v-icon src="back" style="fill: #1D2228; margin-right: 10px;"></v-icon>
            <span class="bottom__inner" style="color: #1D2228">Назад к настройкам обучения</span>
          </div>
        </v-button>
        <h2 class="preview-page-header">{{ previewData.lessonName }}</h2>

        <template v-for="(block, id) in previewData.lessonsBlocks">
          <div v-if="block.type === 'text'" class="preview-page-block" :key="id">
            <div v-html="block.data"></div>
          </div>

          <div v-else-if="block.type === 'video'" class="preview-page-block" :key="id">
            <div class="preview-page-video">
              <div class="preview-page-video-header">{{ block.data.header }}</div>
              <video
                :poster="block.data.urlPhoto"
                :src="block.data.urlVideo"
                controls
                class="preview-page-video-video"
              />
            </div>
          </div>

          <div v-else-if="block.type === 'photo'" class="preview-page-block" :key="id">
            <div class="preview-page-video">
              <img v-show="block.data.urlPhoto" :src="block.data.urlPhoto" alt="" :style="calcStyle(block.data.size)" />
            </div>
          </div>
        </template>

        <div class="preview-page-bottom-block" v-if="previewData.endData.endType === 'button'">
          <v-button style="height: 48px;" class="desktop">
            {{ previewData.endData.buttonText ? previewData.endData.buttonText : "Кнопка завершения урока" }}
          </v-button>
        </div>
        <div class="preview-page-bottom-block" v-if="previewData.endData.endType === 'key'">
          <v-input
            name="telegram.login"
            title="Название урока"
            rules="required"
            v-model="previewData.endData.keyWord"
            counter
            :max="10"
          />

          <v-button style="height: 40px; margin-left: 8px; padding: 10px 32px" class="desktop">
            Завершить
          </v-button>
        </div>
        <div class="preview-page-bottom-block" v-if="previewData.endData.endType === 'test'">
          <v-button style="height: 48px;" class="desktop">
            Пройти тест
          </v-button>
        </div>
      </div>
    </div>
    <button class="my-button filled save" v-if="headerIsVisible && !previewData">
      Сохранить и завершить
    </button>
  </div>
</template>

<script>
import LessonBlock from "../../components/paltform-new/LessonBlock";
import VButton from "../../../../common/components/VButton";
export default {
  name: "LearningMyNewPlatform",
  components: {
    LessonBlock,
    VButton
  },
  data() {
    return {
      sectionsList: [
        {
          sectionName: "Дефолтный блок",
          limit: "DT4",
          lessonList: [
            {
              lessonName: "Дефолтный урок",
              lessonsBlocks: [
                {
                  type: "text",
                  data:
                    "<p>eqwqewqwe qwe qwe qwe qw q wee qw qweq weqew qwe </p><p>qw e eqw qwe ewq eqw qwe eqw</p><p> qew qwe qewq ew qew qewq we</p><p><strong> eqwewq  ewq weq</strong></p><p><strong><u> eqw eqw qew eqw</u></strong></p><ol><li><strong><u>qw e</u></strong></li><li><strong><u> qwe</u></strong></li></ol><ul><li><strong><u> eqw</u></strong></li><li><strong><u> wqe</u></strong></li></ul>"
                },
                {
                  type: "video",
                  data: {
                    video: null,
                    photo: null,
                    header: null,
                    urlPhoto: null,
                    urlVideo: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`
                  }
                },
                {
                  type: "photo",
                  data: {
                    urlPhoto: "https://html5css.ru/css/img_fjords.jpg"
                  }
                }
              ],
              endData: {
                endType: "button",
                testData: [
                  {
                    test: "",
                    answer: ""
                  }
                ],
                keyWord: "",
                buttonText: "Базовая кнопка"
              }
            }
          ]
        },

        {
          sectionName: "Дефолтный блок",
          limit: "STAR",
          lessonList: [
            {
              lessonName: "Дефолтный урок",
              lessonsBlocks: [],
              endData: {
                endType: "button",
                testData: [
                  {
                    test: "",
                    answer: ""
                  }
                ],
                keyWord: "",
                buttonText: ""
              }
            }
          ]
        }
      ],
      lessonIsOpen: false,
      headerIsVisible: true,
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
      ],
      activeSectionId: 0,
      activeLessonId: 0,
      crossLessonData: null,
      crossLessonId: null,
      previewData: null,
      dropdownActive: null
    };
  },
  methods: {
    calcStyle(size) {
      console.log(size);
      if (size === "full") {
        return "width: 100%";
      } else if (size === "75%") {
        return `width: ${size}`;
      } else if (size === "50%") {
        return `width: ${size}`;
      } else if (size === "25%") {
        return `width: ${size}`;
      } else {
        return ``;
      }
    },
    deleteLesson(sectionId, lessonId) {
      this.openModal("DeleteLesson")
        .then(() => {
          this.sectionsList[sectionId].lessonList.splice(lessonId, 1);
        })
        .catch(() => {});
    },
    editLesson(sectionId, lessonId, data) {
      this.crossLessonData = data;
      this.crossLessonId = `${sectionId}-${lessonId}`;
      this.lessonIsOpen = true;
    },
    previewLesson(data) {
      this.previewData = data;
    },
    cleanDropdown() {
      this.dropdownActive = null;
    },
    addSection() {
      this.sectionsList.push({
        sectionName: "",
        limit: "",
        lessonList: []
      });
    },
    deleteSection(id) {
      this.openModal("DeleteSection")
        .then(() => {
          this.sectionsList.splice(id, 1);
        })
        .catch(() => {});
    },
    toggleHeaderStatus() {
      this.headerIsVisible = !this.headerIsVisible;
    },
    endCreation() {
      this.openModal("Submit").then(() => {
        this.$router.back();
      });
    },
    callBackLesson(sectionId, lessonId, lessonData) {
      this.sectionsList[sectionId].lessonList.push(lessonData);
      this.lessonIsOpen = !this.lessonIsOpen;
      this.crossLessonId = null;
      this.crossLessonData = null;
      this.activeLessonId = null;
      this.activeSectionId = null;
    },
    editCallBackLesson(ids, lessonData) {
      this.sectionsList[ids.split("-")[0]].lessonList[ids.split("-")[1]] = lessonData;
      this.lessonIsOpen = !this.lessonIsOpen;
      this.crossLessonId = null;
      this.crossLessonData = null;
      this.activeLessonId = null;
      this.activeSectionId = null;
    },
    addLesson(id) {
      this.activeSectionId = id;
      this.activeLessonId = this.sectionsList[id].lessonList.length;
      this.lessonIsOpen = true;
    },
    lessonToggle() {
      this.lessonIsOpen = !this.lessonIsOpen;
    }
  }
};
</script>

<style lang="scss">
/*Не подключал шрифты потому что у меня большое подозрениее что в части проэкта которая у меня отсутствует они подключены.*/
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
#LearningMyNewPlatform {
  @media (max-width: 630px) {
    margin-top: 56px;
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
      }
      .icon {
        font-size: 24px;
      }
    }
  }
  .save {
    display: none;
    @media (max-width: 630px) {
      display: block;
      width: 100%;
      margin: 40px 0;
      height: 48px !important;
    }
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
  .container__small {
    width: 604px;
    @media (max-width: 630px) {
      width: 100%;
    }
  }
  .container__big {
    width: 80%;
    margin: 0 auto;
    @media (max-width: 630px) {
      width: 100%;
    }
    .preview-page {
      &-bottom-block {
        display: flex;
        align-items: flex-end;
      }
      &-header {
        margin-bottom: 22px;
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        font-size: 44px;
        line-height: 44px;
        color: #1d2228;
      }
      .preview-page-block {
        margin-bottom: 64px;
        p,
        li {
          margin-bottom: 5px;
          font-family: "Roboto", sans-serif;
          font-size: 20px;
          line-height: 32px;
          color: #1d2228;
        }
      }
      .preview-page-video {
        &-header {
          font-family: "Roboto", sans-serif;
          font-weight: bold;
          font-size: 28px;
          line-height: 40px;
          color: #1d2228;
          margin-bottom: 24px;
        }
        &-video {
          width: 100%;
        }
      }
      video,
      img {
        border-radius: 8px;
      }
    }
  }
  .sectionBlock {
    background: #ffffff;
    box-shadow: 0px 1px 4px rgba(57, 70, 111, 0.06), 0px 6px 20px rgba(57, 70, 111, 0.08);
    border-radius: 8px;
    padding: 28px 18px;
    margin-bottom: 28px;
    @media (max-width: 630px) {
      padding: 28px 8px;
    }
    .more {
      position: relative;
      &-icon {
        cursor: pointer;
      }
      &-container {
        z-index: 1;
        bottom: 0;
        left: 0px;
        width: 0px;
        height: 0px;
        overflow: hidden;
        transition: bottom 1s ease;
        .delete {
          button div {
            color: #f65844 !important;
          }
          svg,
          use,
          path {
            fill: #f65844 !important;
          }
        }
        &-item {
          height: 33%;
          display: flex;
          align-items: center;
          button {
            width: 100%;
            height: 100%;
            padding-left: 8px;
            display: flex;
            align-items: center;
            outline: none;
            border: none;
            div {
              font-family: "Roboto", sans-serif;
              font-weight: 500;
              font-size: 16px;
              line-height: 24px;
              color: #1d2228;
            }
          }
          svg {
            margin: 0 11px;
            fill: #8e99ab;
          }
        }
      }
      &-container-active {
        transition: bottom 0.3s ease;
        position: absolute;
        bottom: -132px;
        left: -300px;
        width: 312px;
        height: 144px;
        background: #ffffff;
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.08), 0px 0px 56px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
      }
    }

    .section-header {
      display: flex;
      justify-content: space-between;
      height: 24px;
      align-items: center;
      margin-bottom: 16px;
      svg,
      use,
      path {
        fill: #8e99ab;
      }
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
      }
      @media (max-width: 630px) {
        flex-direction: column;
        .form-group {
          width: 100% !important;
          margin-right: 16px;
        }
        .form-group:first-child {
          margin-bottom: 16px;
        }
      }
    }
    .lessons {
      width: 100%;
      height: 56px;
      padding: 0;
      border-top: 1px solid #ebeff5;
      .section-header {
        width: 100%;
        margin-bottom: 0;
        svg,
        use,
        path {
          fill: #8e99ab;
        }
      }
      .title-block {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .bottom-title {
          margin-top: 6px;
          margin-left: 8px;
          font-family: "Roboto", sans-serif;
          font-size: 12px;
          line-height: 14px;
          color: #58606e;
        }
      }
    }
  }

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
  .LearningMyNewPlatformMain {
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
  .form-group .vs__dropdown-toggle {
    height: 40px;
    .v-select,
    .vs__selected-options {
      height: 40px;
    }
    #vs1__combobox {
      height: 40px;
    }
    .vs__selected-options {
    }
    input {
      border: none;
    }
    .vs__selected {
      bottom: 8px;
      left: 12px;
      background-color: white;
      font-family: "Roboto", sans-serif;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      color: #1d2228;
      padding: 0;
      margin: 0;
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
</style>
