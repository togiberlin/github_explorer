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
    <span class="has-text-primary has-text-weight-bold">
      <i class="fa fa-code"></i> {{ repoItem.details?.language }}
    </span>
    <span class="has-text-primary has-text-weight-bold">
      <i class="fa fa-star"></i> {{ repoItem.details?.stargazers_count }} Stars
    </span>
    <span class="has-text-primary has-text-weight-bold">
      <i class="fa fa-star"></i> {{ repoItem.details?.watchers_count }} Watchers
    </span>
    <span class="has-text-primary has-text-weight-bold">
      <i class="fa fa-share-alt"></i> {{ repoItem.details?.forks_count }} Forks
    </span>
    <RepoListItemDetails :repoItem="repoItem" />
  </div>
</template>

<script lang="ts">
import { mapActions } from 'vuex';
import RepoListItemDetails from './RepoListItemDetails.vue';

export default {
  name: 'RepoListItem',
  props: ['repoItem'],
  methods: {},
  components: {
    RepoListItemDetails,
  },
};
</script>

<style scoped lang="scss">
.tag {
  cursor: pointer;
}
</style>
