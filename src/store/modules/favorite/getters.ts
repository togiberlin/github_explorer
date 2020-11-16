import { FavoriteGetters, FavoriteState } from './types';

const getters = {
  [FavoriteGetters.FAVORITE_ITEMS]: (state: FavoriteState) => state.favoriteItems,
  [FavoriteGetters.FAVORITE_QUANTITY]: (state: FavoriteState) => state.favoriteItems.length,
  [FavoriteGetters.HTTP_ERROR]: (state: FavoriteState) => state.httpError,
};

export default getters;
