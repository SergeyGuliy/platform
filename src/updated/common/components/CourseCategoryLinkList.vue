<template>
  <ul class="list">
    <li v-for="link of linkData" :key="link.id" @click="transitionToCategoryList(link.id)">
      <button class="__clean-btn">
        <span>{{ link.name }}</span>
        <v-icon src="back" />
      </button>
    </li>
  </ul>
</template>

<script>
import { getAllCoursesCategory } from "../../modules/education/services/education-service";
import { educationCategory } from "../../modules/education/services/routes/education-courses-routes-name";

export default {
  name: "LinkList",
  props: {
    links: Array
  },
  data() {
    return {
      linkData: null
    };
  },
  created() {
    getAllCoursesCategory().then(({ data }) => (this.linkData = data));
  },
  methods: {
    transitionToCategoryList(id) {
      this.$router.push({ name: educationCategory, params: { categoryId: id } });
    }
  }
};
</script>

<style lang="scss" scoped>
.list {
  padding-bottom: 50px;
}
</style>
