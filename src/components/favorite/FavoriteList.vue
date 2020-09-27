<template>
  <div id="favorite">
    <div class="favorite--header has-text-centered">
      <i class="fa fa-2x fa-bookmark"></i>
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
    <button :disabled="!favoriteItems.length" class="button is-primary">
      Share via e-mail<span class="has-text-weight-bold"></span>
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import FavoriteListItem from './FavoriteListItem.vue';

const FavoriteListComponent = Vue.extend({
  name: 'FavoriteList',
  computed: {
    ...mapGetters(['favoriteItems', 'favoriteQuantity']),
  },
  created() {
    // @ts-ignore
    this.$store.dispatch('getFavoriteItems');
  },
  methods: {
    ...mapActions(['removeAllFavoriteItems']),
  },
  components: {
    FavoriteListItem,
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
