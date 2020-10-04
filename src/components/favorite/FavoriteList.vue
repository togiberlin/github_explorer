<template>
  <div id="favorite">
    <div class="favorite--header has-text-centered">
      <i class="fa fa-2x fa-star"></i>
      <h1>Bookmarks</h1>
    </div>
    <p v-if="!favoriteItems.length" class="favorite-empty-text has-text-centered">
      You have no bookmarked repos yet!
    </p>
    <ul v-if="favoriteItems.length > 0">
      <li v-for="favoriteItem in favoriteItems" :key="favoriteItem.id" class="favorite-item">
        <FavoriteListItem :favoriteItem="favoriteItem" />
      </li>
      <div class="favorite-details">
        <p>Favorites selected:
          <span class="has-text-weight-bold">{{ favoriteQuantity }}</span>
        </p>
        <p @click="removeAllFavoriteItems"
          class="favorite-remove-all--text">
          <i class="fa fa-trash"></i>Clear all
        </p>
      </div>
    </ul>
    <FavoriteShareEmail :favoriteItems="favoriteItems" />
  </div>
</template>

<script lang="ts">
import { FavoriteActions, FavoriteGetters } from '@/store/modules/favorite/types';
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import { FavoriteComponents } from './types';
import FavoriteListItem from './FavoriteListItem.vue';
import FavoriteShareEmail from './FavoriteShareEmail.vue';

const FavoriteListComponent = Vue.extend({
  name: FavoriteComponents.FAVORITE_LIST,
  computed: {
    ...mapGetters([
      FavoriteGetters.FAVORITE_ITEMS,
      FavoriteGetters.FAVORITE_QUANTITY,
    ]),
  },
  created() {
    this.$store.dispatch(FavoriteActions.GET_FAVORITE_ITEMS);
  },
  methods: {
    ...mapActions([
      FavoriteActions.REMOVE_ALL_FAVORITE_ITEMS,
    ]),
  },
  components: {
    FavoriteListItem,
    FavoriteShareEmail,
  },
});

export default FavoriteListComponent;
</script>

<style scoped lang="scss">
#favorite {
  height: 100%;
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.favorite-empty-text {
  padding: 10px 0;
}

.favorite--header {
  border-bottom: 1px solid #e8e8e8;
  padding-bottom: 15px;
}

.favorite-item {
  padding: 10px 0;
}

.favorite-details {
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  padding: 15px;
}

.favorite-remove-all--text {
  cursor: pointer;
}

.favorite-remove-all--text .fa {
  padding-right: 5px;
}
</style>
