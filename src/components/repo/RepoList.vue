<template>
  <div id="repos" class="box">
    <div class="repos--header has-text-centered">
      <i class="fa fa-2x fa-github"></i>
      <h1>GitHub Explorer</h1>
    </div>
    <!-- Repo search -->
    <div class="repo-list">
      <div v-for="repoItem in repoItemsForCurrentPage" :key="repoItem.id" class="repo-list--item">
        <RepoListItem :repoItem="repoItem" />
      </div>
    </div>
    <div class="repo-pagination">
      <RepoPagination />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import RepoListItem from './RepoListItem.vue';
import RepoPagination from './RepoPagination.vue';

const RepoListComponent = Vue.extend({
  name: 'RepoList',
  computed: {
    ...mapGetters([
      'repoItemsForCurrentPage',
    ]),
  },
  beforeCreate() {
    // @ts-ignore
    this.$store.dispatch('getRepoItems').then(() => {
      // @ts-ignore
      this.$store.dispatch('getRepoDetails');
    });
  },
  components: {
    RepoListItem,
    RepoPagination,
  },
});

export default RepoListComponent;
</script>

<style scoped lang="scss">
.tag {
  cursor: pointer;
}

.repo--header {
  border-bottom: 1px solid #E8E8E8;
  padding-bottom: 15px;
}

.repo-list {
  padding-top: 10px;
}

.repo-list--item {
  padding: 10px 0;
}
</style>
