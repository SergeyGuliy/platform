<template>
  <div class="info-card__wrap">
    <div class="info-card">
      <v-button class="info-card__notification-open" custom-type="icon" custom-style="secondary" @click="showInfo">
        <span>
          <v-icon src="more"></v-icon>
        </span>
      </v-button>
      <overlay-panel :target-event="targetEvent" :style="overlayStyle">
        <div class="info-card__small-modal-row">
          <v-button custom-type="text" custom-style="secondary">
            <span class="small-modal__svg">
              <v-icon src="link" />
            </span>
            <span>Получить ссылку на курс</span>
          </v-button>
        </div>
      </overlay-panel>
      <div class="info-card__inner" @click="showDetails">
        <div class="info-card__bg">
          <img :src="card.preview.preview" alt="" />
        </div>
        <div class="info-card__body">
          <div class="info-card__title" v-html="card.name"></div>
          <div class="info-card__subtitle" v-html="card.sub_title"></div>
          <!-- <learning-card-progress-bar v-if="card.progress" :progress="card.progress">
                        <span class="info-card__progress-caption">{{card.updated_at}}</span>
                    </learning-card-progress-bar>-->
          <div class="info-card__tags">
            <v-button custom-type="label">
              {{ card.category.name }}
            </v-button>
            <!--<v-button v-for="(tag, index) of card.category"
                                  :key="index"
                                  custom-type="label"
                        >
                            {{tag.name}}
                        </v-button>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VButton from "../../../../common/components/VButton";
// import InfoCardProgressBar from "./InfoCardProgressBar";
import OverlayPanel from "../../../../common/components/OverlayPanel";
import { educationCourseDetails } from "../../services/routes/education-courses-routes-name";

export default {
  components: {
    VButton,
    // InfoCardProgressBar,
    OverlayPanel
  },
  props: {
    card: Object
  },
  data() {
    return {
      targetEvent: null,
      overlayStyle: ""
    };
  },
  methods: {
    showInfo(event) {
      this.targetEvent = event;
    },
    showDetails() {
      this.$router.push({ name: educationCourseDetails, params: { courseSlug: this.card.slug } });
    }
  }
};
</script>

<style scoped lang="scss">
.info-card__wrap {
  position: relative;
  padding: 0 16px 16px;
  width: 100%;
}

.info-card {
  position: relative;
  width: 100%;
  height: 100%;
  background: #fff;
  margin: 0;
  padding: 0;
  cursor: pointer;

  &__small-modal-row {
    .v-button {
      justify-content: flex-start;
    }
    svg {
      fill: #58606e;
      width: 100%;
      height: 100%;
    }
  }

  .overlay-panel {
    top: 40px !important;
    left: initial !important;
    right: 10px !important;
  }

  &__inner {
    overflow: hidden;
    box-shadow: 0 6px 20px rgba(57, 70, 111, 0.08), 0 1px 4px rgba(57, 70, 111, 0.06);
    border-radius: 8px;
    padding-bottom: 32px;
  }

  &__notification-open {
    max-width: 32px;
    width: 100%;
    height: 32px;
    padding: 0;
    position: absolute;
    top: 8px;
    right: 8px;
    background: #f5f7fa;
    border-radius: 6px;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      padding: 4px;
      pointer-events: none;
      svg {
        height: 100%;
        width: 100%;
      }
    }
  }

  &__bg {
    img {
      object-fit: cover;
    }
  }

  &__body {
    padding: 20px 8px 0;
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    height: 100%;
    padding: 0 8px;
    margin-bottom: -10px;

    button {
      margin-right: 16px;
      margin-bottom: 10px;
      width: auto;

      &:last-child {
        margin-bottom: 0;
        margin-right: 0;
      }
    }
  }

  &__progress-caption {
    position: absolute;
    top: 8px;
    right: 0;
    font-size: 12px;
    color: #9ca1ab;
    font-weight: 700;
    line-height: 14px;
  }

  &__title {
    max-height: 48px;
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #1d2228;
    width: 100%;
    overflow-y: hidden;
  }

  /*
                &__description {
                    max-height: 40px;
                    margin-bottom: 11px;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 20px;
                    color: #58606e;
                }*/
}
</style>
