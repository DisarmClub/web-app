import Document, {Html, Head, Main, NextScript} from 'next/document'

class AppDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return {...initialProps}
  }

  render() {
    return (
      <Html>
        <Head>
          <script
            data-ad-client="ca-pub-5673854016198249"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>
          <meta name="mobile-wep-app-capable" content="yes" />
          <meta name="theme-color" content="black" />

          <meta name="msapplication-navbutton-color" content="black" />

          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, user-scalable=no, viewport-fit=cover"
          ></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default AppDocument
