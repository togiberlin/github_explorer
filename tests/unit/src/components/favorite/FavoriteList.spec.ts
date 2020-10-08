import Vuex, { ActionTree, Store } from 'vuex';
import FavoriteList from '@/components/favorite/FavoriteList.vue';
import favoriteGetters from '@/store/modules/favorite/getters';
import { FavoriteComponents } from '@/components/favorite/types';
import { FavoriteActions, FavoriteGetters, FavoriteState } from '@/store/modules/favorite/types';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import createMockFavoriteItem from '../../../factories/favorite/favoriteItem';

const localVue = createLocalVue();

localVue.use(Vuex);

describe(`${FavoriteComponents.FAVORITE_LIST}`, () => {
  let actions: ActionTree<FavoriteState, FavoriteState>;
  let getters: jest.Mocked<typeof favoriteGetters>;
  let store: Store<FavoriteState>;

  beforeEach(() => {
    actions = {
      [FavoriteActions.GET_FAVORITE_ITEMS]: jest.fn(),
      [FavoriteActions.REMOVE_ALL_FAVORITE_ITEMS]: jest.fn(),
    };
    getters = {
      [FavoriteGetters.FAVORITE_ITEMS]: () => [createMockFavoriteItem()],
      [FavoriteGetters.FAVORITE_QUANTITY]: () => 123,
    } as unknown as jest.Mocked<typeof favoriteGetters>;
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
      [FavoriteGetters.FAVORITE_ITEMS]: () => [],
      [FavoriteGetters.FAVORITE_QUANTITY]: () => 123,
    } as unknown as jest.Mocked<typeof favoriteGetters>;
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
