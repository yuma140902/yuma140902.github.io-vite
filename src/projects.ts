import imgDotfiles from '@/assets/dotfiles.png';
import imgLibJsonModel from '@/assets/libjsonmodel.png';
import imgLmml from '@/assets/lmml.png';
import imgLt from '@/assets/lt.png';
import imgRegendWebUi from '@/assets/regend.gif';
import imgReverie from '@/assets/reverie.png';
import imgTempura from '@/assets/tempura.png';
import imgUpToDateMod from '@/assets/uptodatemod.png';
import imgWebImageEditor from '@/assets/web-image-editor.png';

export type Technology =
  | 'rust'
  | 'opengl'
  | 'java'
  | 'scala'
  | 'minecraft'
  | 'ts'
  | 'opencv'
  | 'latex'
  | 'lua'
  | 'tauri'
  | 'wasm';

export type ProjectType = {
  name: string;
  description: string;
  repo?: string;
  since: string;
  hero?: {
    image?: string;
    url?: string;
  };
  technologies?: Technology[];
  releases?: {
    date: string;
    version: string;
  }[];
  sidebar_title?: string;
};

export function getTechnologyLabel(tech: Technology): string {
  switch (tech) {
    case 'rust':
      return 'Rust';
    case 'opengl':
      return 'OpenGL';
    case 'java':
      return 'Java';
    case 'scala':
      return 'Scala';
    case 'minecraft':
      return 'Minecraft';
    case 'ts':
      return 'TypeScript';
    case 'opencv':
      return 'OpenCV';
    case 'latex':
      return 'LaTeX';
    case 'lua':
      return 'Lua';
    case 'tauri':
      return 'Tauri';
    case 'wasm':
      return 'WebAssembly';
  }
}

export function getTechnologyClass(tech: Technology): string {
  switch (tech) {
    case 'rust':
      return 'bg-[#d19b7b] text-[#000000]';
    case 'opengl':
      return 'bg-[#52829f] text-[#ffffff]';
    case 'java':
      return 'bg-[#b07219] text-[#ffffff]';
    case 'scala':
      return 'bg-[#df352e] text-[#ffffff]';
    case 'minecraft':
      return 'bg-[#388d41] text-[#ffffff]';
    case 'ts':
      return 'bg-[#3076c3] text-[#ffffff]';
    case 'opencv':
      return 'bg-[#0101f7] text-[#ffffff]';
    case 'latex':
      return 'bg-[#0f807f] text-[#ffffff]';
    case 'lua':
      return 'bg-[#000080] text-[#ffffff]';
    case 'tauri':
      return 'bg-[#ffc337] text-[#000000]';
    case 'wasm':
      return 'bg-[#624de8] text-[#ffffff]';
    default:
      return 'bg-[#ff0000] text-[#0000ff]'; // TODO:
  }
}

