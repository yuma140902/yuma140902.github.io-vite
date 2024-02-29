import webImageEditorImg from '../assets/web-image-editor.png';
import regendWebUiImg from '../assets/regend.gif';

export type AppType = {
  name: string;
  copy: string;
  badge?: string;
  img?: string;
  url: string;
  outside: boolean;
};

export const main_apps: AppType[] = [
  {
    name: 'Web Image Editor',
    copy: 'ブラウザ上で画像編集',
    url: '/web-image-editor/',
    badge:
      'https://img.shields.io/github/deployments/yuma140902/web-image-editor/github-pages?logo=github&label=Deployment',
    outside: true,
    img: webImageEditorImg,
  },
  {
    name: 'Diff Tool',
    copy: '2つの文字列の差分を表示',
    url: '/webtools/diff.html',
    badge:
      'https://img.shields.io/github/deployments/yuma140902/yuma140902.github.io/github-pages?logo=github&label=Deployment',
    outside: false,
  },
  {
    name: 'CSV to LaTeX',
    copy: 'エクセルの表をLaTeX形式に変換',
    url: '/webtools/csv2tex.html',
    badge:
      'https://img.shields.io/github/deployments/yuma140902/yuma140902.github.io/github-pages?logo=github&label=Deployment',
    outside: false,
  },
];
export const minor_apps: AppType[] = [
  {
    name: 'Regend WebUI',
    copy: '正規表現をDFAに変換',
    url: '/regend-webui/',
    badge:
      'https://img.shields.io/github/deployments/yuma140902/regend-webui/github-pages?logo=github&label=Deployment',
    outside: true,
    img: regendWebUiImg,
  },
  {
    name: 'Sort Visualizer',
    copy: 'ソートアルゴリズムを可視化',
    url: '/webtools/sort.html',
    badge:
      'https://img.shields.io/github/deployments/yuma140902/yuma140902.github.io/github-pages?logo=github&label=Deployment',
    outside: false,
  },
  {
    name: 'sanmoku-next-js',
    copy: 'Next.jsで実装された三目並べ',
    url: '/sanmoku-next-js/',
    badge:
      'https://img.shields.io/github/deployments/yuma140902/sanmoku-next-js/github-pages?logo=github&label=Deployment',
    outside: true,
  },
  {
    name: 'gomoku-react',
    copy: 'Reactで実装された五目並べ',
    url: '/gomoku-react/',
    badge:
      'https://img.shields.io/github/deployments/yuma140902/gomoku-react/github-pages?logo=github&label=Deployment',
    outside: true,
  },
  {
    name: 'gomoku-blazor',
    copy: 'Blazorで実装された五目並べ',
    url: '/gomoku-blazor/',
    badge:
      'https://img.shields.io/github/deployments/yuma140902/gomoku-blazor/github-pages?logo=github&label=Deployment',
    outside: true,
  },
  {
    name: 'gomoku-elm',
    copy: 'Elmで実装された五目並べ',
    url: '/gomoku-elm/',
    badge:
      'https://img.shields.io/github/deployments/yuma140902/gomoku-elm/github-pages?logo=github&label=Deployment',
    outside: true,
  },
];
