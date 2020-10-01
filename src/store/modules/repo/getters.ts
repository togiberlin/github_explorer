import { RepoState, RepoGetterTypes } from './types';

const getters = {
  [RepoGetterTypes.REPO_ITEMS]: (state: RepoState) => state.repoItems,
  [RepoGetterTypes.REPO_ITEMS_FOR_CURRENT_PAGE]: (state: RepoState) => {
    const startIndex = (state.pagination.currentPage - 1) * state.pagination.itemsPerPage;
    const endIndex = startIndex + state.pagination.itemsPerPage;

    return state.repoItems.slice(startIndex, endIndex);
  },
  [RepoGetterTypes.HTTP_ERROR]: (state: RepoState) => state.httpError,
  [RepoGetterTypes.CURRENT_PAGE]: (state: RepoState) => state.pagination.currentPage,
  [RepoGetterTypes.ITEMS_PER_PAGE]: (state: RepoState) => state.pagination.itemsPerPage,
  [RepoGetterTypes.PAGE_COUNT]:
    (state: RepoState) => state.repoItems.length / state.pagination.itemsPerPage,
  [RepoGetterTypes.EXPANDED_REPO_DETAIL_ID]: (state: RepoState) => state.expandedRepoDetailId,
};

export default getters;
