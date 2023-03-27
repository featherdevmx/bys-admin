import { CssBaseline } from '@nextui-org/react';
import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';
// import Script from 'next/script';

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
        {/* <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_KEY}");`}
        </Script> */}
        <script async src={`https://clarity.microsoft.com/scripts/${process.env.NEXT_PUBLIC_CLARITY_KEY}.js`} data-clarify-privacy-position="bottom" data-clarify-privacy-show="true" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
