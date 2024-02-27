import { ReactNode } from 'react';
import { Link } from './Link';
import { Badge, Divider } from 'react-daisyui';

export function Profile() {
  return (
    <div>
      <h2>yuma14</h2>
      <p>学生です。</p>
      <div>
        <Entry
          name="GitHub"
          url="https://github.com/yuma140902"
          icon={<span className="i-carbon-logo-github w-5 h-5 align-middle" />}
        />
        <Entry
          name="Zenn"
          url="https://zenn.dev/yuma14"
          icon={<span className="i-simple-icons-zenn w-5 h-5 align-middle" />}
        />
        <Entry
          name="Qiita"
          url="https://qiita.com/yuma140902"
          icon={
            <span className="i-icon-park-outline-earth w-5 h-5 align-middle" />
          }
        />
        <Entry
          name="@yuma140902"
          url="https://twitter.com/yuma140902"
          icon={<span className="i-carbon-logo-x w-5 h-5 align-middle" />}
        />
        <Entry
          name="twtxt"
          url="https://yuma14.net/twtxt.txt"
          icon={<span className="i-carbon-txt w-5 h-5 align-middle" />}
        />
      </div>
    </div>
  );
}

function Entry(props: { name: string; url: string; icon?: ReactNode }) {
  return (
    <span className="mr-4">
      <Link href={props.url} outside noUnderline>
        {props.icon}
        {props.icon ? ' ' : undefined}
        {props.name}
      </Link>
    </span>
  );
}
