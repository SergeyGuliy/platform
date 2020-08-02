<template>
  <div class="statistics-analitics-block block-tab" style="display: block">
    <div class="builder-box__body-title">
      <div class="create-course-box__body-title-name size-sm">Личные</div>
    </div>
    <div class="statistics-analitics-block-conteiner">
      <div class="statistics-analitics-block-account-wrapper">
        <div class="statistics-analitics-block-account-conteiner">
          <label>
            <input type="radio" name="analitic-personal" checked />
            <div class="profile-tabs-block-account">
              <div class="profile-tabs-block-account-title">Регистраций</div>
              <div class="profile-tabs-block-account-content">
                <div class="profile-tabs-block-account-content-item">{{ total }}</div>
                <div class="stastistic-item-percentage">
                  <!--                                    <v-icon src="up-green" />-->
                  <!--                                    11.4%-->
                </div>
                <div class="info-box">
                  <button type="button">
                    <v-icon src="more-variable" />
                  </button>
                </div>
              </div>
            </div>
          </label>
        </div>
        <div class="statistics-analitics-block-account-conteiner">
          <label>
            <input type="radio" name="analitic-personal" />
            <div class="profile-tabs-block-account">
              <div class="profile-tabs-block-account-title">Активаций</div>
              <div class="profile-tabs-block-account-content">
                <div class="profile-tabs-block-account-content-item">0</div>
                <div class="stastistic-item-percentage"></div>
              </div>
              <div class="info-box">
                <button type="button">
                  <v-icon src="more-variable" />
                </button>
              </div>
            </div>
          </label>
        </div>
      </div>

      <home-analytics-table :data="data" />
    </div>
  </div>
</template>

<script>
import HomeAnalyticsTable from "./HomeAnalyticsTable";
export default {
  name: "home-analytics-personal",
  components: { HomeAnalyticsTable },
  props: ["data", "total"],
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {}
};
</script>
