import { RepoState, RepoGetters } from './types';

const getters = {
  [RepoGetters.REPO_ITEMS]: (state: RepoState) => state.repoItems,
  [RepoGetters.REPO_ITEMS_FOR_CURRENT_PAGE]: (state: RepoState) => {
    const startIndex = (state.pagination.currentPage - 1) * state.pagination.itemsPerPage;
    const endIndex = startIndex + state.pagination.itemsPerPage;

    return state.repoItems.slice(startIndex, endIndex);
  },
  [RepoGetters.HTTP_ERROR]: (state: RepoState) => state.httpError,
  [RepoGetters.CURRENT_PAGE]: (state: RepoState) => state.pagination.currentPage,
  [RepoGetters.ITEMS_PER_PAGE]: (state: RepoState) => state.pagination.itemsPerPage,
  [RepoGetters.PAGE_COUNT]:
    (state: RepoState) => state.repoItems.length / state.pagination.itemsPerPage,
  [RepoGetters.EXPANDED_REPO_DETAIL_ID]: (state: RepoState) => state.expandedRepoDetailId,
};

export default getters;
