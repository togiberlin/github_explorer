import { shallowMount } from '@vue/test-utils'
import RepoListItemKpi from '@/components/repo/RepoListItemKpi.vue';

const factory = (values = {}) => {
  return shallowMount(RepoListItemKpi, {
    data() {
      return {
        ...values
      };
    },
  });
};

describe('RepoListItemKpi', () => {
  it('tbd', () => {
    const wrapper = factory();

    expect(wrapper.find('.message').text()).toEqual("Lorem ipsum dolor sit amet");
  });
});
