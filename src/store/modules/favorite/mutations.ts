import { RepoItem } from '../repo/types';
import { FavoriteMutations, FavoriteState } from './types';

const mutations = {
  [FavoriteMutations.UPDATE_FAVORITE_ITEMS](state: FavoriteState, payload: RepoItem[]) {
    state.favoriteItems = payload;
  },

  [FavoriteMutations.UPDATE_FAVORITE_HTTP_ERROR](state: FavoriteState, payload: Error) {
    state.httpError = payload;
  },
};

export default mutations;
