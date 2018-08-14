import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: null,
        account: null,
        isUserLoggedIn: false
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
            if(token) {
                state.isUserLoggedIn = true;
            }
            else {
                state.isUserLoggedIn = false;
            }
        },
        setAccount(state, account) {
            state.account = account;
        }
    },
    actions: {
        setToken({commit}, token) {
            commit('setToken', token);
        },
        setAccount({commit}, account) {
            commit('setAccount', account);
        }
    }
})