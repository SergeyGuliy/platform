<template>
  <div class="builder-tabs-block block block2" style="display: block">
    <div class="statistics-analitics-wrapper mt88">
      <div class="statistics-analitics-buttons-calendar-wrapper">
        <div class="statistics-indicators-title">Аналитика</div>
        <div class="statistics-analitics-buttons-calendar">
          <div class="statistics-analitics-buttons">
            <button
              type="button"
              :class="`statistics-btn ${currentTotal === 'today' ? 'statistics-btn-active' : ''}`"
              @click="to_total('today')"
            >
              Сегодня
            </button>
            <button
              type="button"
              :class="`statistics-btn ${currentTotal === 'yesterday' ? 'statistics-btn-active' : ''}`"
              @click="to_total('yesterday')"
            >
              Вчера
            </button>
            <button
              type="button"
              :class="`statistics-btn ${currentTotal === 'this_month' ? 'statistics-btn-active' : ''}`"
              @click="to_total('this_month')"
            >
              Месяц
            </button>
          </div>
          <div class="statistics-analitics-calendar">
            <!--                        <input type="text" class="datepicker-here">-->
            <v-date-picker
              v-model="date"
              mode="range"
              :masks="{ title: 'DD.MM.YYYY', data: 'DD.MM.YYYY' }"
              :popover="{ placement: 'left', visibility: 'click' }"
            >
              <button type="button"><v-icon src="calendar" /></button>
            </v-date-picker>
          </div>
        </div>
      </div>
      <div class="builder-content-tabs statistic-tabs-desk-visible">
        <ul class="statistic-tabs-nav">
          <li v-for="t in tabs">
            <a
              href="javascript://"
              @click="tab = t.value"
              :class="`statistic-tabs-link ${t.value === tab ? 'current-link' : ''}`"
              >{{ t.label }}</a
            >
          </li>
        </ul>
      </div>
      <home-analytics-general :total="total" :data="data" v-if="tab === TAB_GENERAL" />
      <home-analytics-personal :total="total" :data="data" v-if="tab === TAB_PERSONAL || !is_desktop" />
    </div>
  </div>
</template>

<script>
import HomeAnalyticsGeneral from "./HomeAnalyticsComponents/HomeAnalyticsGeneral";
import HomeAnalyticsPersonal from "./HomeAnalyticsComponents/HomeAnalyticsPersonal";

const TAB_GENERAL = "team";
const TAB_PERSONAL = "personal";

export default {
  name: "home-analytics",
  props: ["is_desktop", "setType", "setTotal", "currentTotal", "data", "total", "setCustom"],
  components: { HomeAnalyticsPersonal, HomeAnalyticsGeneral },
  data() {
    return {
      TAB_GENERAL,
      TAB_PERSONAL,
      tab: TAB_GENERAL,
      tabs: [
        { label: "Общие", value: TAB_GENERAL },
        { label: "Личные", value: TAB_PERSONAL }
      ],
      date: null
    };
  },
  watch: {
    tab(val) {
      this.setType(val);
    },
    date(val) {
      this.setCustom(val);
    }
  },
  computed: {},
  mounted() {},
  methods: {
    to_total(val) {
      this.date = null;
      this.setTotal(val);
    }
  }
};
</script>

<style lang="scss" scoped></style>
