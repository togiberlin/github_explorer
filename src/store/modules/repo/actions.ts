import axios, { AxiosResponse } from 'axios';
import { ActionContext } from 'vuex';
import {
  RepoDetail, RepoItem, RepoMutationTypes, RepoState,
} from './types';

const actions = {
  async getRepoItems(context: ActionContext<RepoState, RepoState>): Promise<void> {
    try {
      const repoItemsResponse: AxiosResponse<RepoItem[]> = await axios.get(
        'http://localhost:3000/repositories', {
        // 'https://api.github.com/repositories', {
          headers: {
            Accept: 'application/vnd.github.v3+json',
          },
        },
      );

      const payload = { ...repoItemsResponse.data };

      payload.map(async (repoItem, index) => {
        console.log('Hello world!');
        const repoDetailResponse: AxiosResponse<RepoDetail> = await axios.get(
          `http://localhost:3000/repos/${repoItem.full_name}`,
          // `https://api.github.com/repos/${repoItem.full_name}`,
        );

        payload[index].details = repoDetailResponse.data;
      });

      context.commit(RepoMutationTypes.UPDATE_REPO_ITEMS, payload);
    } catch (e) {
      console.error(`Fetching repo items has failed: ${e}`);
      context.commit(RepoMutationTypes.UPDATE_REPO_ITEMS, {});
    }
  },
};

export default actions;
