import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'login',
  exposes: {
    './Routes': 'remotes/login/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
