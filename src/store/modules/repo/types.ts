export enum RepoMutationTypes {
  UPDATE_REPO_ITEMS = 'UPDATE_REPO_ITEMS',
  UPDATE_REPO_DETAILS = 'UPDATE_REPO_DETAILS',
  UPDATE_REPO_HTTP_ERROR = 'UPDATE_REPO_HTTP_ERROR',
  TOGGLE_REPO_DETAILS = 'TOGGLE_REPO_DETAILS',
  CHANGE_PAGE = 'CHANGE_PAGE',
}

export enum RepoActionTypes {
  SEARCH_FOR_REPOS = 'searchForRepos',
  GET_REPO_ITEMS = 'getRepoItems',
  GET_REPO_DETAILS_FOR_PAGE = 'getRepoDetailsForPage',
  GET_ALL_REPO_DETAILS = 'getAllRepoDetails',
  TOGGLE_REPO_DETAILS = 'toggleRepoDetails',
  CHANGE_PAGE = 'changePage',
}

export enum RepoGetterTypes {
  REPO_ITEMS = 'repoItems',
  REPO_ITEMS_FOR_CURRENT_PAGE = 'repoItemsForCurrentPage',
  HTTP_ERROR = 'httpError',
  CURRENT_PAGE = 'currentPage',
  ITEMS_PER_PAGE = 'itemsPerPage',
  PAGE_COUNT = 'pageCount',
}

enum SearchResultSorting {
  STARS = 'stars',
  FORKS = 'forks',
  HELP_WANTED_ISSUES = 'help-wanted-issues',
  UPDATED = 'updated',
}

enum SearchResultOrdering {
  DESC = 'desc',
  ASC = 'asc',
}

export interface SearchParams {
  q: string; // search query
  sorting: SearchResultSorting;
  order: SearchResultOrdering;
  per_page: number;
  page: number;
}

interface Owner {
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
}

export interface RepoDetail {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: Owner;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: Date;
  updated_at: Date;
  pushed_at: Date;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage?: any;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  forks_count: number;
  mirror_url?: any;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: {
    key: string;
    name: string;
    spdx_id: string;
    url: string;
    node_id: string;
  };
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
  temp_clone_token?: any;
  network_count: number;
  subscribers_count: number;
}

export interface RepoItem {
  isDetailVisible: boolean;
  details?: RepoDetail; // this property is assigned after a 2nd HTTP request.

  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: Owner;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
}

interface SearchResultItem {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  owner: Owner;
  private: boolean;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  created_at: Date;
  updated_at: Date;
  pushed_at: Date;
  homepage: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
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
  mirror_url: string;
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
  archived: boolean;
  disabled: boolean;
  license: {
    key: string;
    name: string;
    url: string;
    spdx_id: string;
    node_id: string;
    html_url: string;
  };
}

export interface RepoSearchResult {
  total_count: number;
  incomplete_results: boolean;
  items: SearchResultItem[];
}

export interface RepoState {
  repoItems: RepoItem[];
  pagination: {
    currentPage: number;
    itemsPerPage: number;
  };
  httpError?: Error | null;
}
