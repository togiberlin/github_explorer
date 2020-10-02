import { FavoriteItem } from '@/store/modules/favorite/types';
import { RepoItem } from '@/store/modules/repo/types';
import createMockRepoItem from '../repo/repoItem';

export default function createMockFavoriteItem(): FavoriteItem | RepoItem {
  return createMockRepoItem(); // repoItem == favoriteItem
}
