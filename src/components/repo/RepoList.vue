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
    <nav class="is-centered pagination is-small" role="navigation" aria-label="pagination">
      <paginate
        :page-count="pageCount"
        :click-handler="changePage"
        :container-class="'pagination-list'"
        :prev-class="'hide'"
        :next-class="'hide'"
        :page-link-class="'pagination-link'"
        :active-class="'is-current'"
        :disabled-class="'pagination-ellipsis'"
        :hide-prev-next="true">
      </paginate>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import Paginate from 'vuejs-paginate';
import RepoListItem from './RepoListItem.vue';

const RepoListComponent = Vue.extend({
  name: 'RepoList',
  computed: {
    ...mapGetters([
      'repoItemsForCurrentPage',
      'currentPage',
      'itemsPerPage',
      'pageCount',
    ]),
  },
  methods: {
    ...mapActions([
      'changePage',
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
    Paginate,
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

.hide {
  display: false;
}
</style>
