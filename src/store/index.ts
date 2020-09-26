import { createStore } from 'vuex';
import favoriteModule from './modules/favorite/index';
import repolistModule from './modules/repolist/index';

export default createStore({
  modules: {
    favoriteModule,
    repolistModule,
  },
});
