import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'production-survailance',
    loadChildren: () =>
      import('production-survailance/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'alarm-management',
    loadChildren: () =>
      import('alarm-management/Routes').then((m) => m.remoteRoutes),
  },
];
