<template>
  <div class="builder-tabs-block block" id="LearningMyPlatformSettings">
    <div class="learning-box" id="header">
      <div class="learning-box__body">
        <div class="learning-box__body-head-wrapper">
          <div class="learning-box__body-head">
            <div style="margin-bottom: 10px">
              <div class="learning-box__body-head-title">{{ getHeader }}</div>
              <div class="left-buttons">
                <v-button style="height: 48px;" class="desktop" custom-type="text" custom-style="primary">
                  Отменить
                </v-button>
                <v-button style="height: 48px;" class="desktop">
                  Сохранить
                </v-button>
              </div>
            </div>
          </div>
        </div>
        <div class="platform-tabs-wrapper" v-if="tab === 'learningPlan'">
          <v-tabs :options="tabs" type="mobile" v-model="tab" />
        </div>
      </div>
    </div>
    <div id="learningPlan" v-if="tab === 'learningPlan'">
      <div class="header_block-forward" style="margin-bottom: 20px;">
        <v-button custom-type="text" custom-style="secondary">
          <div style="display: flex; align-items: center">
            <v-icon src="back" style="fill: #1D2228; font-size: 25px; margin-right: 10px;"></v-icon>
            <span class="bottom__inner" style="color: #1D2228">Стартовый блок</span>
          </div>
        </v-button>
        <v-button custom-type="text" custom-style="primary">
          <div style="display: flex; align-items: center">
            <v-icon src="eye" style="fill: #ffc107; font-size: 25px; margin-right: 10px;"></v-icon>
            <span class="bottom__inner">Предпросмотр урока</span>
          </div>
        </v-button>
      </div>
      <div class="section-footer">
        <v-radio
          name="cancel"
          :options="types"
          rules="required"
          v-model="lessonData.endData.endType"
          title="Завершение урока через:"
        />

        <v-input
          v-if="lessonData.endData.endType === 'button'"
          style="margin-top: 16px; width: 50%"
          name="telegram.login"
          title="Введите текст кнопки"
          rules="required"
          placeholder="Пример: Выполнено"
          v-model="lessonData.endData.buttonText"
          counter
          :max="14"
        />
        <v-input
          v-if="lessonData.endData.endType === 'key'"
          style="margin-top: 16px; width: 50%"
          name="telegram.login"
          title="Введите ключевое слово"
          rules="required"
          v-model="lessonData.endData.keyWord"
          counter
          :max="10"
        />
      </div>
      <div class="section-test-card" v-if="lessonData.endData.endType === 'test'">
        <div class="test-header">Тест к Уроку 1</div>
        <template v-for="(item, id) in lessonData.endData.testData">
          <div :key="id">
            <v-input
              style="margin-top: 10px; margin-bottom: 16px"
              name="telegram.login"
              title="Название теста"
              rules="required"
              placeholder="Пример: Выполнено"
              v-model="lessonData.endData.testData[id].test"
              counter
              :max="14"
            />
            <v-textarea
              style="margin-top: 16px; margin-bottom: 20px"
              title="Описание"
              name="text"
              rules="required"
              v-model="lessonData.endData.testData[id].answer"
              counter
              :max="200"
            />
          </div>
        </template>

        <v-button custom-type="text" custom-style="primary" @click="addTestData">
          <div style="display: flex; align-items: center">
            <v-icon src="plus" style="fill: #ffc107; margin-right: 10px;"></v-icon>
            <span class="bottom__inner">Добавить вопрос</span>
          </div>
        </v-button>
      </div>
    </div>
    <div id="accessSettings" v-if="tab === 'accessSettings'">
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
            <div
              class="title"
              @click="sectionOpenedId === sectionId ? (sectionOpenedId = null) : (sectionOpenedId = sectionId)"
            >
              Секция {{ sectionId + 1 }}
            </div>
          </div>
          <div class="section-head-right" v-if="sectionOpenedId !== sectionId">
            <div class="radio active">
              <div class="radio__inner" />
            </div>
            <div class="">
              <v-icon src="link" style="font-size: 24px; fill: #8E99AB;"></v-icon>
            </div>
          </div>
        </div>
        <div class="section-body" :class="sectionOpenedId === sectionId ? '' : 'hiden'">
          <div class="section-body-container">
            <div class="left">
              <div class="section">{{ section.sectionName }}</div>
              <div
                class="dropdown"
                @click="dropdownSelected = '1'"
                :class="dropdownSelected === '1' ? '' : 'disactive'"
                v-click-outside="(dropdownSelected = null)"
              >
                <span>{{ itemsSelected.join(", ") }}</span>
                <!--                <div class="dropdown__inner">-->
                <!--                  <div class="item" v-for="(item, id) in items" :key="id">-->
                <!--                    <div class="item-checkbox">-->
                <!--                      <div class="item-checkbox-inner" >-->
                <!--                        <v-icon src="arrow-down" />-->
                <!--                      </div>-->
                <!--                    </div>-->
                <!--                    <div class="item-text">{{item.label}}</div>-->
                <!--                  </div>-->
                <!--                </div>-->
              </div>
            </div>
            <div class="right section-head-right">
              <div class="radio active">
                <div class="radio__inner" />
              </div>
              <div class="">
                <v-icon src="link" style="font-size: 24px; fill: #8E99AB;"></v-icon>
              </div>
            </div>
          </div>
          <div v-for="(lesson, lessonId) in section.lessonList" :key="lessonId" class="section-body-container">
            <div class="left">
              <div class="lesson">Урок {{ lessonId + 1 }}: {{ lesson.lessonName }}</div>
            </div>
            <div class="right section-head-right">
              <div class="radio active">
                <div class="radio__inner" />
              </div>
              <div class="">
                <v-icon src="link" style="font-size: 24px; fill: #8E99AB;"></v-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="mainInfo" v-if="tab === 'mainInfo'">
      <v-input name="telegram.login" title="Заголовок" rules="required" v-model="formData.title" class="input__field" />
      <v-textarea
        name="text"
        title="Описание"
        rules="required"
        v-model="formData.description"
        class="textarea__field"
      />

      <div class="title">Промовидео для курса</div>
      <p>
        После просмотра качественного промовидео вероятность того, что студенты запишутся на ваш курс, может увеличиться
        в 5 раз. А при наличии исключительно хороших видео — даже в 10 раз.
      </p>
      <div class="block">
        <div class="left">
          <v-button custom-type="text" custom-style="primary" @click="uploadVideo" v-if="!formData.video">
            <div style="display: flex; align-items: center">
              <v-icon src="plus" style="fill: #ffc107; margin-right: 10px;"></v-icon>
              <span class="bottom__inner">Добавить видео</span>
            </div>
          </v-button>
          <div class="file-input" v-else>
            <div class="lable">Видео {{ formData.video ? `(${converterFileSize(formData.video.size)})` : "" }}</div>
            <div class="input" :class="formData.video ? 'active' : ''">
              <div class="file-name">{{ formData.video ? formData.video.name : "" }}</div>
              <div @click.stop="cleanVideo">
                <v-icon src="delete" />
              </div>
            </div>
          </div>
          <v-button custom-type="text" custom-style="primary" @click="uploadPhoto" v-if="!formData.photo">
            <div style="display: flex; align-items: center">
              <v-icon src="plus" style="fill: #ffc107; margin-right: 10px;"></v-icon>
              <span class="bottom__inner">Добавить обложку видео</span>
            </div>
          </v-button>
          <div class="file-input" v-else>
            <div class="lable">Оболожка {{ formData.photo ? `(${converterFileSize(formData.photo.size)})` : "" }}</div>
            <div class="input" :class="formData.photo ? 'active' : ''">
              <div class="file-name">{{ formData.photo ? formData.photo.name : "" }}</div>
              <div @click="cleanPhoto">
                <v-icon src="delete" />
              </div>
            </div>
          </div>

          <input
            type="file"
            accept="video/*"
            style="display: none"
            id="selectVideo"
            ref="selectVideo"
            v-on:change="uploadVideoAction"
          />
          <input
            type="file"
            accept="image/*"
            style="display: none"
            id="selectPhoto"
            ref="selectPhoto"
            v-on:change="uploadPhotoAction"
          />
        </div>
        <div class="right">
          <video
            v-show="formData.urlVideo || formData.urlPhoto"
            :poster="formData.urlPhoto"
            :src="formData.urlVideo"
            width="240px"
            controls
            id="videoBox"
          />
          <div class="right-header">
            {{ formData.video ? formData.video.name : "" }}
            <div>{{ formData.duration }}</div>
          </div>
        </div>
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
      formData: {
        title: null,
        description: null,
        video: null,
        urlVideo: null,
        photo: null,
        urlPhoto: null,
        duration: ""
      },
      dropdownSelected: null,
      items: [
        {
          label: "Урок 1",
          value: "1"
        },
        {
          label: "Урок 2",
          value: "2"
        },
        {
          label: "Урок 3",
          value: "4"
        }
      ],
      itemsSelected: ["1"],
      tab: "mainInfo",
      tabs: [
        { label: "Учебный план", value: "learningPlan" },
        { label: "Настройки доступа", value: "accessSettings" },
        { label: "Основная информация", value: "mainInfo" }
      ],
      types: [
        { label: "Кнопку", value: "button" },
        { label: "Ключевое слово", value: "key" },
        { label: "Тест", value: "test" }
      ],
      sectionOpenedId: 0,
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

      lessonData: {
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
    };
  },
  computed: {
    getHeader() {
      if (this.tab === "learningPlan") {
        return "Настройка комндного обучения";
      } else if (this.tab === "accessSettings") {
        return "Настройка доступа";
      } else {
        return "Основная информация";
      }
    }
  },
  watch: {
    "formData.urlVideo"(val) {
      if (val) {
        let vid = document.getElementById("videoBox");
        let i = setInterval(() => {
          if (vid.readyState > 0) {
            let minutes = parseInt(vid.duration / 60, 10);
            let seconds = vid.duration % 60;
            seconds = `${seconds}`.split(".")[0];
            console.log(`${minutes}:${seconds}`);
            this.formData.duration = `${minutes}:${seconds}`;
            clearInterval(i);
          }
        }, 1);
      }
    }
  },

  methods: {
    cleanPhoto() {
      if (this.formData.photo) {
        this.formData.photo = null;
        this.formData.urlPhoto = null;
      }
    },
    cleanVideo() {
      if (this.formData.video) {
        this.formData.video = null;
        this.formData.urlVideo = null;
        this.formData.duration = null;
      }
    },
    uploadVideo() {
      if (this.formData.video) return;
      document.getElementById("selectVideo").click();
    },
    uploadPhoto() {
      document.getElementById("selectPhoto").click();
    },
    async uploadVideoAction(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;

      this.formData.video = files[0];
      this.formData.urlVideo = await URL.createObjectURL(this.formData.video);
    },
    uploadPhotoAction(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;

      this.formData.photo = files[0];
      this.formData.urlPhoto = URL.createObjectURL(this.formData.photo);
    },
    converterFileSize(bytes, dp = 1) {
      const thresh = 1000;
      if (Math.abs(bytes) < thresh) {
        return bytes + " B";
      }
      const units = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
      let u = -1;
      const r = 10 ** dp;
      do {
        bytes /= thresh;
        ++u;
      } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);
      return bytes.toFixed(dp) + " " + units[u];
    },
    addTestData() {
      this.lessonData.endData.testData.push({
        test: "",
        answer: ""
      });
    },
    copyLink(val) {
      console.log(val);
      this.$copyText(val);
      this.openModal("Copy", val);
    }
  }
};
</script>
<style lang="scss">
#LearningMyPlatformSettings {
  .learning-box__body-head-wrapper {
    padding: 0;
  }
  .dropdown {
    border: 1px solid #ffc107;
    box-sizing: border-box;
    border-radius: 6px 6px 0 0;
    width: 47%;
    height: 40px;
    position: relative;
    display: flex;
    align-items: center;
    border-bottom: none;
    span {
      margin-left: 12px;
      font-family: "Roboto", sans-serif;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      color: #9ca1ab;
    }
    .dropdown__inner {
      width: 100%;
      position: absolute;
      top: 39px;
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
    }
  }
  #header {
  }
  #learningPlan {
    width: 604px;
    .header_block-forward {
      display: flex;
      justify-content: space-between;
    }
    .radio-checker-box {
      .input-box-label {
        font-family: "Roboto", sans-serif;
        font-weight: 700;
        font-size: 12px;
        line-height: 24px;
        color: #1d2228;
        margin-bottom: 8px;
      }
      .list {
        display: flex;
        li:not(:first-child) {
          margin-left: 26px;
        }
      }
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
    }
    .section {
      margin: 24px 0;
      width: 832px;
      background: #ffffff;
      box-shadow: 0px 1px 4px rgba(57, 70, 111, 0.06), 0px 6px 20px rgba(57, 70, 111, 0.08);
      border-radius: 8px;
      padding: 0 16px;
      &-head {
        height: 72px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &-left {
          display: flex;
          align-items: center;
          .title {
            cursor: pointer;
            font-family: "Roboto", sans-serif;
            font-weight: bold;
            font-size: 16px;
            line-height: 24px;
            color: #1d2228;
            margin-left: 14px;
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
        }
        &-right {
          display: flex;
          align-items: center;
          .radio {
            margin: 0 26px 0 32px;
            width: 40px;
            height: 24px;
            background: #ebeff5;
            border-radius: 48px;
            position: relative;
            transition: all ease 0.3s;
            &__inner {
              transition: all ease 0.3s;
              position: absolute;
              left: 2px;
              top: 1px;
              width: 22px;
              height: 22px;
              background: #ffffff;
              border-radius: 50%;
              box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.01),
                0px 3px 1px rgba(0, 0, 0, 0.03);
            }
          }

          .radio.active {
            background: #ffc107 !important;
            .radio__inner {
              left: 16px;
            }
          }
        }
      }

      &-body {
        &-container {
          border-top: 1px solid #ebeff5;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .left {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            .section {
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
            }
            .lesson {
              font-family: "Roboto", sans-serif;
              width: 47%;
              font-weight: 500;
              font-size: 14px;
              line-height: 18px;
              color: #58606e;
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
  #mainInfo {
    width: 604px;
    .input__field,
    .textarea__field {
      margin-bottom: 25px;
    }
    .title {
      font-family: "Roboto", sans-serif;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      color: #1d2228;
      margin-bottom: 10px;
    }
    p {
      font-family: "Roboto", sans-serif;
      font-size: 14px;
      line-height: 20px;
      color: #58606e;
      width: 520px;
    }

    svg {
      font-size: 24px;
      fill: #8e99ab;
    }
    .block {
      margin-top: 24px;
      display: flex;
      justify-content: space-between;
      @media (max-width: 630px) {
        flex-direction: column;
        .right {
          order: 0;
          video {
            min-width: 100%;
          }
        }
        .left {
          width: 100% !important;
          order: 1;
        }
      }
      .left {
        width: 336px;
        margin-right: 32px;
        .v-button {
          margin-top: 18px;
          margin-bottom: 18px;
        }
      }
      .right {
        flex: 1 1 auto;
        &-header {
          font-family: "Roboto", sans-serif;
          font-weight: 500;
          font-size: 14px;
          line-height: 24px;
          display: flex;
          align-items: center;
          color: #1d2228;
          div {
            margin-left: 10px;
            font-family: "Roboto", sans-serif;
            font-weight: 500;
            font-size: 12px;
            line-height: 14px;
            color: #58606e;
          }
        }
      }
    }
    .input-block {
      display: flex;
      align-items: flex-end;
      .form-group {
        flex: 1 1 auto;
      }
      svg {
        margin: 0 12px;
        margin-bottom: 7.5px;
      }
    }
    .file-input {
      position: relative;
      margin-bottom: 16px;
      .label {
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: #58606e;
      }
      .input {
        border: 1px solid #c8d1e0;
        box-sizing: border-box;
        border-radius: 6px;
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 12px;
        &.active {
          background-color: #f5f7fa;
          border: 1px solid #f5f7fa;
        }
        &.active .svg-icon {
          cursor: pointer;
        }
      }
    }
    .buttons-group {
      display: flex;
      margin-top: 24px;
      @media (max-width: 630px) {
        button {
          width: 48%;
          justify-content: center;
          padding: 0 !important;
        }
      }
      button {
        height: 40px;
        padding: 0 32px;
      }
      button:first-child {
        border: 1px solid #ffc107;
        color: #8b5c00;
        margin-right: 16px;
      }
    }
  }
}
</style>
