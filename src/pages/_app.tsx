import type { AppProps } from 'next/app';

import { AppThemeProvider } from 'components/AppThemeProvider';
import { Layout } from 'components/Layout';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppThemeProvider>
  );
}

export default MyApp;
