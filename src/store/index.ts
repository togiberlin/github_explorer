import { createStore } from 'vuex';
import favoriteModule from './modules/favorite/index';
import repoModule from './modules/repolist/index';

export default createStore({
  modules: {
    favoriteModule,
    repoModule,
  },
});
