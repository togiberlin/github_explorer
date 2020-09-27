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
    <div>
      <span class="has-text-primary has-text-weight-bold">
        <i class="fa fa-user"></i> <a :href="repoItem.owner.url">{{ repoItem.owner.login }}</a>
      </span>
      <span class="has-text-primary has-text-weight-bold">
        <i class="fa fa-code"></i> {{ (((repoItem || {}).details || {}).language) }}
      </span>
      <span class="has-text-primary has-text-weight-bold">
        <i class="fa fa-star"></i> {{ (((repoItem || {}).details || {}).stargazers_count) }} Stars
      </span>
      <span class="has-text-primary has-text-weight-bold">
        <i class="fa fa-binoculars">
        </i> {{ (((repoItem || {}).details || {}).watchers_count) }} Watchers
      </span>
      <span class="has-text-primary has-text-weight-bold">
        <i class="fa fa-share-alt"></i> {{ (((repoItem || {}).details || {}).forks_count) }} Forks
      </span>
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
    ]),
  },
  watch: {
    repoItem() {
      this.$forceUpdate();
    },
  },
  components: {
    RepoListItemDetails,
  },
  updated() {
    console.log(this.repoItem.details);
  },
});

export default RepoListItemComponent;
</script>

<style scoped lang="scss">
.tag {
  cursor: pointer;
}
</style>
