import { RepoState } from './types';

const getters = {
  repoItems: (state: RepoState) => state.repoItems,
  repoItemsForCurrentPage: (state: RepoState) => {
    const startIndex = (state.pagination.currentPage - 1) * state.pagination.itemsPerPage;
    const endIndex = startIndex + state.pagination.itemsPerPage;

    return state.repoItems.slice(startIndex, endIndex);
  },
  httpError: (state: RepoState) => state.httpError,
  currentPage: (state: RepoState) => state.pagination.currentPage,
  itemsPerPage: (state: RepoState) => state.pagination.itemsPerPage,
  pageCount: (state: RepoState) => state.repoItems.length / state.pagination.itemsPerPage,
  expandedRepoDetailId: (state: RepoState) => state.expandedRepoDetailId,
};

export default getters;
