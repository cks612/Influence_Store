import {
  type DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Common/Layout";
import GlobalStyles from "../styles/_GlobalStyles";
import { color, mixins } from "../styles/_theme";
import { SessionProvider } from "next-auth/react";
import "@fortawesome/fontawesome-svg-core/styles.css";

const queryClient = new QueryClient();

declare global {
  interface Window {
    kakao: any;
  }
  const kakao: any;
}

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <ThemeProvider theme={{ ...mixins, ...color }}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <SessionProvider session={session}>
            <GlobalStyles />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SessionProvider>
        </Hydrate>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
