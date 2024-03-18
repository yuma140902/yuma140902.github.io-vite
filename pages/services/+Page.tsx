import React from 'react';

import { Article, Link } from '@/components/common';

export default function Page() {
  return (
    <Article>
      <h1>サービス一覧</h1>
      <ul className="mb-8">
        <li>
          <Link href="/deploys/">デプロイ状況</Link>
        </li>
      </ul>

      <h2>運営しているサービス一覧</h2>
      <ul>
        <li>
          <Link href="https://www.yuma14.net/" outside>
            www.yuma14.net
          </Link>
          - 個人サイト
        </li>
        <li>
          <Link href="http://beta.yuma14.net/" outside>
            beta.yuma14.net
          </Link>
          - 個人サイトのベータ版
        </li>
        <li>
          <Link href="http://old.yuma14.net/" outside>
            old.yuma14.net
          </Link>
          - 古い個人サイト
        </li>
        <li>
          <s>git.yuma14.net</s> - Giteaインスタンス
        </li>
        <li>
          <s>Nextcloudインスタンス(非公開)</s>
        </li>
      </ul>
    </Article>
  );
}
