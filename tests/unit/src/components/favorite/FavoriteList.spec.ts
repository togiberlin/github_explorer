import { shallowMount } from '@vue/test-utils'
import FavoriteList from '@/components/favorite/FavoriteList.vue';

const factory = (values = {}) => {
  return shallowMount(FavoriteList, {
    data() {
      return {
        ...values
      };
    },
  });
};

describe('FavoriteList', () => {
  it('tbd', () => {
    const wrapper = factory();

    expect(wrapper.find('.message').text()).toEqual("Lorem ipsum dolor sit amet");
  });
});
