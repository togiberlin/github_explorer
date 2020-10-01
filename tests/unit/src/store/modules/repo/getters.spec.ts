import getters from '@/store/modules/repo/getters';
import createMockRepoState from '../../../../factories/repo/repoState';
import createMockRepoItem from '../../../../factories/repo/repoItem';

describe('getters', () => {
  const mockRepoItem = createMockRepoItem();
  const mockRepoState = createMockRepoState([mockRepoItem]);

  it('returns a httpError prop, which is initially null', () => {
    const subject = getters.httpError(mockRepoState);
    expect(subject).toBeNull();
  });

  it('returns a pageCount prop', () => {
    const subject = getters.currentPage(mockRepoState);
    expect(subject).toBe(mockRepoState.pagination.currentPage);
  });

  it('returns a repoItems prop', () => {
    const subject = getters.repoItems(mockRepoState);
    expect(subject).toEqual([mockRepoItem])
  });

  it('returns a repoItemsForCurrentPage prop', () => {
    const subject = getters.repoItemsForCurrentPage(mockRepoState);
    expect(subject).toEqual([mockRepoItem]);
  });

  it('returns a currentPage prop', () => {
    const subject = getters.itemsPerPage(mockRepoState);
    expect(subject).toEqual(4);
  });

  it('returns a pageCount prop', () => {
    const subject = getters.pageCount(mockRepoState);
    const expected = mockRepoState.repoItems.length / mockRepoState.pagination.itemsPerPage;
    expect(subject).toEqual(expected);
  });

  it('returns a repoItemsForCurrentPage prop with null as initial state', () => {
    const subject = getters.expandedRepoDetailId(mockRepoState);
    expect(subject).toBeNull();
  });
});
