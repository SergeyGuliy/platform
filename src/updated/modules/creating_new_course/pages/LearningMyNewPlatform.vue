<template>
  <div id="LearningMyNewPlatform">
    <div class="learning-box">
      <div class="learning-box__body">
        <div class="learning-box__body-head-wrapper">
          <div class="learning-box__body-head">
            <div style="margin-bottom: 20px">
              <div class="learning-box__body-head-title">Учебный план</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="small-fixed-top">
      <div class="title">Учебный план</div>
    </div>
    <div class="block LearningMyNewPlatformMain">
      <div class="header_block container__small">
        <div class="header_block-section" v-if="sectionsList">
          Секций ({{ sectionsList.length }}); Уроков ({{ totalLessons }})
        </div>
      </div>

      <div class="container__small">
        <v-draggable-provider
          v-if="sectionsList"
          v-model="sectionsList"
          name="sections"
          @change="moveSection(sectionsList)"
        >
          <div v-for="(section, id) in sectionsList" :key="id">
            <div class="sectionBlock">
              <div class="section-header">
                <div class="header-left" style="cursor: grab">
                  <v-icon src="drag" />
                  <div class="title">Секция {{ id + 1 }}</div>
                </div>
                <div class="header-right">
                  <div @click="deleteSection(id)" style="cursor: pointer">
                    <v-icon src="delete" />
                  </div>
                </div>
              </div>
              <div class="section-body">
                <v-input
                  name="telegram.login"
                  title="Название секции"
                  rules="required"
                  v-model="section.title"
                  counter
                  :max="32"
                  @input="changeSectionTitle(id, section.title, section.requirements.min_rank)"
                />
                <v-select
                  name="country_id"
                  title="Доступен для (мин. ранг)"
                  rules="required"
                  v-model="section.requirements.min_rank"
                  :options="options"
                  @input="changeSectionTitle(id, section.title, section.requirements.min_rank)"
                />
              </div>
              <v-draggable-provider
                name="lessons"
                v-model="section.lessons"
                @change="moveLesson(section.lessons, section.id)"
              >
                <div class="lessons" v-for="(lesson, lessonId) in section.lessons" :key="lessonId">
                  <div class="section-header">
                    <div class="header-left">
                      <v-icon src="drag" style="cursor: grab" />
                      <div class="title-block">
                        <div class="title">Урок {{ lessonId + 1 }}: {{ lesson.title }}</div>
                        <div class="bottom-title" v-if="lesson.requirements.lessons.length > 0">
                          Необходимо пройти: {{ lesson.requirements.lessons.map(item => item.title).loin(", ") }}
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
                            <button @click="editLessonActivate(section.id, lesson.id)">
                              <v-icon src="edit" />
                              <div>Редактировать урок</div>
                            </button>
                          </div>
                          <div class="more-container-item">
                            <button @click="showPreview(lesson)">
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
              </v-draggable-provider>
              <v-button
                custom-type="text"
                custom-style="primary"
                @click="addLesson(id, section.id)"
                style="margin-top: 20px"
              >
                <div style="display: flex; align-items: center">
                  <v-icon src="plus" style="fill: #ffc107; margin-right: 10px;"></v-icon>
                  <span class="bottom__inner">Добавить урок</span>
                </div>
              </v-button>
            </div>
          </div>
        </v-draggable-provider>
      </div>
      <v-button custom-type="text" custom-style="primary">
        <div style="display: flex; align-items: center">
          <v-icon src="plus" style="fill: #ffc107; margin-right: 10px;"></v-icon>
          <span class="bottom__inner" @click="addSection">Добавить секцию</span>
        </div>
      </v-button>
    </div>
  </div>
</template>

<script>
import VButton from "../../../common/components/VButton";
import Draggable from "vuedraggable";
import { api } from "../services/learning";

