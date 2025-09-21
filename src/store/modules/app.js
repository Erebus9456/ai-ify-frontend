export default {
  namespaced: true,
  state: () => ({ demoMode: import.meta.env.VITE_DEMO_MODE === 'true' }),
  mutations: { setDemo(state,v){ state.demoMode = v } },
  getters: { demoMode: s => s.demoMode }
}
