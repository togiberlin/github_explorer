import axios from 'axios';
import { FavoriteItem, FavoriteMutationTypes } from './types';

const actions = {
  async getFavoriteItems(context: any) {
    try {
      const response = await axios.get<FavoriteItem[]>('/api/favorite');
      context.commit(FavoriteMutationTypes.UPDATE_FAVORITE_ITEMS, response.data);
    } catch (e) {
      console.error(`Fetching favorite items has failed: ${e}`);
      // TODO: commit error object
    }
  },

  async addFavoriteItem(
    context: any,
    favoriteItem: FavoriteItem,
  ) {
    try {
      const response = await axios.post('/api/favorite', favoriteItem);
      context.commit(FavoriteMutationTypes.UPDATE_FAVORITE_ITEMS, response.data);
    } catch (e) {
      console.error(`Adding favorite item has failed: ${e}`);
      // TODO: commit error object
    }
  },

  async removeFavoriteItem(
    context: any,
    favoriteItem: FavoriteItem,
  ) {
    try {
      const response = await axios.post<FavoriteItem>('/api/favorite/delete', favoriteItem);
      context.commit(FavoriteMutationTypes.UPDATE_FAVORITE_ITEMS, response.data);
    } catch (e) {
      console.error(`Removing favorite item has failed: ${e}`);
      // TODO: commit error object
    }
  },

  async removeAllFavoriteItems(context: any) {
    try {
      const response = await axios.post('/api/favorite/delete/all');
      context.commit(FavoriteMutationTypes.UPDATE_FAVORITE_ITEMS, response.data);
    } catch (e) {
      console.error(`Removing all favorite item has failed: ${e}`);
      // TODO: commit error object
    }
  },
};

export default actions;
