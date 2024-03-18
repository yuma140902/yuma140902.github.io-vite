import { ReactNode } from 'react';
import { Tooltip } from 'react-daisyui';

import {
  type ProjectType,
  type Technology,
  archived_projects,
  getSinceUntilText,
  getTechnologyClass,
  getTechnologyLabel,
  main_projects,
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
