import {
  RepoMutationTypes, RepoState, RepoItem, RepoDetail,
} from './types';

const mutations = {
  [RepoMutationTypes.UPDATE_REPO_ITEMS](state: RepoState, payload: RepoItem[]) {
    state.repoItems = payload;
  },

  [RepoMutationTypes.UPDATE_REPO_DETAILS](state: RepoState, payload: RepoDetail) {
    const repoIndex = state.repoItems.findIndex(
      (repoItem: RepoItem) => repoItem.id === payload.id,
    );

    state.repoItems[repoIndex].isDetailVisible = false;
    state.repoItems[repoIndex].details = payload;
  },

  [RepoMutationTypes.UPDATE_REPO_HTTP_ERROR](state: RepoState, payload: Error) {
    state.httpError = payload;
  },

  [RepoMutationTypes.TOGGLE_REPO_DETAILS](state: RepoState, payload: RepoItem) {
    const repoItemIndex = state.repoItems.findIndex(
      (repoItem: RepoItem) => repoItem.id === payload.id,
    );

    state.repoItems[repoItemIndex].isDetailVisible = !payload.isDetailVisible;
  },

  [RepoMutationTypes.CHANGE_PAGE](state: RepoState, payload: number) {
    state.pagination.currentPage = payload;
  },
};

export default mutations;
