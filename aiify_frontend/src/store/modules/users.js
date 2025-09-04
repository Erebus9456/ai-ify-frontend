import api from "../../api/axios";

export default {
  namespaced: true,
  state: () => ({
    items: [],
    loading: false,
    error: null,
  }),
  mutations: {
    SET_ITEMS(state, payload) {
      state.items = payload;
    },
    SET_LOADING(state, val) {
      state.loading = val;
    },
    SET_ERROR(state, err) {
      state.error = err;
    },
  },
  actions: {
    async fetchAll({ commit }) {
      commit("SET_LOADING", true);
      try {
        const { data } = await api.get("/users/");
        commit("SET_ITEMS", data);
      } catch (err) {
        commit("SET_ERROR", err.message);
      } finally {
        commit("SET_LOADING", false);
      }
    },
  },
  getters: {
    all: (state) => state.items,
    isLoading: (state) => state.loading,
    error: (state) => state.error,
  },
};
