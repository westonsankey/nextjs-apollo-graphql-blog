import type { AppProps } from "next/app";
import { getApolloClient } from "../lib/getApolloClient";
import { ApolloProvider } from "@apollo/client";

export type CustomPageProps = {
  __APOLLO_STATE__: Partial<unknown>;
} & Record<string, any>;

export default function App({
  Component,
  pageProps,
}: AppProps<CustomPageProps>) {
  const client = getApolloClient();

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
