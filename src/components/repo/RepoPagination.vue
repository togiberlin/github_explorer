<template>
  <div class="repo-pagination">
    <nav class="is-centered pagination is-small" role="navigation" aria-label="pagination">
      <paginate
        :page-count="pageCount"
        :click-handler="onClickPagination"
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
import { mapGetters } from 'vuex';
import Paginate from 'vuejs-paginate';
import { RepoActions, RepoGetters } from '@/store/modules/repo/types';
import { RepoComponents } from './types';

const RepoPaginationComponent = Vue.extend({
  name: RepoComponents.REPO_PAGINATION,
  computed: {
    ...mapGetters([
      RepoGetters.PAGE_COUNT,
    ]),
  },
  methods: {
    onClickPagination(desiredPage: number) {
      this.$store.dispatch(RepoActions.CHANGE_PAGE, desiredPage);
    },
  },
  components: {
    Paginate,
  },
});

export default RepoPaginationComponent;
</script>

<style scoped lang="scss">
</style>
