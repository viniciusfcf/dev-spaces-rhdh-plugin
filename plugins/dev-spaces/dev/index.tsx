import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { devSpacesPlugin, DevSpacesPage } from '../src/plugin';

createDevApp()
  .registerPlugin(devSpacesPlugin)
  .addPage({
    element: <DevSpacesPage />,
    title: 'Root Page',
    path: '/dev-spaces',
  })
  .render();
