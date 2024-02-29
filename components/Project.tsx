import { Menu } from 'react-daisyui';

import { type ProjectType } from '@/src/projects';

import { SidebarLink } from '@/components/SidebarLink';

export function ProjectMenuItem({ project }: { project: ProjectType }) {
  return project.repo ? (
    <Menu.Item>
      <SidebarLink href={project.repo} outside>
        {project.sidebar_title ?? project.name}
      </SidebarLink>
    </Menu.Item>
  ) : undefined;
}
