<template>
  <div id="PlatformPreview">
    <div class="curriculum__body">
      <div class="curriculum__list">
        <div class="curriculum__list-header">
          <div class="curriculum__list-header-title">
            Учебный план
          </div>
        </div>
        <template v-if="items">
          <div
            v-for="(item, index) in items"
            :key="index"
            :class="`curriculum__item ${!item.is_active ? 'curriculum__item-disabled' : ''}`"
          >
            <div
              :class="`curriculum__item-title ${show === index ? 'open-plan' : ''}`"
              @click="show === index ? (show = null) : (show = index)"
            >
              <v-icon src="arrow-down" />
              <div class="theme-courses">{{ item.title }}</div>
              <div class="quantity-lessons">{{ item.lessons.length }} уроков</div>
              <div class="lesson-duration">03:36</div>

              <div class="link">
                <v-icon v-if="!item.is_active" src="locked" />
                <v-icon v-else-if="item.icon" :src="item.icon" />
                <div v-else style="width: 65px; height: 1px"></div>
              </div>

              <div class="link"></div>
              <div class="link" @click.stop="copyLink('https://internet-platform.ru/register/2a0')">
                <v-icon src="link"></v-icon>
              </div>
            </div>
            <div :class="`curriculum__item-content ${show === index ? 'active-block' : ''}`">
              <template v-if="item.lessons">
                <div v-for="(child, child_index) in item.lessons" :key="child_index" class="lessons">
                  <div class="number-lessons">{{ child_index + 1 }}</div>
                  <div class="theme-lessons" v-if="child.title">
                    {{ child.title }}
                  </div>
                  <v-icon v-if="child.icon" :src="child.icon" />
                  <div class="link" @click.stop="copyLink('https://internet-platform.ru/register/2a0')">
                    <v-icon src="link"></v-icon>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlatformPreview",
  data() {
    return {
      show: null
    };
  },
  methods: {
    copyLink(val) {
      console.log(val);
      this.$copyText(val);
      this.openModal("Copy", val);
    }
  },
  props: {
    items: Array
  }
};
</script>

<style lang="scss">
#PlatformPreview {
  .curriculum__body {
    width: 100%;
  }
}
</style>
