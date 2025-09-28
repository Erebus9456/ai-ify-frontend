import { createStore } from 'vuex'
import auth from './modules/auth'
import app from './modules/app'
import onboarding from './modules/onboarding'
export default createStore({ modules: { auth, app,onboarding } })
