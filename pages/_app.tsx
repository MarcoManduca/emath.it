import type { AppProps } from 'next/app';
import { ReactElement } from 'react';
import '../styles/globals.css';
import { NextPageWithLayout } from './page';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: ReactElement) => page);
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
