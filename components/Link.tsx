import { ReactNode } from 'react';

export function Link({
  href,
  outside,
  noUnderline: no_underline,
  children,
}: {
  href: string;
  outside?: boolean;
  noUnderline?: boolean;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target={outside ? '_blank' : '_self'}
      className={
        (no_underline ? 'no-underline' : '') +
        'underline hover:decoration-primary-tm group'
      }
    >
      {children}&nbsp;
      {outside ? <span className="i-carbon-launch h-3.5 w-3.5" /> : undefined}
    </a>
  );
}
