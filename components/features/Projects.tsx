import { ProjectType, main_projects } from '@/src/projects';

import { Card } from '@/components/common';

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
    <Card head={<div>{project.name}</div>} className="flex-grow flex-shrink basis-full md:basis-1/3">
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
