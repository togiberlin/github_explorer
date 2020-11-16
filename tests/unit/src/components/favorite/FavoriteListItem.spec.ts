import Vuex, { ActionTree } from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import FavoriteListItem from '@/components/favorite/FavoriteListItem.vue';
import { FavoriteComponents, FavoriteProps } from '@/components/favorite/types';
import { FavoriteActions, FavoriteState } from '@/store/modules/favorite/types';
import createMockFavoriteItem from '../../../factories/favorite/favoriteItem';

const localVue = createLocalVue();

localVue.use(Vuex);

describe(`${FavoriteComponents.FAVORITE_LIST_ITEM}`, () => {
  it('\'s hyperlinks point to users GH and project page', () => {
    const mockFavoriteItem = createMockFavoriteItem();

    const wrapper = shallowMount(FavoriteListItem, {
      propsData: {
        [FavoriteProps.FAVORITE_ITEM]: mockFavoriteItem,
      },
    });

    const userHyperlink = wrapper.find('a:first-of-type');
    const repoHyperlink = wrapper.find('a:nth-of-type(2)');

    expect(userHyperlink.attributes('href')).toBe(mockFavoriteItem.owner.html_url);
    expect(userHyperlink.text()).toBe(mockFavoriteItem.owner.login);
    expect(repoHyperlink.attributes('href')).toBe(mockFavoriteItem.html_url);
    expect(repoHyperlink.text()).toBe(mockFavoriteItem.name);
  });

  it('has an icon element, which the removeFavoriteItem() method', () => {
    const actions = {
      [FavoriteActions.REMOVE_FAVORITE_ITEM]: jest.fn(),
    } as ActionTree<FavoriteState, FavoriteState>;
    const store = new Vuex.Store({
      actions,
    });

    const mockFavoriteItem = createMockFavoriteItem();
    const wrapper = shallowMount(FavoriteListItem, {
      propsData: {
        [FavoriteProps.FAVORITE_ITEM]: mockFavoriteItem,
      },
      store,
      localVue,
    });

    const removeFavoriteIcon = wrapper.find('.fa-window-close');
    expect(removeFavoriteIcon.exists()).toBeTruthy();

    removeFavoriteIcon.trigger('click');
    expect(actions.removeFavoriteItem).toHaveBeenCalledTimes(1);
  });
});
