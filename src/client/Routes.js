// import React from 'react';
import Loadable from 'react-loadable';

const loading = () => <div>Loading...</div>;

import HomePage from './pages/HomePage';
const LoadableHomePage = Loadable({
  loader: () => import('./pages/HomePage'),
  loading,
});

// console.log('hp', ...LoadableHomePage);

const UsersListPage = Loadable({
  loader: () => import('./pages/UsersListPage'),
  loading,
});

export default [
  {
    ...HomePage,
    path: '/',
    exact: true,
  },
  {
    ...LoadableHomePage,
    path: '/home',
    exact: true,
  },
  {
    component: UsersListPage,
    path: '/users',
  }
];
