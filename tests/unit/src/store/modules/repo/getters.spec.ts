import getters from '@/store/modules/repo/getters';
import { RepoGetters } from '@/store/modules/repo/types';
import createMockRepoState from '../../../../factories/repo/repoState';
import createMockRepoItem from '../../../../factories/repo/repoItem';

describe('RepoGetters', () => {
  const mockRepoItem = createMockRepoItem();
  const mockRepoState = createMockRepoState([mockRepoItem]);

  it(`returns a ${RepoGetters.CURRENT_PAGE} prop`, () => {
    const subject = getters.currentPage(mockRepoState);
    expect(subject).toBe(mockRepoState.pagination.currentPage);
  });

  it(`returns a ${RepoGetters.EXPANDED_REPO_DETAIL_ID} prop with null as initial state`, () => {
    const subject = getters.expandedRepoDetailId(mockRepoState);
    expect(subject).toBeNull();
  });

  it(`returns a ${RepoGetters.HTTP_ERROR} prop, which is initially null`, () => {
    const subject = getters.httpError(mockRepoState);
    expect(subject).toBeNull();
  });

  it(`returns a ${RepoGetters.ITEMS_PER_PAGE} prop`, () => {
    const subject = getters.itemsPerPage(mockRepoState);
    expect(subject).toEqual(4);
  });

  it(`returns a ${RepoGetters.PAGE_COUNT} prop`, () => {
    const subject = getters.pageCount(mockRepoState);
    const expected = mockRepoState.repoItems.length / mockRepoState.pagination.itemsPerPage;
    expect(subject).toEqual(expected);
  });

  it(`returns a ${RepoGetters.REPO_ITEMS} prop`, () => {
    const subject = getters.repoItems(mockRepoState);
    expect(subject).toEqual([mockRepoItem]);
  });

  it(`returns a ${RepoGetters.REPO_ITEMS_FOR_CURRENT_PAGE} prop`, () => {
    const subject = getters.repoItemsForCurrentPage(mockRepoState);
    expect(subject).toEqual([mockRepoItem]);
  });
});
