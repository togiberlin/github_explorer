<template>
  <div>
    <span class="pr-2">
      <i class="fa fa-user"></i> <a :href="repoItem.owner.url">{{ repoItem.owner.login }}</a>
    </span>
    <span class="pl-2 pr-2">
      <i class="fa fa-code"></i> {{ repoItem.language }}
    </span>
    <span class="pl-2 pr-2">
      <i class="fa fa-star"></i> {{ repoItem.stargazers_count }}
    </span>
    <span class="pl-2 pr-2">
      <i class="fa fa-eye">
      </i> {{ repoItem.watchers_count }}
    </span>
    <span class="pl-2">
      <i class="fa fa-share-alt"></i> {{ repoItem.forks_count }}
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

const RepoListItemKpiComponent = Vue.extend({
  name: 'RepoListItemKpi',
  props: ['repoItem'],
});

export default RepoListItemKpiComponent;
</script>

<style scoped lang="scss">
.fa-user {
  color: #6d6c6c;
};

.fa-code {
  color: #4CC3D9;
}

.fa-star {
  color: #FFC65D;
};

.fa-eye {
  color: #F16645;
}

.fa-share-alt {
  color: #37A7D4;
};
</style>
