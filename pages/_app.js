import Head from 'next/head';

import '../styles/globals.css';

const title = "LogoMe";
const description = "A quick and easy logo generator.";

export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
