import Vue from 'vue'
import Router from 'vue-router'
import Register from '../components/Register'
import Login from '../components/Login'
import Main from '../components/Main'
import Expenses from '../components/Expenses'
import CreateExpense from '../components/CreateExpense'

Vue.use(Router);

export default new Router({
    routes:[
        {
            path: '/',
            name: 'root',
            component: Main
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/expenses',
            name: 'expenses',
            component: Expenses
        },
        {
            path: '/expenses/create',
            name: 'expenses-create',
            component: CreateExpense
        }
    ]
})