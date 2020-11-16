import RepoPagination from '@/components/repo/RepoPagination.vue';
import { RepoComponents } from '@/components/repo/types';
import { RepoActions, RepoGetters } from '@/store/modules/repo/types';
import repoActions from '@/store/modules/repo/actions';
import repoGetters from '@/store/modules/repo/getters';
import RepoModule from '@/store/modules/repo/index';
import { createLocalVue, mount } from '@vue/test-utils';
import Vuex, { Store } from 'vuex';

const localVue = createLocalVue();

localVue.use(Vuex);

describe(`${RepoComponents.REPO_PAGINATION}`, () => {
  let actions: jest.Mocked<typeof repoActions>;
  let getters: jest.Mocked<typeof repoGetters>;
  let store: Store<typeof RepoModule>;

  beforeEach(() => {
    actions = {
      [RepoActions.CHANGE_PAGE]: jest.fn(),
    } as unknown as jest.Mocked<typeof repoActions>;
    getters = {
      [RepoGetters.PAGE_COUNT]: () => 25,
    } as unknown as jest.Mocked<typeof repoGetters>;
    store = new Vuex.Store({
      actions, getters,
    }) as unknown as Store<typeof RepoModule>;
  });

  it('changes requests a page change when clicked', () => {
    const wrapper = mount(RepoPagination, {
      store, localVue,
    });

    const nextPageButton = wrapper.findAll('.pagination-link').at(2);
    const nextPageNumber = Number(nextPageButton.text());
    nextPageButton.trigger('click');

    expect(actions.changePage).toHaveBeenCalledWith(expect.any(Object), nextPageNumber);
  });
});