export default {
  name: "LearningMyNewPlatform",
  components: {
    VButton,
    "v-draggable-provider": Draggable
  },
  created() {
    api.learning.sections
      .getSections()
      .then(data => {
        console.warn(data.data.data);
        this.sectionsList = data.data.data;
      })
      .catch(e => {
        console.log(e);
      });
  },
  computed: {
    totalLessons() {
      let lessons = 0;
      this.sectionsList.forEach(section => {
        lessons += section.lessons.length;
      });
      return lessons;
    }
  },
  data() {
    return {
      sectionsList: null,
      options: [
        {
          value: 1,
          label: "R"
        },
        {
          value: 2,
          label: "AM"
        },
        {
          value: 3,
          label: "SM"
        },
        {
          value: 4,
          label: "M"
        },
        {
          value: 5,
          label: "ME"
        },
        {
          value: 6,
          label: "STAR"
        },
        {
          value: 7,
          label: "1S"
        },
        {
          value: 8,
          label: "2S"
        },
        {
          value: 9,
          label: "DS"
        },
        {
          value: 10,
          label: "DT"
        },
        {
          value: 11,
          label: "DT1"
        },
        {
          value: 12,
          label: "DT2"
        },
        {
          value: 13,
          label: "DT3"
        },
        {
          value: 14,
          label: "DT4"
        },
        {
          value: 15,
          label: "DT5"
        }
      ],
      dropdownActive: null
    };
  },
  methods: {
    showPreview(data) {
      this.$store.commit("newCourse/SET_PREVIEW_DATA", data);
      this.$router.push({ name: "educationNewPlatformPreview" });
    },
    cleanDropdown() {
      this.dropdownActive = null;
    },

    moveLesson(lessons, sectionId) {
      let lessonsOrder = { ids: lessons.map(lesson => +lesson.id) };
      api.learning.lessons
        .reorderLessons(sectionId, lessonsOrder)
        .then(data => {
          console.log(data.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    moveSection(sections) {
      let sectionsOrder = { ids: sections.map(section => +section.id) };
      api.learning.sections
        .reorderSections(sectionsOrder)
        .then(data => {
          console.log(data.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    changeSectionTitle(sectionId, title, min_rank) {
      let data = {
        title: title,
        access_rank_id: min_rank
      };
      console.log(this.sectionsList[sectionId]);
      console.log(data);
      api.learning.sections
        .changeSection(this.sectionsList[sectionId].id, this.sectionsList[sectionId])
        .then(data => {
          console.log(data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    addSection() {
      api.learning.sections
        .createSection({ title: "Новая секция", is_active: true, finish_type: {} })
        .then(data => {
          console.log(data.data);
          this.sectionsList.push({
            ...data.data.data,
            finish: {}
          });
        })
        .catch(e => {
          console.log(e.data.message);
        });
    },
    deleteSection(id) {
      console.log(this.sectionsList[id].id);
      this.openModal("DeleteSection")
        .then(() => {
          console.log(this.sectionsList[id].id);
          api.learning.sections
            .deleteSection(this.sectionsList[id].id)
            .then(data => {
              console.log(data);
              this.sectionsList.splice(id, 1);
            })
            .catch(e => {
              console.error("ERROR WHILE DELETING SECTION");
              console.error(e);
            });
        })
        .catch(() => {});
    },
    addLesson(id, sectionServerId) {
      api.learning.lessons
        .createLesson(this.sectionsList[id].id, { title: "Новый урок", is_active: true })
        .then(data => {
          console.log(data.data.data);
          this.sectionsList[id].lessons.push(data.data.data);
          this.editLessonActivate(sectionServerId, data.data.data.id);
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteLesson(sectionId, lessonId) {
      this.openModal("DeleteLesson")
        .then(() => {
          api.learning.lessons
            .deleteLesson(this.sectionsList[sectionId].id, this.sectionsList[sectionId].lessons[lessonId].id)
            .then(data => {
              console.log(data.data);
              this.sectionsList[sectionId].lessons.splice(lessonId, 1);
            })
            .catch(e => {
              console.error("ERROR WHILE DELETING LESSON");
              console.error(e);
            });
        })
        .catch(() => {});
    },
    editLessonActivate(sectionServerId, lessonServerId) {
      let crossLessonId = `${sectionServerId}-${lessonServerId}`;
      this.$router.push({ name: "educationNewPlatformNewLesson", params: { id: crossLessonId } });
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
  .container__small {
    width: 604px;
    @media (max-width: 630px) {
      width: 100%;
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
        opacity: 0;
        transition: opacity 1s ease;
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
        opacity: 1;
        transition: opacity 0.3s ease;
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
}
</style>
