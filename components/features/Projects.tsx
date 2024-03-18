import { ReactNode } from 'react';
import { Tooltip } from 'react-daisyui';

import {
  type ForkType,
  type ProjectType,
  type Technology,
  archived_projects,
  forks,
  getSinceUntilText,
  getTechnologyClass,
  getTechnologyLabel,
  main_projects,
  scrap_projects,
} from '@/src/projects';

import { Article, Link } from '../common';

function TechnologyBadge({ tech }: { tech: Technology }) {
  return (
    <span className={getTechnologyClass(tech) + ' ' + 'rounded px-2 text-sm cursor-default'}>
      {getTechnologyLabel(tech)}
    </span>
  );
}

function Card(props: { name: ReactNode; children: ReactNode; project: ProjectType }) {
  return (
    <div className="rounded border-solid border-base-tm-200 border hover:border-primary-tm flex-grow flex-shrink basis-full md:basis-1/3 flex flex-col justify-stretch">
      <div className="p-card-space bg-base-tm-150 border-b border-b-base-tm-200 flex-grow-0 flex-shrink-0 rounded-t">
        <div className="flex flex-row justify-stretch items-stretch">
          <div className="font-bold text-lg">{props.name}</div>
          <div className="flex-grow" />
          <div className="flex items-center">
            {props.project.repo ? (
              <Tooltip position="left" message="GitHub" className="w-5 h-5">
                <a href={props.project.repo} target="_blank" rel="noopener noreferrer" className="w-5 h-5">
                  <span className="i-carbon-logo-github w-5 h-5" />
                </a>
              </Tooltip>
            ) : undefined}
          </div>
        </div>
      </div>
      <div className="p-card-space flex-grow">{props.children}</div>
      <div className="p-card-space border-t border-t-base-tm-200 flex-grow-0 flex-shrink-0 flex flex-row gap-2 rounded-b">
        {props.project.technologies?.map((tech) => <TechnologyBadge tech={tech} />)}
        <span className="text-neutral-content-tm text-sm cursor-default">
          {getSinceUntilText(props.project.since, props.project.until)}
        </span>
      </div>
    </div>
  );
}

function Image(props: ProjectType) {
  if (!props.hero) {
    return undefined;
  } else if (!props.hero.url && !props.repo) {
    return props.hero.image ? (
      <div className="hero">
        <img src={props.hero.image} className="object-fit max-h-64" />
      </div>
    ) : undefined;
  }
  return (
    <a href={props.hero.url ?? props.repo} target="_blank" rel="noopener noreferrer" className="hero">
      <img src={props.hero.image} className="object-fit max-h-64" />
    </a>
  );
}

function Project({ project }: { project: ProjectType }) {
  return (
    <Card project={project} name={project.name}>
      <div className="h-full">
        <Image {...project} />
        {project.description}
      </div>
    </Card>
  );
}

export function ProjectGrid({ projects }: { projects: ProjectType[] }) {
  return (
    <div className="flex flex-row gap-content-space flex-wrap justify-stretch items-stretch">
      {projects.map((project) => (
        <Project key={project.name} project={project} />
      ))}
    </div>
  );
}

function Fork({ fork }: { fork: ForkType }) {
  return (
    <div className="rounded border-solid border-base-tm-200 border hover:border-primary-tm flex-grow flex-shrink basis-full md:basis-1/3 flex flex-col justify-stretch">
      <div className="p-card-space bg-base-tm-150 border-b border-b-base-tm-200 flex-grow-0 flex-shrink-0 rounded-t">
        {fork.name}
      </div>
      <div className="p-card-space border-t border-t-base-tm-200 flex-grow-0 flex-shrink-0 rounded-b">
        <h4 className="font-bold text-lg">アップストリーム</h4>
        <Link href={`https://github.com/${fork.upstream.repo}/tree/${fork.upstream.branch}`} outside>
          <span className="i-carbon-logo-github mr-1 align-middle text-base-content-tm group-hover:text-accent-tm" />
          {fork.upstream.repo}:{fork.upstream.branch}
        </Link>
        <img
          className="py-content-space"
          src={`https://img.shields.io/github/last-commit/${fork.upstream.repo}/${fork.upstream.branch}`}
        />
        <h4 className="font-bold text-lg">ダウンストリーム</h4>
        <Link href={`https://github.com/${fork.downstream.repo}/tree/${fork.downstream.branch}`} outside>
          <span className="i-carbon-logo-github mr-1 align-middle text-base-content-tm group-hover:text-accent-tm" />
          {fork.downstream.repo}:{fork.downstream.branch}
        </Link>
        <img
          className="py-content-space"
          src={`https://img.shields.io/github/last-commit/${fork.downstream.repo}/${fork.downstream.branch}`}
        />
        <h4 className="font-bold text-lg">アップストリームの概要</h4>
        <p className="py-content-space">{fork.description}</p>
        <h4 className="font-bold text-lg">変更点・変更理由</h4>
        <p className="py-content-space">{fork.change}</p>
      </div>
    </div>
  );
}

export function ForksList({ forks: fork }: { forks: ForkType[] }) {
  return (
    <div className="flex flex-col gap-content-space justify-stretch items-stretch">
      {fork.map((fork) => (
        <Fork key={fork.name} fork={fork} />
      ))}
    </div>
  );
}

export function MainProjects() {
  return (
    <div>
      <div className="pb-content-space">
        <Article>
          <h1>作っているもの</h1>
        </Article>
      </div>
      <ProjectGrid projects={main_projects} />
      <div className="py-content-space">
        <Article>
          <h2>
            <Link href="/works/archives/">作っていたもの</Link>
          </h2>
          <p>今はもう更新していないもの</p>
          <h2>
            <Link href="/works/scraps/">ボツ</Link>
          </h2>
          <p>未完成のままやめてしまったもの</p>
          <h2>
            <Link href="/works/forks/">フォーク</Link>
          </h2>
          <p>個人的な理由によりフォークして使用しているもの</p>
        </Article>
      </div>
    </div>
  );
}

export function ArchivedProjects() {
  return (
    <div>
      <div className="pb-content-space">
        <Article>
          <h1>作っていたもの</h1>
          <p>今はもう更新していないもの。下に行くほど古い</p>
        </Article>
      </div>
      <ProjectGrid projects={archived_projects} />
    </div>
  );
}

export function ScrapProjects() {
  return (
    <div>
      <div className="pb-content-space">
        <Article>
          <h1>ボツ</h1>
          <p>未完成のままやめてしまったもの。下に行くほど古い</p>
        </Article>
      </div>
      <ProjectGrid projects={scrap_projects} />
    </div>
  );
}

export function Forks() {
  return (
    <div>
      <div className="pb-content-space">
        <Article>
          <h1>Forks</h1>
          <p>個人的な理由によりフォークして使用しているリポジトリの一覧</p>
        </Article>
      </div>
      <ForksList forks={forks} />
    </div>
  );
}
