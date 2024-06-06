import React, { ReactNode } from 'react';

import { AppType, main_apps, minor_apps } from '#root/src/apps';

import { Article } from '#root/components/common';

function Card(props: { link: string; outside: boolean; head: ReactNode; children: ReactNode }) {
  return (
    <a
      href={props.link}
      className="no-underline flex-grow-0 flex-shrink-0 block w-64 overflow-hidden"
      target={props.outside ? '_blank' : '_self'}
    >
      <div className="h-full rounded border-solid border-base-tm-200 border hover:border-primary-tm flex flex-col">
        <div className="p-card-space bg-base-tm-150 font-bold text-lg border-b border-b-base-tm-200 rounded-t flex-grow-0 flex-shrink-0">
          {props.head}
        </div>
        <div className="p-card-space rounded-b flex-grow">{props.children}</div>
      </div>
    </a>
  );
}

function App({ app }: { app: AppType }) {
  return (
    <Card head={<div>{app.name}</div>} link={app.url} outside={app.outside}>
      <div className="flex flex-col items-center h-full">
        <p className="prose flex-grow-0 flex-shrink-0">{app.copy}</p>
        <div className="flex-grow items-center flex">
          {app.img ? <img src={app.img} className="object-contain flex-shrink h-full max-h-40 mt-2" /> : undefined}
        </div>
      </div>
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
          <App key={app.name} app={app} />
        ))}
      </div>
    </div>
  );
}
