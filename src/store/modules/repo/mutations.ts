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
};

export default mutations;
