import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'nl.essent.urbanairship',
  appResourcesPath: 'app/App_Resources',
  webpackConfigPath: 'webpack.config.js',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  },
  appPath: 'app',
  cli: {
    packageManager: 'npm'
  }
} as NativeScriptConfig;
