import Vuex, { Store } from 'vuex';
import FavoriteList from '@/components/favorite/FavoriteList.vue';
import { FavoriteComponents } from '@/components/favorite/types';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import createMockFavoriteItem from '../../../factories/favorite/favoriteItem';

const localVue = createLocalVue();

localVue.use(Vuex);

describe(`${FavoriteComponents.FAVORITE_LIST}`, () => {
  let actions: any;
  let getters: any;
  let store: Store<any>;

  beforeEach(() => {
    actions = {
      getFavoriteItems: jest.fn(),
      removeAllFavoriteItems: jest.fn(),
    };
    getters = {
      favoriteItems: () => [createMockFavoriteItem()],
      favoriteQuantity: () => 123,
    };
    store = new Vuex.Store({
      actions, getters,
    });
  });

  it('renders a heading', () => {
    const wrapper = shallowMount(FavoriteList, {
      store, localVue,
    });

    const heading = wrapper.find('h1');

    expect(heading.exists()).toBeTruthy();
    expect(heading.text()).toBe('Bookmarks');
  });

  it('renders a hint, if there are no favorites yet', () => {
    getters = {
      favoriteItems: () => [],
      favoriteQuantity: () => 123,
    };
    store = new Vuex.Store({
      actions, getters,
    });

    const wrapper = shallowMount(FavoriteList, {
      store, localVue,
    });

    const hintParagraph = wrapper.find('.favorite-empty-text');
    expect(hintParagraph.text()).toBe('You have no bookmarked repos yet!');
  });

  it('renders a list, if there are added favorites', () => {
    const wrapper = shallowMount(FavoriteList, {
      store, localVue,
    });

    const listItem = wrapper.find('.favorite-item');

    expect(listItem.exists()).toBeTruthy();
  });

  it('removes all favorite items, if paragraph clicked', () => {
    const wrapper = shallowMount(FavoriteList, {
      store, localVue,
    });

    wrapper.find('.favorite-remove-all--text').trigger('click');

    expect(actions.removeAllFavoriteItems).toHaveBeenCalledTimes(1);
  });
});
