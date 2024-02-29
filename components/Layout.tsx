import React, { useEffect } from 'react';
import { Divider, Menu } from 'react-daisyui';
import { themeChange } from 'theme-change';

import { contents } from '@/src/contents';
import { main_projects } from '@/src/projects';

import { SidebarLink } from '@/components/SidebarLink';
import { ContentMenuItem } from '@/components/features/Content';
import { ProjectMenuItem } from '@/components/features/Project';
import { ThemeSelector } from '@/components/features/ThemeSelector';

import '@/layouts/scrollbar.css';
import '@/layouts/selection.css';
import '@/layouts/tailwind.css';
import '@/layouts/themes.css';

import { Sidebar } from './features/Sidebar';

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
        <nav id="sidebar" className="flex-grow-0 flex-shrink-0 lg:overflow-auto lg:mt-header">
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
