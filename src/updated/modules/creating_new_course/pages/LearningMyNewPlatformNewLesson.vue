<template>
  <div id="LearningMyNewPlatform">
    <div class="block LearningMyNewPlatformMain">
      <LessonBlock
        v-if="serverLessonData"
        :sectionServerId="sectionServerId"
        :lessonServerId="lessonServerId"
        :serverLessonData="serverLessonData"
      />
    </div>
  </div>
</template>

<script>
import LessonBlock from "../components/paltform-new/LessonBlock";
import { api } from "../services/learning";

export default {
  name: "LearningMyNewPlatform",
  components: {
    LessonBlock
  },
  created() {
    this.sectionServerId = this.$route.params.id.split("-")[0];
    this.lessonServerId = this.$route.params.id.split("-")[1];
    api.learning.lessons
      .getLessonById(this.sectionServerId, this.lessonServerId)
      .then(data => {
        console.log(data.data.data);
        this.serverLessonData = data.data.data;
      })
      .catch(e => {
        console.log(e);
      });
  },
  data() {
    return {
      sectionServerId: null,
      lessonServerId: null,
      serverLessonData: null
    };
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
