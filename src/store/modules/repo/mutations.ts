import { RepoMutationTypes, RepoState, RepoItem } from './types';

const mutations = {
  [RepoMutationTypes.UPDATE_REPO_ITEMS](state: RepoState, payload: RepoItem[]) {
    state.repoItems = payload;
  },
};

export default mutations;
