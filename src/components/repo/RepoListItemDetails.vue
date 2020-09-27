<template>
  <div>
    <span class="has-text-primary">
      <i class="fa fa-user"></i> <a :href="repoItem.owner.url">{{ repoItem.owner.login }}</a>
    </span>
    <span class="has-text-primary">
      <i class="fa fa-code"></i> {{ (((repoItem || {}).details || {}).language) }}
    </span>
    <span class="has-text-primary">
      <i class="fa fa-star"></i> {{ (((repoItem || {}).details || {}).stargazers_count) }} Stars
    </span>
    <span class="has-text-primary">
      <i class="fa fa-binoculars">
      </i> {{ (((repoItem || {}).details || {}).watchers_count) }} Watchers
    </span>
    <span class="has-text-primary">
      <i class="fa fa-share-alt"></i> {{ (((repoItem || {}).details || {}).forks_count) }} Forks
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

const RepoListItemDetails = Vue.extend({
  name: 'RepoListItemDetails',
  props: ['repoItem'],
});

export default RepoListItemDetails;
</script>

<style scoped lang="scss">

</style>
