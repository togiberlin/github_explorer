import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const state = {
  favoriteItems: [],
};

const favoriteModule = {
  state,
  mutations,
  actions,
  getters,
};

export default favoriteModule;
