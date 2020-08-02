<template>
  <div class="learn-course__header-text-info">
    <div class="learn-course__header-text-info-item">
      <v-icon src="folder" />
      {{ topicData.category }}
    </div>
    <div class="learn-course__header-text-info-item">
      <v-icon src="settings" />
      {{ topicData.level }}
    </div>
    <div class="learn-course__header-text-info-item">
      <v-icon src="language" />
      {{ topicData.language }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    topicData: Object
  }
};
</script>

<style scoped></style>
