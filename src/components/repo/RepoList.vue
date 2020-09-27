<template>
  <div id="repos" class="box">
    <div class="repos--header has-text-centered">
      <i class="fa fa-2x fa-github"></i>
    </div>
    <!-- Repo search -->
    <div class="repo-list">
      <div v-for="repoItem in repoItems" :key="repoItem.id" class="repo-list--item">
        <RepoListItem :repoItem="repoItem" />
      </div>
    </div>
    <!-- Repo pagination -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import RepoListItem from './RepoListItem.vue';

const RepoListComponent = Vue.extend({
  name: 'RepoList',
  computed: {
    ...mapGetters([
      'repoItems',
    ]),
  },
  created() {
    // FIXME: TS can't find injected $store.
    // To fix warning, convert from VueJS2 options API to VueJS 3 composition API.
    // @ts-ignore
    this.$store.dispatch('getRepoItems');
  },
  components: {
    RepoListItem,
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
