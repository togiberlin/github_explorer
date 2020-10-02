import { GitHubRepoSearchHttpsParams, SearchResultOrdering, SearchResultSorting } from '@/store/modules/repo/types';

export default function createMockSearchParams(): GitHubRepoSearchHttpsParams {
  return {
    q: 'Ruby on Rails',
    sorting: SearchResultSorting.FORKS,
    order: SearchResultOrdering.DESC,
    per_page: 4,
    page: 1,
  };
}
