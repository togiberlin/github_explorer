<template>
  <div>
    tbd
  </div>
</template>

<script lang="ts">
import { RepoItem } from '@/store/modules/repo/types';
import Vue from 'vue';

const RepoListItemDetails = Vue.extend({
  name: 'RepoListItemDetails',
  props: ['repoItem'],
});

export default RepoListItemDetails;
</script>

<style scoped lang="scss">
</style>
