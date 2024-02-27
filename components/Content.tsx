import { Menu } from 'react-daisyui';
import { type ContentType } from '../src/contents';
import { SidebarLink } from './SidebarLink';

export function ContentMenuItem({ content }: { content: ContentType }) {
  return (
    <Menu.Item>
      <SidebarLink href={content.url} outside={content.outside}>
        {content.title}
      </SidebarLink>
    </Menu.Item>
  );
}
