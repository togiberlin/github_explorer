import { shallowMount } from '@vue/test-utils'
import RepoSearch from '@/components/repo/RepoSearch.vue';

const factory = (values = {}) => {
  return shallowMount(RepoSearch, {
    data() {
      return {
        ...values
      };
    },
  });
};

describe('RepoSearch', () => {
  it('', () => {
    const wrapper = factory();

    expect(wrapper.find('.message').text()).toEqual("Lorem ipsum dolor sit amet");
  });
});
