import { ReactNode } from 'react';

function CardWithHead(props: { head: ReactNode; children: ReactNode; className: string }) {
  return (
    <div className="h-full w-full rounded border-solid border-base-tm-200 border hover:border-primary-tm">
      <div className="p-2 bg-base-tm-150 font-bold text-lg border-b border-b-base-tm-200">{props.head}</div>
      <div className="p-2">{props.children}</div>
    </div>
  );
}

function CardOnlyBody(props: { children: ReactNode; className: string }) {
  return (
    <div className="p-2 h-full w-full rounded border-solid border-base-tm-200 border hover:border-primary-tm bg-base-tm-150">
      <div className="h-full">{props.children}</div>
    </div>
  );
}

function CardInternal(props: { head?: ReactNode; children: ReactNode; className: string }) {
  if (props.head) {
    return (
      <CardWithHead head={props.head} className={props.className}>
        {props.children}
      </CardWithHead>
    );
  } else {
    return <CardOnlyBody className={props.className}>{props.children}</CardOnlyBody>;
  }
}

export function Card(props: {
  head?: ReactNode;
  children: ReactNode;
  link?: string;
  outside?: boolean;
  className?: string;
}) {
  const className = props.className ?? '';
  if (props.link) {
    return (
      <a href={props.link} className={'no-underline ' + className} target={props.outside ? '_blank' : '_self'}>
        <CardInternal head={props.head} className="">
          {props.children}
        </CardInternal>
      </a>
    );
  } else {
    return (
      <CardInternal head={props.head} className={className}>
        {props.children}
      </CardInternal>
    );
  }
}
