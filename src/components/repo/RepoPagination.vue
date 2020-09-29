<template>
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
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import Paginate from 'vuejs-paginate';

const RepoPaginationComponent = Vue.extend({
  name: 'RepoPagination',
  computed: {
    ...mapGetters([
      'pageCount',
    ]),
  },
  methods: {
    ...mapActions([
      'changePage',
    ]),
  },
  components: {
    Paginate,
  },
});

export default RepoPaginationComponent;
</script>

<style scoped lang="scss">
</style>
