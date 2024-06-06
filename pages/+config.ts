import vikeReact from 'vike-react/config';
import type { Config } from 'vike/types';

import Head from '#root/layouts/HeadDefault';
import { LayoutDefault } from '#root/layouts/Layouts';

// Default config (can be overridden by pages)
export default {
  Layout: LayoutDefault,
  Head,
  title: 'yuma14.net',
  extends: vikeReact,
  lang: 'ja',
} satisfies Config;
