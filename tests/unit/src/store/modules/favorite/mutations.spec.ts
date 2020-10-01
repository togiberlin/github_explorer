import mutations from '@/store/modules/favorite/mutations';
import { FavoriteState } from '@/store/modules/favorite/types';
import createMockFavoriteState from '../../../../factories/favorite/favoriteState';
import createMockRepoItem from '../../../../factories/repo/repoItem';

describe.skip('mutations', () => {
  let mockFavoriteState: FavoriteState;

  beforeEach(() => {
    mockFavoriteState = createMockFavoriteState([]);
  });

  describe('UPDATE_FAVORITE_ITEMS()', () => {
    it('updates the favoriteItem property', () => {
      const payload = [createMockRepoItem()];

      mutations.UPDATE_FAVORITE_ITEMS(
        mockFavoriteState, payload,
      );

      expect(mockFavoriteState.favoriteItems).toBe(payload);
    });
  });

  describe('UPDATE_FAVORITE_HTTP_ERROR()', () => {
    it('updates the httpError property', () => {
      const payload = new Error('Lorem ipsum dolor sit amet');

      mutations.UPDATE_FAVORITE_HTTP_ERROR(
        mockFavoriteState, payload,
      );

      expect(mockFavoriteState.httpError).toBe(payload);
    });
  });
});
