import getters from '@/store/modules/favorite/getters';
import { FavoriteGetters } from '@/store/modules/favorite/types';
import createMockFavoriteItem from '../../../../factories/favorite/favoriteItem';
import createMockFavoriteState from '../../../../factories/favorite/favoriteState';

describe('getters', () => {
  const mockFavoriteItem = createMockFavoriteItem();
  const mockFavoriteState = createMockFavoriteState([mockFavoriteItem]);

  it(`returns ${FavoriteGetters.FAVORITE_ITEMS} prop`, () => {
    const subject = getters.favoriteItems(mockFavoriteState);
    expect(subject).toEqual([mockFavoriteItem]);
  });

  it(`returns ${FavoriteGetters.FAVORITE_QUANTITY} prop`, () => {
    const subject = getters.favoriteQuantity(mockFavoriteState);
    expect(subject).toEqual(mockFavoriteState.favoriteItems.length);
  });

  it(`returns ${FavoriteGetters.HTTP_ERROR} prop, which is initially null`, () => {
    const subject = getters.httpError(mockFavoriteState);
    expect(subject).toBeNull();
  });
});
