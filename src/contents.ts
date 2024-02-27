export type ContentType = {
  slug: string;
  title: string;
  url: string;
  outside: boolean;
};

export const contents: ContentType[] = [
  {
    slug: 'neovim-bench',
    title: 'Neovimのベンチマーク',
    url: '/dotfiles-public/',
    outside: true,
  },
  {
    slug: 'tempura-doc',
    title: 'Tempuraドキュメント',
    url: '/tempura-doc/',
    outside: true,
  },
  {
    slug: 'tempura-example',
    title: 'Tempuraの実行例',
    url: '/tempura-example/sample.html',
    outside: true,
  },
];
