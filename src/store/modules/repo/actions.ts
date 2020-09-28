import axios, { AxiosResponse } from 'axios';
import { ActionContext } from 'vuex';
import {
  RepoActionTypes,
  RepoDetail, RepoItem, RepoMutationTypes, RepoState,
} from './types';
import config from '../../../../config.json';

const actions = {
  async [RepoActionTypes.GET_REPO_ITEMS](
    context: ActionContext<RepoState, RepoState>,
  ): Promise<void> {
    try {
      let response: AxiosResponse<RepoItem[]>;

      if (config.offlineMode || !config.ghOAuth2Token) {
        response = await axios.get('/api/repositories');
      } else {
        response = await axios.get(
          'https://api.github.com/repositories',
          {
            headers: {
              Accept: 'application/vnd.github.v3+json',
              Authorization: `token ${config.ghOAuth2Token}`,
            },
          },
        );
      }

      context.commit(RepoMutationTypes.UPDATE_REPO_ITEMS, response.data);
    } catch (e) {
      console.error(`Fetching repo items has failed: ${e}`);
      context.commit(RepoMutationTypes.UPDATE_REPO_ITEMS, e);
    }
  },

  async [RepoActionTypes.GET_REPO_DETAILS](
    context: ActionContext<RepoState, RepoState>,
  ): Promise<void> {
    try {
      context.state.repoItems.map(async (repoItem: RepoItem) => {
        let response: AxiosResponse<RepoDetail>;

        if (config.offlineMode || !config.ghOAuth2Token) {
          response = await axios.get(`/api/repos/${repoItem.full_name}`);
        } else {
          response = await axios.get(`https://api.github.com/repos/${repoItem.full_name}`);
        }

        context.commit(RepoMutationTypes.UPDATE_REPO_DETAILS, response.data);
      });
    } catch (e) {
      console.error(`Fetching repo details has failed: ${e}`);
      context.commit(RepoMutationTypes.UPDATE_REPO_HTTP_ERROR, e);
    }
  },

  [RepoActionTypes.TOGGLE_REPO_DETAILS](
    context: ActionContext<RepoState, RepoState>,
    repoItem: RepoItem,
  ) {
    context.commit(RepoMutationTypes.TOGGLE_REPO_DETAILS, repoItem);
  },

  [RepoActionTypes.CHANGE_PAGE](
    context: ActionContext<RepoState, RepoState>,
    page: number,
  ) {
    context.commit(RepoMutationTypes.CHANGE_PAGE, page);
  },
};

export default actions;
