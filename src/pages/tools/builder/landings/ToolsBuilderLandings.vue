<template>
  <v-container :center="!(items.total > 0)" :mob-mt56="items.total > 0" :loading="loading">
    <template #header>
      <v-container-header :to="{ name: 'tools.builder' }">Инструменты</v-container-header>
    </template>

    <div v-if="items.total > 0" class="builder-box__body-title df-space-between">
      <div class="create-course-box__body-title-name size-sm">Страницы</div>
      <div class="course-created__actions builder-tab-desk-visible">
        <div class="course-created__action">
          <v-btn :to="{ name: 'tools.landings.create' }">Создать новую страницу</v-btn>
        </div>
      </div>
    </div>

    <template v-if="items.total > 0">
      <div v-for="item in items.data" class="builder-box__pages-options" :key="`landing-${item.id}`">
        <router-link
          :to="{ name: 'tools.landings.show', params: { id: item.id } }"
          class="builder-box__pages-options-text"
        >
          <div class="builder-box__pages-options-title">{{ item.title }}</div>
          <div class="builder-box__pages-options-subtitle">
            try.platform.io/figmacourse/|Test 2
          </div>
        </router-link>

        <div class="builder-box__pages-options-devices">
          <div class="builder-box__pages-options-devices-content">
            <div class="builder-box__pages-options-device">
              <div class="builder-box__pages-options-icon">
                <img src="../../../../assets/desktop_icon.svg" />
              </div>
              <div class="builder-box__pages-options-icon">
                <img src="../../../../assets/mobile.svg" />
              </div>
            </div>
            <div class="builder-box__pages-options-device mt8">
              <div class="builder-box__pages-options-icon"><img src="../../../../assets/ok_green.svg" /></div>
              <div class="builder-box__pages-options-icon"><img src="../../../../assets/ok_green.svg" /></div>
            </div>
          </div>
          <v-dropdown>
            <button type="button">
              <v-icon src="edit" />
              Изменить название
            </button>
            <button @click="preview(item.id)" type="button">
              <v-icon src="eye" />
              Предпросмотр
            </button>
            <button type="button">
              <v-icon src="link" />
              Получить ссылку
            </button>
            <button @click="destroy(item.id)" type="button">
              <v-icon src="delete" />
              Удалить
            </button>
          </v-dropdown>
        </div>
      </div>

      <v-paginate
        v-if="items.total > 0 && items.last_page > 1"
        :total="items.last_page"
        :current-page="items.current_page"
        @change="load"
      />
    </template>

    <template v-else>
      <div class="create-course-box__start-title">
        Вы еще не создали ни одной страницы
      </div>

      <div class="create-course-box__start-pic">
        <v-icon src="builder-start" />
      </div>

      <div class="create-course-box__start-action">
        <v-btn :to="{ name: 'tools.landings.create' }">Создать страницу</v-btn>
      </div>
    </template>

    <div v-if="items.total > 0" class="course-created__actions builder-mob-visible">
      <div class="course-created__action">
        <v-btn :to="{ name: 'tools.landings.create' }">Создать новую страницу</v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "ToolsBuilderLandings",
  mounted() {
    this.load();
  },
  data() {
    return {
      loading: false,
      items: {
        data: [],
        current_page: 1,
        last_page: 1,
        per_page: 15,
        total: 0
      }
    };
  },
  methods: {
    load(page = 1) {
      this.$set(this, "loading", true);
      this.$api.landings
        .all({ page })
        .then(({ data }) => {
          this.$set(this.items, "data", data.data);
          this.$set(this.items, "current_page", data.current_page);
          this.$set(this.items, "last_page", data.last_page);
          this.$set(this.items, "per_page", data.per_page);
          this.$set(this.items, "total", data.total);
        })
        .finally(() => {
          this.$set(this, "loading", false);
        });
    },
    destroy(id) {
      this.$api.landings.destroy(id).then(() => {
        this.load();
      });
    },
    preview(id) {}
  }
};
</script>

<style scoped></style>
