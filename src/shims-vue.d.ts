declare module '*.vue' {
  import Vue from 'vue';

  export default Vue;
}

declare module 'vue-content-loader' {
  import { ContentLoader } from 'vue-content-loader';

  declare const ContentLoader: any;
  // TODO: add typings
}

declare module 'vuejs-paginate' {
  // TODO: add typings
}

declare module 'mailto-link' {
  export default function mailtoLink(
    options: {
      to?: string | string[],
      subject?: string,
      body?: string,
    },
  ): string;
}