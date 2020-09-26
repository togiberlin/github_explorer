import axios, { AxiosResponse } from 'axios';
import { ActionContext } from 'vuex';
import { RepoItem, RepoMutationTypes, RepoState } from './types';

const actions = {
  async getRepoItems(context: ActionContext<RepoState, any>) {
    try {
      const response: AxiosResponse<RepoItem[]> = await axios.get(
        'https://api.github.com/repositories', {
          headers: {
            Accept: 'application/vnd.github.v3+json',
            'User-Agent': 'togiberlin/github_explorer',
          },
        },
      );
      context.commit(RepoMutationTypes.UPDATE_REPO_ITEMS, response.data);
    } catch (e) {
      console.error(`Fetching repo items has failed: ${e}`);
    }
  },
};

export default actions;
