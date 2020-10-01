import { shallowMount } from '@vue/test-utils';
import RepoPagination from '@/components/repo/RepoPagination.vue';

const factory = (values = {}) => shallowMount(RepoPagination, {
  data() {
    return {
      ...values,
    };
  },
});

describe.skip('RepoPagination', () => {
  it('tbd', () => {
    const wrapper = factory();

    expect(wrapper.find('.message').text()).toEqual('Lorem ipsum dolor sit amet');
  });
});
