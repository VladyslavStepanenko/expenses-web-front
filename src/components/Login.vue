<template>
    <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
            <div class="white elevation-2">
                <v-toolbar flat dense dark class="blue darken-3">
                    <v-toolbar-title>Login</v-toolbar-title>
                </v-toolbar>
                <div class="pl-4 pr-4 pt-2 pb-2 text-xs-center">
                    <form>
                        <v-text-field type="text" name="username" placeholder="Username" v-model="username"></v-text-field>
                        <v-text-field type="password" name="password" placeholder="Password" v-model="password"></v-text-field>
                    </form>
                    <div class="error-message">
                        <p v-for="error in errors" :key="error.message">{{error.message}}</p>
                    </div>
                    <v-btn dark class="blue darken-3" @click="login">Login</v-btn>
                </div>
            </div>
        </v-flex>
    </v-layout>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'

export default {
    data() {
        return {
            username: '',
            password: '',
            errors: []
        }
    },
    methods: {
        login() {
            AuthenticationService.login({
                username: this.username,
                password: this.password
            })
            .then(res => {
                this.$store.dispatch('setToken', res.data.token);
            })
            .catch(err => {
                this.errors = err.response.data.errors;
            });
        }
    }
}
</script>

<style scoped>
    .error-message {
        color: red;
    }
</style>


