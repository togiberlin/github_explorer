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
    <p>{{ repoItem.description }}</p>
    <div>
      <RepoListItemKpi :repoItem="repoItem" />
      <RepoListItemDetail :repoItem="repoItem" />
    </div>
  </div>
</template>

<script lang="ts">
import { FavoriteActions } from '@/store/modules/favorite/types';
import Vue from 'vue';
import { mapActions } from 'vuex';
import RepoListItemKpi from './RepoListItemKpi.vue';
import RepoListItemDetail from './RepoListItemDetail.vue';
import { RepoComponents, RepoProps } from './types';

const RepoListItemComponent = Vue.extend({
  name: RepoComponents.REPO_LIST_ITEM,
  props: [RepoProps.REPO_ITEM],
  methods: {
    ...mapActions([
      FavoriteActions.ADD_FAVORITE_ITEM,
    ]),
  },
  components: {
    RepoListItemKpi,
    RepoListItemDetail,
  },
});

export default RepoListItemComponent;
</script>

<style scoped lang="scss">
.tag {
  cursor: pointer;
}
</style>
