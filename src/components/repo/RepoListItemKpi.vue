<template>
  <div>
    <span class="pr-2">
      <img :src="repoItem.owner.avatar_url" class="gh-user-avatar">
      <a :href="repoItem.owner.html_url" class="pl-1">{{ repoItem.owner.login }}</a>
    </span>
    <span class="pl-2 pr-2">
      <i class="fa fa-code"></i>
      <a :href="languagesUrl" class="pl-1">{{ (repoItem || {}).language || 'Unknown' }}</a>
    </span>
    <span class="pl-2 pr-2">
      <i class="fa fa-star"></i>
      <a :href="stargazersUrl" class="pl-1">{{ repoItem.stargazers_count }} Stars</a>
    </span>
    <span class="pl-2 pr-2">
      <i class="fa fa-eye"></i>
      <a :href="watchersUrl" class="pl-1">{{ repoItem.watchers_count }} Watchers</a>
    </span>
    <span class="pl-2 pr-2">
      <i class="fa fa-share-alt"></i>
      <a :href="forksUrl" class="pl-1">{{ repoItem.forks_count }} Forks</a>
    </span>
    <span class="pl-2">
      <i class="fa fa-question"></i>
      <a :href="issuesUrl" class="pl-1">{{ repoItem.open_issues_count }} Issues</a>
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { RepoComponents, RepoProps } from './types';

const RepoListItemKpiComponent = Vue.extend({
  name: RepoComponents.REPO_LIST_ITEM_KPI,
  props: [RepoProps.REPO_ITEM],
  data() {
    return {
      languagesUrl: `${this.repoItem.html_url}/network/dependencies`,
      stargazersUrl: `${this.repoItem.html_url}/stargazers`,
      watchersUrl: `${this.repoItem.html_url}/watchers`,
      forksUrl: `${this.repoItem.html_url}/network/members`,
      issuesUrl: `${this.repoItem.html_url}/issues`,
    };
  },
});

export default RepoListItemKpiComponent;
</script>

<style scoped lang="scss">
.gh-user-avatar {
  max-width: 13px;
  max-height: 13px;
}

.fa-code {
  color: #003049;
}

.fa-star {
  color: #FFC65D;
};

.fa-eye {
  color: #37A7D4;
}

.fa-share-alt {
  color: #007f5f;
};

.fa-question {
  color: #e63946;
}
</style>
