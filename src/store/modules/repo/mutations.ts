import {
  RepoMutationTypes, RepoState, RepoItem,
} from './types';

const mutations = {
  [RepoMutationTypes.UPDATE_REPO_ITEMS](state: RepoState, payload: RepoItem[]) {
    state.repoItems = payload;
  },

  [RepoMutationTypes.UPDATE_REPO_HTTP_ERROR](state: RepoState, payload: Error) {
    state.httpError = payload;
  },

  [RepoMutationTypes.CHANGE_PAGE](state: RepoState, payload: number) {
    state.pagination.currentPage = payload;
  },

  [RepoMutationTypes.TOGGLE_REPO_DETAILS](state: RepoState, payload: number) {
    if (payload === state.expandedRepoDetailId) {
      state.expandedRepoDetailId = null;
      return;
    }

    state.expandedRepoDetailId = payload;
  },
};

export default mutations;
