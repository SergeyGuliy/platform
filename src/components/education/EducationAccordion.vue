<template>
  <div class="curriculum__list">
    <div class="curriculum__list-header">
      <div class="curriculum__list-header-title" v-if="options && options.title">{{ options.title }}</div>
      <div class="curriculum__list-header-subtitle" v-if="options && options.subtitle">{{ options.subtitle }}</div>
    </div>
    <div
      v-if="options && options.items"
      v-for="(item, index) in options.items"
      :key="index"
      :class="`curriculum__item ${item.locked ? 'curriculum__item-disabled' : ''}`"
    >
      <div
        :class="`curriculum__item-title ${show === index ? 'open-plan' : ''}`"
        @click="show === index ? (show = null) : (show = index)"
      >
        <v-icon :src="`${item.locked ? 'locked' : 'arrow-down'}`" />
        <div class="theme-courses">{{ item.title }}</div>
        <div class="quantity-lessons">{{ item.quantity }}</div>
        <div class="lesson-duration">{{ item.duration }}</div>
      </div>
      <div :class="`curriculum__item-content ${show === index ? 'active-block' : ''}`">
        <div v-if="item.childs" v-for="(child, child_index) in item.childs" :key="child_index" class="lessons">
          <div class="number-lessons" v-if="child.number">{{ child.number }}</div>
          <div class="theme-lessons" v-if="child.title">
            {{ child.title }}<br v-if="child.subtitle" />
            <span v-if="child.subtitle">{{ child.subtitle }}</span>
          </div>
          <v-icon v-if="child.icon" :src="child.icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EducationAccordion",
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      show: null
    };
  }
};
</script>
