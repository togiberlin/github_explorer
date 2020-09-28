<template>
  <div>
    <h2 class="has-text-weight-bold">
      <a :href="repoItem.html_url">{{ repoItem.name }}</a>
    </h2>
    <span
      @click="addFavoriteItem(repoItem)"
      class="tag is-primary is-pulled-right has-text-white">
      Add to Favorites
    </span>
    <span
      @click="toggleRepoDetails(repoItem)"
      class="tag is-primary is-pulled-right-has-text-white">
      Show Details
    </span>
    <p>{{ repoItem.description }}</p>
    <div v-if="repoItem.isDetailVisible">
      <RepoListItemDetails :repoItem="repoItem" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';
import RepoListItemDetails from './RepoListItemDetails.vue';

const RepoListItemComponent = Vue.extend({
  name: 'RepoListItem',
  props: ['repoItem'],
  methods: {
    ...mapActions([
      'addFavoriteItem',
      'toggleRepoDetails',
    ]),
  },
  components: {
    RepoListItemDetails,
  },
});

export default RepoListItemComponent;
</script>

<style scoped lang="scss">
.tag {
  cursor: pointer;
}
</style>
