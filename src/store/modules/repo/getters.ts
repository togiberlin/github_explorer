import { RepoState } from './types';

const getters = {
  repoItems: (state: RepoState) => state.repoItems,
  httpError: (state: RepoState) => state.httpError,
};

export default getters;
