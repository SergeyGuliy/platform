<template>
  <div class="builder-tabs-block block" style="display: block">
    <div class="statistics-analitics-wrapper">
      <div class="statistics-analitics-buttons-calendar">
        <div class="statistics-indicators">
          <button type="button"><img src="/images/achievement.svg" alt="" /></button>
          <div class="statistics-indicators-title">Показатели</div>
        </div>
        <div class="profile-tabs-block-calendar-wrapper">
          <div class="profile-tabs-block-calendar-date">{{ date.text }}</div>
          <button type="button" class="open-calendar" @click="calendarTrigger = !calendarTrigger">
            <v-icon src="calendar" />
          </button>

          <v-months-calendar
            :show="calendarTrigger"
            v-model="date"
            :min="{ month: user_created_at_arr[1], year: user_created_at_arr[2] }"
          />
        </div>
      </div>
      <div class="statistics-analitics-block">
        <div class="statistics-analitics-block-conteiner">
          <div class="statistics-analitics-block-account-wrapper">
            <div class="statistics-analitics-block-account-conteiner">
              <div class="profile-tabs-block-account">
                <div class="profile-tabs-block-account-title">Личный Объем</div>
                <div class="profile-tabs-block-account-content">
                  <div class="profile-tabs-block-account-content-item color-blue">
                    {{ Math.floor($user.self_volume) }}
                  </div>
                  <div class="info-box">
                    <button type="button">
                      <v-icon src="more-variable" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="statistics-analitics-block-account-conteiner">
              <div class="profile-tabs-block-account">
                <div class="profile-tabs-block-account-title">Счет</div>
                <div class="profile-tabs-block-account-content">
                  <div class="profile-tabs-block-account-content-item">₽{{ Math.floor($user.balance) }}</div>
                </div>
                <div class="info-box">
                  <button type="button">
                    <v-icon src="more-variable" />
                  </button>
                </div>
              </div>
            </div>
            <button class="btn desk-visible">Зарегистрировать</button>
          </div>
          <div class="chart-info-box__body-item">
            <div class="chart-info-box__body-description">
              <div class="chart-info-box__body-description-action">
                <button type="button" class="btn __clean-btn">
                  <v-icon src="more-variable" />
                </button>
              </div>
              <div class="chart-info-box__body-description-title">Групповой Объем</div>
              <div class="chart-info-box__body-description-step">
                <b :class="`${!group_volume_totals.is_gain ? 'red' : ''}`">{{ group_volume_totals.current_total }}</b>
                <i v-if="group_volume_totals.percent" :class="`${!group_volume_totals.is_gain ? 'down' : ''}`"
                  >{{ group_volume_totals.percent }}%</i
                >
              </div>
              <div class="chart-info-box__body-description-time">
                <span>{{ group_volume_totals.previous_total }}</span
                ><i>Пред. месяц</i>
              </div>
            </div>
            <div class="chart-info-box__body-chart big-chart">
              <v-line-chart :apiData="group_volume_chart" :multiplicity="3" date-with-month />
            </div>
          </div>
          <button class="btn mob">Зарегистрировать</button>
        </div>
        <div class="statistics-analitics-block-conteiner">
          <div class="chart-info-box__body-item">
            <div class="chart-info-box__body-description">
              <div class="chart-info-box__body-description-action">
                <button type="button" class="btn __clean-btn">
                  <v-icon src="more-variable" />
                </button>
              </div>
              <div class="chart-info-box__body-description-title">Регистрации</div>
              <div class="chart-info-box__body-description-step">
                <b :class="`${!registrations_totals.is_gain ? 'red' : ''}`">{{ registrations_totals.current_total }}</b>
                <i v-if="registrations_totals.percent" :class="`${!registrations_totals.is_gain ? 'down' : ''}`"
                  >{{ registrations_totals.percent }}%</i
                >
              </div>
              <div class="chart-info-box__body-description-time">
                <span>{{ registrations_totals.previous_total }}</span
                ><i>Пред. месяц</i>
              </div>
            </div>
            <div class="chart-info-box__body-chart">
              <v-line-chart :apiData="registrations_chart" :multiplicity="3" date-with-month />
            </div>
          </div>
          <div class="chart-info-box__body-item">
            <div class="chart-info-box__body-description">
              <div class="chart-info-box__body-description-action">
                <button type="button" class="btn __clean-btn">
                  <v-icon src="more-variable" />
                </button>
              </div>
              <div class="chart-info-box__body-description-title">Активаций</div>
              <div class="chart-info-box__body-description-step">
                <b :class="`${!activated_partners_totals.is_gain ? 'red' : ''}`">{{
                  activated_partners_totals.current_total
                }}</b>
                <i
                  v-if="activated_partners_totals.percent"
                  :class="`${!activated_partners_totals.is_gain ? 'down' : ''}`"
                  >{{ activated_partners_totals.percent }}%</i
                >
              </div>
              <div class="chart-info-box__body-description-time">
                <span>{{ activated_partners_totals.previous_total }}</span
                ><i>Пред. месяц</i>
              </div>
            </div>
            <div class="chart-info-box__body-chart">
              <v-line-chart :apiData="activated_partners_chart" :multiplicity="3" date-with-month />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home-indicators",
  data() {
    return {
      calendarTrigger: false,
      group_volume_chart: { current: [], previous: [] },
      registrations_chart: { current: [], previous: [] },
      activated_partners_chart: { current: [], previous: [] },
      group_volume_totals: {
        current_total: 0,
        is_gain: false,
        percent: 0,
        previous_total: 0
      },
      registrations_totals: {
        current_total: 0,
        is_gain: false,
        percent: 0,
        previous_total: 0
      },
      activated_partners_totals: {
        current_total: 0,
        is_gain: false,
        percent: 0,
        previous_total: 0
      },
      chart1: {
        labels: ["01.03", "04.03", "07.03", "10.03", "13.03", "16.03", "19.03", "22.03", "25.03", "28.03", "31.03"],
        series: [
          {
            name: "series-1",
            data: [10, 10, 13, 18, 15, 13, 51, 14, 18, 19, 15, 17]
          },
          {
            name: "series-2",
            data: [9, 6, 7, 2, 8]
          }
        ]
      },
      chart2: {
        labels: ["01.03", "04.03", "07.03", "10.03", "13.03", "16.03", "19.03", "22.03", "25.03", "28.03", "31.03"],
        series: [
          {
            name: "series-1",
            data: [1, 2, 5, 7, 5, 3, 5, 4, 8, 9, 5, 7]
          },
          {
            name: "series-2",
            data: [2, 4, 6, 9, 8]
          }
        ]
      },
      chart3: {
        labels: ["01.03", "04.03", "07.03", "10.03", "13.03", "16.03", "19.03", "22.03", "25.03", "28.03", "31.03"],
        series: [
          {
            name: "series-1",
            data: [1, 2, 5, 7, 5, 3, 5, 4, 8, 9, 5, 7]
          },
          {
            name: "series-2",
            data: [2, 4, 6, 9, 8]
          }
        ]
      },
      date: {}
    };
  },
  mounted() {},
  watch: {
    date() {
      this.updateGroupVolume();
    }
  },
  computed: {
    user_created_at_arr() {
      return this.$user.created_at.split(".");
    }
  },
  methods: {
    updateGroupVolume() {
      this.$api.analytics.charts
        .group_volume(this.$user.id, {
          start_at: this.date.between.start,
          end_at: this.date.between.end,
          previous_start_at: this.date.previous.start,
          previous_end_at: this.date.previous.end
        })
        .then(({ data }) => {
          this.$set(this, "group_volume_totals", data.gain_loss);
          this.group_volume_chart = { current: data.current, previous: data.previous };
          this.updateRegistrations();
        });
    },
    updateRegistrations() {
      this.$api.analytics.charts
        .registrations(this.$user.id, {
          start_at: this.date.between.start,
          end_at: this.date.between.end,
          previous_start_at: this.date.previous.start,
          previous_end_at: this.date.previous.end
        })
        .then(({ data }) => {
          this.$set(this, "registrations_totals", data.gain_loss);
          this.registrations_chart = { current: data.current, previous: data.previous };
          this.updateActivatedPartners();
        });
    },
    updateActivatedPartners() {
      this.$api.analytics.charts
        .activated_partners(this.$user.id, {
          start_at: this.date.between.start,
          end_at: this.date.between.end,
          previous_start_at: this.date.previous.start,
          previous_end_at: this.date.previous.end
        })
        .then(({ data }) => {
          this.$set(this, "activated_partners_totals", data.gain_loss);
          this.activated_partners_chart = { current: data.current, previous: data.previous };
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>
