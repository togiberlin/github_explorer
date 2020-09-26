<template>
  <div id="repos" class="box">
    <div class="repos--header has-text-centered">
      <i class="fa fa-2x fa-github"></i>
    </div>
    <div class="repo-list">
      <div class="repo-list--item">
        <div>
          <h2 class="has-text-weight-bold">
            Linux Kernel
          </h2>
          <span class="tag is-primary is-pulled-right has-text-white">
              Add to favorites
          </span>
          <p>Some cool repo description</p>
          <span class="has-text-primary has-text-weight-bold">
            <i class="fa fa-code"></i> JavaScript
          </span>
          <span class="has-text-primary has-text-weight-bold">
            <i class="fa fa-star"></i> 321 Stars
          </span>
          <span class="has-text-primary has-text-weight-bold">
            <i class="fa fa-share-alt"></i> 1234 Forks
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex';

export default {
  name: 'RepoList',
  computed: {
    ...mapGetters([
      'repoItems',
    ]),
  },
  created() {
    this.$store.dispatch('getRepoItems');
  },
  components: {},
};
</script>

<style scoped lang="scss">
.tag {
  cursor: pointer;
}

.repo--header {
  border-bottom: 1px solid #E8E8E8;
  padding-bottom: 15px;
}

.repo-list {
  padding-top: 10px;
}

.repo-list--item {
  padding: 10px 0;
}
</style>
