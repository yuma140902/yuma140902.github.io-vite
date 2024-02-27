import React from 'react';
import { Article } from '../../components/Article';
import { Link } from '../../components/Link';

export default function Page() {
  return (
    <Article>
      <Link href="/profile">Profile</Link>
      <Link href="/works">Projects</Link>
      <Link href="/apps">ウェブアプリ</Link>
      <Link href="/deploys">サービス一覧</Link>
      <h2>更新履歴</h2>
      最終更新: TODO
      <ul>
        <History date="2023/12/19" description="Tempura v0.5.0にアップデート" />
        <History date="2023/10/08" description="ウェブアプリ一覧を追加" />
        <History date="2023/07/12" description="画像追加" />
        <History date="2023/05/17" description="更新" />
        <History date="2023/04/30" description="gitとcloudを削除" />
        <History date="2023/04/29" description="wwwを別サーバーへ移動" />
        <History
          date="2023/01/31"
          description="Nextcloudインスタンス(非公開)を追加"
        />
        <History date="2023/01/31" description="サーバーのスペックを強化" />
        <History
          date="2022/11/18"
          description="Giteaインスタンス(git.yuma14.net)を追加"
        />
        <History
          date="2022/11/16"
          description="About Me、つくったもの、WebTools、サービス一覧を追加。ダークテーマ対応"
        />
        <History date="2022/11/15" description="ドメイン取得" />
      </ul>
    </Article>
  );
}

function History(props: { date: string; description: string }) {
  return (
    <li className="py-0 my-0">
      {props.date} - {props.description}
    </li>
  );
}
