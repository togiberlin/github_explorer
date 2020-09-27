import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import { FavoriteState } from './types';

const state: FavoriteState = {
  favoriteItems: [],
  httpError: undefined,
};

const favoriteModule = {
  state,
  mutations,
  actions,
  getters,
};

export default favoriteModule;
