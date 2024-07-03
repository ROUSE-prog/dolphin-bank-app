// next.config.mjs
import { withSentryConfig } from '@sentry/nextjs';

const moduleExports = {
  // Your existing module.exports
};

const SentryWebpackPluginOptions = {
  silent: true,
  // Additional config options for the Sentry Webpack plugin.
  // See https://github.com/getsentry/sentry-webpack-plugin#options.
};

export default withSentryConfig(moduleExports, SentryWebpackPluginOptions);
