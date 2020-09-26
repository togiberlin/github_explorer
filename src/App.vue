<template>
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
</template>

<script lang="ts">
import FavoriteList from './components/favorite/FavoriteList.vue';
import RepoList from './components/repo/RepoList.vue';

export default {
  name: 'App',
  components: {
    FavoriteList,
    RepoList,
  },
};
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

@media screen and (min-width: 769px) {
  html, body {
    height: 100%;
  }
}
</style>
