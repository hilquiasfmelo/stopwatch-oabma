import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Roboto+Mono:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="h-screen bg-gradient-to-r from-cyan-500 to-blue-500 text-zinc-100 antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
