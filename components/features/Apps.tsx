import { ReactNode } from 'react';

import { AppType, main_apps, minor_apps } from '@/src/apps';

import { Article } from '@/components/common';

function Card(props: { link: string; outside: boolean; head: ReactNode; children: ReactNode }) {
  return (
    <a
      href={props.link}
      className="no-underline flex-grow-0 flex-shrink-0 block w-64 h-64 overflow-hidden"
      target={props.outside ? '_blank' : '_self'}
    >
      <div className="h-full rounded border-solid border-base-tm-200 border hover:border-primary-tm">
        <div className="p-card-space bg-base-tm-150 font-bold text-lg border-b border-b-base-tm-200 rounded-t">
          {props.head}
        </div>
        <div className="p-card-space rounded-b">{props.children}</div>
      </div>
    </a>
  );
}

function App({ app }: { app: AppType }) {
  return (
    <Card head={<div>{app.name}</div>} link={app.url} outside={app.outside}>
      <p className="prose">{app.copy}</p>
      {app.img ? <img src={app.img} className="hero object-fit mt-2" /> : undefined}
    </Card>
  );
}

export function Apps() {
  const all_apps = [...main_apps, ...minor_apps];
  return (
    <div>
      <Article>
        <h1>ウェブアプリ</h1>
      </Article>
      <div className="flex gap-content-space flex-wrap my-content-space">
        {all_apps.map((app) => (
          <App app={app} />
        ))}
      </div>
    </div>
  );
}
