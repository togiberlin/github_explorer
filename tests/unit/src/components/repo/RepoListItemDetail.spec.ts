import { shallowMount } from '@vue/test-utils';
import RepoListItemDetail from '@/components/repo/RepoListItemDetail.vue';

const factory = (values = {}) => shallowMount(RepoListItemDetail, {
  data() {
    return {
      ...values,
    };
  },
});

describe.skip('RepoListItemDetail', () => {
  it('tbd', () => {
    const wrapper = factory();

    expect(wrapper.find('.message').text()).toEqual('Lorem ipsum dolor sit amet');
  });
});