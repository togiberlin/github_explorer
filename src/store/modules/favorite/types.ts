import { RepoItem } from '../repo/types';

export enum FavoriteMutationTypes {
  UPDATE_FAVORITE_ITEMS = 'UPDATE_FAVORITE_ITEMS',
}

export interface FavoriteItem extends RepoItem {}

export interface FavoriteState {
  favoriteItems: FavoriteItem[];
}
