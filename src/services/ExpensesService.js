import Api from './Api'

export default {
    index(accessToken) {
        return Api().get('expenses', {
            headers: {
                'x-access-token': accessToken
            }
        });
    },
    post(data) {
        return Api().post('expenses', data);
    }
}