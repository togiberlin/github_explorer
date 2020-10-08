import repoActions from '@/store/modules/repo/actions';
import repoGetters from '@/store/modules/repo/getters';
import { RepoComponents, RepoProps } from '@/components/repo/types';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import RepoListItemDetail from '@/components/repo/RepoListItemDetail.vue';
import Vuex, { Store } from 'vuex';
import {
  RepoActions, RepoGetters, RepoItem, RepoState,
} from '@/store/modules/repo/types';
import createMockRepoItem from '../../../factories/repo/repoItem';

const localVue = createLocalVue();

localVue.use(Vuex);

describe(`${RepoComponents.REPO_LIST_ITEM_DETAIL}`, () => {
  let actions: jest.Mocked<typeof repoActions>;
  let getters: jest.Mocked<typeof repoGetters>;
  let store: Store<RepoState>;
  let mockRepoItem: RepoItem;

  beforeEach(() => {
    mockRepoItem = createMockRepoItem();
    actions = {
      [RepoActions.TOGGLE_REPO_DETAILS]: jest.fn(),
    } as unknown as jest.Mocked<typeof repoActions>;
    getters = {
      [RepoGetters.EXPANDED_REPO_DETAIL_ID]: () => mockRepoItem.id,
    } as unknown as jest.Mocked<typeof repoGetters>;
    store = new Vuex.Store({
      actions, getters,
    });
  });

  it('show/hide button toggles repo details', () => {
    const wrapper = shallowMount(RepoListItemDetail, {
      store,
      localVue,
      propsData: {
        [RepoProps.REPO_ITEM]: mockRepoItem,
      },
    });

    const showHideButton = wrapper.find('.level-item:first-of-type > div');

    showHideButton.trigger('click');

    const chevronIcon = wrapper.find('i');
    expect(chevronIcon.classes()).toContain('fa-chevron-up');
    expect(actions.toggleRepoDetails).toHaveBeenCalledTimes(1);
    expect(actions.toggleRepoDetails).toHaveBeenCalledWith(expect.any(Object), mockRepoItem.id);
  });

  it('shows detailed repository info (url, size, license, dates etc.)', () => {
    const wrapper = shallowMount(RepoListItemDetail, {
      store,
      localVue,
      propsData: {
        [RepoProps.REPO_ITEM]: mockRepoItem,
      },
    });

    const sshUrl = wrapper.findAll('pre').at(0);
    const httpsUrl = wrapper.findAll('pre').at(1);
    const sizeMByte = wrapper.findAll('span').at(3);
    const isArchived = wrapper.findAll('span').at(4);
    const isFork = wrapper.findAll('span').at(5);
    const license = wrapper.findAll('span').at(6);
    const createdAt = wrapper.findAll('span').at(7);
    const updatedAt = wrapper.findAll('span').at(8);
    const lastPush = wrapper.findAll('span').at(9);

    expect(sshUrl.text()).toBe(`${mockRepoItem.ssh_url}`);
    expect(httpsUrl.text()).toBe(`${mockRepoItem.clone_url}`);
    expect(sizeMByte.text()).toBe(`Size: ${mockRepoItem.size / 1000} MByte`);
    expect(isArchived.text()).toBe(`Is Archived: ${mockRepoItem.archived}`);
    expect(isFork.text()).toBe(`Is Fork: ${mockRepoItem.fork}`);
    expect(license.text()).toBe(`License: ${mockRepoItem.license?.name}`);
    expect(createdAt.text()).toBe(`Created at: ${new Date(mockRepoItem.created_at).toLocaleString()}`);
    expect(updatedAt.text()).toBe(`Last update: ${new Date(mockRepoItem.updated_at).toLocaleString()}`);
    expect(lastPush.text()).toBe(`Last push: ${new Date(mockRepoItem.pushed_at).toLocaleString()}`);
  });
});
