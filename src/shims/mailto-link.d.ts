declare module 'mailto-link' {
  export default function mailtoLink(
    options: {
      to?: string | string[];
      subject?: string;
      body?: string;
    },
  ): string;
}
