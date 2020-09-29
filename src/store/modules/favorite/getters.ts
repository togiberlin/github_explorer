import { FavoriteGetterTypes, FavoriteState } from './types';

const getters = {
  [FavoriteGetterTypes.FAVORITE_ITEMS]: (state: FavoriteState) => state.favoriteItems,
  [FavoriteGetterTypes.FAVORITE_QUANTITY]: (state: FavoriteState) => state.favoriteItems.length,
};

export default getters;
