<template>
  <v-container>
    <h1>Tools</h1>

    <ul>
      <li>
        <v-btn :to="{ name: 'tools.builder' }">Заявки и презентации</v-btn>
      </li>
    </ul>
  </v-container>
</template>

<script>
export default {
  name: "Tools"
};
</script>

<style scoped></style>
