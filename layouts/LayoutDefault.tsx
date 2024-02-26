import './variables.css';
import './tailwind.css';
import React from 'react';
import { Link } from '../components/Link';

export default function LayoutDefault({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <div className="flex flex-nowrap flex-col lg:flex-row-reverse">
        <div className="flex-grow">
          <Content>{children}</Content>
        </div>
        <div className="flex-grow-0">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return <div className="max-w-5xl mx-auto top-12">{children}</div>;
}

function Sidebar() {
  return <div className="bg-red-100 w-full lg:w-52 lg:h-full">sidebar</div>;
}

function Header() {
  return (
    <header className="bg-header-color backdrop-blur-sm border-b border-solid border-header-border-color text-white h-12 sticky top-0 w-full">
      <div className="flex items-center h-full">
        <div className="px-5">yuma14.net</div>
      </div>
    </header>
  );
}
