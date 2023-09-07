import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <title>PikaBoo Waste Management</title>
        <meta
          property="og:title"
          content="PikaBoo Waste Management"
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="PikaBoo App puts you in total control of your Waste Management from registering for waste pick-up services under a Waste Manager to applying for and purchasing waste bins, receiving scheduled pick-ups and making personalized pick-up requests at your convenience from anywhere you might be in the world."
          key="ogdesc"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/greenmouse-tech/image/upload/v1688402669/pikaboo/pickaboo_logo_eatts5.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
