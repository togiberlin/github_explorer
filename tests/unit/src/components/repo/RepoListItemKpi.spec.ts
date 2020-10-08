import RepoListItemKpi from '@/components/repo/RepoListItemKpi.vue';
import { RepoComponents, RepoProps } from '@/components/repo/types';
import { shallowMount } from '@vue/test-utils';
import createMockRepoItem from '../../../factories/repo/repoItem';

describe(`${RepoComponents.REPO_LIST_ITEM_KPI}`, () => {
  it('displays Key Performance Indicators (KPI)', () => {
    const mockRepoItem = createMockRepoItem();

    const wrapper = shallowMount(RepoListItemKpi, {
      propsData: {
        [RepoProps.REPO_ITEM]: mockRepoItem,
      },
    });

    const ownerUrl = wrapper.findAll('a').at(0);
    expect(ownerUrl.attributes().href).toBe(mockRepoItem.owner.html_url);
    expect(ownerUrl.text()).toBe(`${mockRepoItem.owner.login}`);

    const languagesUrl = wrapper.findAll('a').at(1);
    expect(languagesUrl.attributes().href).toBe(`${mockRepoItem.html_url}/network/dependencies`);
    expect(languagesUrl.text()).toBe(`${mockRepoItem.language}`);

    const stargazersUrl = wrapper.findAll('a').at(2);
    expect(stargazersUrl.attributes().href).toBe(`${mockRepoItem.html_url}/stargazers`);
    expect(stargazersUrl.text()).toBe(`${mockRepoItem.stargazers_count} Stars`);

    const watchersUrl = wrapper.findAll('a').at(3);
    expect(watchersUrl.attributes().href).toBe(`${mockRepoItem.html_url}/watchers`);
    expect(watchersUrl.text()).toBe(`${mockRepoItem.watchers_count} Watchers`);

    const forksUrl = wrapper.findAll('a').at(4);
    expect(forksUrl.attributes().href).toBe(`${mockRepoItem.html_url}/network/members`);
    expect(forksUrl.text()).toBe(`${mockRepoItem.forks_count} Forks`);

    const issuesUrl = wrapper.findAll('a').at(5);
    expect(issuesUrl.attributes().href).toBe(`${mockRepoItem.html_url}/issues`);
    expect(issuesUrl.text()).toBe(`${mockRepoItem.open_issues_count} Issues`);
  });
});
