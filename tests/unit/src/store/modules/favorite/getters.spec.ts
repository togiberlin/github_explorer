import getters from '@/store/modules/favorite/getters';
import { FavoriteGetterTypes } from '@/store/modules/favorite/types';
import createMockFavoriteItem from '../../../../factories/favorite/favoriteItem';
import createMockFavoriteState from '../../../../factories/favorite/favoriteState';

describe('getters', () => {
  const mockFavoriteItem = createMockFavoriteItem();
  const mockFavoriteState = createMockFavoriteState([mockFavoriteItem]);

  it(`returns ${FavoriteGetterTypes.FAVORITE_ITEMS} prop`, () => {
    const subject = getters.favoriteItems(mockFavoriteState);
    expect(subject).toEqual([mockFavoriteItem]);
  });

  it(`returns ${FavoriteGetterTypes.FAVORITE_QUANTITY} prop`, () => {
    const subject = getters.favoriteQuantity(mockFavoriteState);
    expect(subject).toEqual(mockFavoriteState.favoriteItems.length);
  });

  it(`returns ${FavoriteGetterTypes.HTTP_ERROR} prop, which is initially null`, () => {
    const subject = getters.httpError(mockFavoriteState);
    expect(subject).toBeNull();
  });
});
