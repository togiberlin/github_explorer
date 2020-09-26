import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const state = {
  repoItems: [],
};

const repoModule = {
  state,
  mutations,
  actions,
  getters,
};

export default repoModule;
