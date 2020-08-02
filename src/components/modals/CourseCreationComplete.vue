<template>
  <v-modal class="platform-course-creation-complete">
    Are you sure?
    <div class="platform-course-creation-complete__actions">
      <v-btn @click="close()" :clear="true">Отменить</v-btn>
      <v-btn @click="proceedNavigation()">Завершить</v-btn>
    </div>
  </v-modal>
</template>

<script>
import modal from "../../mixins/modal";

export default {
  mixins: [modal],
  methods: {
    proceedNavigation() {
      this.data.nextHandler();
      this.close();
    }
  }
};
</script>

<style lang="scss" scoped>
.platform-course-creation-complete {
  &__actions {
    display: flex;
  }
}
</style>
