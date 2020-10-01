import { FavoriteItem, FavoriteState } from '@/store/modules/favorite/types';

export default function createMockFavoriteState(
  favoriteItems: FavoriteItem[],
): FavoriteState {
  return {
    favoriteItems: [...favoriteItems],
    httpError: null,
  };
}
