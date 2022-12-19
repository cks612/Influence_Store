import {
  DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/_GlobalStyles";
import { color, mixins } from "../styles/_theme";

const queryClient = new QueryClient();

export default function App({
  Component,
  pageProps,
}: AppProps<{ dehydratedState: DehydratedState }>) {
  return (
    <>
      <ThemeProvider theme={{ ...mixins, ...color }}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <GlobalStyles />
            <Component {...pageProps} />;
          </Hydrate>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}
