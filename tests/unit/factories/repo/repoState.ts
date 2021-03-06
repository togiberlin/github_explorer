import { RepoItem, RepoState } from '@/store/modules/repo/types';

export default function createMockRepoState(
  repoItems: RepoItem[],
): RepoState {
  return {
    repoItems: [...repoItems],
    expandedRepoDetailId: null,
    pagination: {
      currentPage: 1,
      itemsPerPage: 4,
    },
    httpError: null,
  };
}
