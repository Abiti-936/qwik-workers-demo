import { component$, useStyles$ } from '@builder.io/qwik';
import Flower from './components/flower';
import { RouterHead } from './components/router-head/router-head';

import globalStyles from './global.css?inline';

export default component$(() => {
  useStyles$(globalStyles);

  return (
    <html lang="en-us">
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body>
        <Flower />
      </body>
    </html>
  );
});
