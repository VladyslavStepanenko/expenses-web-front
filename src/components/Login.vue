<template>
    <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
            <panel title="Login">
                <form>
                    <v-text-field type="text" name="username" placeholder="Username" v-model="username"></v-text-field>
                    <v-text-field type="password" name="password" placeholder="Password" v-model="password"></v-text-field>
                </form>
                <div class="error-message">
                    <p v-for="error in errors" :key="error.message">{{error.message}}</p>
                </div>
                <v-btn dark class="blue darken-3" @click="login">Login</v-btn>
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
                this.$store.dispatch('setAccount', res.data.account);
                
                // redirect to expenses page
                this.$router.push('expenses');
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