export const main_projects: ProjectType[] = [
  {
    name: 'Reverie',
    description: 'Rust製の汎用3D/2Dゲームエンジン\n\nOpenGLを使っていて、WindowsとLinux上で動作する。',
    repo: 'https://github.com/yuma140902/Reverie',
    since: '2021年8月',
    hero: {
      image: imgReverie,
    },
    technologies: ['rust', 'opengl'],
    releases: [
      {
        date: '2022/10/01',
        version: 'v0.0.6',
      },
      {
        date: '2022/08/26',
        version: 'v0.0.5',
      },
      {
        date: '2021/11/07',
        version: 'v0.0.4',
      },
      {
        date: '2021/10/12',
        version: 'v0.0.3',
      },
      {
        date: '2021/10/09',
        version: 'v0.0.2',
      },
      {
        date: '2021/10/04',
        version: 'v0.0.1',
      },
      {
        date: '2021/10/04',
        version: 'v0.0.0',
      },
    ],
  },
  {
    name: 'Tempura SSG',
    description:
      'Rust製のパイプラインベースの静的サイトジェネレーター。\n\nパイプラインを定義し、マークダウン、JSON、テンプレート、画像などを処理してウェブサイトを生成する。\n\nこのサイトもTempuraで作られている。',
    repo: 'https://github.com/yuma140902/tempura',
    since: '2022年8月',
    hero: {
      image: imgTempura,
    },
    technologies: ['rust'],
    releases: [
      {
        date: '2023/11/10',
        version: 'v0.4.3',
      },
      {
        date: '2023/11/10',
        version: 'v0.4.2',
      },
      {
        date: '2023/11/10',
        version: 'v0.4.1',
      },
      {
        date: '2023/11/10',
        version: 'v0.4.0',
      },
      {
        date: '2023/10/15',
        version: 'v0.3.3',
      },
      {
        date: '2023/10/15',
        version: 'v0.3.2',
      },
      {
        date: '2023/10/15',
        version: 'v0.3.1',
      },
      {
        date: '2023/10/15',
        version: 'v0.3.0',
      },
      {
        date: '2023/10/14',
        version: 'v0.2.3',
      },
      {
        date: '2023/07/12',
        version: 'v0.2.2',
      },
      {
        date: '2023/02/14',
        version: 'v0.2.1',
      },
      {
        date: '2022/11/01',
        version: 'v0.2.0',
      },
      {
        date: '2022/10/31',
        version: 'v0.1.0',
      },
    ],
  },
  {
    name: 'UpToDateMod',
    description: 'MinecraftのMOD。祝4万ダウンロード',
    repo: 'https://github.com/yuma140902/UpToDateMod1.7.10',
    since: '2018年8月',
    hero: {
      image: imgUpToDateMod,
    },
    technologies: ['java', 'scala', 'minecraft'],
    releases: [
      {
        date: '2023/02/22',
        version: 'v2.4.1',
      },
      {
        date: '2023/02/19',
        version: 'v2.4.0',
      },
      {
        date: '2023/01/20',
        version: 'v2.3.12',
      },
      {
        date: '2021/07/04',
        version: 'v2.3.11',
      },
      {
        date: '2021/12/19',
        version: 'v2.3.10',
      },
      {
        date: '2020/12/19',
        version: 'v2.3.9',
      },
      {
        date: '2020/11/06',
        version: 'v2.3.8',
      },
      {
        date: '2020/11/02',
        version: 'v2.3.7',
      },
      {
        date: '2020/11/01',
        version: 'v2.3.6',
      },
      {
        date: '2020/09/13',
        version: 'v2.3.5',
      },
      {
        date: '2020/08/19',
        version: 'v2.3.4',
      },
      {
        date: '2020/07/11',
        version: 'v2.3.3',
      },
      {
        date: '2020/06/27',
        version: 'v2.3.2',
      },
      {
        date: '2020/05/16',
        version: 'v2.3.1',
      },
      {
        date: '2020/05/13',
        version: 'v2.3.0',
      },
      {
        date: '2020/04/19',
        version: 'v2.2.2',
      },
      {
        date: '2020/04/15',
        version: 'v2.2.1',
      },
      {
        date: '2020/04/15',
        version: 'v2.2.0',
      },
      {
        date: '2020/03/21',
        version: 'v2.1.1',
      },
      {
        date: '2020/03/21',
        version: 'v2.1.0',
      },
      {
        date: '2020/03/06',
        version: 'v2.0.1',
      },
      {
        date: '2020/03/01',
        version: 'v2.0.0',
      },
      {
        date: '2019/07/09',
        version: 'v1.6.1',
      },
      {
        date: '2019/07/05',
        version: 'v1.6.0',
      },
      {
        date: '2019/05/14',
        version: 'v1.5.0',
      },
      {
        date: '2019/04/01',
        version: 'v1.4.2',
      },
      {
        date: '2019/02/22',
        version: 'v1.4.1',
      },
      {
        date: '2019/02/22',
        version: 'v1.4.0',
      },
      {
        date: '2019/02/09',
        version: 'v1.3.0',
      },
      {
        date: '2019/01/14',
        version: 'v1.2.1',
      },
      {
        date: '2019/01/09',
        version: 'v1.2.0',
      },
      {
        date: '2018/12/27',
        version: 'v1.1.0',
      },
      {
        date: '2018/12/16',
        version: 'v1.0.2',
      },
      {
        date: '2018/12/16',
        version: 'v1.0.1',
      },
      {
        date: '2018/12/09',
        version: 'v1.0.0',
      },
      {
        date: '2018/11/24',
        version: 'v0.5.1',
      },
      {
        date: '2018/11/20',
        version: 'v0.5.0',
      },
      {
        date: '2018/11/14',
        version: 'v0.4.0',
      },
      {
        date: '2018/11/11',
        version: 'v0.3.1',
      },
      {
        date: '2018/11/11',
        version: 'v0.3.0',
      },
      {
        date: '2018/11/06',
        version: 'v0.2.1',
      },
      {
        date: '2018/11/03',
        version: 'v0.2.0',
      },
      {
        date: '2018/09/08',
        version: 'v0.1.1',
      },
      {
        date: '2018/09/08',
        version: 'v0.1.0',
      },
      {
        date: '2018/09/08',
        version: 'v0.0.2',
      },
      {
        date: '2018/08/27',
        version: 'v0.0.1',
      },
      {
        date: '2018/08/26',
        version: 'v0.0.0',
      },
    ],
  },
  {
    name: 'LibJsonModel',
    description: 'Minecraft 1.7.10用のMOD。\n\n1.8以降で追加されたJSONモデルを読み込み、描画することができる。',
    repo: 'https://github.com/yuma140902/LibJsonModel',
    since: '2023年7月',
    hero: {
      image: imgLibJsonModel,
    },
    technologies: ['java', 'minecraft'],
  },
  {
    name: 'Web Image Editor',
    description: 'ブラウザ上で動作する画像エディタ',
    repo: 'https://github.com/yuma140902/web-image-editor',
    since: '2023年9月',
    hero: {
      image: imgWebImageEditor,
      url: '/web-image-editor/',
    },
    technologies: ['ts', 'ts', 'opencv', 'ts'],
  },
  {
    name: 'LaTeXのテンプレート集',
    description: '9種類のテンプレート',
    repo: 'https://github.com/yuma140902/lt',
    since: '2022年1月',
    hero: {
      image: imgLt,
    },
    technologies: ['latex'],
  },
  {
    name: 'auto-split-direction.nvim',
    sidebar_title: 'auto-split-direction',
    description:
      'ウィンドウの分割方向を自動的に決定するNeovimプラグイン。\n\nウィンドウが縦長なら水平に、横長なら垂直に分割する。',
    repo: 'https://github.com/yuma140902/auto-split-direction.nvim',
    since: '2023年6月',
    technologies: ['lua'],
    releases: [
      {
        date: '2023/07/22',
        version: 'v0.1.0',
      },
    ],
  },
  {
    name: 'random-output',
    description:
      '標準出力・標準エラー出力にランダムな文字列を出力するCLIツール。\n\nタイムスタンプをつけたり色をつけたりもできる。シェルスクリプトの動作確認に便利。',
    repo: 'https://github.com/yuma140902/random-output',
    since: '2022年7月',
    technologies: ['rust'],
    releases: [
      {
        date: '2023/02/14',
        version: 'v0.3.0',
      },
      {
        date: '2023/02/14',
        version: 'v0.2.0',
      },
    ],
  },
  {
    name: 'dotfiles',
    description: 'Neovim等の設定ファイルとそのインストーラー',
    repo: 'https://github.com/yuma140902/dotfiles-public',
    since: '2023年7月(2019年12月)',
    hero: {
      image: imgDotfiles,
    },
    technologies: ['lua'],
  },
  {
    name: 'gallery-viewer',
    description: 'gallery-dlが生成したメタデータを表示する',
    repo: 'https://github.com/yuma140902/gallery-viewer',
    since: '2023年2月',
    technologies: ['rust', 'ts', 'tauri'],
  },
  {
    name: 'regend',
    description: '正規表現をε-NFAおよびDFAに変換する',
    repo: 'https://github.com/yuma140902/regend',
    since: '2023年11月',
    technologies: ['rust'],
  },
  {
    name: 'Regend WebUI',
    description: 'regendのフロントエンド。\n\nDFAをマウスで掴んでグリグリ動かして遊べる。',
    repo: 'https://github.com/yuma140902/regend-webui',
    since: '2023年11月',
    hero: {
      image: imgRegendWebUi,
    },
    technologies: ['rust', 'wasm', 'ts'],
  },
  {
    name: 'LMML Music Macro Language',
    sidebar_title: 'LMML',
    description: 'MML (Music Macro Language) の方言である独自言語LMMLの仕様と、パーサーやプレイヤーなどの実装',
    repo: 'https://github.com/yuma140902/lmml',
    since: '2023年11月',
    hero: {
      url: 'https://github.com/yuma140902/lmml/assets/23431077/dfad8777-ade5-4591-8804-a3968a2e14ea',
      image: imgLmml,
    },
    technologies: ['rust'],
  },
];
