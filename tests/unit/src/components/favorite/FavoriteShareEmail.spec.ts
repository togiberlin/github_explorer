import { shallowMount } from '@vue/test-utils';
import FavoriteShareEmail from '@/components/favorite/FavoriteShareEmail.vue';
import { FavoriteComponents } from '@/components/favorite/types';
import createMockFavoriteItem from '../../../factories/favorite/favoriteItem';

describe(`${FavoriteComponents.FAVORITE_SHARE_EMAIL}`, () => {
  it('is not clickable, if there are no bookmarked favorites', () => {
    const wrapper = shallowMount(FavoriteShareEmail, {
      propsData: {
        favoriteItems: [],
      },
    });

    const shareButton = wrapper.find('.button');

    expect(shareButton.attributes('disabled')).toBe('disabled');
  });

  it('is a clickable mailto link, if there are favorites', () => {
    const wrapper = shallowMount(FavoriteShareEmail, {
      propsData: {
        favoriteItems: [createMockFavoriteItem()],
      },
    });

    const shareButton = wrapper.find('.button');

    expect(shareButton.attributes('disabled')).toBe(undefined);
    expect(shareButton.attributes('onclick')).toContain(
      'location.href=\'mailto:?body=Hey%21%20I%20found%20some%20nice%20stuff%20to%20share.',
    );
  });
});
