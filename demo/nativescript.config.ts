import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.demo',
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
