// sentry.client.config.js
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: 'https://[YOUR_SENTRY_DSN]',
  tracesSampleRate: 1.0,
});
