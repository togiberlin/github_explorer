import { RepoItem } from '../repo/types';

export enum FavoriteMutationTypes {
  UPDATE_FAVORITE_ITEMS = 'UPDATE_FAVORITE_ITEMS',
}

export enum FavoriteActionTypes {
  GET_FAVORITE_ITEMS = 'getFavoriteItems',
  ADD_FAVORITE_ITEM = 'addFavoriteItem',
  REMOVE_FAVORITE_ITEM = 'removeFavoriteItem',
  REMOVE_ALL_FAVORITE_ITEMS = 'removeAllFavoriteItems',
}

export interface FavoriteItem extends RepoItem {}

export interface FavoriteState {
  favoriteItems: FavoriteItem[];
}
