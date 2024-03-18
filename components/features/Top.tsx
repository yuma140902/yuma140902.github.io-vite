import React, { ReactNode } from 'react';

import reverieEngineUrl from '@/assets/reverie.png';
import webImageEditorUrl from '@/assets/web-image-editor.png';

import { Article } from '@/components/common';

function Card(props: { link: string; head: ReactNode; children: ReactNode }) {
  return (
    <a href={props.link} className="no-underline basis-full sm:basis-5/12 flex-grow">
      <div className="h-full rounded border-solid border-base-tm-200 border hover:border-primary-tm">
        <div className="p-card-space bg-base-tm-150 font-bold text-lg border-b border-b-base-tm-200 rounded-t">
          {props.head}
        </div>
        <div className="p-card-space rounded-b">{props.children}</div>
      </div>
    </a>
  );
}

function History(props: { date: string; description: string }) {
  return (
    <li>
      <div className="timeline-start prose">{props.date}</div>
      <div className="timeline-middle">
        <span className="i-icon-park-twotone-check-one " />
      </div>
      <div className="timeline-end prose">{props.description}</div>
      <hr />
    </li>
  );
}

export function Top() {
  return (
    <div>
      <div className="flex flex-row flex-wrap gap-content-space justify-center items-stretch mb-5">
        <Card link="/profile/" head={<h2 className="text-3xl">Profile</h2>}>
          <div className="hero min-h-80">
            <img className="mask mask-circle h-24 w-24" src="https://avatars.githubusercontent.com/u/23431077" />
          </div>
        </Card>
        <Card link="/works/" head={<h2 className="text-3xl">Projects</h2>}>
          <div className="hero min-h-80">
            <img className="h-80 object-contain" src={reverieEngineUrl} />
          </div>
        </Card>
        <Card link="/apps/" head={<h2 className="text-3xl">ウェブアプリ</h2>}>
          <div className="hero min-h-80">
            <img className="h-80 object-contain" src={webImageEditorUrl} />
          </div>
        </Card>
        <Card link="/services/" head={<h2 className="text-3xl">サービス一覧</h2>}>
          <div className="hero min-h-80">サービス一覧</div>
        </Card>
      </div>
      <Article>
        <h2>更新履歴</h2>
        <p>
          最終更新: {__BUILD_TIME__} (ブランチ: <code>{__GIT_BRANCH__}</code>、コミットID: <code>{__GIT_HASH__}</code>)
        </p>
      </Article>
      <ul className="timeline timeline-vertical mt-content-space">
        <History date="2023/12/19" description="Tempura v0.5.0にアップデート" />
        <History date="2023/10/08" description="ウェブアプリ一覧を追加" />
        <History date="2023/07/12" description="画像追加" />
        <History date="2023/05/17" description="更新" />
        <History date="2023/04/30" description="gitとcloudを削除" />
        <History date="2023/04/29" description="wwwを別サーバーへ移動" />
        <History date="2023/01/31" description="Nextcloudインスタンス(非公開)を追加" />
        <History date="2023/01/31" description="サーバーのスペックを強化" />
        <History date="2022/11/18" description="Giteaインスタンス(git.yuma14.net)を追加" />
        <History
          date="2022/11/16"
          description="About Me、つくったもの、WebTools、サービス一覧を追加。ダークテーマ対応"
        />
        <History date="2022/11/15" description="ドメイン取得" />
      </ul>
    </div>
  );
}
