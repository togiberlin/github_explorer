import Vuex, { ActionTree, Store } from 'vuex';
import RepoListItem from '@/components/repo/RepoListItem.vue';
import { RepoComponents, RepoProps } from '@/components/repo/types';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import { FavoriteActions, FavoriteState } from '@/store/modules/favorite/types';
import createMockRepoItem from '../../../factories/repo/repoItem';

const localVue = createLocalVue();

localVue.use(Vuex);

describe(`${RepoComponents.REPO_LIST_ITEM}`, () => {
  let actions: ActionTree<FavoriteState, FavoriteState>;
  let store: Store<FavoriteState>;
  const mockRepoItem = createMockRepoItem();

  beforeEach(() => {
    actions = {
      [FavoriteActions.ADD_FAVORITE_ITEM]: jest.fn(),
    };
    store = new Vuex.Store({
      actions,
    });
  });

  it('renders a heading hyperlink', () => {
    const wrapper = shallowMount(RepoListItem, {
      propsData: {
        [RepoProps.REPO_ITEM]: mockRepoItem,
      },
    });

    const heading = wrapper.find('.has-text-weight-bold');
    const hyperLink = wrapper.find('a');

    expect(heading.text()).toBe(`${mockRepoItem.owner.login} / ${mockRepoItem.name}`);
    expect(hyperLink.attributes('href')).toBe(`${mockRepoItem.html_url}`);
  });

  it('renders a clickable span, which calls addFavoriteItem() fn', () => {
    const wrapper = shallowMount(RepoListItem, {
      propsData: {
        [RepoProps.REPO_ITEM]: mockRepoItem,
      },
      store,
      localVue,
    });

    const span = wrapper.find('span');
    expect(span.text()).toBe('Add to Favorites');

    span.trigger('click');
    expect(actions.addFavoriteItem).toHaveBeenCalledTimes(1);
  });

  it('renders a description paragraph', () => {
    const wrapper = shallowMount(RepoListItem, {
      propsData: {
        [RepoProps.REPO_ITEM]: mockRepoItem,
      },
    });

    const paragraph = wrapper.find('p');
    expect(paragraph.text()).toBe(`${mockRepoItem.description}`);
  });
});
