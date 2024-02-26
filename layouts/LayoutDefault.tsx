import './tailwind.css';
import React from 'react';
import { Link } from '../components/Link';

export default function LayoutDefault({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Content>{children}</Content>
    </div>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return <div className="max-w-5xl mx-auto">{children}</div>;
}
