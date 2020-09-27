import Vue from 'vue';
import Vuex from 'vuex';
import favoriteModule from './modules/favorite/index';
import repoModule from './modules/repo/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    favoriteModule,
    repoModule,
  },
});
