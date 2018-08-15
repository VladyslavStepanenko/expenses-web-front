<template>
    <div>
        <v-navigation-drawer
            v-if="$store.state.isUserLoggedIn"
            v-model="drawer"
            :clipped="$vuetify.breakpoint.lgAndUp"
            fixed
            app>
            <v-list dense>
                <template v-for="item in menuItems">
                    <v-list-tile :key="item.text" :to="{ name: item.path }">
                        <v-list-tile-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.text }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app fixed dark class="blue darken-3" :clipped-left="$vuetify.breakpoint.lgAndUp">
            <v-toolbar-title class="mr-4">
                <v-toolbar-side-icon
                    v-if="$store.state.isUserLoggedIn"
                    @click.stop="drawer = !drawer">
                </v-toolbar-side-icon>
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
                    <v-btn slot="activator" dark icon large>
                        <v-avatar tile>
                            <img src="https://cdn.vuetifyjs.com/images/logos/logo.svg" alt="Vuetify">
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
    </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        {
          icon: "fa-dollar-sign",
          text: "Expenses",
          path: "expenses"
        },
        {
          icon: "fa-chart-area",
          text: "Report",
          path: "report"
        }
      ],
      drawer: null
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setAccount", null);
      this.$router.push({ name: "root" });
    }
  }
};
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
 

