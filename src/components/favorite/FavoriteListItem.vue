<template>
  <div>
    <p class="favorite-item--title is-inline">
      <a :href="favoriteItem.owner.html_url">
        {{ favoriteItem.owner.login }}
      </a>
      /
      <a :href="favoriteItem.html_url">
        {{ favoriteItem.name }}
      </a>
    </p>
    <div class="is-pulled-right">
      <i @click="addFavoriteItem(favoriteItem)"
        class="fa fa-arrow-circle-up favorite-item--modify"></i>
      <i @click="removeFavoriteItem(favoriteItem)"
        class="fa fa-arrow-circle-down favorite-item--modify"></i>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';

const FavoriteListItemComponent = Vue.extend({
  name: 'FavoriteListItem',
  props: ['favoriteItem'],
  computed: {
    ...mapGetters([
      'favoriteItems',
    ]),
  },
  methods: {
    ...mapActions([
      'addFavoriteItem',
      'removeFavoriteItem',
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
