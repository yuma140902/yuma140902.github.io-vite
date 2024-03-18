import imgAaMakeHelper from '@/assets/aamakehelper.png';
import imgAicUnity from '@/assets/aic_unity.png';
import imgCc from '@/assets/cc.png';
import imgCmdLauncher from '@/assets/cmdlauncher.png';
import imgCompareCost from '@/assets/compare_cost.png';
import imgCountDown from '@/assets/countdown.png';
import imgCounter from '@/assets/counter.png';
import imgDdRenban from '@/assets/ddrenban.png';
import imgDotfiles from '@/assets/dotfiles.png';
import imgEidokurou from '@/assets/eidokurou.png';
import imgFileCombine from '@/assets/filecombine.png';
import imgGmailSwapChecks from '@/assets/gmailswapchecks.png';
import imgHn from '@/assets/hn.png';
import imgImplOfS from '@/assets/impl_of_s.png';
import imgKeyLaunch from '@/assets/keylaunch.png';
import imgLibJsonModel from '@/assets/libjsonmodel.png';
import imgLmml from '@/assets/lmml.png';
import imgLt from '@/assets/lt.png';
import imgMcResourcePackUtil from '@/assets/mcresourcepackutil.png';
import imgMetisCas from '@/assets/metiscas.png';
import imgMu3Counter from '@/assets/mu3_counter.png';
import imgMyUtils1 from '@/assets/myutils1.png';
import imgOreUnifyGenerator from '@/assets/ore_unify_generator.png';
import imgPbph from '@/assets/pbph.png';
import imgRegendWebUi from '@/assets/regend.gif';
import imgReverie from '@/assets/reverie.png';
import imgRustyCraft from '@/assets/rustycraft.png';
import imgSearchHub from '@/assets/searchhub.png';
import imgShutdownCountdown from '@/assets/shutdown_countdown.png';
import imgSmallViewer from '@/assets/small_viewer.png';
import imgSs2 from '@/assets/ss2.png';
import imgSs3 from '@/assets/ss3.png';
import imgSs4 from '@/assets/ss4.png';
import imgTempura from '@/assets/tempura.png';
import imgUpToDateMod from '@/assets/uptodatemod.png';
import imgWebImageEditor from '@/assets/web-image-editor.png';
import imgWebTools from '@/assets/webtools.png';
import imgWikiView2 from '@/assets/wikiview2.png';

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
  | 'wasm'
  | 'js'
  | 'python'
  | 'kotlin'
  | 'android'
  | 'csharp'
  | 'unity'
  | 'pwsh'
  | 'socketio'
  | 'line'
  | 'postgresql'
  | 'elm'
  | 'winforms'
  | 'fxaddon'
  | 'html'
  | 'angular'
  | 'processing'
  | 'lwjgl'
  | 'wpf'
  | 'objectivec'
  | 'hsp'
  | 'cpp'
  | 'applescript'
  | 'nadeshiko'
  | 'gtk'
  | 'webgl'
  | 'electron'
  | 'piston'
  | 'javafx'
  | 'qt'
  | 'win32api'
  | 'swift';

export type ProjectType = {
  name: string;
  description: string;
  repo?: string;
  since?: string;
  until?: string;
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

export type ForkType = {
  name: string;
  downstream: {
    repo: string;
    branch: string;
  };
  upstream: {
    repo: string;
    branch: string;
  };
  description: string;
  change: string;
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
    case 'js':
      return 'JavaScript';
    case 'python':
      return 'Python';
    case 'kotlin':
      return 'Kotlin';
    case 'android':
      return 'Android';
    case 'csharp':
      return 'C#';
    case 'unity':
      return 'Unity';
    case 'pwsh':
      return 'PowerShell';
    case 'socketio':
      return 'Socket.IO';
    case 'line':
      return 'LINE';
    case 'postgresql':
      return 'PostgreSQL';
    case 'elm':
      return 'Elm';
    case 'winforms':
      return 'Windows Forms';
    case 'fxaddon':
      return 'Firefox Addon';
    case 'html':
      return 'HTML';
    case 'angular':
      return 'Angular';
    case 'processing':
      return 'Processing';
    case 'lwjgl':
      return 'LWJGL';
    case 'wpf':
      return 'WPF';
    case 'objectivec':
      return 'Objective-C';
    case 'hsp':
      return 'HSP';
    case 'cpp':
      return 'C++';
    case 'applescript':
      return 'AppleScript';
    case 'nadeshiko':
      return 'なでしこ';
    case 'gtk':
      return 'GTK';
    case 'webgl':
      return 'WebGL';
    case 'electron':
      return 'Electron';
    case 'piston':
      return 'Piston';
    case 'javafx':
      return 'JavaFX';
    case 'qt':
      return 'Qt';
    case 'win32api':
      return 'Win32 API';
    case 'swift':
      return 'Swift';
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
    case 'js':
      return 'bg-[#efd81d] text-[#000000]';
    case 'python':
      return 'bg-[#f0e9a4] text-[#244d87]';
    case 'kotlin':
      return 'bg-[#a97bff] text-[#000000]';
    case 'android':
      return 'bg-[#36f591] text-[#000000]';
    case 'csharp':
      return 'bg-[#178600] text-[#ffffff]';
    case 'unity':
      return 'bg-[#fff51e] text-[#000000]';
    case 'pwsh':
      return 'bg-[#26364a] text-[#ffffff]';
    case 'socketio':
      return 'bg-[#efd81d] text-[#000000]';
    case 'line':
      return 'bg-[#00b300] text-[#ffffff]';
    case 'postgresql':
      return 'bg-[#31648c] text-[#ffffff]';
    case 'elm':
      return 'bg-[#60b5cc] text-[#ffffff]';
    case 'winforms':
      return 'bg-[#3178c6] text-[#ffffff]';
    case 'fxaddon':
      return 'bg-[#ff473d] text-[#ffffff]';
    case 'html':
      return 'bg-[#e5552d] text-[#ffffff]';
    case 'angular':
      return 'bg-[#bd002e] text-[#ffffff]';
    case 'processing':
      return 'bg-[#092033] text-[#ffffff]';
    case 'lwjgl':
      return 'bg-[#222755] text-[#ffffff]';
    case 'wpf':
      return 'bg-[#672877] text-[#ffffff]';
    case 'objectivec':
      return 'bg-[#ce9d62] text-[#000000]';
    case 'hsp':
      return 'bg-[#2466b3] text-[#ffffff]';
    case 'cpp':
      return 'bg-[#6a9dd3] text-[#000000]';
    case 'applescript':
      return 'bg-[#ffffff] text-[#000000]';
    case 'nadeshiko':
      return 'bg-[#ffecec] text-[#000000]';
    case 'gtk':
      return 'bg-[#83e820] text-[#000000]';
    case 'webgl':
      return 'bg-[#940000] text-[#ffffff]';
    case 'electron':
      return 'bg-[#333540] text-[#8df0e4]';
    case 'piston':
      return 'bg-[#ffffff] text-[#000000]';
    case 'javafx':
      return 'bg-[#e87408] text-[#000000]';
    case 'qt':
      return 'bg-[#3fc74f] text-[#ffffff]';
    case 'win32api':
      return 'bg-[#4684e8] text-[#ffffff]';
    case 'swift':
      return 'bg-[#fe4c2e] text-[#ffffff]';
    default:
      return 'bg-[#ff0000] text-[#0000ff]';
  }
}

