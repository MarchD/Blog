import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { wrapper } from '../store';
import '@fontsource/roboto-mono';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  body {
    font-family: "Roboto Mono", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1.8rem;
  }

  li {
    list-style: none;
  }

  a {
    color: #000;
    text-decoration: none;
  }
`;

const theme = {
    colors: {
        black: '#15171a',
        white: '#fff',
        grayLight: '#758d99',
        gray: '#49505b',
        blue: '#4bb7f1',
        blueLight: '#e6f4ff',
        blueDark: '#152535',
        red: '#cb1c3e',
    },
};

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
    </ThemeProvider>
);

export default wrapper.withRedux(WrappedApp);
