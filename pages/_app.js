import "../styles/globals.css";
import Script from "next/script";
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: { session, ...pageProps }, }) {
  return (
    <>
      <Script
        id="Adsense-id"
        async="true"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        client="ca-pub-4091008187773851"
        crossorigin="anonymous"
      />
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
      
    </>
  );
}

export default MyApp;
