<template>
  <ul>
    <li v-for="item of audience.data" :key="item.id">
      {{ item.name }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    audience: Object
  }
};
</script>

<style scoped></style>
