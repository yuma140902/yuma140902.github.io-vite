import './themes.css';
import './scrollbar.css';
import './tailwind.css';
import { themeChange } from 'theme-change';
import React, { useEffect } from 'react';
import { ThemeSelector } from '../components/ThemeSelector';
import { Divider, Menu } from 'react-daisyui';
import { SidebarLink } from '../components/SidebarLink';
import contents from './contents.yaml';
import projects from './projects.yaml';

export default function LayoutDefault({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="transition-colors min-h-screen font-sans text-base-content-tm bg-base-tm-100">
      <Header />
      <div className="flex flex-nowrap flex-col lg:flex-row-reverse lg:h-screen lg:fixed lg:top-0 lg:left-0 lg:right-0">
        <div className="flex-grow lg:overflow-auto pt-12">
          <Content>{children}</Content>
        </div>
        <div
          id="sidebar"
          className="flex-grow-0 flex-shrink-0 lg:overflow-auto lg:mt-12"
        >
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return <div className="max-w-5xl mx-auto">{children}</div>;
}

function Sidebar() {
  return (
    <div className="bg-sidebar-color w-full lg:w-60 ">
      <Menu className="menu-vertical md:menu-horizontal lg:menu-vertical max-w-full">
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
            {projects.projects.map((project) =>
              project.repo ? (
                <Menu.Item key={project.name}>
                  <SidebarLink href={project.repo} outside>
                    {project.sidebar_title ?? project.name}
                  </SidebarLink>
                </Menu.Item>
              ) : undefined
            )}
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
            {contents.contents.map((content) => (
              <Menu.Item key={content.slug}>
                <SidebarLink href={content.url} outside={content.outside}>
                  {content.title}
                </SidebarLink>
              </Menu.Item>
            ))}
          </Menu.Details>
        </Menu.Item>
        <Menu.Item>
          <SidebarLink href="/services">
            <span className="i-carbon-bare-metal-server w-5 h-5" />
            サービス一覧
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
    <header className="z-50 bg-header-color backdrop-blur-sm border-b border-solid border-header-border-color h-12 fixed top-0 w-full flex flex-row">
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
