import { supabase } from "../../lib/supabase";

export default {
  namespaced: true,
  state: () => ({
    user: null,
    session: null,
  }),

  mutations: {
    setUser(state, user) { state.user = user },
    setSession(state, session) { state.session = session },
  },

  actions: {
    async signUp(_, { email, password, metadata }) {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: metadata,
          emailRedirectTo: `${window.location.origin}/signin`
        }
      });
      if (error) throw error;
      return data;
    },

    async signIn({ commit }, { email, password }) {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      commit("setUser", data.user);
      commit("setSession", data.session);
      return data;
    },

    async signInWithGoogle() {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: { redirectTo: `${window.location.origin}/onboarding` }
      });
      if (error) throw error;
    },

    async signOut({ commit }) {
      await supabase.auth.signOut();
      commit("setUser", null);
      commit("setSession", null);
    },

    async fetchUser({ commit }) {
      const { data } = await supabase.auth.getUser();
      commit("setUser", data?.user || null);
      return data?.user;
    },

    async validateSession({ commit }) {
      const { data } = await supabase.auth.getSession();
      commit("setSession", data?.session || null);
      return data?.session;
    },
  },
};
