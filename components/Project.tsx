import { Menu } from 'react-daisyui';
import { type Project as ProjectType } from '../src/projects';
import { SidebarLink } from './SidebarLink';

export function ProjectMenuItem({ project }: { project: ProjectType }) {
  return project.repo ? (
    <Menu.Item>
      <SidebarLink href={project.repo} outside>
        {project.sidebar_title ?? project.name}
      </SidebarLink>
    </Menu.Item>
  ) : undefined;
}
