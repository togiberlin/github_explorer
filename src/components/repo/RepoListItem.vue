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
      <RepoListItemDetails :repoItem="repoItem" />
    </div>
  </div>
</template>

<script lang="ts">
import { FavoriteActionTypes } from '@/store/modules/favorite/types';
import { RepoActionTypes } from '@/store/modules/repo/types';
import Vue from 'vue';
import { mapActions } from 'vuex';
import RepoListItemKpi from './RepoListItemKpi.vue';
import RepoListItemDetail from './RepoListItemDetail.vue';

const RepoListItemComponent = Vue.extend({
  name: 'RepoListItem',
  props: ['repoItem'],
  methods: {
    ...mapActions([
      FavoriteActionTypes.ADD_FAVORITE_ITEM,
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
