import mutations from '@/store/modules/repo/mutations';
import { RepoMutationTypes, RepoState } from '@/store/modules/repo/types';
import createMockRepoItem from '../../../../factories/repo/repoItem';
import createMockRepoState from '../../../../factories/repo/repoState';

describe('mutations', () => {
  let mockRepoState: RepoState;

  beforeEach(() => {
    mockRepoState = createMockRepoState([]);
  });

  describe(`${RepoMutationTypes.CHANGE_PAGE}`, () => {
    it('updates the currentPage property', () => {
      const payload = 123;

      mutations.CHANGE_PAGE(
        mockRepoState, payload,
      );

      expect(mockRepoState.pagination.currentPage).toBe(payload);
    });
  });

  describe(`${RepoMutationTypes.UPDATE_REPO_HTTP_ERROR}`, () => {
    it('updates the httpError property', () => {
      const payload = new Error('Hello world!');

      mutations.UPDATE_REPO_HTTP_ERROR(
        mockRepoState, payload,
      );

      expect(mockRepoState.httpError).toBe(payload);
    });
  });

  describe(`${RepoMutationTypes.UPDATE_REPO_ITEMS}`, () => {
    it('updates the repoItems property', () => {
      const payload = [createMockRepoItem()];

      mutations.UPDATE_REPO_ITEMS(
        mockRepoState, payload,
      );

      expect(mockRepoState.repoItems).toBe(payload);
    });
  });

  describe(`${RepoMutationTypes.TOGGLE_REPO_DETAILS}`, () => {
    it('toggles the expandedRepoDetailId property', () => {
      const payload = 42;

      mutations.TOGGLE_REPO_DETAILS(
        mockRepoState, payload,
      );

      expect(mockRepoState.expandedRepoDetailId).toBe(payload);
    });

    it('detects an already opened expandedRepoDetailId and closes it by setting it to null', () => {
      const payload = 42;

      mutations.TOGGLE_REPO_DETAILS(
        mockRepoState, payload,
      );
      mutations.TOGGLE_REPO_DETAILS(
        mockRepoState, payload,
      );

      expect(mockRepoState.expandedRepoDetailId).toBeNull();
    });
  });
});
