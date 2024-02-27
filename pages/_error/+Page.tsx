import React from 'react';
import { usePageContext } from 'vike-react/usePageContext';
import { Article } from '../../components/Article';

export default function Page() {
  const { is404 } = usePageContext();
  if (is404) {
    return (
      <Article>
        <h1>404 Page Not Found</h1>
        <p>This page could not be found.</p>
      </Article>
    );
  } else {
    return (
      <Article>
        <h1>500 Internal Server Error</h1>
        <p>Something went wrong.</p>
      </Article>
    );
  }
}
