import React, { ReactNode } from 'react';
import { usePageContext } from 'vike-react/usePageContext';

export function Link({
  href,
  outside,
  children,
}: {
  href: string;
  outside?: boolean;
  children: ReactNode;
}) {
  const pageContext = usePageContext();
  const { urlPathname } = pageContext;
  const isActive =
    href === '/' ? urlPathname === href : urlPathname.startsWith(href);
  return (
    <a
      href={href}
      className={isActive ? 'active' : undefined}
      target={outside ? '_blank' : ''}
    >
      {children}
      {outside ? (
        <div className="justify-self-end">
          <span className="i-carbon-launch" />
        </div>
      ) : undefined}
    </a>
  );
}
