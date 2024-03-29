import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'production-survailance',
  exposes: {
    './Routes':
      'remotes/production-survailance/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
