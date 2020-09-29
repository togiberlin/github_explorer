import axios from 'axios';
import { FavoriteActionTypes, FavoriteItem, FavoriteMutationTypes } from './types';

const actions = {
  async [FavoriteActionTypes.GET_FAVORITE_ITEMS](context: any) {
    try {
      const response = await axios.get<FavoriteItem[]>('/api/favorite');
      context.commit(FavoriteMutationTypes.UPDATE_FAVORITE_ITEMS, response.data);
    } catch (e) {
      console.error(`Fetching favorite items has failed: ${e}`);
      context.commit(FavoriteMutationTypes.UPDATE_FAVORITE_HTTP_ERROR, e);
    }
  },

  async [FavoriteActionTypes.ADD_FAVORITE_ITEM](
    context: any,
    favoriteItem: FavoriteItem,
  ) {
    try {
      const response = await axios.post<FavoriteItem>('/api/favorite', favoriteItem);
      context.commit(FavoriteMutationTypes.UPDATE_FAVORITE_ITEMS, response.data);
    } catch (e) {
      console.error(`Adding favorite item has failed: ${e}`);
      context.commit(FavoriteMutationTypes.UPDATE_FAVORITE_HTTP_ERROR, e);
    }
  },

  async [FavoriteActionTypes.REMOVE_FAVORITE_ITEM](
    context: any,
    favoriteItem: FavoriteItem,
  ) {
    try {
      const response = await axios.delete<FavoriteItem>(`/api/favorite/${favoriteItem.id}`);
      context.commit(FavoriteMutationTypes.UPDATE_FAVORITE_ITEMS, response.data);
    } catch (e) {
      console.error(`Removing favorite item has failed: ${e}`);
      context.commit(FavoriteMutationTypes.UPDATE_FAVORITE_HTTP_ERROR, e);
    }
  },

  async [FavoriteActionTypes.REMOVE_ALL_FAVORITE_ITEMS](context: any) {
    try {
      const response = await axios.delete<[]>('/api/favorite/');
      context.commit(FavoriteMutationTypes.UPDATE_FAVORITE_ITEMS, response.data);
    } catch (e) {
      console.error(`Removing all favorite item has failed: ${e}`);
      context.commit(FavoriteMutationTypes.UPDATE_FAVORITE_HTTP_ERROR, e);
    }
  },
};

export default actions;
