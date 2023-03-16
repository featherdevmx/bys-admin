import { CssBaseline } from '@nextui-org/react';
import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      ...ctx,
      styles: <>{initialProps.styles}</>,
    };
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html lang="es">
        <Head>{CssBaseline.flush()}</Head>
        <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,300;0,400;0,700;0,900;1,400&display=swap" rel="stylesheet" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
