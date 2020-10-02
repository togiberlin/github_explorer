import axios from 'axios';
import { ActionContext } from 'vuex';
import { RepoState } from '../repo/types';
import {
  FavoriteActionTypes, FavoriteItem, FavoriteMutationTypes, FavoriteState,
} from './types';

const FAVORITE_API_ENDPOINT = '/api/favorite';

const actions = {
  async [FavoriteActionTypes.GET_FAVORITE_ITEMS](
    { commit }: ActionContext<FavoriteState, RepoState>,
  ) {
    try {
      const response = await axios.get<FavoriteItem[]>(FAVORITE_API_ENDPOINT);
      commit(FavoriteMutationTypes.UPDATE_FAVORITE_ITEMS, response.data);
    } catch (e) {
      console.error(`Fetching favorite items has failed: ${e}`);
      commit(FavoriteMutationTypes.UPDATE_FAVORITE_HTTP_ERROR, e);
    }
  },

  async [FavoriteActionTypes.ADD_FAVORITE_ITEM](
    { commit }: ActionContext<FavoriteState, RepoState>,
    favoriteItem: FavoriteItem,
  ) {
    try {
      const response = await axios.post<FavoriteItem>(FAVORITE_API_ENDPOINT, favoriteItem);
      commit(FavoriteMutationTypes.UPDATE_FAVORITE_ITEMS, response.data);
    } catch (e) {
      console.error(`Adding favorite item has failed: ${e}`);
      commit(FavoriteMutationTypes.UPDATE_FAVORITE_HTTP_ERROR, e);
    }
  },

  async [FavoriteActionTypes.REMOVE_FAVORITE_ITEM](
    { commit }: ActionContext<FavoriteState, RepoState>,
    favoriteItem: FavoriteItem,
  ) {
    try {
      const response = await axios.delete<FavoriteItem>(`${FAVORITE_API_ENDPOINT}/${favoriteItem.id}`);
      commit(FavoriteMutationTypes.UPDATE_FAVORITE_ITEMS, response.data);
    } catch (e) {
      console.error(`Removing favorite item has failed: ${e}`);
      commit(FavoriteMutationTypes.UPDATE_FAVORITE_HTTP_ERROR, e);
    }
  },

  async [FavoriteActionTypes.REMOVE_ALL_FAVORITE_ITEMS](
    { commit }: ActionContext<FavoriteState, RepoState>,
  ) {
    try {
      const response = await axios.delete<[]>(FAVORITE_API_ENDPOINT);
      commit(FavoriteMutationTypes.UPDATE_FAVORITE_ITEMS, response.data);
    } catch (e) {
      console.error(`Removing all favorite item has failed: ${e}`);
      commit(FavoriteMutationTypes.UPDATE_FAVORITE_HTTP_ERROR, e);
    }
  },
};

export default actions;
