<template>
  <div>
    <p class="favorite-item--title is-inline">{{ favoriteItem.title }}</p>
    <div class="is-pulled-right">
      <i @click="addFavoriteItem(favoriteItem)"
        class="fa fa-arrow-circle-up favorite-item--modify"></i>
      <i @click="removeFavoriteItem(favoriteItem)"
        class="fa fa-arrow-circle-down favorite-item--modify"></i>
    </div>
    <div class="favorite-item--content">
      <span class="favorite-item--quantity has-text-grey is-pulled-right">
        Quantity: {{ favoriteItem.quantity }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { mapActions } from 'vuex';

export default {
  name: 'FavoriteListItem',
  props: ['favoriteItem'],
  methods: {
    ...mapActions([
      'addFavoriteItem',
      'removeFavoriteItem',
    ]),
  },
};
</script>

<style scoped lang="scss">
.favorite-item--modify {
  cursor: pointer;
  margin: 0 1px;
}
</style>
