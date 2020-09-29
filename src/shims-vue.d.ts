declare module '*.vue' {
  import Vue from 'vue';

  export default Vue;
}

declare module 'vuejs-paginate' {
  const Paginate: Vue.Component;
  export default Paginate;
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

declare module 'vue-loading-spinner' {
  export const RotateSquare: Vue.Component;
  export const RotateSquare2: Vue.Component;
  export const RotateSquare3: Vue.Component;
  export const RotateSquare4: Vue.Component;
  export const RotateSquare5: Vue.Component;
  export const RotateSquare6: Vue.Component;
  export const CubeShadow: Vue.Component;
  export const Cube: Vue.Component;
  export const CubeGrid: Vue.Component;
  export const DoubleBound: Vue.Component;
  export const Stretch: Vue.Component;
  export const ScaleOut: Vue.Component;
  export const Jumper: Vue.Component;
  export const Wave: Vue.Component;
  export const Circle: Vue.Component;
  export const Circle2: Vue.Component;
  export const Circle3: Vue.Component;
  export const Circle4: Vue.Component;
  export const Circle5: Vue.Component;
  export const Circle6: Vue.Component;
  export const Circle7: Vue.Component;
  export const Circle8: Vue.Component;
  export const Circle9: Vue.Component;
  export const Circle10: Vue.Component;
  export const Circle11: Vue.Component;
  export const GoogleSpin: Vue.Component;
  export const ThreeDots: Vue.Component;
  export const Gauge: Vue.Component;
  export const Origami: Vue.Component;
  export const Hexagon: Vue.Component;
  export const Socket: Vue.Component;
  export const HourGlass: Vue.Component;
  export const Pencil: Vue.Component;
  export const Jawn: Vue.Component;
  export const LetterCube: Vue.Component;
  export const PingPong: Vue.Component;
  export const Diamond: Vue.Component;
  export const SpinLine: Vue.Component;
  export const Plane: Vue.Component;
  export const Mikepad: Vue.Component;
  export const Texture: Vue.Component;
}