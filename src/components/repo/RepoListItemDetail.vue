<template>
  <div>
    <div class="level-item pt-1 pb-1">
      <div @click="toggleRepoDetails(repoItem.id)">
        <i :class="[
          expandedRepoDetailId === repoItem.id ?
            'fa fa-chevron-up is-clickable is-gray' :
            'fa fa-chevron-down is-clickable is-gray',
        ]" aria-hidden="true"></i>
        <span v-text="toggleText[(expandedRepoDetailId === repoItem.id) * 1]"
          class="is-clickable is-gray pl-2"></span>
      </div>
    </div>
    <div v-if="expandedRepoDetailId === repoItem.id">
      <div class="level mb-1">
        <span class="level-item">
          SSH Clone URL: <pre class="ml-2 pl-1 pr-1">{{ repoItem.ssh_url }}</pre>
        </span>

      </div>
      <div class="level mb-1">
        <span class="level-item">
          HTTPS Clone URL: <pre class="ml-2 pl-1 pr-2">{{ repoItem.clone_url }}</pre>
        </span>
      </div>
      <div class="level mb-1">
        <span class="level-item pr-2">
          Size: {{ repoItem.size / 1000 }} MByte
        </span>
        <span class="level-item pr-2">
          Is Archived: {{ repoItem.archived }}
        </span>
        <span class="level-item pl-2 pr-2">
          Is Fork: {{ repoItem.fork }}
        </span>
        <span class="level-item pl-2 pr-2">
          License: {{ ((repoItem.license || {}).name || null) || 'Unlicensed' }}
        </span>
      </div>
      <div class="level mb-1">
        <span class="level-item pr-2">
          Created at: {{ formatDate(repoItem.created_at) }}
        </span>
        <span class="level-item pl-2 pr-2">
          Last update: {{ formatDate(repoItem.updated_at) }}
        </span>
        <span class="level-item pl-2 pr-2">
          Last push: {{ formatDate(repoItem.pushed_at) }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { RepoActions, RepoGetters } from '@/store/modules/repo/types';
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';
import { RepoComponents, RepoProps } from './types';

const RepoListItemDetailComponent = Vue.extend({
  name: RepoComponents.REPO_LIST_ITEM_DETAIL,
  props: [RepoProps.REPO_ITEM],
  data() {
    return {
      toggleText: ['Show Details', 'Hide Details'],
    };
  },
  computed: {
    ...mapGetters([
      RepoGetters.EXPANDED_REPO_DETAIL_ID,
    ]),
  },
  methods: {
    formatDate(isoDate: string) {
      return new Date(isoDate).toLocaleString();
    },
    ...mapActions([
      RepoActions.TOGGLE_REPO_DETAILS,
    ]),
  },
});

export default RepoListItemDetailComponent;
</script>

<style scoped lang="scss">
pre {
  background-color: lightgrey;
  color: black;
  font-family: Fixedsys,Courier,monospace;
  padding: 1px;
  border-radius: 2px;
}

.is-clickable {
  cursor: pointer;
}

.is-gray {
  color: gray;
}
</style>
