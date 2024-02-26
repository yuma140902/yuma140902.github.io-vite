import './tailwind.css';
import React from 'react';
import { Link } from '../components/Link';

export default function LayoutDefault({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Content>{children}</Content>;
}

function Content({ children }: { children: React.ReactNode }) {
  return <div className="">{children}</div>;
}
