import React, { ReactNode } from 'react';

import { type DeploymentType, deployments } from '#root/src/deployments';

import { Article, Link } from '#root/components/common';

function Card(props: { children: ReactNode }) {
  return (
    <div className="p-card-space h-full w-full rounded border-solid border-base-tm-200 border hover:border-primary-tm bg-base-tm-150">
      <div className="h-full">{props.children}</div>
    </div>
  );
}

function Deployment(props: DeploymentType) {
  return (
    <Card>
      <h3>
        <Link href={props.url} outside noUnderline>
          {props.name ?? props.url}
        </Link>
      </h3>
      {props.repo ? (
        <Link href={props.repo} outside noUnderline>
          <img src={props.badge} className="inline" />
        </Link>
      ) : (
        <span>
          <img src={props.badge} className="inline" />
        </span>
      )}
    </Card>
  );
}

export function DeploymentList() {
  return (
    <div className="flex gap-content-space flex-col">
      {deployments.map((deployment) => (
        <Deployment key={deployment.name} {...deployment} />
      ))}
    </div>
  );
}

export function Deployments() {
  return (
    <div>
      <Article>
        <h1>デプロイ状況</h1>
        <p>このサイトを構成する各コンポーネントのデプロイ状況</p>
        <ul className="mb-8">
          <li>
            <Link href="/services/">サービス一覧</Link>
          </li>
        </ul>
      </Article>
      <DeploymentList />
    </div>
  );
}
