import {
  RepoMutations, RepoState, RepoItem,
} from './types';

const mutations = {
  [RepoMutations.UPDATE_REPO_ITEMS](state: RepoState, payload: RepoItem[]) {
    state.repoItems = payload;
  },

  [RepoMutations.UPDATE_REPO_HTTP_ERROR](state: RepoState, payload: Error) {
    state.httpError = payload;
  },

  [RepoMutations.CHANGE_PAGE](state: RepoState, payload: number) {
    state.pagination.currentPage = payload;
  },

  [RepoMutations.TOGGLE_REPO_DETAILS](state: RepoState, payload: number) {
    if (payload === state.expandedRepoDetailId) {
      state.expandedRepoDetailId = null;
      return;
    }

    state.expandedRepoDetailId = payload;
  },
};

export default mutations;
