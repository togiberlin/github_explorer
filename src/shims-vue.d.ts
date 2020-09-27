declare module '*.vue' {
  import Vue from 'vue';

  export default Vue;
}

declare module 'vue-content-loader' {
  import { ContentLoader } from 'vue-content-loader';

  declare const ContentLoader: any;
}