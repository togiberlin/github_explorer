<template>
  <button
    :onclick="mailtoLink"
    :disabled="!favoriteItems.length"
    class="button is-primary">
    Share via e-mail<span class="has-text-weight-bold"></span>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import getMailtoLink from 'mailto-link';
import { FavoriteItem } from '@/store/modules/favorite/types';
import { FavoriteComponents, FavoriteProps } from './types';

const FavoriteShareEmailComponent = Vue.extend({
  name: FavoriteComponents.FAVORITE_SHARE_EMAIL,
  props: [FavoriteProps.FAVORITE_ITEMS],
  computed: {
    mailtoLink() {
      const favoriteRepos: string = this.favoriteItems.map(
        (favoriteItem: FavoriteItem) => favoriteItem.html_url,
      ).join(', ');

      const link = getMailtoLink({
        to: '',
        subject: 'Cool stuff on GitHub!',
        body: `Hey! I found some nice stuff to share. Check out these repos: ${favoriteRepos}`,
      });

      return `location.href='${link}'`;
    },
  },
});

export default FavoriteShareEmailComponent;
</script>

<style scoped lang="scss">
</style>
