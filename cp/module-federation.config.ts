import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'cp',
  /**
   * To use a remote that does not exist in your current Nx Workspace
   * You can use the tuple-syntax to define your remote
   *
   * remotes: [['my-external-remote', 'https://nx-angular-remote.netlify.app']]
   *
   * You _may_ need to add a `remotes.d.ts` file to your `src/` folder declaring the external remote for tsc, with the
   * following content:
   * nx g @nx/angular:ngrx-root-store
   * declare module 'my-external-remote';
   * nx g @nrwl/angular:ngrx --module=libs/shared-store/src/lib/shared-store.module.ts
   */
  remotes: ['alarm-management', 'production-survailance', 'login'],
};

export default config;
