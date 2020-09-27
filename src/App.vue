<template>
  <div id="app">
    <div class="container">
      <div class="columns">
        <div class="column is-3">
          <FavoriteList />
        </div>

        <div class="column is-9">
          <RepoList />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import FavoriteList from './components/favorite/FavoriteList.vue';
import RepoList from './components/repo/RepoList.vue';

const AppComponent = Vue.extend({
  name: 'App',
  components: {
    FavoriteList,
    RepoList,
  },
});

export default AppComponent;
</script>

<style lang="scss">
html, body {
  background: #F2F6FA;
}

#app {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

[v-cloak] {
  display: none;
}

@media screen and (min-width: 769px) {
  html, body {
    height: 100%;
  }
}
</style>
