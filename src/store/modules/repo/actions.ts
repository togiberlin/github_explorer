import axios, { AxiosResponse } from 'axios';
import { ActionContext } from 'vuex';
import {
  RepoDetail, RepoItem, RepoMutationTypes, RepoState,
} from './types';

const actions = {
  async getRepoItems(context: ActionContext<RepoState, RepoState>): Promise<void> {
    try {
      const response: AxiosResponse<RepoItem[]> = await axios.get(
        'http://localhost:3000/repositories', {
        // 'https://api.github.com/repositories', {
          headers: {
            Accept: 'application/vnd.github.v3+json',
          },
        },
      );

      context.commit(RepoMutationTypes.UPDATE_REPO_ITEMS, response.data);
    } catch (e) {
      console.error(`Fetching repo items has failed: ${e}`);
    }
  },

  async getRepoDetails(
    context: ActionContext<RepoState, RepoState>,
  ): Promise<void> {
    try {
      context.state.repoItems.map(async (repoItem: RepoItem, index: number) => {
        console.log(repoItem.full_name);
        const response: AxiosResponse<RepoDetail> = await axios.get(
          `http://localhost:3000/repos/${repoItem.full_name}`,
          // `https://api.github.com/repos/${repoItem.full_name}`,
        );
        context.commit(RepoMutationTypes.UPDATE_REPO_DETAILS, response.data);
      });
    } catch (e) {
      console.error(`Fetching repo items has failed: ${e}`);
    }
  },
};

export default actions;
