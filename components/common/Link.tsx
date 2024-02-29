import { ReactNode } from 'react';

export function Link({
  href,
  outside,
  noUnderline: noUnderline,
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
        (noUnderline ? 'no-underline ' : 'underline ') +
        'hover:underline hover:decoration-primary-tm text-secondary group'
      }
    >
      {children}&nbsp;
      {outside ? <span className="i-carbon-launch h-3.5 w-3.5 text-base-content-tm" /> : undefined}
    </a>
  );
}
