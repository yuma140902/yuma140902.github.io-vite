import './themes.css';
import './selection.css';
import './scrollbar.css';
import './tailwind.css';
import { themeChange } from 'theme-change';
import React, { useEffect } from 'react';
import { ThemeSelector } from '../components/ThemeSelector';
import { Divider, Menu } from 'react-daisyui';
import { SidebarLink } from '../components/SidebarLink';
import { contents } from '../src/contents';
import { main_projects } from '../src/projects';
import { ContentMenuItem } from '../components/Content';
import { ProjectMenuItem } from '../components/Project';

export function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="transition-colors min-h-screen font-sans text-base-content-tm bg-base-tm-100">
      <Header />
      <div className="flex flex-nowrap flex-col lg:flex-row-reverse lg:h-screen lg:fixed lg:top-0 lg:left-0 lg:right-0">
        <main className="flex-grow lg:overflow-auto pt-header">
          <div className="p-3">
            <Content>{props.children}</Content>
          </div>
        </main>
        <nav
          id="sidebar"
          className="flex-grow-0 flex-shrink-0 lg:overflow-auto lg:mt-header"
        >
          <Divider vertical className="lg:hidden" />
          <Sidebar />
        </nav>
      </div>
    </div>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return <div className="max-w-5xl mx-auto">{children}</div>;
}

function Sidebar() {
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
          <SidebarLink href="/profile">
            <span className="i-carbon-user-avatar w-5 h-5" />
            About Me
          </SidebarLink>
        </Menu.Item>
        <Menu.Item>
          <SidebarLink href="/apps">
            <span className="i-carbon-apps w-5 h-5" />
            ウェブアプリ
          </SidebarLink>
        </Menu.Item>
        <Menu.Item>
          <Menu.Details
            label={
              <>
                <span className="i-icon-park-outline-hammer-and-anvil w-5 h-5" />
                <SidebarLink href="/works/">Projects</SidebarLink>
              </>
            }
          >
            {main_projects.map((project) => (
              <ProjectMenuItem key={project.name} project={project} />
            ))}
            <Divider />
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
          <SidebarLink href="/deploys">
            <span className="i-carbon-bare-metal-server w-5 h-5" />
            サービス一覧・デプロイ状況
          </SidebarLink>
        </Menu.Item>
      </Menu>
    </div>
  );
}

function Header() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <header className="z-50 bg-header-color backdrop-blur-sm border-b border-solid border-header-border-color h-header fixed top-0 w-full flex flex-row">
      <div className="flex items-center h-full">
        <div className="px-5 flex items-center">
          <span className="i-icon-park-twotone-crab block px-5 w-6 h-6 bg-orange-500"></span>
          <span className="block">yuma14.net</span>
        </div>
      </div>
      <div className="flex-grow"></div>
      <ThemeSelector />
    </header>
  );
}
