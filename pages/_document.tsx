import { CssBaseline } from '@nextui-org/react';
import Document, {Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps} from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps, 
            ...ctx, 
            styles: <>{initialProps.styles}</>
        }
    }

    render(){
        return (
            <Html lang='es'>
                <Head>{CssBaseline.flush()}</Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;