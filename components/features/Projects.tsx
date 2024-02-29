import { ReactNode } from 'react';
import { Badge, Tooltip } from 'react-daisyui';

import {
  type ProjectType,
  type Technology,
  getTechnologyClass,
  getTechnologyLabel,
  main_projects,
} from '@/src/projects';

function TechnologyBadge({ tech }: { tech: Technology }) {
  return (
    <span className={getTechnologyClass(tech) + ' ' + 'rounded px-2 text-sm cursor-default'}>
      {getTechnologyLabel(tech)}
    </span>
  );
}

function Card(props: {
  name: ReactNode;
  children: ReactNode;
  repo?: string;
  technologies: Technology[];
  since?: string;
}) {
  return (
    <div className="rounded border-solid border-base-tm-200 border hover:border-primary-tm flex-grow flex-shrink basis-full md:basis-1/3 flex flex-col justify-stretch">
      <div className="p-card-space bg-base-tm-150 border-b border-b-base-tm-200 flex-grow-0 flex-shrink-0">
        <div className="flex flex-row justify-stretch items-stretch">
          <div className="font-bold text-lg">{props.name}</div>
          <div className="flex-grow" />
          <div className="flex items-center">
            {props.repo ? (
              <Tooltip position="left" message="GitHub" className="w-5 h-5">
                <a href={props.repo} target="_blank" rel="noopener noreferrer" className="w-5 h-5">
                  <span className="i-carbon-logo-github w-5 h-5" />
                </a>
              </Tooltip>
            ) : undefined}
          </div>
        </div>
      </div>
      <div className="p-card-space flex-grow">{props.children}</div>
      <div className="p-card-space border-t border-t-base-tm-200 flex-grow-0 flex-shrink-0 flex flex-row gap-2">
        {props.technologies.map((tech) => (
          <TechnologyBadge tech={tech} />
        ))}
        {props.since ? (
          <span className="text-neutral-content-tm text-sm cursor-default">{props.since} ～</span>
        ) : undefined}
      </div>
    </div>
  );
}

function Image(props: ProjectType) {
  if (!props.hero) {
    return undefined;
  } else if (!props.hero.url && !props.repo) {
    return props.hero.image ? <img src={props.hero.image} className="object-fit" /> : undefined;
  }
  return (
    <a href={props.hero.url ?? props.repo} target="_blank" rel="noopener noreferrer" className="hero">
      <img src={props.hero.image} className="object-fit max-h-64" />
    </a>
  );
}

function Project({ project }: { project: ProjectType }) {
  return (
    <Card name={project.name} repo={project.repo} technologies={project.technologies ?? []} since={project.since}>
      <div className="h-full">
        <Image {...project} />
        {project.description}
      </div>
    </Card>
  );
}
export function ProjectGrid() {
  return (
    <div className="flex flex-row gap-content-space flex-wrap justify-stretch items-stretch">
      {main_projects.map((project) => (
        <Project key={project.name} project={project} />
      ))}
    </div>
  );
}
