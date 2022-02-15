import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app'
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
        <Head>
          <title>THANKS!</title>
          <link rel='icon' href='/image/icon.ico' />
        </Head>
        <Component {...pageProps} />
      </>
}

export default MyApp
