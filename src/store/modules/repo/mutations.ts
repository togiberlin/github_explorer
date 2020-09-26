import {
  RepoMutationTypes, RepoState, RepoItem, RepoDetail,
} from './types';

const mutations = {
  [RepoMutationTypes.UPDATE_REPO_ITEMS](state: RepoState, payload: RepoItem[]) {
    state.repoItems = payload;
  },
  [RepoMutationTypes.UPDATE_REPO_DETAILS](state: RepoState, payload: RepoDetail) {
    const repoIndex = state.repoItems.findIndex(
      (repoItem: RepoItem) => repoItem.full_name === payload.full_name,
    );
    state.repoItems[repoIndex].details = payload;
  },
};

export default mutations;
