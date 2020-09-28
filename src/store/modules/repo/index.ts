import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import { RepoState } from './types';

const state: RepoState = {
  repoItems: [],
  pagination: {
    currentPage: 1,
    itemsPerPage: 5,
  },
  httpError: null,
};

const repoModule = {
  state,
  mutations,
  actions,
  getters,
};

export default repoModule;
