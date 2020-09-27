import { RepoItem } from '../repo/types';
import { FavoriteMutationTypes, FavoriteState } from './types';

const mutations = {
  [FavoriteMutationTypes.UPDATE_FAVORITE_ITEMS](state: FavoriteState, payload: RepoItem[]) {
    state.favoriteItems = payload;
  }
};

export default mutations;
