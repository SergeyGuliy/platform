<template>
  <v-container :loading="loading">
    <template #header>
      <v-container-header :to="{ name: 'tools.landings' }">Инструменты</v-container-header>
    </template>

    <div class="builder-box__body-title df-space-between">
      <div class="create-course-box__body-title-name size-sm">{{ model.title }}</div>
      <div class="course-created__actions builder-tab-desk-visible">
        <div class="course-created__action">
          <button type="button" class="btn third-btn"></button>
          <v-btn :to="{ name: 'tools.landings.edit', params: { id } }" third>Изменить дизайн</v-btn>
        </div>
        <div class="course-created__action">
          <v-btn type="button">Опубликовать страницу</v-btn>
        </div>
      </div>
    </div>

    <v-tabs :options="tabs" v-model="tab" />

    <div class="course-created__actions builder-mob-visible">
      <div class="course-created__action">
        <v-btn type="button">Опубликовать страницу</v-btn>
      </div>
      <div class="course-created__action">
        <v-btn :to="{ name: 'tools.landings.edit', params: { id } }" third>Изменить дизайн</v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
const TAB_DEFAULT = "default";
const TAB_ANALYTICS = "analytics";

export default {
  name: "ToolsBuilderLandings",
  mounted() {
    this.load();
  },
  data() {
    return {
      loading: false,
      tab: TAB_DEFAULT,
      tabs: [
        { value: TAB_DEFAULT, label: "Общее" },
        { value: TAB_ANALYTICS, label: "Аналитика" }
      ],
      model: {
        title: null
      }
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
  },
  methods: {
    load() {
      this.$set(this, "loading", true);
      this.$api.landings
        .get(this.id)
        .then(({ data }) => {
          this.$set(this.model, "title", data.data.title);
        })
        .finally(() => {
          this.$set(this, "loading", false);
        });
    },
    destroy(id) {
      this.$api.landings.destroy(id).then(() => {
        this.load();
      });
    }
  }
};
</script>

<style scoped></style>
