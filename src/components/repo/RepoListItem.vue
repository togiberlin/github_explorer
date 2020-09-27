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
    <p>{{ repoItem.description }}</p>
    <span class="has-text-primary has-text-weight-bold">
      <i class="fa fa-user"></i> <a :href="repoItem.owner.url">{{ repoItem.owner.login }}</a>
    </span>
    <div v-if="repoItem.details">
    <span class="has-text-primary has-text-weight-bold">
      <i class="fa fa-code"></i> {{ repoItem.details.language }}
    </span>
    <span class="has-text-primary has-text-weight-bold">
      <i class="fa fa-star"></i> {{ repoItem.details.stargazers_count }} Stars
    </span>
    <span class="has-text-primary has-text-weight-bold">
      <i class="fa fa-binoculars"></i> {{ repoItem.details.watchers_count }} Watchers
    </span>
    <span class="has-text-primary has-text-weight-bold">
      <i class="fa fa-share-alt"></i> {{ repoItem.details.forks_count }} Forks
    </span>
    <RepoListItemDetails :repoItem="repoItem" />
    </div>

  </div>
</template>

<script lang="ts">
import { RepoActionTypes } from '@/store/modules/repo/types';
import Vue from 'vue';
import { mapActions } from 'vuex';
import RepoListItemDetails from './RepoListItemDetails.vue';

const RepoListItemComponent = Vue.extend({
  name: 'RepoListItem',
  props: ['repoItem'],
  methods: {
    ...mapActions([
      'addFavoriteItem',
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
