<template>
  <Dropdown
    :options="options"
    :optionLabel="optionLabel"
    :placeholder="placeholder"
    :filter="filter"
    :filterPlaceholder="filterPlaceholder"
    :scrollHeight="dropdownHeight"
    :appendTo="appendTo"
    :class="{ open: isShow }"
    @click="isShow = !isShow"
    v-model="value"
    :disabled="disabled"
  >
    <!--     <template #value="slotProps">
                 <div class="select-custom__title" v-if="slotProps.option">
                    {{slotProps.option}}
                 </div>
                 <span v-else>{{slotProps.placeholder}}</span>
             </template>
            -->
    <template #option="slotProps">
      {{ slotProps.option.title }}
    </template>
  </Dropdown>
</template>

<script>
import Dropdown from "primevue/dropdown";
import "primevue/resources/primevue.min.css";

export default {
  components: {
    Dropdown
  },
  props: {
    options: {},
    optionLabel: String,
    placeholder: String,
    filter: {
      type: Boolean,
      default: false
    },
    filterPlaceholder: String,
    dropdownHeight: {
      type: String,
      default: "200px"
    },
    disabled: Boolean,
    appendTo: String,
    value: {}
  },
  data() {
    return {
      isShow: false
    };
  }
};
</script>

<style lang="scss">
.p-dropdown {
  position: relative;
  background-color: transparent;
  transition: all 0.3s ease;
  margin-bottom: 22px;
  width: 100%;
  max-width: 256px;
  height: 40px;
  border: 1px solid #c8d1e0;
  box-sizing: border-box;
  border-radius: 6px;
  margin-right: 32px;
  &.p-focus {
    border-color: #ffc107;

    .p-dropdown-items {
      border-color: #ffc107;
    }
  }

  &-label {
    width: 100%;
    text-align: left;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 8px 11px;
    border-radius: 4px;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #9ca1ab;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  &-items {
    position: absolute;
    top: -2px;
    width: 100%;
    list-style: none;
    padding: 0 4px;
    pointer-events: auto;
    border: 1px solid #c8d1e0;
    background: #fff;
    box-shadow: 0 8px 24px rgba(67, 74, 84, 0.12);
    max-height: 260px;
    overflow-y: auto;
    overflow-x: hidden;
    border-radius: 0 0 6px 6px;
  }

  &-item {
    cursor: pointer;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #58606e;
    padding: 4px 16px;
    transition: all 0.3s ease;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    &:hover {
      background: #f5f7fa;
      border-radius: 6px;
    }
  }
}
</style>
