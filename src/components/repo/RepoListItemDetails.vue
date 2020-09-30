<template>
  <div>
    <div class="level-item pt-2 pb-2">
      <div @click="isDetailVisible = !isDetailVisible">
        <i :class="[
          isDetailVisible ?
            'fa fa-chevron-up is-clickable is-gray' :
            'fa fa-chevron-down is-clickable is-gray',
        ]" aria-hidden="true"></i>
        <span v-text="toggleText[isDetailVisible * 1]" class="is-clickable is-gray pl-2"></span>
      </div>
    </div>
    <div v-if="isDetailVisible"
      class="level">
      <span class="level-item pr-2">
        <i class="fa fa-user"></i> <a :href="repoItem.owner.url">{{ repoItem.owner.login }}</a>
      </span>
      <span class="level-item pl-2 pr-2">
        <i class="fa fa-code"></i> {{ repoItem.language }}
      </span>
      <span class="level-item pl-2 pr-2">
        <i class="fa fa-star"></i> {{ repoItem.stargazers_count }}
      </span>
      <span class="level-item pl-2 pr-2">
        <i class="fa fa-eye">
        </i> {{ repoItem.watchers_count }}
      </span>
      <span class="level-item pl-2">
        <i class="fa fa-share-alt"></i> {{ repoItem.forks_count }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { RepoActionTypes } from '@/store/modules/repo/types';

const RepoListItemDetails = Vue.extend({
  name: 'RepoListItemDetails',
  props: ['repoItem'],
  data() {
    return {
      toggleText: ['Show Details', 'Hide Details'],
      isDetailVisible: false,
    };
  },
});

export default RepoListItemDetails;
</script>

<style scoped lang="scss">
.is-clickable {
  cursor: pointer;
}

.is-gray {
  color: gray;
}
</style>
