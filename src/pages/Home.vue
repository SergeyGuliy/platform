<template>
  <div class="statistic-box">
    <div class="statistic-box__body">
      <div class="builder-tabs-wrapper">
        <v-tabs :options="tabs" v-model="tab" />

        <home-indicators v-if="tab === TAB_INDICATORS" />
        <home-analytics
          :setCustom="setCustom"
          :total="list.total"
          :data="list.data"
          :is_desktop="is_desktop"
          :setType="setType"
          :setTotal="setTotal"
          :currentTotal="currentTotal"
          v-if="tab === TAB_ANALYTICS || is_desktop"
        />
      </div>
    </div>
  </div>
</template>

<script>
import HomeIndicators from "../components/home/HomeIndicators";
import HomeAnalytics from "../components/home/HomeAnalytics";
const TAB_INDICATORS = "INDICATORS";
const TAB_ANALYTICS = "ANALYTICS";

export default {
  name: "Home",
  components: { HomeAnalytics, HomeIndicators },
  data() {
    return {
      TAB_INDICATORS,
      TAB_ANALYTICS,
      tab: TAB_INDICATORS,
      tabs: [
        { label: "Показатели", value: TAB_INDICATORS },
        { label: "Аналитика", value: TAB_ANALYTICS }
      ],
      windowWidth: window.innerWidth,
      currentType: "team",
      currentTotal: "today",
      list: {
        data: [],
        current_page: 1,
        last_page: 1,
        per_page: 10,
        total: 0
      },
      custom_data: {}
    };
  },
  watch: {
    currentType() {
      this.loadList();
    },
    currentTotal() {
      this.loadList();
    }
  },
  computed: {
    d_width() {
      return document.body.offsetWidth;
    },
    is_desktop() {
      return this.windowWidth > 768;
    },
    date() {
      let start_at = moment();
      let end_at = moment();

      if (this.currentTotal === "today") {
      } else if (this.currentTotal === "yesterday") {
        start_at = start_at.add(-1, "days");
        end_at = end_at.add(-1, "days");
      } else if (this.currentTotal === "this_month") {
        start_at = start_at.startOf("month");
        end_at = end_at.endOf("month");
      } else if (this.currentTotal === "previous_month") {
        start_at = start_at.add(-1, "month").startOf("month");
        end_at = end_at.add(-1, "month").endOf("month");
      } else if (this.custom_data) {
        start_at = moment(this.custom_data.start);
        end_at = moment(this.custom_data.end);
      }

      return {
        start_at: start_at.format("DD.MM.YYYY"),
        end_at: end_at.format("DD.MM.YYYY")
      };
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
    this.loadList();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    setCustom(date) {
      this.custom_data = date;
      if (date) {
        this.currentTotal = date.start.toString() + date.end.toString();
      }
    },
    onResize() {
      this.windowWidth = window.innerWidth;
    },
    setType(val) {
      this.currentType = val;
    },
    setTotal(type) {
      this.currentTotal = type;
      this.loadList();
    },
    loadList(page = 1) {
      this.list.data = [];
      this.list.total = 0;
      this.$api.analytics
        .list(this.currentType, { page, ...this.date })
        .then(({ data }) => {
          this.list.data = data.data;
          this.list.current_page = data.current_page;
          this.list.last_page = data.last_page;
          this.list.per_page = data.per_page;
          this.list.total = data.total;
        })
        .finally(() => {});
    }
  }
};
</script>

<style lang="scss" scoped></style>
