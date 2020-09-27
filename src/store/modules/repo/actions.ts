import axios, { AxiosResponse } from 'axios';
import { ActionContext } from 'vuex';
import {
  RepoActionTypes,
  RepoDetail, RepoItem, RepoMutationTypes, RepoState,
} from './types';

const actions = {
  async [RepoActionTypes.GET_REPO_ITEMS](
    context: ActionContext<RepoState, RepoState>,
  ): Promise<void> {
    try {
      const response: AxiosResponse<RepoItem[]> = await axios.get(
        '/api/repositories',
        // 'https://api.github.com/repositories',
        // {
        //   headers: {
        //     Accept: 'application/vnd.github.v3+json',
        //   },
        // },
      );

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
        const response: AxiosResponse<RepoDetail> = await axios.get(`/api/repos/${repoItem.full_name}`);

        context.commit(RepoMutationTypes.UPDATE_REPO_DETAILS, response.data);
      });
    } catch (e) {
      console.error(`Fetching repo details has failed: ${e}`);
      context.commit(RepoMutationTypes.UPDATE_REPO_HTTP_ERROR, e);
    }
  },
};

export default actions;
