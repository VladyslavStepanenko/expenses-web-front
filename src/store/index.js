import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: null,
        isUserLoggedIn: false
    },
    mutations: {
        setToken(state, token) {
            if(token) {
                state.token = token;
                state.isUserLoggedIn = true;
            }
            else {
                state.isUserLoggedIn = false;
            }
        }
    },
    actions: {
        setToken({commit}, token) {
            commit('setToken', token);
        }
    }
})