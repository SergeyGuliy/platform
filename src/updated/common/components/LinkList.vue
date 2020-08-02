<template>
  <ul class="list">
    <li v-for="(link, index) of links" :key="index" @click="$emit('click', link.id)">
      <button class="__clean-btn">
        <span>{{ link.title }}</span>
        <v-icon :src="link.icon" />
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "LinkList",
  props: {
    links: Array
  }
};
</script>

<style lang="scss" scoped>
.list {
  padding-bottom: 50px;
}
</style>
