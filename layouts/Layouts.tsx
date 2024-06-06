import React from 'react';

import { Layout } from '#root/components/Layout';

export function LayoutDefault({ children }: { children: React.ReactNode }) {
  return <Layout wide={false}>{children}</Layout>;
}

export function LayoutWide({ children }: { children: React.ReactNode }) {
  return <Layout wide={true}>{children}</Layout>;
}
