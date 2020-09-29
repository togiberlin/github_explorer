<template>
  <div>
    <h2 class="has-text-weight-bold">
      <a :href="repoItem.html_url">{{ repoItem.owner.login }} / {{ repoItem.name }}</a>
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
    <div v-show="repoItem.isDetailVisible">
      <RepoListItemDetails :repoItem="repoItem" />
    </div>
  </div>
</template>

<script lang="ts">
import { FavoriteActionTypes } from '@/store/modules/favorite/types';
import { RepoActionTypes } from '@/store/modules/repo/types';
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';
import RepoListItemDetails from './RepoListItemDetails.vue';

const RepoListItemComponent = Vue.extend({
  name: 'RepoListItem',
  props: ['repoItem'],
  methods: {
    ...mapActions([
      FavoriteActionTypes.ADD_FAVORITE_ITEM,
      RepoActionTypes.TOGGLE_REPO_DETAILS,
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
