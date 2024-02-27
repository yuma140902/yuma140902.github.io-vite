import { ReactNode } from 'react';

export function Article({ children }: { children: ReactNode }) {
  return (
    <article className="prose prose-h1:bg-primary-tm prose-h1:text-primary-content-tm prose-h1:rounded prose-h1:px-2">
      {children}
    </article>
  );
}
