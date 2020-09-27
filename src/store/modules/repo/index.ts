import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import { RepoState } from './types';

const state: RepoState = {
  repoItems: [],
  httpError: undefined,
};

const repoModule = {
  state,
  mutations,
  actions,
  getters,
};

export default repoModule;
