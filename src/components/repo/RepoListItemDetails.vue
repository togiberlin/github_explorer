<template>
  <div>
    <foldable>
      Content here
    </foldable>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import VueFoldable from 'vue-foldable';
import 'vue-foldable/dist/vue-foldable.css'

const RepoListItemDetails = Vue.extend({
  name: 'RepoListItemDetails',
  props: ['repoItem'],
  components: {
    VueFoldable
  },
});

export default RepoListItemDetails;
</script>

<style scoped lang="scss">
</style>
