import { ReactNode } from 'react';
import { Divider, Menu } from 'react-daisyui';
import { usePageContext } from 'vike-react/usePageContext';

import { ContentType, contents } from '@/src/contents';
import { ProjectType, main_projects } from '@/src/projects';

export function Sidebar() {
  return (
    <div className="bg-sidebar-color w-full lg:w-sidebar ">
      <Menu className="menu-vertical">
        <Menu.Item>
          <SidebarLink href="/">
            <span className="i-carbon-home w-5 h-5" />
            Home
          </SidebarLink>
        </Menu.Item>
        <Menu.Item>
          <SidebarLink href="/profile/">
            <span className="i-carbon-user-avatar w-5 h-5" />
            About Me
          </SidebarLink>
        </Menu.Item>
        <Menu.Item>
          <SidebarLink href="/apps/">
            <span className="i-carbon-apps w-5 h-5" />
            ウェブアプリ
          </SidebarLink>
        </Menu.Item>
        <Menu.Item>
          <Menu.Details
            label={
              <>
                <span className="i-icon-park-outline-hammer-and-anvil w-5 h-5" />
                Projects
              </>
            }
          >
            <Menu.Item>
              <SidebarLink href="/works/#">
                <span className="i-carbon-list w-5 h-5" />
                作っているもの
              </SidebarLink>
              <SidebarLink href="/works/archives/">
                <span className="i-carbon-list w-5 h-5" />
                作っていたもの
              </SidebarLink>
              <SidebarLink href="/works/scraps/">
                <span className="i-carbon-list w-5 h-5" />
                ボツ
              </SidebarLink>
              <SidebarLink href="/works/forks/">
                <span className="i-carbon-list w-5 h-5" />
                フォーク
              </SidebarLink>
            </Menu.Item>
          </Menu.Details>
        </Menu.Item>
        <Menu.Item>
          <Menu.Details
            label={
              <>
                <span className="i-carbon-document w-5 h-5" />
                コンテンツ
              </>
            }
          >
            {contents.map((content) => (
              <ContentMenuItem key={content.slug} content={content} />
            ))}
          </Menu.Details>
        </Menu.Item>
        <Menu.Item>
          <SidebarLink href="/deploys/">
            <span className="i-carbon-bare-metal-server w-5 h-5" />
            サービス一覧・デプロイ状況
          </SidebarLink>
        </Menu.Item>
      </Menu>
    </div>
  );
}

function ProjectMenuItem({ project }: { project: ProjectType }) {
  return project.repo ? (
    <Menu.Item>
      <SidebarLink href={project.repo} outside>
        {project.sidebar_title ?? project.name}
      </SidebarLink>
    </Menu.Item>
  ) : undefined;
}

function ContentMenuItem({ content }: { content: ContentType }) {
  return (
    <Menu.Item>
      <SidebarLink href={content.url} outside={content.outside}>
        {content.title}
      </SidebarLink>
    </Menu.Item>
  );
}

function SidebarLink({ href, outside, children }: { href: string; outside?: boolean; children: ReactNode }) {
  const pageContext = usePageContext();
  const { urlPathname } = pageContext;
  const isActive = href === '/' ? urlPathname === href : urlPathname.startsWith(href);
  return (
    <a href={href} className={isActive ? 'active' : undefined} target={outside ? '_blank' : '_self'}>
      {children}
      {outside ? (
        <div className="justify-self-end">
          <span className="i-carbon-launch" />
        </div>
      ) : undefined}
    </a>
  );
}
