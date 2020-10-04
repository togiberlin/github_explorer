import mutations from '@/store/modules/favorite/mutations';
import { FavoriteMutations, FavoriteState } from '@/store/modules/favorite/types';
import createMockFavoriteItem from '../../../../factories/favorite/favoriteItem';
import createMockFavoriteState from '../../../../factories/favorite/favoriteState';

describe.skip('mutations', () => {
  let mockFavoriteState: FavoriteState;

  beforeEach(() => {
    mockFavoriteState = createMockFavoriteState([]);
  });

  describe(`${FavoriteMutations.UPDATE_FAVORITE_ITEMS}`, () => {
    it('updates the favoriteItem property', () => {
      const payload = [createMockFavoriteItem()];

      mutations.UPDATE_FAVORITE_ITEMS(
        mockFavoriteState, payload,
      );

      expect(mockFavoriteState.favoriteItems).toBe(payload);
    });
  });

  describe(`${FavoriteMutations.UPDATE_FAVORITE_HTTP_ERROR}`, () => {
    it('updates the httpError property', () => {
      const payload = new Error('Lorem ipsum dolor sit amet');

      mutations.UPDATE_FAVORITE_HTTP_ERROR(
        mockFavoriteState, payload,
      );

      expect(mockFavoriteState.httpError).toBe(payload);
    });
  });
});
