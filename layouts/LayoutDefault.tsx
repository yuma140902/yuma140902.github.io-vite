import { Layout } from './Layout';

export default function LayoutDefault({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
