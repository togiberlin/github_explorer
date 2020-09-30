import { shallowMount } from '@vue/test-utils'
import RepoList from '@/components/repo/RepoList.vue';

const factory = (values = {}) => {
  return shallowMount(RepoList, {
    data() {
      return {
        ...values
      };
    },
  });
};

describe.skip('RepoList', () => {
  it('tbd', () => {
    const wrapper = factory();

    expect(wrapper.find('.message').text()).toEqual("Lorem ipsum dolor sit amet");
  });
});
