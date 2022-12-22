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

const queryClient = new QueryClient();

declare global {
  interface Window {
    kakao: any;
  }
  const kakao: any;
}

export default function App({
  Component,
  pageProps,
}: AppProps<{ dehydratedState: DehydratedState }>) {
  return (
    <ThemeProvider theme={{ ...mixins, ...color }}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <GlobalStyles />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Hydrate>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
