import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const devSpacesPlugin = createPlugin({
  id: 'dev-spaces',
  routes: {
    root: rootRouteRef,
  },
});

export const DevSpacesPage = devSpacesPlugin.provide(
  createRoutableExtension({
    name: 'DevSpacesPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
