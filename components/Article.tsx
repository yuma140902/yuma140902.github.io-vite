import { ReactNode } from 'react';

export function Article({ children }: { children: ReactNode }) {
  return (
    <article className="prose prose-headings:border-b prose-headings:border-b-primary-tm">
      {children}
    </article>
  );
}
