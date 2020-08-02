<template>
  <div class="learning-box">
    <div class="learning-box__body">
      <div class="learning-box__body-head-wrapper">
        <div class="learning-box__body-head" v-if="$route.name !== 'educationNewPlatform'">
          <div class="learning-box__body-head-title">Обучение</div>
          <div class="platform-tabs-wrapper">
            <v-tabs :options="tabs" type="mobile" v-model="tab" @click="actionHandler" />
          </div>
        </div>
        <div class="learning-box__body-head" v-else>
          <div>
            <div class="learning-box__body-head-title">Учебный план</div>
            <div class="left-buttons">
              <v-button
                class="desktop"
                @click="$router.push({ name: 'educationNewPlatform' })"
                custom-type="text"
                custom-style="primary"
              >
                Отменить
              </v-button>
              <v-button class="desktop" @click="$router.push({ name: 'educationNewPlatform' })">
                Сохранить и завершить
              </v-button>
            </div>
          </div>
        </div>
        <router-view v-preloader="loading"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import {
  educationAllCourses,
  educationTeam,
  educationPlatform
} from "../../services/routes/education-courses-routes-name";
import { preloaderDirective } from "../../../../directives/preloader";
import VButton from "../../../../common/components/VButton";

export default {
  name: "Education",
  directives: {
    preloader: preloaderDirective
  },
  components: {
    VButton
  },
  data() {
    return {
      loading: false,
      tab: this.$route.name,
      tabs: [
        { label: "Платформа", value: educationPlatform },
        { label: "Командные", value: educationTeam },
        { label: "Все курсы", value: educationAllCourses }
      ]
    };
  },
  methods: {
    actionHandler(tab) {
      this.$router.push({ name: tab });
    }
  }
};
</script>

<style lang="scss">
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
</style>
