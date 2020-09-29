<template>
  <div>
    <span class="has-text-secondary">
      <i class="fa fa-user"></i> <a :href="repoItem.owner.url">{{ repoItem.owner.login }}</a>
    </span>
    <span class="has-text-secondary">
      <i class="fa fa-code"></i> {{ repoDetails.language }} Language
    </span>
    <span class="has-text-secondary">
      <i class="fa fa-star"></i> {{ repoDetails.stars }} Stars
    </span>
    <span class="has-text-tertiary">
      <i class="fa fa-binoculars">
      </i> {{ repoDetails.watchers }} Watchers
    </span>
    <span class="has-text-tertiary">
      <i class="fa fa-share-alt"></i> {{ repoDetails.forks }} Forks
    </span>
  </div>
</template>

<script lang="ts">
import { RepoItem } from '@/store/modules/repo/types';
import Vue from 'vue';

const RepoListItemDetails = Vue.extend({
  name: 'RepoListItemDetails',
  props: ['repoItem'],
  data() {
    return {
      repoDetails: {
        language: 'Loading...',
        stars: 'Loading...',
        watchers: 'Loading...',
        forks: 'Loading...',
      },
    };
  },
  watch: {
    repoItem(newValue: RepoItem, _oldValue: RepoItem) {
      if (newValue.details || _oldValue.details) {
        this.repoDetails.language = this.$props.repoItem.details.language;
        this.repoDetails.stars = this.$props.repoItem.details.stars;
        this.repoDetails.watchers = this.$props.repoItem.details.watchers;
        this.repoDetails.forks = this.$props.repoItem.details.forks;
      }
    },
  },
});

export default RepoListItemDetails;
</script>

<style scoped lang="scss">

</style>