export function getSinceUntilText(since?: string, until?: string): string {
  if (until && since) {
    return `${since} ～ ${until}`;
  } else if (since) {
    return `${since} ～`;
  } else if (until) {
    return `～ ${until}`;
  }
  return '';
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

export const archived_projects: ProjectType[] = [
  {
    name: 'WebTools',
    description:
      'ブラウザ上で動作する小物のツール群。<a href="https://github.com/yuma140902/tempura" target="_blank">Tempura</a>製。\n\nこのサイトと一体化したため独立したプロジェクトとしては更新終了\n\n- <a href="/webtools" target="_blank">WebTools - yuma14</a>',
    repo: 'https://github.com/yuma140902/webtools',
    since: '2022年11月',
    until: '2023年11月',
    hero: {
      image: imgWebTools,
    },
    technologies: ['js'],
  },
  {
    name: 'chatgpt_to_markdown',
    description:
      'ChatGPTのウェブサイトから会話を抽出し、マークダウン形式に変換してクリップボードに書き込むユーザースクリプト',
    repo: 'https://github.com/yuma140902/chatgpt_to_markdown',
    since: '2022年4月',
    technologies: ['js'],
  },
  {
    name: 'IPAInput',
    description: '国際音声記号を入力するためのGoogle日本語入力用の辞書を生成するスクリプト',
    repo: 'https://github.com/yuma140902/IPAInput',
    since: '2022年4月',
    technologies: ['python'],
  },
  {
    name: 'CompareCost',
    description: '商品の単価を素早く計算するAndroidアプリ',
    repo: 'https://github.com/yuma140902/CompareCost',
    since: '2022年3月',
    hero: {
      image: imgCompareCost,
    },
    technologies: ['kotlin', 'android'],
    releases: [
      {
        date: '2022/03/30',
        version: 'v2',
      },
      {
        date: '2022/03/30',
        version: 'v1',
      },
    ],
  },
  {
    name: 'AIC-Unity',
    description: 'AIC（慶應義塾大学AI・高度プログラミングコンソーシアム）で講師をしたときに用意した教材',
    repo: 'https://github.com/yuma140902/AIC-Unity',
    since: '2022年3月',
    hero: {
      image: imgAicUnity,
    },
    technologies: ['csharp', 'unity'],
  },
  {
    name: 'dotfiles-rs',
    description: 'dotfilesをインストールするツール',
    repo: 'https://github.com/yuma140902/dotfiles-rs',
    since: '2022年2月',
    technologies: ['rust'],
  },
  {
    name: 'crawl-dl-ps1',
    description: 'gallery-dlのフロントエンド',
    since: '2021年12月',
    technologies: ['pwsh'],
  },
  {
    name: 'BlockingIO',
    description:
      'マルチプレイオンライン3Dおにごっこゲーム。<a href="https://github.com/yuma140902/Reverie" target="_blank">ReverieEngine</a>製。',
    repo: 'https://github.com/kcs1959/BlockingIO-client',
    since: '2021年10月',
    until: '2021年12月',
    technologies: ['rust', 'socketio'],
    releases: [
      {
        date: '2021/11/18',
        version: 'v0.2.0',
      },
      {
        date: '2021/11/12',
        version: 'v0.1.1',
      },
    ],
  },
  {
    name: 'RustyCraft',
    description:
      'Reverie Engineのデモとして作られたMinecraft風ゲーム(？)\n\n- [RustyCraft - yuma14](/works/rustycraft)',
    repo: 'https://github.com/yuma140902/RustyCraft',
    since: '2021年8月',
    until: '2021年10月',
    hero: {
      url: '/works/rustycraft',
      image: imgRustyCraft,
    },
    technologies: ['rust', 'opengl', 'minecraft'],
    releases: [
      {
        date: '2021/10/03',
        version: 'ss2021-10-03',
      },
      {
        date: '2021/09/24',
        version: 'yagami-rc-1.1',
      },
      {
        date: '2021/09/15',
        version: 'yagami-rc-1',
      },
    ],
  },
  {
    name: 'line-echo',
    description: 'しりとりができるLINE bot。漢字も読める。',
    repo: 'https://github.com/yuma140902/line-echo',
    since: '2021年7月',
    technologies: ['line', 'ts', 'postgresql'],
    releases: [
      {
        date: '2021/09/21',
        version: 'yagami-rc2.1',
      },
      {
        date: '2021/09/21',
        version: 'yagami-rc2',
      },
      {
        date: '2021/09/21',
        version: 'yagami-rc1',
      },
    ],
  },
  {
    name: 'gomoku-elm',
    description: 'Elm製の五目並べ',
    repo: 'https://github.com/yuma140902/gomoku-elm',
    since: '2021年6月',
    technologies: ['elm'],
  },
  {
    name: 'ShutdownCountdown',
    description: '指定した時間にPCをシャットダウンするソフト。シャットダウン前に警告表示ができる。',
    repo: 'https://github.com/yuma140902/ShutdownCountdown',
    since: '2020年2月',
    until: '2022年12月',
    hero: {
      image: imgShutdownCountdown,
    },
    technologies: ['csharp', 'winforms'],
    releases: [
      {
        date: '2022/12/10',
        version: 'v1.1.0',
      },
      {
        date: '2020/03/26',
        version: 'v0.0.0-alpha1',
      },
    ],
  },
  {
    name: 'MCResourcePackUtil',
    description:
      'Minecraftのテクスチャを読み込み、一括でフィルターをかけてリソースパック化するソフト。\n\nというのは建前で、実は<a href="https://resourcepack.net/traditional-beauty-resource-pack/#gsc.tab=0" target="_blank">TraditionalBeauty</a>というリソースパックを再現するためのソフト。\\\n本家はもう更新されていないが、このソフトを使うと(1.6.1以降の)任意のバージョンのMinecraftに対してTraditionalBeautyとほぼ同等のリソースパックを生成できる。',
    repo: 'https://github.com/yuma140902/MCResourcePackUtil',
    since: '2020年9月',
    until: '2023年6月',
    hero: {
      image: imgMcResourcePackUtil,
    },
    technologies: ['csharp', 'winforms', 'opencv'],
    releases: [
      {
        date: '2023/06/15',
        version: 'v0.1.0',
      },
    ],
  },
  {
    name: 'ProconHelper',
    description:
      '競プロ用のソフト。「コンパイル→stdin→stdoutの確認」のイテレーションを高速に回すことができる。\n\n<a href="https://github.com/kyuridenamida/atcoder-tools" target="_blank">AtCoder Tools</a>などの専門のツールには敵わないが、「この一問だけ普段使わない言語で解きたい」等の場合に役立つ。',
    repo: 'https://github.com/yuma140902/ProconHelper',
    since: '2020年3月',
    until: '2021年4月',
    hero: {
      image:
        'https://camo.githubusercontent.com/e2b2e8b9d4bfb94d840a35fd33ba71864364e663cfdcfdda34ab0a344842f1c9/68747470733a2f2f692e696d6775722e636f6d2f54563434366e722e706e67',
    },
    technologies: ['csharp', 'winforms'],
    releases: [
      {
        date: '2020/06/01',
        version: 'v1.5.1-alpha',
      },
      {
        date: '2020/03/26',
        version: 'v1.5.0-alpha',
      },
      {
        date: '2020/03/25',
        version: 'v1.4.0',
      },
    ],
  },
  {
    name: 'MuteClassi',
    description: 'classi.jpの通知を非表示にするFirefox機能拡張',
    since: '2020年3月',
    until: '2020年10月',
    technologies: ['fxaddon'],
    releases: [
      {
        date: '2020/10/21',
        version: 'Version 0.0.1',
      },
      {
        date: '2020/03/07',
        version: 'Version 0.0.0',
      },
    ],
  },
  {
    name: 'yuma140902.github.io',
    description: '旧個人サイト',
    since: '2020年1月',
    until: '2020年5月',
    technologies: ['html'],
  },
  {
    name: 'OreUnifyGenerator',
    description: 'Minecraftの各工業MODごとに異なる鉱石・インゴットなどのテクスチャを統一するツール',
    since: '2020年1月',
    repo: 'https://github.com/yuma140902/OreUnifyGenerator',
    hero: {
      image: imgOreUnifyGenerator,
    },
    technologies: ['csharp', 'winforms'],
  },
  {
    name: 'DD連番くん',
    description: '指定したフォルダを監視し、追加されたファイルを連番になるようにリネームする',
    since: '2019年12月',
    hero: {
      image: imgDdRenban,
    },
    technologies: ['csharp', 'winforms'],
  },
  {
    name: 'GmailSwapChecks',
    description: 'Gmailのレガシービューの機能を拡張するFirefox機能拡張',
    since: '2019年7月',
    until: '2019年11月',
    hero: {
      image: imgGmailSwapChecks,
    },
    technologies: ['fxaddon'],
    releases: [
      {
        date: '2019/11/16',
        version: 'Version 2.1',
      },
      {
        date: '2019/07/19',
        version: 'Version 2.0',
      },
      {
        date: '2019/07/09',
        version: 'Version 1.0',
      },
    ],
  },
  {
    name: 'Japan Power Outage Viewer',
    description: '東京電力管内の停電状況が見られるサイト',
    repo: 'https://github.com/yuma140902/jpov',
    since: '2019年10月',
    until: '2020年9月',
    technologies: ['angular'],
  },
  {
    name: 'SmallViewer',
    description: '画像を小さいウィンドウで表示できるソフト\n\n資料を表示しておくのに便利',
    since: '2019年8月',
    hero: {
      image: imgSmallViewer,
    },
    technologies: ['csharp', 'winforms'],
  },
  {
    name: 'YumaLib',
    description:
      'MinecraftのMOD。いわゆる前提MOD。\n\n色々MODを作るつもりだったので用意したが、そうならなかったのでUpToDateModに吸収された。',
    repo: 'https://github.com/yuma140902/YumaLib',
    since: '2019年7月',
    technologies: ['java', 'minecraft'],
    releases: [
      {
        date: '2019/07/28',
        version: 'v0.0.1',
      },
    ],
  },
  {
    name: 'Polyhedron',
    description: '正多面体を3D表示する',
    since: '2019年6月',
    technologies: ['java', 'processing'],
  },
  {
    name: 'PolyhedronCG',
    description: '正多面体を3D表示する',
    since: '2019年6月',
    technologies: ['java', 'lwjgl'],
  },
  {
    name: 'MetisCas',
    description: '方程式を解いてくれるツール\n\nLaTeX記法で入力できる',
    since: '2019年6月',
    hero: {
      image: imgMetisCas,
    },
    technologies: ['csharp', 'wpf'],
  },
  {
    name: 'PixivBrainPortingHelper',
    description: '大量の画像を、改造した電子書籍Brain上のMangaMeeyaCEで閲覧しやすいように変換するツール',
    since: '2019年5月',
    hero: {
      image: imgPbph,
    },
    technologies: ['csharp', 'winforms'],
  },
  {
    name: 'Counter',
    description: '数を数えるためのソフト',
    since: '2019年3月',
    hero: {
      image: imgCounter,
    },
    technologies: ['csharp', 'wpf'],
  },
  {
    name: 'PixivNoStamps',
    description: 'Pixivのスタンプを非表示にするFirefox機能拡張',
    since: '2019年2月',
    technologies: ['fxaddon'],
    releases: [
      {
        date: '2019/02/08',
        version: 'Version 1.0',
      },
      {
        date: '2019/02/08',
        version: 'Version 0.1',
      },
    ],
  },
  {
    name: 'AAMakeHelper',
    description: 'アスキーアートの制作を支援するツール',
    since: '2019年5月',
    hero: {
      image: imgAaMakeHelper,
    },
    technologies: ['csharp', 'winforms'],
  },
  {
    name: 'HundredsOfOres',
    description: 'MinecraftのMOD。\n\nポスター発表をして何らかの賞をもらった記憶がある。今思うと謎',
    since: '2018年9月',
    until: '2018年10月',
    repo: 'https://github.com/yuma140902/HundredsOfOres',
    technologies: ['java', 'minecraft'],
  },
  {
    name: 'MiningMod',
    description: 'MinecraftのMOD。多分一番最初に作ったやつ。\n\nこの頃が一番楽しかった気がする。',
    since: '2018年7月',
    until: '2018年10月',
    repo: 'https://github.com/yuma140902/MiningMod',
    technologies: ['java', 'minecraft'],
    releases: [
      {
        date: '2018/10/07',
        version: 'v1.1.4',
      },
      {
        date: '2018/09/29',
        version: 'v1.1.3',
      },
      {
        date: '2018/09/16',
        version: 'v1.1.2',
      },
      {
        date: '2018/08/21',
        version: 'v1.2.1',
      },
      {
        date: '2018/08/20',
        version: 'v1.2.0',
      },
      {
        date: '2018/08/18',
        version: 'v1.1.1',
      },
      {
        date: '2018/08/18',
        version: 'v1.1.0',
      },
      {
        date: '2018/08/17',
        version: 'v1.0.2',
      },
      {
        date: '2018/08/17',
        version: 'v1.0.1',
      },
      {
        date: '2018/08/17',
        version: 'v1.0.0',
      },
    ],
  },
  {
    name: 'CaeserCipher',
    description: 'シーザー暗号',
    since: '2018年7月',
    technologies: ['objectivec'],
  },
  {
    name: 'SearchStation4',
    description: '横断検索ができるソフト',
    since: '2018年6月',
    hero: {
      image: imgSs4,
    },
    technologies: ['csharp', 'winforms'],
  },
  {
    name: 'CC',
    description: 'スタックベースの独自言語を採用した計算機',
    since: '2018年1月',
    until: '2018年2月',
    hero: {
      image: imgCc,
    },
    technologies: ['csharp', 'wpf'],
  },
  {
    name: 'OXGame',
    description: '3目ならべ',
    since: '2017年11月',
    until: '2017年12月',
    technologies: ['java'],
  },
  {
    name: 'HealthyNotification',
    description:
      'ユーザーの健康を気遣い、30秒ごとに瞬きをするように通知するソフト(ドライアイ防止)\n\n瞬きくらい自分でできるよ',
    since: '2017年10月',
    hero: {
      image: imgHn,
    },
    technologies: ['csharp', 'winforms'],
  },
  {
    name: 'Winup',
    description: 'dotup.org用のダウンローダ',
    since: '2017年7月',
    technologies: ['csharp', 'winforms'],
  },
  {
    name: 'CmdLauncher',
    description: 'キーボードで操作できるランチャー',
    since: '2017年6月',
    until: '2017年7月',
    hero: {
      image: imgCmdLauncher,
    },
    technologies: ['csharp', 'wpf'],
  },
  {
    name: '『リスを実装する』',
    description: '円城塔の「リスを実装する」というSF小説に登場する架空のプログラムを再現したもの',
    since: '2017年7月',
    hero: {
      image: imgImplOfS,
    },
    technologies: ['csharp', 'wpf'],
  },
  {
    name: 'a_caving_game',
    description: '壁にぶつかると死ぬゲーム',
    since: '2017年5月',
    until: '2018年3月',
    technologies: ['hsp'],
  },
  {
    name: '英読郎',
    description: '英文を色分けすると速く読めると聞いたので作った。\n\n効果は不明',
    since: '2017年4月',
    until: '2017年5月',
    hero: {
      image: imgEidokurou,
    },
    technologies: ['csharp', 'wpf'],
  },
  {
    name: 'KeyLaunch',
    description: 'キーボードで操作できるランチャー',
    since: '2017年3月',
    until: '2017年6月',
    hero: {
      image: imgKeyLaunch,
    },
    technologies: ['csharp', 'wpf'],
  },
  {
    name: 'FileCombine',
    description: 'ファイルを連結するソフト',
    since: '2017年3月',
    hero: {
      image: imgFileCombine,
    },
    technologies: ['csharp', 'wpf'],
  },
  {
    name: 'hyakunin_isshu',
    description: '百人一首を覚えるアプリ',
    since: '2017年1月',
    technologies: ['js'],
  },
  {
    name: 'CountDown',
    description: 'デスクトップに常駐し、指定された日時までの残り時間を表示する',
    since: '2016年12月',
    until: '2017年2月',
    hero: {
      image: imgCountDown,
    },
    technologies: ['csharp', 'winforms'],
  },
  {
    name: 'CalcPostfixNotation',
    description: '逆ポーランド記法の計算機',
    since: '2016年12月',
    until: '2017年2月',
    technologies: ['csharp'],
  },
  {
    name: 'RandamPersonalInfo',
    description: '人間の名前をランダムに生成するツール',
    since: '2016年12月',
    technologies: ['csharp'],
  },
  {
    name: 'BinTree',
    description: '二分木',
    since: '2016年12月',
    technologies: ['cpp'],
  },
  {
    name: 'Fract',
    description: '分数ライブラリ',
    since: '2016年11月',
    technologies: ['csharp'],
  },
  {
    name: 'WikipediaViewer2',
    description: 'Wikipediaを閲覧するためのソフト',
    since: '2016年7月',
    until: '2016年11月',
    hero: {
      image: imgWikiView2,
    },
    technologies: ['csharp', 'winforms'],
  },
  {
    name: 'run',
    description: 'ランチャー',
    since: '2016年10月',
    technologies: ['csharp', 'winforms'],
  },
  {
    name: 'RSS',
    description: 'デスクトップに常駐するタイプのRSSリーダー',
    since: '2016年10月',
    technologies: ['csharp', 'winforms'],
  },
  {
    name: 'MyWidgets',
    description: 'プラグイン機構を使って拡張できるソフト',
    since: '2016年10月',
    technologies: ['csharp', 'winforms'],
  },
  {
    name: 'SearchStation3',
    description: '横断検索ができるソフト',
    since: '2016年9月',
    hero: {
      image: imgSs3,
    },
    technologies: ['csharp', 'winforms'],
  },
  {
    name: 'MyUtils3',
    description: '小物のプログラムシリーズ\n\n- Counter\n- OnTimeRunner\n  - cronみたいなやつ',
    since: '2016年8月',
    until: '2017年1月',
    hero: {
      image: imgMu3Counter,
    },
    technologies: ['csharp', 'winforms'],
  },
  {
    name: 'Kundoku',
    description: '漢文と返り点を与えると漢文を書き下してくれるツール',
    since: '2016年8月',
    technologies: ['csharp'],
  },
  {
    name: 'ImgDown',
    description: '指定したサイトから指定したルールに従って画像を一括ダウンロードするソフト',
    since: '2016年6月',
    until: '2016年8月',
    technologies: ['csharp'],
  },
  {
    name: 'MyPassManageC',
    description: 'パスワードマネージャもどき',
    since: '2016年3月',
    until: '2016年8月',
    technologies: ['csharp'],
  },
  {
    name: 'WebTop',
    description: 'ブラウザのスタートページ用のページ',
    since: '2016年2月',
    until: '2017年2月',
    technologies: ['js'],
  },
  {
    name: 'SearchStation2',
    description: '横断検索ができるソフト',
    since: '2016年3月',
    hero: {
      image: imgSs2,
    },
    technologies: ['csharp', 'winforms'],
  },
  {
    name: 'SearchHub',
    description: '横断検索ができるソフト',
    since: '2016年2月',
    until: '2016年3月',
    hero: {
      image: imgSearchHub,
    },
    technologies: ['csharp', 'winforms'],
  },
  {
    name: 'loginManager.app',
    description: 'パソコンが起動した時間を記録するMac OSXのアプリ',
    since: '2016年3月',
    technologies: ['applescript'],
  },
  {
    name: 'loginmanager',
    description: 'パソコンが起動した時間を記録する',
    since: '2016年2月',
    technologies: ['nadeshiko'],
  },
  {
    name: 'MyUtils1, 2',
    description: 'ランチャー',
    since: '2016年2月',
    until: '2016年8月',
    hero: {
      image: imgMyUtils1,
    },
    technologies: ['csharp', 'winforms'],
  },
  {
    name: 'book search',
    description: '蔵書を検索する',
    since: '2015年8月',
    until: '2016年5月',
    technologies: ['js'],
  },
];

export const scrap_projects: ProjectType[] = [
  {
    name: 'WatchDog',
    description: '絶対に終了しないプロセスを作りたかった',
    since: '2023年3月',
    technologies: ['csharp', 'wpf'],
  },
  {
    name: 'sort_visualizer',
    description:
      'GTKでソートビジュアライザを作りたかった<br/>\n<a href="/webtools/sort.html">WebToolsのSort Visualizer</a>になった',
    since: '2022年12月',
    technologies: ['gtk'],
  },
  {
    name: 't-prog',
    description: 'Rustで型レベルプログラミングをしたかった',
    since: '2022年9月',
    technologies: ['rust'],
  },
  {
    name: 's4installer',
    description: 'dotfilesをインストールするツールを作りたかった',
    since: '2022年2月',
    technologies: ['rust'],
  },
  {
    name: 'more_path_types',
    description: '相対パス・絶対パスを型レベルで表現するライブラリを作りたかった',
    since: '2022年2月',
    technologies: ['rust'],
  },
  {
    name: 'HideSideBarWhenNotMaximized',
    description: 'Firefoxで、タブが1つだけのときサイドバーを非表示にする機能拡張を作りたかった',
    since: '2022年1月',
    technologies: ['js', 'fxaddon'],
  },
  {
    name: 'core-rutils',
    description: '',
    since: '2022年1月',
    technologies: ['rust'],
  },
  {
    name: 'Words',
    description: '',
    since: '2021年12月',
    technologies: ['csharp', 'wpf'],
  },
  {
    name: 'banishment',
    description: '',
    since: '2021年12月',
    technologies: ['pwsh'],
  },
  {
    name: 'rasm',
    description: '',
    since: '2021年12月',
    technologies: ['rust'],
  },
  {
    name: 'pear-rs',
    description: '',
    since: '2021年11月',
    technologies: ['rust'],
  },
  {
    name: 'ReverieEngine-WebGL',
    description: 'ReverieEngineをWebGLで動くようにしたかった',
    since: '2021年10月',
    repo: 'https://github.com/yuma140902/ReverieEngine-WebGL',
    technologies: ['rust', 'webgl', 'wasm'],
  },
  {
    name: 'xanadu',
    description: 'ECS(Entity Component System)を実装してみたかった',
    since: '2021年10月',
    repo: 'https://github.com/yuma140902/Xanadu',
    technologies: ['rust'],
  },
  {
    name: 'ReverieIllustrations/ReverieManager',
    description: '画像管理ソフトを作りたかった',
    since: '2021年6月',
    until: '2021年9月',
    technologies: ['csharp', 'wpf'],
  },
  {
    name: 'ReverieIllustrations/reverie-manager',
    description: '画像管理ソフトを作りたかった',
    since: '2021年5月',
    until: '2021年6月',
    technologies: ['electron'],
  },
  {
    name: 'SuperNova',
    description: '',
    since: '2021年5月',
    technologies: ['rust'],
  },
  {
    name: 'silent_commander',
    description: '完全に透明なランチャーを作りたかった',
    since: '2021年5月',
    technologies: ['rust'],
  },
  {
    name: 'Star',
    description: 'いい感じのMODになるはずだった',
    since: '2021年4月',
    technologies: ['java', 'minecraft'],
  },
  {
    name: 'ReverieViewer',
    description: '画像ビューアを作りたかった<br/>\n2年後にgallery-viewerとして完成させた',
    since: '2021年2月',
    technologies: ['electron'],
  },
  {
    name: 'AviUtlMgr',
    description: '環境を切り替えられるAviUtlのランチャーを作りたかった',
    since: '2020年10月',
    technologies: ['hsp'],
  },
  {
    name: 'MCLauncherWPF',
    description: 'Minecraftのランチャーが作りたかった',
    since: '2020年10月',
    technologies: ['csharp', 'wpf'],
  },
  {
    name: 'VideoTortoise',
    description: '動画管理ソフトを作りたかった',
    since: '2020年7月',
    technologies: ['csharp', 'wpf'],
  },
  {
    name: 'StartProcessSuspended',
    description: '',
    since: '2020年5月',
    technologies: ['cpp'],
  },
  {
    name: 'snake_game',
    description: 'Pistonを使ってゲームを作りたかった',
    since: '2020年4月',
    technologies: ['rust', 'piston'],
  },
  {
    name: 'getninst',
    description: '',
    since: '2020年4月',
    technologies: ['rust'],
  },
  {
    name: 'zombieproc',
    description: '',
    since: '2020年4月',
    technologies: ['rust'],
  },
  {
    name: 'emeth',
    description: '',
    since: '2019年12月',
    technologies: ['java'],
  },
  {
    name: 'nabla',
    description: '<a href="https://nablagame.com/" target="_blank">ナブラ演算子ゲーム</a>が遊べるサイトを作りたかった',
    since: '2019年9月',
    technologies: ['angular'],
  },
  {
    name: 's4pear',
    description: '',
    since: '2019年8月',
    technologies: ['java'],
  },
  {
    name: 'youtube_download_button',
    description: 'Youtubeの再生ページにダウンロードボタンを表示するFirefox機能拡張を作りたかった',
    since: '2019年7月',
    until: '2019年8月',
    technologies: ['fxaddon'],
  },
  {
    name: 'NablaCalc',
    description: '',
    since: '2019年5月',
    technologies: ['csharp'],
  },
  {
    name: 'WebCrawler',
    description: 'Webページの見た目の差分を表示するツールを作りたかった',
    since: '2019年4月',
    technologies: ['csharp', 'winforms'],
  },
  {
    name: 'Numeron',
    description: '<a href="https://ja.wikipedia.org/wiki/Numer0n" target="_blank">Numer0n</a>のソルバーを作りたかった',
    since: '2019年3月',
    technologies: ['java'],
  },
  {
    name: 'MemoryCard',
    description: '',
    since: '2019年3月',
    technologies: ['csharp', 'wpf'],
  },
  {
    name: 'SimpleGenerationsBackup',
    description: '世代管理ができるバックアップソフトを作りたかった',
    since: '2019年2月',
    technologies: ['csharp', 'winforms'],
  },
  {
    name: 'HoldingMarkPdf',
    description: '',
    since: '2018年10月',
    until: '2018年12月',
    technologies: ['java', 'javafx'],
  },
  {
    name: 'IllustTags',
    description: '5年の時を経てgallery-viewerになった',
    since: '2018年10月',
    technologies: ['csharp', 'winforms'],
  },
  {
    name: 'ALife1',
    description: '人工生命がワイワイする様子を眺めるソフトを作りたかった',
    since: '2018年8月',
    technologies: ['csharp', 'winforms'],
  },
  {
    name: 'MusicPackageManager',
    description: '',
    since: '2018年7月',
    technologies: ['csharp'],
  },
  {
    name: 'eRename',
    description: '',
    since: '2018年6月',
    technologies: ['csharp'],
  },
  {
    name: 'Crypt',
    description: '',
    since: '2018年6月',
    technologies: ['csharp', 'winforms'],
  },
  {
    name: 'BooksBrowser',
    description: '蔵書管理用のソフトを作りたかった',
    since: '2018年4月',
    technologies: ['csharp', 'winforms'],
  },
  {
    name: 'PocketMoneySquares',
    description: '家計簿アプリを作りたかった',
    since: '2017年12月',
    technologies: ['csharp', 'wpf'],
  },
  {
    name: 'KsanMaker',
    description: '算数の問題を無限に生成するツールを作りたかった',
    since: '2017年12月',
    technologies: ['csharp', 'winforms'],
  },
  {
    name: 'WebCrawler',
    description: '',
    since: '2017年12月',
    technologies: ['csharp', 'wpf'],
  },
  {
    name: 'PCJammer',
    description: '→ ShutdownCountdown',
    since: '2017年10月',
    technologies: ['csharp', 'wpf'],
  },
  {
    name: 'MediaTortois',
    description: '画像・動画管理ソフトを作りたかった',
    since: '2017年9月',
    technologies: ['csharp', 'wpf'],
  },
  {
    name: 'TestChecker',
    description: '',
    since: '2017年2月',
    technologies: ['csharp', 'winforms'],
  },
  {
    name: 'QtCalc01',
    description: 'Qtで電卓を作りたかった',
    since: '2017年7月',
    technologies: ['cpp', 'qt'],
  },
  {
    name: 'MyWebCraler',
    description: '',
    since: '2017年7月',
    technologies: ['csharp', 'wpf'],
  },
  {
    name: 'CmdLauncherWin32',
    description: 'CmdLauncherをWin32 APIに移植したかった',
    since: '2017年6月',
    technologies: ['cpp', 'win32api'],
  },
  {
    name: 'JapaneseTextSearch',
    description: '日本語の全文検索がしたかった',
    since: '2017年6月',
    technologies: ['csharp'],
  },
  {
    name: 'eBookLibrary',
    description: '',
    since: '2017年6月',
    technologies: ['csharp', 'wpf'],
  },
  {
    name: 'mcalc',
    description: '',
    since: '2017年6月',
    technologies: ['csharp'],
  },
  {
    name: 'RealRecycleBin',
    description: 'デスクトップのゴミ箱の見た目を、中身の量によって変えたかった',
    since: '2017年6月',
    technologies: ['csharp', 'wpf'],
  },
  {
    name: 'DragAndSave',
    description: '',
    since: '2017年5月',
    technologies: ['csharp', 'winforms'],
  },
  {
    name: 'LaunchAt',
    description: 'タスクスケジューラのわかりやすいフロントエンドが作りたかった',
    since: '2017年4月',
    technologies: ['csharp', 'wpf'],
  },
  {
    name: 'BookReference',
    description: '',
    since: '2017年4月',
    technologies: ['csharp', 'wpf'],
  },
  {
    name: 'AnkiKun',
    description: '単語帳アプリを作りたかった',
    since: '2017年4月',
    technologies: ['csharp'],
  },
  {
    name: 'ClubLog',
    description: '',
    since: '2017年4月',
    technologies: ['csharp', 'wpf'],
  },
  {
    name: 'IMapMailCheck',
    description: 'IMAPのクライアントを作りたかった',
    since: '2017年4月',
    technologies: ['csharp', 'wpf'],
  },
  {
    name: 'CriptForm',
    description: '',
    since: '2017年4月',
    technologies: ['csharp', 'winforms'],
  },
  {
    name: 'FlexDataReader',
    description: '',
    since: '2017年3月',
    until: '2017年4月',
    technologies: ['csharp', 'wpf'],
  },
  {
    name: 'Tierra',
    description: 'トマス・S・レイのTierraを実装してみたかった',
    since: '2017年3月',
    technologies: ['java'],
  },
  {
    name: 'CuiOnGui',
    description: 'GUIからコマンドを実行できるソフトを作りたかった',
    since: '2017年2月',
    technologies: ['csharp', 'wpf'],
  },
  {
    name: 'ConsoleCsvEditor',
    description: 'CSVファイル専用のVimみたいなものを作りたかった',
    since: '2017年2月',
    technologies: ['java'],
  },
  {
    name: 'TagExplorer',
    description: '',
    since: '2017年2月',
    technologies: ['csharp', 'winforms'],
  },
  {
    name: 'InfoBox.mini',
    description: '',
    since: '2017年2月',
    technologies: ['csharp', 'wpf'],
  },
  {
    name: 'ideaTree.mini',
    description: 'コンパクトなアウトラインプロセッサを作りたかった',
    since: '2017年1月',
    until: '2017年2月',
    technologies: ['csharp', 'wpf'],
  },
  {
    name: 'SyncExplorer',
    description: '2画面のファイラーを作りたかった',
    since: '2017年1月',
    technologies: ['csharp', 'winforms'],
  },
  {
    name: 'LookOver',
    description: '',
    since: '2016年12月',
    until: '2017年1月',
    technologies: ['java', 'csharp', 'wpf'],
  },
  {
    name: 'TrashMeter',
    description: '',
    since: '2017年5月',
    technologies: ['csharp', 'winforms'],
  },
  {
    name: 'SShougi',
    description: '将棋ゲームが作りたかった',
    since: '2016年12月',
    technologies: ['cpp'],
  },
  {
    name: 'PCInfo',
    description: 'PCの情報を収集して表示するソフトを作りたかった',
    since: '2016年12月',
    technologies: ['csharp', 'winforms'],
  },
  {
    name: 'OptionSwitcher',
    description: 'コマンドライン引数のパーサーを作りたかった',
    since: '2016年12月',
    technologies: ['csharp'],
  },
  {
    name: 'Dictionary',
    description: '辞書ソフトが作りたかった',
    since: '2016年11月',
    technologies: ['csharp', 'winforms'],
  },
  {
    name: 'Map',
    description: 'デスクトップに常駐するタイプの地図アプリを作りたかった',
    since: '2016年10月',
    technologies: ['csharp', 'winforms'],
  },
  {
    name: 'run',
    description: 'Windows用に作った同名のプログラムをMac OSXに移植したかった',
    since: '2016年10月',
    technologies: ['swift'],
  },
  {
    name: 'MultiUIApp',
    description: '',
    since: '2016年9月',
    technologies: ['csharp', 'winforms'],
  },
  {
    name: 'SearchStationJS',
    description: '横断検索できるサイトを作りたかった',
    since: '2016年9月',
    technologies: ['js'],
  },
  {
    name: 'WidgetImg',
    description: '',
    since: '2019年4月',
    technologies: ['csharp', 'winforms'],
  },
  {
    name: 'Questions',
    description: '',
    since: '2016年8月',
    technologies: ['csharp', 'winforms'],
  },
];

export const forks: ForkType[] = [
  {
    name: 'vim-vsnip',
    downstream: {
      repo: 'yuma140902/vim-vsnip',
      branch: 'master',
    },
    upstream: {
      repo: 'hrsh7th/vim-vsnip',
      branch: 'master',
    },
    description: "Snippet plugin for vim/nvim that supports LSP/VSCode's snippet format.",
    change: '`<cmd>`マッピングの無い古いVimで動作するようにした',
  },
  {
    name: 'ctrlp-grep',
    downstream: {
      repo: 'yuma140902/ctrlp-grep',
      branch: 'master',
    },
    upstream: {
      repo: 'ompugao/ctrlp-grep',
      branch: 'master',
    },
    description: 'grep your source code via ctrlp.vim!',
    change: 'grepコマンドのコマンドライン引数が正しくないと思われるので変更した',
  },
  {
    name: 'nvim-dap-projects',
    downstream: {
      repo: 'yuma140902/nvim-dap-projects',
      branch: 'main',
    },
    upstream: {
      repo: 'ldelossa/nvim-dap-projects',
      branch: 'main',
    },
    description: 'A very simple plugin which implements "per-project" nvim-dap debugger adapters and configurations.',
    change:
      'フォーク元はプロジェクト単位の設定がグローバル設定を上書きするようになっていた。これをグローバル設定に追記する形にした。',
  },
  {
    name: 'persisted.nvim',
    downstream: {
      repo: 'yuma140902/persisted.nvim',
      branch: 'main',
    },
    upstream: {
      repo: 'olimorris/persisted.nvim',
      branch: 'main',
    },
    description: 'Simple session management for Neovim with git branching, autoloading and Telescope support',
    change:
      'フォーク元は`fnameescape`を使用しており、Windowsではセッションの削除ができないという問題があった。これを修正した。',
  },
  {
    name: 'egui_node_graph',
    downstream: {
      repo: 'yuma140902/egui_node_graph',
      branch: 'cabernet',
    },
    upstream: {
      repo: 'setzer22/egui_node_graph',
      branch: 'main',
    },
    description: 'Build your node graph applications in Rust, using egui',
    change: 'eguiのバージョンを上げた。またワークスペース構成をやめて自分のプロジェクトに導入しやすくした',
  },
  {
    name: 'neosolarized.nvim',
    downstream: {
      repo: 'yuma140902/neosolarized.nvim',
      branch: 'main',
    },
    upstream: {
      repo: 'svrana/neosolarized.nvim',
      branch: 'main',
    },
    description: 'Truecolor solarized theme for neovim in Lua using colorbuddy',
    change: '`Normal`と`NormalNC`の色を同じにした',
  },
];
