/// <reference path="../.astro/types.d.ts" />
interface ImportMetaEnv {
  readonly GITHUB_PAT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
