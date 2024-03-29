import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'alarm-management',
  exposes: {
    './Routes': 'remotes/alarm-management/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
