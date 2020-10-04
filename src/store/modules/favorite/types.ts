import { RepoItem } from '../repo/types';

export enum FavoriteMutations {
  UPDATE_FAVORITE_ITEMS = 'UPDATE_FAVORITE_ITEMS',
  UPDATE_FAVORITE_HTTP_ERROR = 'UPDATE_FAVORITE_HTTP_ERROR',
}

export enum FavoriteActions {
  GET_FAVORITE_ITEMS = 'getFavoriteItems',
  ADD_FAVORITE_ITEM = 'addFavoriteItem',
  REMOVE_FAVORITE_ITEM = 'removeFavoriteItem',
  REMOVE_ALL_FAVORITE_ITEMS = 'removeAllFavoriteItems',
}

export enum FavoriteGetters {
  FAVORITE_ITEMS = 'favoriteItems',
  FAVORITE_QUANTITY = 'favoriteQuantity',
  HTTP_ERROR = 'httpError',
}

export type FavoriteItem = RepoItem;

export interface FavoriteState {
  favoriteItems: FavoriteItem[];
  httpError: Error | null;
}
