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
import { RepoActionTypes, RepoGetterTypes } from '@/store/modules/repo/types';
import Vue from 'vue';
import { mapGetters } from 'vuex';
import RepoListItem from './RepoListItem.vue';
import RepoPagination from './RepoPagination.vue';

const RepoListComponent = Vue.extend({
  name: 'RepoList',
  computed: {
    ...mapGetters([
      RepoGetterTypes.REPO_ITEMS_FOR_CURRENT_PAGE,
    ]),
  },
  beforeCreate() {
    // @ts-ignore
    this.$store.dispatch(RepoActionTypes.GET_REPO_ITEMS).then(() => {
      // @ts-ignore
      this.$store.dispatch(RepoActionTypes.GET_REPO_DETAILS);
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

.repo-pagination {
  padding: 10px 0;
}
</style>
