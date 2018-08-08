<template>
    <v-toolbar fixed dark class="blue darken-3">
        <v-toolbar-title class="mr-4">
            <span @click="navigateTo({name: 'root'})" class="home">Expenses Tracker</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn v-if="!$store.state.isUserLoggedIn" flat dark>
                <router-link to="register">Sign up</router-link>
            </v-btn>
            <v-btn v-if="!$store.state.isUserLoggedIn" flat dark>
                <router-link to="login">Sign in</router-link>
            </v-btn>
            <v-btn v-if="$store.state.isUserLoggedIn" flat dark @click="logout">
                Log out
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
    methods: {
        navigateTo(route) {
            this.$router.push(route);
        },
        logout() {
            this.$store.dispatch('setToken', null);
        }
    }
}
</script>
 <style scope>
    a {
        text-decoration: none;
        color: white;
    }
    .home {
        cursor: pointer;
    }
 </style>
 

