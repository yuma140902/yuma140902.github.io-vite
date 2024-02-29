import { ReactNode } from 'react';

import { ProjectType, main_projects } from '@/src/projects';

function Card(props: { head: ReactNode; children: ReactNode }) {
  return (
    <div className="rounded border-solid border-base-tm-200 border hover:border-primary-tm flex-grow flex-shrink basis-full md:basis-1/3">
      <div className="p-card-space bg-base-tm-150 font-bold text-lg border-b border-b-base-tm-200">{props.head}</div>
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
    <Card head={<div>{project.name}</div>}>
      <div className="hero">
        <Image {...project} />
        {project.description}
      </div>
    </Card>
  );
}
export function ProjectGrid() {
  return (
    <div className="flex flex-row gap-3 flex-wrap justify-stretch items-stretch">
      {main_projects.map((project) => (
        <Project key={project.name} project={project} />
      ))}
    </div>
  );
}
