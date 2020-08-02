<template>
  <div class="form-group form-group_numeric">
    <div v-if="title" class="builder-input-box__label">
      <div class="input-box-label">{{ title }}</div>
    </div>
    <div class="builder-input-box__input-wrapper">
      <div class="builder-input-box__input">
        <input
          ref="input"
          :id="`input-${_uid}-${name}`"
          :disabled="disabled"
          :placeholder="placeholder"
          type="tel"
          class="form-control"
          @input="onInput"
        />
      </div>

      <slot></slot>
    </div>

    <label v-if="errors.has(name, scope)" class="input-error">
      {{ errors.first(name, scope) }}
    </label>
  </div>
</template>

<script>
import InputMask from "inputmask-core";
import phoneCodes from "../../stubs/phone-codes";
import input from "../../mixins/input";

export default {
  name: "PhoneMask",
  mixins: [input],
  props: {
    title: {},
    placeholder: {},
    disabled: { type: Boolean, default: () => false }
  },
  mounted() {
    if (this.mask) {
      this.createMask();
    }
  },
  data() {
    return {
      maskInstance: null
    };
  },
  computed: {
    mask() {
      if (this.getRawValue) {
        let groupKey = Object.keys(phoneCodes).find(key => {
          return new RegExp("^" + key).test(this.getRawValue);
        });
        if (groupKey) {
          let mask = phoneCodes[groupKey].find(mask => {
            return mask.pattern.test(this.getRawValue);
          });
          return mask ? mask : null;
        }
      }
      return null;
    },
    getValue() {
      return this.maskInstance ? this.maskInstance.getValue() : this.value;
    },
    getRawValue() {
      return this.maskInstance
        ? this.maskInstance.getValue().replace(/\D/g, "")
        : this.value
        ? this.value.replace(/\D/g, "")
        : this.value;
    },
    getRules() {
      let validate = {};

      if (typeof this.rules === "object" && !Array.isArray(this.rules) && this.rules !== null) {
        validate = { ...this.rules };
      } else if (typeof this.rules === "string") {
        this.rules.split("|").forEach(data => {
          data = data.split(":");
          validate[data[0]] = data[1] || true;
        });
      }

      if (this.mask) {
        validate.regex = new RegExp(String(this.mask.pattern).replace(/[\/\?]/g, ""));
      } else {
        if (validate.required) {
          validate.regex = new RegExp("^qwe$");
        }
      }

      return validate;
    }
  },
  methods: {
    createMask() {
      if (this.mask) {
        this.$set(
          this,
          "maskInstance",
          new InputMask({
            pattern: this.mask.mask,
            value: this.getRawValue,
            formatCharacters: {
              "#": {
                validate: function(char) {
                  return /\d/.test(char);
                },
                transform: function(char) {
                  return char.toLowerCase();
                }
              }
            }
          })
        );
        this.$refs.input.value = this.maskInstance.getValue();
        this.$emit("input", this.getRawValue);
        let pos = this.getValue.indexOf("_");
        this.setCursorPosition(pos);
      }
    },
    setCursorPosition(pos) {
      let elem = this.$refs.input;
      if (document.activeElement === elem) {
        elem.focus();
      }
      if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos);
      } else if (elem.createTextRange) {
        let range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select();
      }
    },
    onInput(e) {
      let value = e.target.value.replace(/\D/g, "");
      /*if (this.mask) {
                    value = value.slice(0, this.mask.mask.replace(/[^\d#]/g, '').length)
                }*/
      if (this.mask && this.maskInstance && this.mask.pattern.test(value)) {
        this.maskInstance.setValue(value);

        let getPos = pos => {
          if (this.getValue && this.getValue[pos] === "_") {
            return pos;
          } else if (
            this.getValue &&
            this.getValue[e.inputType === "deleteContentBackward" ? pos - 1 : pos + 1] === "_"
          ) {
            return e.inputType === "deleteContentBackward" ? pos - 1 : pos + 1;
          } else if (
            this.getValue &&
            this.getValue[e.inputType === "deleteContentBackward" ? pos - 2 : pos + 2] === "_"
          ) {
            return e.inputType === "deleteContentBackward" ? pos - 2 : pos + 2;
          } else {
            return pos;
          }
        };

        let pos = getPos(this.$refs.input.selectionStart);
        this.$refs.input.value = this.maskInstance.getValue();
        this.setCursorPosition(pos);
        value = this.getRawValue;
      } else {
        this.$refs.input.value = value;
      }
      this.$emit("input", value);
    }
  },
  watch: {
    mask(newValue, oldValue) {
      if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
        if (newValue !== null) {
          this.createMask();
        } else {
          this.$set(this, "maskInstance", null);
        }
      }
    },
    value(newValue, oldValue) {
      if (newValue !== this.getRawValue) {
        if (this.mask && this.mask.pattern.test(newValue)) {
          this.maskInstance.setValue(newValue);
          this.$refs.input.value = this.maskInstance.getValue();
          this.$emit("input", this.getRawValue);
        } else {
          this.$refs.input.value = newValue;
          this.$set(this, "maskInstance", null);
        }
      }
    }
  }
};
</script>

<style scoped></style>
