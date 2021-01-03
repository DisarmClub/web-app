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
          <meta name="application-name" content="DisarmClub" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta name="apple-mobile-web-app-title" content="DisarmClub" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#000000" />

          <meta name="msapplication-navbutton-color" content="#000000" />

          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/Logo192.png" />

          <link rel="icon" href="/favicon.ico" sizes="32x32" />

          <script
            data-ad-client="ca-pub-5673854016198249"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          />
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
