<template>
  <div id="app">
    <v-app>
      <v-content>
        <page-header></page-header>
        <main>
          <v-container fluid fill-height>
            <router-view></router-view>
          </v-container>
        </main>
      </v-content>
    </v-app>
  </div>
</template>

<script>

import PageHeader from './components/Header.vue'

export default {
  name: 'app',
  components: {
    PageHeader
  }
}
</script>

<style scoped>
  main {
    margin: 60px;
  }
</style>
