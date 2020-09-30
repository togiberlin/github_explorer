import getters from '@/store/modules/favorite/getters';
import createMockFavoriteState from 'tests/unit/factories/favorite/favoriteState';
import createMockRepoItem from 'tests/unit/factories/repo/repoItem';

describe('getters', () => {
  const mockFavoriteItem = createMockRepoItem();
  const mockFavoriteState = createMockFavoriteState([mockFavoriteItem]);

  describe('favoriteItems', () => {
    it('returns favoriteItems prop', () => {
      const result = getters.favoriteItems(mockFavoriteState);

      expect(result).toEqual([mockFavoriteItem]);
    });
  });

  describe('favoriteQuantity', () => {
    it('', () => {

    });
  });
});
