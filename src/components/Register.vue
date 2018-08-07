<template>
    <div>
        <h1>Register</h1>
        <input type="email" name="email" placeholder="E-mail" v-model="email" />
        <input type="text" name="username" placeholder="Username" v-model="username" />
        <input type="password" name="password" placeholder="Password" v-model="password" />
        <div class="error">
            <p v-for="error in errors" :key="error.message">{{error.message}}</p>
        </div>
        <button @click="register">Register</button>
    </div>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'

export default {
    data() {
        return {
            email: '',
            username: '',
            password: '',
            errors: []
        }
    },
    methods: {
        register() {
            AuthenticationService.register({
                email: this.email,
                username: this.username,
                password: this.password
            })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                this.errors = err.response.data.errors;
            });
        }
    }
}
</script>

<style scoped>
    .error {
        color: red;
    }
</style>