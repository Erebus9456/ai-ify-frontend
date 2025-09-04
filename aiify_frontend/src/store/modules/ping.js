import apiClient from "@/api/axios";

export default {
  namespaced: true,
  state: {
    message: null,
    loading: false,
    error: null,
  },
  mutations: {
    setMessage(state, msg) {
      state.message = msg;
    },
    setLoading(state, val) {
      state.loading = val;
    },
    setError(state, err) {
      state.error = err;
    },
  },
  actions: {
    async fetchPing({ commit }) {
      commit("setLoading", true);
      commit("setError", null);
      try {
        const res = await apiClient.get("users/ping/");
        commit("setMessage", res.data.message);
      } catch (err) {
        commit("setError", err.message || "Error fetching ping");
      } finally {
        commit("setLoading", false);
      }
    },
  },
  getters: {
    pingMessage: (state) => state.message,
    pingLoading: (state) => state.loading,
    pingError: (state) => state.error,
  },
};
