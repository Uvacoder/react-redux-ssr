// import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Loadable from 'react-loadable';

import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use(express.static('public'));
app.get("*", async (req, res) => {
  const store = createStore();

  const components = matchRoutes(Routes, req.path).map(({ route }) => {
    console.log('route', route);
    if(!route.preload) {
      return route;
    } else {
      return route.preload().then(res => {
        console.log('res', res);
        return res.default;
      })
    }
  });

  const loadedComponents = await Promise.all(components);
  console.log('loadedComponents', loadedComponents)

  const actions = loadedComponents.map(component => {
    console.log('component', component);
    return component.loadData ? component.loadData({ ...store, path: req.path }) : null;
  })
  console.log('actions', actions);


  const loadedActions = await Promise.all(actions);
  console.log('loadedActions', loadedActions);

  res.send(renderer(req, store));

  // Promise.all(promises).then((zzz) => {
  //   console.log('promise', zzz);
  //   res.send(renderer(req, store));
  // });
});

Loadable.preloadAll().then(() => {
  app.listen(3000, () => {
    console.log('Listening on 3000');
  });
}).catch(err => console.log('Loadable error', err));
