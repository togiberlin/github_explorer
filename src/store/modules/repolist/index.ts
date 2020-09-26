import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const state = {
  repolistItems: [],
};

const repolistModule = {
  state,
  mutations,
  actions,
  getters,
};

export default repolistModule;