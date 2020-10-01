import { shallowMount } from '@vue/test-utils';
import RepoListItem from '@/components/repo/RepoListItem.vue';

const factory = (values = {}) => shallowMount(RepoListItem, {
  data() {
    return {
      ...values,
    };
  },
});

describe.skip('RepoListItem', () => {
  it('tbd', () => {
    const wrapper = factory();

    expect(wrapper.find('.message').text()).toEqual('Lorem ipsum dolor sit amet');
  });
});
