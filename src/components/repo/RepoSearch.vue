<template>
  <div>
    <form @submit="submitSearchQuery">
      <div class="field">
        <div class="control has-icons-left has-icons-right">
          <input
            v-model="searchParams.q"
            class="input"
            type="text"
            placeholder="Enter search query and type enter ...">
          <span class="icon is-small is-left">
            <i class="fa fa-search"></i>
         </span>
         <span v-if="searchParams.q" class="icon is-small is-right">
           <i class="fa fa-level-down fa-rotate-90 is-blinking"></i>
         </span>
        </div>
      </div>
      <div class="level">
      <div class="field level-item">
        <div class="select control">
          <select v-model="searchParams.sort">
            <option value="">Sort by Relevancy (default)</option>
            <option value="stars">Sort by Stars</option>
            <option value="forks">Sort by Forks</option>
            <option value="help-wanted-issues">Sort by Help-Wanted-Issues</option>
            <option value="updated">Sort by Last Updated</option>
          </select>
        </div>
      </div>
      <div class="field level-item">
        <div class="select control">
          <select :disabled="!searchParams.sort" v-model="searchParams.order">
            <option disabled value="">Ordering</option>
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
        </div>
      </div>
      </div>
    </form>

    <div v-if="isFetchingData" class="level">
      <diamond class="level-item"></diamond>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Diamond } from 'vue-loading-spinner';
import { RepoActionTypes } from '@/store/modules/repo/types';

const RepoSearchComponent = Vue.extend({
  name: 'RepoSearch',
  data() {
    return {
      isFetchingData: false,
      searchParams: {
        q: '',
        sort: '',
        order: '',
        // eslint-disable-next-line
        per_page: 100,
        page: 1,
      },
    };
  },
  methods: {
    submitSearchQuery(event: Event) {
      this.isFetchingData = true;
      event.preventDefault();

      this.$store.dispatch(RepoActionTypes.SEARCH_FOR_REPOS, this.searchParams).then(() => {
        this.isFetchingData = false;
      });
    },
  },
  components: {
    Diamond,
  },
});

export default RepoSearchComponent;
</script>

<style scoped lang="scss">
.is-blinking {
  animation: blinker 1s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>
