import Head from 'next/head';

import '../styles/globals.css';

import { fonts } from '../data/fonts';

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
        {
          fonts.map(font =>
            <link
              href={`https://fonts.googleapis.com/css2?family=${font.replace(/\s/g, '+')}&display=swap`}
              rel="stylesheet"
              key={font}
            />
          )
        }
      </Head>
      <Component {...pageProps} />
    </>
  );
}
