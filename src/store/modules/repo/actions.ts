import axios, { AxiosRequestConfig } from 'axios';
import { ActionContext } from 'vuex';
import {
  RepoActionTypes,
  RepoMutationTypes, RepoSearchResult, RepoState, GitHubRepoSearchHttpsParams,
} from './types';
import secrets from '../../../../secrets.json';

const headers: AxiosRequestConfig['headers'] = {
  Accept: 'application/vnd.github.v3+json',
  Authorization: `token ${secrets.gitHub.oAuth2Token}`,
};

const actions = {
  async [RepoActionTypes.SEARCH_FOR_REPOS](
    { commit }: ActionContext<RepoState, RepoState>,
    params: GitHubRepoSearchHttpsParams,
  ) {
    try {
      const response = await axios.get<RepoSearchResult>(
        'https://api.github.com/search/repositories', { headers, params },
      );

      commit(RepoMutationTypes.UPDATE_REPO_ITEMS, response.data.items);
    } catch (e) {
      console.error(`Search request towards GitHub has failed: ${e}`);
      commit(RepoMutationTypes.UPDATE_REPO_HTTP_ERROR, e);
    }
  },

  [RepoActionTypes.CHANGE_PAGE](
    { commit }: ActionContext<RepoState, RepoState>,
    desiredPage: number,
  ) {
    commit(RepoMutationTypes.CHANGE_PAGE, desiredPage);
  },

  [RepoActionTypes.TOGGLE_REPO_DETAILS](
    { commit }: ActionContext<RepoState, RepoState>,
    repoItemId: number,
  ) {
    commit(RepoMutationTypes.TOGGLE_REPO_DETAILS, repoItemId);
  },
};

export default actions;
