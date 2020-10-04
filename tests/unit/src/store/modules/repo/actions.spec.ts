import actions from '@/store/modules/repo/actions';
import axios from 'axios';
import { RepoActions, RepoMutations, RepoState } from '@/store/modules/repo/types';
import { ActionContext } from 'vuex';
import flushPromises from 'flush-promises';
import createMockRepoItem from '../../../../factories/repo/repoItem';
import createMockSearchParams from '../../../../factories/repo/searchParams';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('actions', () => {
  let context = {} as unknown as ActionContext<RepoState, RepoState>;

  beforeEach(() => {
    context = {
      commit: jest.fn(),
    } as unknown as ActionContext<RepoState, RepoState>;
  });

  describe(`${RepoActions.CHANGE_PAGE}`, () => {
    it('commits the desired page to the store', async () => {
      expect.assertions(1);
      const desiredPage = 42;

      actions.changePage(context, desiredPage);
      await flushPromises();

      expect(context.commit).toHaveBeenCalledWith(RepoMutations.CHANGE_PAGE, desiredPage);
    });
  });

  describe(`${RepoActions.SEARCH_FOR_REPOS}`, () => {
    it('calls the GH API and commits the results', async () => {
      expect.assertions(1);
      const searchParams = createMockSearchParams();
      const mockResponse = { data: { items: [createMockRepoItem()] } };
      mockedAxios.get.mockImplementationOnce(() => Promise.resolve(mockResponse));

      actions.searchForRepos(context, searchParams);
      await flushPromises();

      expect(context.commit).toHaveBeenCalledWith(
        RepoMutations.UPDATE_REPO_ITEMS, mockResponse.data.items,
      );
    });
  });

  describe(`${RepoActions.TOGGLE_REPO_DETAILS}`, () => {
    it('commits the repoItem.id to the store', async () => {
      expect.assertions(1);
      const repoItemId = 123454321;

      actions.toggleRepoDetails(context, repoItemId);
      await flushPromises();

      expect(context.commit).toHaveBeenCalledWith(
        RepoMutations.TOGGLE_REPO_DETAILS, repoItemId,
      );
    });
  });
});
