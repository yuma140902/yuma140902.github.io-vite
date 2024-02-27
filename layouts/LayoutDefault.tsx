import './variables.css';
import './scrollbar.css';
import './tailwind.css';
import React from 'react';
import { Link } from '../components/Link';
import { Dropdown } from 'react-daisyui';

// TODO: tmp
function Lorem() {
  return (
    <p>
      Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
      labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet.
      Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum
      Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident.
      Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex
      occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat
      officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in
      Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non
      excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco
      ut ea consectetur et est culpa et culpa duis.
    </p>
  );
}

export default function LayoutDefault({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen font-sans text-text-color bg-background-color">
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
    <div className="bg-sidebar-color w-full lg:w-52 lg:min-h-full">
      BEGINNING OF SIDEBAR
      <Lorem />
      <Lorem />
      <Lorem />
      <Lorem />
      <Lorem />
      <Lorem />
      <Lorem />
      END OF SIDEBAR
    </div>
  );
}

function Header() {
  return (
    <header className="z-50 bg-header-color backdrop-blur-sm border-b border-solid border-header-border-color h-12 fixed top-0 w-full flex flex-row">
      <div className="flex items-center h-full">
        <div className="px-5 flex items-center">
          <span className="i-icon-park-twotone-crab block px-5 w-5 h-5 bg-orange-500"></span>
          <span className="block">yuma14.net</span>
        </div>
      </div>
      <div className="flex-grow"></div>
      <ThemeSelector
        currentTheme="light"
        setTheme={(theme: string) => {
          console.log('theme', theme);
          document.documentElement.setAttribute('data-theme', theme);
        }}
      />
    </header>
  );
}

function ThemeSelector(props: {
  currentTheme: string;
  setTheme: (theme: string) => void;
}) {
  return (
    <Dropdown className="bg-transparent" vertical="bottom" end>
      <Dropdown.Toggle className="btn glass" button={false}>
        <span className="i-carbon-settings w-5 h-5 hover:animate-spin">
          設定
        </span>
      </Dropdown.Toggle>
      <Dropdown.Menu className="w-32">
        <Dropdown.Item
          onClick={() => props.setTheme('onedark')}
          className="active"
        >
          OneDark
        </Dropdown.Item>
        <Dropdown.Item onClick={() => props.setTheme('onelight')}>
          OneLight
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
