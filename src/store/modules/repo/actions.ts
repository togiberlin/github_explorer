import axios, { AxiosRequestConfig } from 'axios';
import { ActionContext } from 'vuex';
import {
  RepoActionTypes,
  RepoItem, RepoMutationTypes, RepoSearchResult, RepoState, SearchParams,
} from './types';
import gitHubConfig from '../../../../github.config.json';

const headers: AxiosRequestConfig['headers'] = {
  Accept: 'application/vnd.github.v3+json',
  Authorization: `token ${gitHubConfig.oAuth2Token}`,
};

const actions = {
  async [RepoActionTypes.SEARCH_FOR_REPOS](
    context: ActionContext<RepoState, RepoState>,
    params: SearchParams,
  ) {
    try {
      const response = await axios.get<RepoSearchResult>(
        'https://api.github.com/search/repositories', { headers, params },
      );

      context.commit(RepoMutationTypes.UPDATE_REPO_ITEMS, response.data.items);
    } catch (e) {
      console.error(`Search request towards GitHub has failed: ${e}`);
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
    desiredPage: number,
  ) {
    context.commit(RepoMutationTypes.CHANGE_PAGE, desiredPage);
  },
};

export default actions;
