import React from 'react';
import { Article } from '../../components/Article';
import { Card } from '../../components/Card';

export default function Page() {
  return (
    <div>
      <div className="flex flex-row flex-wrap gap-2 justify-center">
        <Card
          className="basis-full sm:basis-5/12 flex-grow"
          link="/profile"
          head={<h2 className="text-3xl">Profile</h2>}
        >
          Profile
        </Card>
        <Card
          className="basis-full sm:basis-5/12 flex-grow"
          link="/works"
          head={<h2 className="text-3xl">Projects</h2>}
        >
          Projects
        </Card>
        <Card
          className="basis-full sm:basis-5/12 flex-grow"
          link="/apps"
          head={<h2 className="text-3xl">ウェブアプリ</h2>}
        >
          ウェブアプリ
        </Card>
        <Card
          className="basis-full sm:basis-5/12 flex-grow"
          link="/deploys"
          head={<h2 className="text-3xl">サービス一覧</h2>}
        >
          サービス一覧
        </Card>
      </div>
      <Article>
        <h2>更新履歴</h2>
        最終更新: TODO
        <ul>
          <History
            date="2023/12/19"
            description="Tempura v0.5.0にアップデート"
          />
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
    </div>
  );
}

function History(props: { date: string; description: string }) {
  return (
    <li className="py-0 my-0">
      {props.date} - {props.description}
    </li>
  );
}
