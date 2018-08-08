import Api from './Api'

export default {
    register(credentials) {
        return Api().post('/account/register', credentials);
    },
    login(credentials) {
        return Api().post('/account/login', credentials);
    }
}