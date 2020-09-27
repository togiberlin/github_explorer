import { FavoriteState } from './types';

const getters = {
  favoriteItems: (state: FavoriteState) => state.favoriteItems,
  favoriteQuantity: (state: FavoriteState) => state.favoriteItems.length,
};

export default getters;
