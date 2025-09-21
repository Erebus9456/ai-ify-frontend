// src/store/modules/auth.js
import { supabase } from '../../lib/supabase'

export default {
  namespaced: true,

  state: () => ({
    user: null,
    session: null,
  }),

  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setSession(state, session) {
      state.session = session
    },
  },

  actions: {
    // Sign up with email + password + metadata
    async signUp({ commit }, { email, password, metadata }) {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: metadata },
      })
      if (error) throw error

      commit('setUser', data.user || null)
      commit('setSession', data.session || null)
      return data
    },

    // Sign in with email + password
    async signIn({ commit }, { email, password }) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) throw error

      commit('setUser', data.user || null)
      commit('setSession', data.session || null)
      return data
    },

    // 🚀 Sign in with Google OAuth
    async signInWithGoogle() {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: 'http://localhost:5173/dashboard', // 👈 change if needed
        },
      })
      if (error) throw error
      return data
    },

    // Sign out
    async signOut({ commit }) {
      try {
        await supabase.auth.signOut()
      } catch (e) {
        console.warn('Error signing out:', e)
      }
      commit('setUser', null)
      commit('setSession', null)
      return true
    },

    // Fetch user directly from Supabase Auth
    async fetchUser({ commit }) {
      const { data, error } = await supabase.auth.getUser()
      if (error) {
        console.error('Error fetching user:', error.message)
        commit('setUser', null)
        return null
      }

      commit('setUser', data.user || null)
      return data.user
    },

    // Validate current session
    async validateSession({ commit }) {
      const { data, error } = await supabase.auth.getSession()
      if (error) {
        console.error('Error validating session:', error.message)
        commit('setSession', null)
        return null
      }

      commit('setSession', data?.session || null)
      return data?.session
    },

    // Update user metadata
    async updateUserMetadata({ commit, state }, metadata) {
      const { data, error } = await supabase.auth.updateUser({
        data: { ...state.user?.user_metadata, ...metadata },
      })
      if (error) throw error

      commit('setUser', data.user)
      return data.user
    },

    // Mark onboarding as complete
    async completeOnboarding({ commit, state }) {
      const { data, error } = await supabase.auth.updateUser({
        data: { ...state.user?.user_metadata, hasOnboarded: true },
      })
      if (error) throw error

      commit('setUser', data.user)
      return data.user
    },
  },

  getters: {
    isAuthenticated: (state) => !!state.user,
    user: (state) => state.user,
    userName: (state) => {
      const meta = state.user?.user_metadata || {}
      if (meta.full_name) return meta.full_name
      if (meta.first_name) return meta.first_name
      if (state.user?.email) return state.user.email.split('@')[0]
      return 'User'
    },
    hasOnboarded: (state) =>
      state.user?.user_metadata?.hasOnboarded === true,
  },
}
