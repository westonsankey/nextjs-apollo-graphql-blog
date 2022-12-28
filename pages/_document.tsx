import Document, { DocumentContext, DocumentInitialProps } from "next/document";
import { getDataFromTree } from "@apollo/client/react/ssr";
import { getApolloClient } from "../lib/getApolloClient";
import { NormalizedCacheObject } from "@apollo/client";

type DocumentInitialPropsWithApollo = DocumentInitialProps & {
  apolloState: NormalizedCacheObject;
};

// Reference: https://github.com/shshaw/next-apollo-ssr
class DocumentWithApollo extends Document {
  constructor(props) {
    super(props);

    const { __NEXT_DATA__, apolloState } = props;
    __NEXT_DATA__.apolloState = apolloState;
  }

  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialPropsWithApollo> {
    const apolloClient = getApolloClient(true);
    await getDataFromTree(<ctx.AppTree {...ctx.appProps} />);
    const apolloState = apolloClient.extract();
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps, apolloState };
  }
}

export default DocumentWithApollo;
