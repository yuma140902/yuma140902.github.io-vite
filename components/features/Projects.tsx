import { ReactNode } from 'react';
import { Tooltip } from 'react-daisyui';

import { ProjectType, main_projects } from '@/src/projects';

function Card(props: { head: ReactNode; children: ReactNode; repo?: string }) {
  return (
    <div className="rounded border-solid border-base-tm-200 border hover:border-primary-tm flex-grow flex-shrink basis-full md:basis-1/3">
      <div className="p-card-space bg-base-tm-150 border-b border-b-base-tm-200">
        <div className="flex flex-row justify-stretch items-stretch">
          <div className="font-bold text-lg">{props.head}</div>
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
      <div className="p-card-space">{props.children}</div>
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
    <a href={props.hero.url ?? props.repo} target="_blank" rel="noopener noreferrer">
      <img src={props.hero.image} className="object-fit" />
    </a>
  );
}

function Project({ project }: { project: ProjectType }) {
  return (
    <Card head={project.name} repo={project.repo}>
      <div className="hero">
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
