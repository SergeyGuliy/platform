import Vue from "vue";

export const prepare = (callback, fallback = null) => {
  try {
    return callback();
  } catch (e) {
    return fallback;
  }
};

export function notify(text, title = null, type = "info") {
  return Vue.notify({
    group: "default",
    type: type,
    title: title,
    text: text
  });
}
