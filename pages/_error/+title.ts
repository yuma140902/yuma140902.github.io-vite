import { PageContext } from 'vike/types';

export function title(pageContext: PageContext<unknown>) {
  const is404 = pageContext.is404;
  if (is404) {
    return '404 Not Found - yuma14.net';
  } else {
    return '500 Internal Server Error - yuma14.net';
  }
}
