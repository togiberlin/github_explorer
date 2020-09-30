import { FavoriteItem, FavoriteState } from '@/store/modules/favorite/types';
import { RepoItem, RepoState } from '@/store/modules/repo/types';

export default function createMockRepoState(
  repoItems: RepoItem[]
): RepoState {
  return {
    repoItems: [...repoItems],
    pagination: {
      currentPage: 1,
      itemsPerPage: 4,
    },
    httpError: null,
  };
}