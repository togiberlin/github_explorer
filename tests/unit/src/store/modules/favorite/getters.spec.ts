import getters from '@/store/modules/favorite/getters';
import createMockFavoriteState from '../../../../factories/favorite/favoriteState';
import createMockRepoItem from '../../../../factories/repo/repoItem';

describe('getters', () => {
  const mockFavoriteItem = createMockRepoItem();
  const mockFavoriteState = createMockFavoriteState([mockFavoriteItem]);

  it('returns favoriteItems prop', () => {
    const subject = getters.favoriteItems(mockFavoriteState);
    expect(subject).toEqual([mockFavoriteItem]);
  });

  it('returns favoriteQuantity prop', () => {
    const subject = getters.favoriteQuantity(mockFavoriteState);
    expect(subject).toEqual(mockFavoriteState.favoriteItems.length);
  });

  it('returns httpError prop, which is initially null', () => {
    const subject = getters.httpError(mockFavoriteState);
    expect(subject).toBeNull();
  });
});
