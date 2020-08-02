import {
  PAGE_ADD_CONTENT,
  PAGE_BACKGROUND,
  PAGE_BUTTON_STYLE,
  PAGE_CANVAS,
  PAGE_FONT_COLOR,
  PAGE_FONT_FAMILY,
  PAGE_TITLE
} from "../stubs/tools-pages";

export const state = {
  // step: PAGE_TITLE,
  step: PAGE_BACKGROUND,
  stepOrder: [PAGE_TITLE, PAGE_BACKGROUND, PAGE_FONT_FAMILY, PAGE_FONT_COLOR, PAGE_BUTTON_STYLE],
  stepComplete: false,
  stepQuery: {},

  requestHistoryPosition: null,
  requestHistory: [],

  content: null,
  insertPosition: null
};

export const getters = {
  prevRequestHistory: state => {
    if (state.requestHistoryPosition !== null) {
      if (state.requestHistory[state.requestHistoryPosition - 1]) {
        return state.requestHistory[state.requestHistoryPosition - 1];
      } else {
        return null;
      }
    }
    return state.requestHistory.length ? state.requestHistory[state.requestHistory.length - 1] : null;
  },
  nextRequestHistory: state => {
    if (state.requestHistoryPosition !== null && state.requestHistory[state.requestHistoryPosition + 1]) {
      return state.requestHistory[state.requestHistoryPosition + 1];
    }
    return null;
  }
};

export const mutations = {
  UPDATE_STEP: (state, value) => {
    state.step = value;
  },
  UPDATE_STEP_COMPLETE: (state, value) => {
    state.stepComplete = value;
  },
  UPDATE_STEP_QUERY: (state, value) => {
    state.stepQuery = value;
  },

  ADD_REQUEST_TO_HISTORY(state, request) {
    let currentRequest = null;
    if (state.requestHistoryPosition !== null && state.requestHistory[state.requestHistoryPosition]) {
      currentRequest = state.requestHistory[state.requestHistoryPosition];
    }

    if (JSON.stringify(currentRequest) !== JSON.stringify(request)) {
      if (state.requestHistoryPosition !== null) {
        state.requestHistory.splice(state.requestHistoryPosition + 1, state.requestHistory.length);
      }
      state.requestHistory.push(JSON.parse(JSON.stringify(request)));
      state.requestHistoryPosition = state.requestHistory.length - 1;
    }
  },
  BACK_REQUEST_HISTORY(state) {
    if (state.requestHistoryPosition !== null && state.requestHistory[state.requestHistoryPosition - 1]) {
      state.requestHistoryPosition = state.requestHistoryPosition - 1;
    }
  },
  FORWARD_REQUEST_HISTORY(state) {
    if (state.requestHistoryPosition !== null && state.requestHistory[state.requestHistoryPosition + 1]) {
      state.requestHistoryPosition = state.requestHistoryPosition + 1;
    }
  },

  UPDATE_CONTENT: (state, content) => {
    state.content = content;
  },
  UPDATE_INSERT_POSITION: (state, value) => {
    state.insertPosition = value;
  }
};

export const actions = {
  prevStep({ state, commit }) {
    if (state.step === PAGE_ADD_CONTENT) {
      commit("UPDATE_STEP", PAGE_CANVAS);
    } else {
      let index = state.stepOrder.indexOf(state.step);
      if (index !== -1 && state.stepOrder[index - 1] !== undefined) {
        commit("UPDATE_STEP", state.stepOrder[index - 1]);
      } else {
        commit("UPDATE_STEP", PAGE_CANVAS);
      }
    }
  },
  nextStep({ state, commit }, step = null) {
    if (step !== null) {
      commit("UPDATE_STEP", step);
    } else if (!state.stepComplete) {
      let index = state.stepOrder.indexOf(state.step);
      if (index !== -1 && state.stepOrder[index + 1] !== undefined) {
        commit("UPDATE_STEP", state.stepOrder[index + 1]);
      } else {
        commit("UPDATE_STEP", PAGE_CANVAS);
        commit("UPDATE_STEP_COMPLETE", true);
      }
    } else {
      commit("UPDATE_STEP", PAGE_CANVAS);
    }
  },
  setStepComplete({ commit }, value) {
    commit("UPDATE_STEP_COMPLETE", value);
  },
  setStepQuery({ commit }, query) {
    commit("UPDATE_STEP_QUERY", query);
  },

  addRequestToHistory({ commit }, request) {
    commit("ADD_REQUEST_TO_HISTORY", request);
  },
  backRequestHistory({ commit }) {
    commit("BACK_REQUEST_HISTORY");
  },
  forwardRequestHistory({ commit }) {
    commit("FORWARD_REQUEST_HISTORY");
  },

  setContent({ commit }, content) {
    commit("UPDATE_CONTENT", content);
  },
  setInsertPosition({ commit }, value) {
    commit("UPDATE_INSERT_POSITION", value);
  }
};
