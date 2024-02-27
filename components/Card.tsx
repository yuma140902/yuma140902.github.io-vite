import { ReactNode } from 'react';

export function Card(props: { head?: ReactNode; children: ReactNode }) {
  return (
    <div className="w-full rounded border-solid border-base-tm-200 border p-2 hover:border-primary-tm bg-base-tm-150">
      <div>{props.head}</div>
      <div>{props.children}</div>
    </div>
  );
}
