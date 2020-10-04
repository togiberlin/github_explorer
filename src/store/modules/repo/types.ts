export enum RepoMutations {
  UPDATE_REPO_ITEMS = 'UPDATE_REPO_ITEMS',
  UPDATE_REPO_HTTP_ERROR = 'UPDATE_REPO_HTTP_ERROR',
  CHANGE_PAGE = 'CHANGE_PAGE',
  TOGGLE_REPO_DETAILS = 'TOGGLE_REPO_DETAILS',
}

export enum RepoActions {
  SEARCH_FOR_REPOS = 'searchForRepos',
  CHANGE_PAGE = 'changePage',
  TOGGLE_REPO_DETAILS = 'toggleRepoDetails',
}

export enum RepoGetters {
  REPO_ITEMS = 'repoItems',
  REPO_ITEMS_FOR_CURRENT_PAGE = 'repoItemsForCurrentPage',
  HTTP_ERROR = 'httpError',
  CURRENT_PAGE = 'currentPage',
  ITEMS_PER_PAGE = 'itemsPerPage',
  PAGE_COUNT = 'pageCount',
  EXPANDED_REPO_DETAIL_ID = 'expandedRepoDetailId',
}

export enum SearchResultSorting {
  STARS = 'stars',
  FORKS = 'forks',
  HELP_WANTED_ISSUES = 'help-wanted-issues',
  UPDATED = 'updated',
}

export enum SearchResultOrdering {
  DESC = 'desc',
  ASC = 'asc',
}

type Nullable<T> = T | null;

export interface GitHubRepoSearchHttpsParams {
  q: string; // search query
  sorting: SearchResultSorting;
  order: SearchResultOrdering;
  per_page: number;
  page: number;
}

export interface RepoItem {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  owner: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  };
  private: boolean;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  created_at: Date;
  updated_at: Date;
  pushed_at: Date;
  homepage: Nullable<string>;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: Nullable<string>;
  forks_count: number;
  open_issues_count: number;
  master_branch: string;
  default_branch: string;
  score: number;
  archive_url: string;
  assignees_url: string;
  blobs_url: string;
  branches_url: string;
  collaborators_url: string;
  comments_url: string;
  commits_url: string;
  compare_url: string;
  contents_url: string;
  contributors_url: string;
  deployments_url: string;
  downloads_url: string;
  events_url: string;
  forks_url: string;
  git_commits_url: string;
  git_refs_url: string;
  git_tags_url: string;
  git_url: string;
  issue_comment_url: string;
  issue_events_url: string;
  issues_url: string;
  keys_url: string;
  labels_url: string;
  languages_url: string;
  merges_url: string;
  milestones_url: string;
  notifications_url: string;
  pulls_url: string;
  releases_url: string;
  ssh_url: string;
  stargazers_url: string;
  statuses_url: string;
  subscribers_url: string;
  subscription_url: string;
  tags_url: string;
  teams_url: string;
  trees_url: string;
  clone_url: string;
  mirror_url: Nullable<string>;
  hooks_url: string;
  svn_url: string;
  forks: number;
  open_issues: number;
  watchers: number;
  has_issues: boolean;
  has_projects: boolean;
  has_pages: boolean;
  has_wiki: boolean;
  has_downloads: boolean;
  archived: Nullable<boolean>;
  disabled: Nullable<boolean>;
  license: Nullable<{
    key: string;
    name: string;
    url: string;
    spdx_id: string;
    node_id: string;
    html_url: string;
  }>;
}

export interface RepoSearchResult {
  total_count: number;
  incomplete_results: boolean;
  items: RepoItem[];
}

export interface RepoState {
  repoItems: RepoItem[];
  expandedRepoDetailId: number | null;
  pagination: {
    currentPage: number;
    itemsPerPage: number;
  };
  httpError: Error | null;
}
