import { shallowMount } from '@vue/test-utils'
import FavoriteListItem from '@/components/repo/FavoriteListItem.vue';

const factory = (values = {}) => {
  return shallowMount(FavoriteListItem, {
    data() {
      return {
        ...values
      };
    },
  });
};

describe.skip('FavoriteListItem', () => {
  it('tbd', () => {
    const wrapper = factory();

    expect(wrapper.find('.message').text()).toEqual("Lorem ipsum dolor sit amet");
  });
});
