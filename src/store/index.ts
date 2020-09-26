import { createStore } from 'vuex';
import favoriteModule from './modules/favorite/index';
import repoModule from './modules/repo/index';

export default createStore({
  modules: {
    favoriteModule,
    repoModule,
  },
});
