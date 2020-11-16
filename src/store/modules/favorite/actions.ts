import axios from 'axios';
import { ActionContext } from 'vuex';
import { RepoState } from '../repo/types';
import {
  FavoriteActions, FavoriteItem, FavoriteMutations, FavoriteState,
} from './types';

const FAVORITE_API_ENDPOINT = '/api/favorite';

const actions = {
  async [FavoriteActions.GET_FAVORITE_ITEMS](
    { commit }: ActionContext<FavoriteState, RepoState>,
  ) {
    try {
      const response = await axios.get<FavoriteItem[]>(FAVORITE_API_ENDPOINT);
      commit(FavoriteMutations.UPDATE_FAVORITE_ITEMS, response.data);
    } catch (e) {
      console.error(`Fetching favorite items has failed: ${e}`);
      commit(FavoriteMutations.UPDATE_FAVORITE_HTTP_ERROR, e);
    }
  },

  async [FavoriteActions.ADD_FAVORITE_ITEM](
    { commit }: ActionContext<FavoriteState, RepoState>,
    favoriteItem: FavoriteItem,
  ) {
    try {
      const response = await axios.post<FavoriteItem>(FAVORITE_API_ENDPOINT, favoriteItem);
      commit(FavoriteMutations.UPDATE_FAVORITE_ITEMS, response.data);
    } catch (e) {
      console.error(`Adding favorite item has failed: ${e}`);
      commit(FavoriteMutations.UPDATE_FAVORITE_HTTP_ERROR, e);
    }
  },

  async [FavoriteActions.REMOVE_FAVORITE_ITEM](
    { commit }: ActionContext<FavoriteState, RepoState>,
    favoriteItem: FavoriteItem,
  ) {
    try {
      const response = await axios.delete<FavoriteItem>(`${FAVORITE_API_ENDPOINT}/${favoriteItem.id}`);
      commit(FavoriteMutations.UPDATE_FAVORITE_ITEMS, response.data);
    } catch (e) {
      console.error(`Removing favorite item has failed: ${e}`);
      commit(FavoriteMutations.UPDATE_FAVORITE_HTTP_ERROR, e);
    }
  },

  async [FavoriteActions.REMOVE_ALL_FAVORITE_ITEMS](
    { commit }: ActionContext<FavoriteState, RepoState>,
  ) {
    try {
      const response = await axios.delete<[]>(FAVORITE_API_ENDPOINT);
      commit(FavoriteMutations.UPDATE_FAVORITE_ITEMS, response.data);
    } catch (e) {
      console.error(`Removing all favorite items has failed: ${e}`);
      commit(FavoriteMutations.UPDATE_FAVORITE_HTTP_ERROR, e);
    }
  },
};

export default actions;
