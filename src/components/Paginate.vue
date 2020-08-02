<template>
  <div class="pagination">
    <div class="pagination__center">
      <!--<button v-if="currentPage > 1" @click.prevent="set(1)" class="pagination__arrow">
                <span>Первая</span>
            </button>-->
      <button v-if="currentPage > 1" @click.prevent="set(currentPage - 1)" class="pagination__arrow">
        <v-icon src="small-arrow-down" />
      </button>

      <ul>
        <li v-for="page in total" v-if="page >= currentPage - 5 && page <= currentPage + 5">
          <button
            @click.prevent="currentPage === page ? '' : set(page)"
            type="button"
            class="pagination__num"
            :class="{ 'current-page': page === currentPage }"
          >
            {{ page }}
          </button>
        </li>
      </ul>

      <button v-if="currentPage < total" @click.prevent="set(currentPage + 1)" type="button" class="pagination__arrow">
        <v-icon src="small-arrow-down" />
      </button>
      <!--<button v-if="currentPage < total" @click.prevent="set(total)" class="pagination__arrow">
                <span>Последняя</span>
            </button>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "Paginate",
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    }
  },
  methods: {
    set(page) {
      this.$emit("input", page);
      this.$emit("change", page);
    }
  }
};
</script>

<style lang="scss" scoped></style>
