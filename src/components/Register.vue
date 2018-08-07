<template>
    <v-app>
        <v-content>
            <v-container fluid fill-height>
                <v-layout column align-center justify-center>
                    <v-flex xs12 sm8 md4>
                        <div class="white elevation-2">
                            <v-toolbar flat dense dark class="green">
                                <v-toolbar-title>Register</v-toolbar-title>
                            </v-toolbar>
                            <div class="pl-4 pr-4 pt-2 pb-2 text-xs-center">
                                <v-text-field type="email" name="email" placeholder="E-mail" v-model="email"></v-text-field>
                                <v-text-field type="text" name="username" placeholder="Username" v-model="username"></v-text-field>
                                <v-text-field type="password" name="password" placeholder="Password" v-model="password"></v-text-field>
                                <div class="error">
                                    <p v-for="error in errors" :key="error.message">{{error.message}}</p>
                                </div>
                                <v-btn class="green" @click="register">Register</v-btn>
                            </div>
                        </div>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
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