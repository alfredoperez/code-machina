import '../styles/global.css';

import type { AppProps } from 'next/app';
import React from 'react';

function MyApp({ pageProps }: AppProps) {
  return <React.Fragment {...pageProps} />;
}

export default MyApp;
