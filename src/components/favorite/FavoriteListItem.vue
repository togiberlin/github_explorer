<template>
  <div>
    <p class="favorite-item--title is-inline">
      <i class="fa fa-github"></i>
      <a :href="favoriteItem.owner.html_url">
        {{ favoriteItem.owner.login }}
      </a>
      /
      <a :href="favoriteItem.html_url">
        {{ favoriteItem.name }}
      </a>
    </p>
    <div class="is-pulled-right">
      <i @click="removeFavoriteItem(favoriteItem)"
        class="fa fa-window-close favorite-item--modify"></i>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { FavoriteActions, FavoriteGetters } from '@/store/modules/favorite/types';
import { mapActions, mapGetters } from 'vuex';
import { FavoriteComponents, FavoriteProps } from './types';

const FavoriteListItemComponent = Vue.extend({
  name: FavoriteComponents.FAVORITE_LIST_ITEM,
  props: [FavoriteProps.FAVORITE_ITEM],
  computed: {
    ...mapGetters([
      FavoriteGetters.FAVORITE_ITEMS,
    ]),
  },
  methods: {
    ...mapActions([
      FavoriteActions.REMOVE_FAVORITE_ITEM,
    ]),
  },
});

export default FavoriteListItemComponent;
</script>

<style scoped lang="scss">
.favorite-item--modify {
  cursor: pointer;
  margin: 0 1px;
}
</style>
