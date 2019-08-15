import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';

import stats from '../../public/react-loadable.json';
import Routes from '../client/Routes';

export default (req, store) => {
  let modules = [];
  // console.log('in renderer', req.path, store, Routes);

  const content = renderToString(
    <Loadable.Capture report={moduleName => modules.push(moduleName)}>
      <Provider store={store}>
        <StaticRouter location={req.path} context={{}}>
          <div>{renderRoutes(Routes)}</div>
        </StaticRouter>
      </Provider>
    </Loadable.Capture>
  );

  let bundles = getBundles(stats, modules);

  return `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        ${bundles.map(bundle => {
          return `<script src="${bundle.file}"></script>`
        }).join('\n')}
        <link rel="stylesheet" href="styles.css" />
        <script src="main.js"></script>
      </body>
    </html>
  `;
}
