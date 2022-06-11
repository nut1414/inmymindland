import "../styles/globals.css";
import Script from "next/script";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        id="Adsense-id"
        async="true"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        client="ca-pub-4091008187773851"
        crossorigin="anonymous"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
