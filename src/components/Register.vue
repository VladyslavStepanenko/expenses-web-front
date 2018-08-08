<template>
    <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
            <panel title="Register">
                <form autocomplete="off">
                    <v-text-field type="email" name="email" placeholder="E-mail" v-model="email"></v-text-field>
                    <v-text-field type="text" name="username" placeholder="Username" v-model="username"></v-text-field>
                    <v-text-field type="password" name="password" placeholder="Password" v-model="password"></v-text-field>
                </form>
                <div class="error-message">
                    <p v-for="error in errors" :key="error.message">{{error.message}}</p>
                </div>
                <v-btn dark class="blue darken-3" @click="register">Register</v-btn>
            </panel>
        </v-flex>
    </v-layout>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'
import Panel from './Panel'

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
    },
    components: {
        Panel
    }
}
</script>

<style scoped>
    .error-message {
        color: red;
    }
</style>