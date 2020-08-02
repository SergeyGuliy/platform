<template>
  <div>
    <template v-if="type === TYPE_DEFAULT">
      <v-draggable :value="value" @input="$emit('input', $event)" handle=".handler" class="list-options">
        <div slot-scope="item" class="list-options-item">
          <div class="builder-box__action handler">
            <v-icon src="drag" />
          </div>
          <v-icon :src="getIcon(item.type)" />
          <div class="list-options-item-content">
            {{ getAccountLink(item) }}
            <button @click="editHandler" type="button">
              <v-icon src="more" />
            </button>
          </div>
        </div>
      </v-draggable>

      <div class="add-input-box__action">
        <button @click="editHandler" type="button" class="btn btn_add">
          <v-icon src="plus" />
          <span>Add Account</span>
        </button>
      </div>
    </template>

    <template v-else-if="type === TYPE_ADD_LIST">
      <div class="list-options">
        <div v-for="type in TYPES" class="list-options-item">
          <div class="list-options-item-content">
            <div class="builder-box__action fw500">
              <v-icon :src="type.icon" />
              {{ type.label }}
            </div>
            <button @click="addAccount(type.type)" type="button">
              <v-icon src="plus" />
            </button>
          </div>
        </div>
      </div>
    </template>

    <label v-if="errors.has(name, scope)" class="input-error">
      {{ errors.first(name, scope) }}
    </label>
  </div>
</template>

<script>
import { TYPES } from "../../../stubs/social-accounts";
import input from "../../../mixins/input";
import { getAccountLink } from "../../tools/landings/blocks";

const TYPE_DEFAULT = "default";
const TYPE_ADD_LIST = "addList";

export default {
  name: "SocialAccounts",
  mixins: [input],
  props: {
    type: { type: String, default: () => TYPE_DEFAULT }
  },
  data() {
    return {
      TYPE_DEFAULT,
      TYPE_ADD_LIST,
      TYPES
    };
  },
  methods: {
    getIcon(type) {
      let item = TYPES.find(item => item.type === type);
      return item ? item.icon : null;
    },
    getAccountLink,

    addAccount(type) {
      this.$emit("input", type);
    },
    editHandler() {
      this.$emit("edit");
    }
  }
};
</script>

<style scoped></style>
