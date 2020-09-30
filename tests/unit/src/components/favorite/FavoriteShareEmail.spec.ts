import { shallowMount } from '@vue/test-utils'
import FavoriteShareEmail from '@/components/favorite/FavoriteShareEmail.vue';

const factory = (values = {}) => {
  return shallowMount(FavoriteShareEmail, {
    data() {
      return {
        ...values
      };
    },
  });
};

describe.skip('FavoriteShareEmail', () => {
  it('tbd', () => {
    const wrapper = factory();

    expect(wrapper.find('.message').text()).toEqual("Lorem ipsum dolor sit amet");
  });
});
