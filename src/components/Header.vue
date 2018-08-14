<template>
    <v-toolbar fixed dark class="blue darken-3">
        <v-menu v-if="$store.state.isUserLoggedIn" offset-y>
            <v-btn 
                slot="activator"
                dark
                icon>
                <v-icon>menu</v-icon>
            </v-btn>
            <v-list>
                <v-list-tile
                    v-for="(item, i) in menuItems" 
                    :key="i"
                    @click="navigateTo({ name: item.path })">
                    <v-list-tile-title>{{item.title}}</v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-menu>
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
            <v-menu v-if="$store.state.isUserLoggedIn" offset-y>
                <v-btn slot="activator" dark icon>
                    <v-avatar>
                        <v-icon dark>account_circle</v-icon>
                    </v-avatar>
                </v-btn>
                <v-list>
                    <v-list-tile>
                        <v-list-tile-title>{{ this.$store.state.account.username }}</v-list-tile-title>
                    </v-list-tile>
                    <v-divider></v-divider>
                    <v-list-tile @click="navigateTo({ name: 'profile' })">
                        <v-list-tile-title>Profile</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile @click="logout()">
                        <v-list-tile-title>Log Out</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
    data() {
        return {
            menuItems: [
                { 
                    title: "Expenses", 
                    path: 'expenses' 
                },
                { 
                    title: "Report",
                    path: 'report'
                }
            ]
        }
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route);
        },
        logout() {
            this.$store.dispatch('setToken', null);
            this.$store.dispatch('setAccount', null);
            this.$router.push({name: 'root'});
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
 

