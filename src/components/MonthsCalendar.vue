<template>
  <div :class="`profile-tabs-block-calendar ${show ? 'calendar-visible' : ''}`">
    <div class="profile-tabs-block-calendar-years">
      <div class="profile-tabs-block-calendar-button">
        <button
          type="button"
          :class="`${Number(show_year) === Number(this.min.year) ? `future` : ''}`"
          @click="subYear"
        >
          <v-icon src="left" />
        </button>
      </div>
      <div class="profile-tabs-block-calendar-year">{{ show_year }}</div>
      <div class="profile-tabs-block-calendar-button">
        <button type="button" :class="`${Number(show_year) === Number(now_year) ? `future` : ''}`" @click="addYear">
          <v-icon src="right" />
        </button>
      </div>
    </div>
    <div class="profile-tabs-block-calendar-months">
      <span
        v-for="(m, index) in months"
        :key="index"
        :class="`${active(index) ? 'month-active' : ''}${!showMonth(index) ? 'future' : ''}`"
        @click="setDate(index)"
        >{{ m }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "months-calendar",
  props: {
    show: {
      required: true
    },
    value: {
      type: Object,
      default() {
        return {
          year: moment().format("Y"),
          month: moment().format("M")
        };
      }
    },
    min: {
      type: Object,
      default() {
        return {
          year: 2010,
          month: 5
        };
      }
    }
  },
  data() {
    return {
      date: {
        year: this.value.year ?? moment().format("Y"),
        month: this.value.month ?? moment().format("M")
      },
      months: {
        1: "Январь",
        2: "Февраль",
        3: "Март",
        4: "Апрель",
        5: "Май",
        6: "Июнь",
        7: "Июль",
        8: "Август",
        9: "Сентябрь",
        10: "Октябрь",
        11: "Ноябрь",
        12: "Декабрь"
      },
      show_year: this.value.year ?? moment().format("Y"),
      now_year: moment().format("Y"),
      now_month: moment().format("M")
    };
  },
  mounted() {
    this.updateDate();
  },
  methods: {
    showMonth(month) {
      if (Number(this.min.year) >= Number(this.show_year) && Number(month) < Number(this.min.month)) return false;
      return Number(this.now_year) > Number(this.show_year) || Number(month) <= Number(this.now_month);
    },
    updateDate() {
      let new_moment = moment(new Date(`${this.date.month}.1.${this.date.year}`));
      let prev_moment = moment(new Date(`${this.date.month}.1.${this.date.year}`)).subtract(1, "months");
      this.$emit("input", {
        month: this.date.month,
        year: this.date.year,
        text: `${this.months[this.date.month]}, ${this.date.year}`,
        between: {
          start: new_moment.format("DD.MM.YYYY"),
          end: new_moment.endOf("month").format("DD.MM.YYYY")
        },
        previous: {
          start: prev_moment.format("DD.MM.YYYY"),
          end: prev_moment.endOf("month").format("DD.MM.YYYY")
        }
      });
    },
    setDate(month) {
      if (this.showMonth(month)) {
        this.date.month = month;
        this.date.year = this.show_year;
        this.updateDate();
      }
    },
    addYear() {
      if (Number(this.show_year) < Number(this.now_year)) {
        this.show_year++;
      }
    },
    subYear() {
      if (Number(this.show_year) > Number(this.min.year)) {
        this.show_year--;
      }
    },
    active(month) {
      return Number(this.show_year) === Number(this.date.year) && Number(this.date.month) === Number(month);
    }
  }
};
</script>
