import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta name="description" content="Free Web tutorials"/>
          <meta name="keywords" content="HTML, CSS, XML, JavaScript"/>
          <meta name="author" content="Muhammad Zulfa Dhiaulhaq"/>
          <link
            rel="stylesheet"
            href="https://bootswatch.com/4/sandstone/bootstrap.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
