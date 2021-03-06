import { FavoriteItem } from '@/store/modules/favorite/types';
import { RepoItem } from '@/store/modules/repo/types';

import Chance from 'chance';

const chance = new Chance();

export default function createMockRepoItem(): RepoItem | FavoriteItem {
  return {
    id: chance.integer(),
    node_id: chance.guid(),
    name: chance.name(),
    full_name: chance.name(),
    owner: {
      login: chance.name(),
      id: chance.integer(),
      node_id: chance.guid(),
      avatar_url: chance.url(),
      gravatar_id: chance.url(),
      url: chance.url(),
      html_url: chance.url(),
      followers_url: chance.url(),
      following_url: chance.url(),
      gists_url: chance.url(),
      starred_url: chance.url(),
      subscriptions_url: chance.url(),
      organizations_url: chance.url(),
      repos_url: chance.url(),
      events_url: chance.url(),
      received_events_url: chance.url(),
      type: chance.url(),
      site_admin: chance.bool(),
    },
    private: chance.bool(),
    html_url: chance.url(),
    description: chance.url(),
    fork: chance.bool(),
    url: chance.url(),
    created_at: chance.date(),
    updated_at: chance.date(),
    pushed_at: chance.date(),
    homepage: chance.url(),
    size: chance.integer(),
    stargazers_count: chance.integer(),
    watchers_count: chance.integer(),
    language: chance.country(),
    forks_count: chance.integer(),
    open_issues_count: chance.integer(),
    master_branch: chance.url(),
    default_branch: chance.url(),
    score: chance.integer(),
    archive_url: chance.url(),
    assignees_url: chance.url(),
    blobs_url: chance.url(),
    branches_url: chance.url(),
    collaborators_url: chance.url(),
    comments_url: chance.url(),
    commits_url: chance.url(),
    compare_url: chance.url(),
    contents_url: chance.url(),
    contributors_url: chance.url(),
    deployments_url: chance.url(),
    downloads_url: chance.url(),
    events_url: chance.url(),
    forks_url: chance.url(),
    git_commits_url: chance.url(),
    git_refs_url: chance.url(),
    git_tags_url: chance.url(),
    git_url: chance.url(),
    issue_comment_url: chance.url(),
    issue_events_url: chance.url(),
    issues_url: chance.url(),
    keys_url: chance.url(),
    labels_url: chance.url(),
    languages_url: chance.url(),
    merges_url: chance.url(),
    milestones_url: chance.url(),
    notifications_url: chance.url(),
    pulls_url: chance.url(),
    releases_url: chance.url(),
    ssh_url: chance.url(),
    stargazers_url: chance.url(),
    statuses_url: chance.url(),
    subscribers_url: chance.url(),
    subscription_url: chance.url(),
    tags_url: chance.url(),
    teams_url: chance.url(),
    trees_url: chance.url(),
    clone_url: chance.url(),
    mirror_url: chance.url(),
    hooks_url: chance.url(),
    svn_url: chance.url(),
    forks: chance.integer(),
    open_issues: chance.integer(),
    watchers: chance.integer(),
    has_issues: chance.bool(),
    has_projects: chance.bool(),
    has_pages: chance.bool(),
    has_wiki: chance.bool(),
    has_downloads: chance.bool(),
    archived: chance.bool(),
    disabled: chance.bool(),
    license: {
      key: chance.url(),
      name: chance.name(),
      url: chance.url(),
      spdx_id: chance.guid(),
      node_id: chance.guid(),
      html_url: chance.url(),
    },
  };
}
