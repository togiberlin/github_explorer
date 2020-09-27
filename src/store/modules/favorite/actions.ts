import axios from 'axios';
import { ActionContext } from 'vuex';
import { FavoriteItem, FavoriteMutationTypes, FavoriteState } from './types';

const actions = {
  async getFavoriteItems(context: ActionContext<FavoriteState, FavoriteState>) {
    try {
      const response = await axios.get('/favorite');
      context.commit(FavoriteMutationTypes.UPDATE_FAVORITE_ITEMS, response.data);
    } catch (e) {
      console.error(`Fetching favorite items has failed: ${e}`);
    }
  },
  async addFavoriteItem(context: ActionContext<FavoriteState, FavoriteState>, favoriteItem: FavoriteItem) {
    try {
      const response = await axios.post('/favorite', favoriteItem);
      context.commit(FavoriteMutationTypes.UPDATE_FAVORITE_ITEMS, response.data);
    } catch (e) {
      console.error(`Adding favorite item has failed: ${e}`);
    }
  },
  async removeFavoriteItem(context: ActionContext<FavoriteState, FavoriteState>, favoriteItem: FavoriteItem) {
    try {
      const response = await axios.post('/favorite/delete', favoriteItem);
      context.commit(FavoriteMutationTypes.UPDATE_FAVORITE_ITEMS, response.data);
    } catch (e) {
      console.error(`Removing favorite item has failed: ${e}`);
    }
  },

  async removeAllFavoriteItems(context: ActionContext<FavoriteState, FavoriteState>) {
    try {
      const response = await axios.post('/favorite/delete/all');
      context.commit(FavoriteMutationTypes.UPDATE_FAVORITE_ITEMS, response.data);
    } catch (e) {
      console.error(`Removing all favorite item has failed: ${e}`);
    }
  }
};

export default actions;
