import { ReactNode } from 'react';

export function Article({ children }: { children: ReactNode }) {
  return (
    <article className="prose max-w-none prose-headings:border-b prose-headings:border-b-primary-tm prose-headings:max-w-[50%]">
      {children}
    </article>
  );
}
