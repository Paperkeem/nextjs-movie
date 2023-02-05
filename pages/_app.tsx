import Layout from "@/src/components/Layout";
import type { AppProps } from "next/app";
import Error from "next/error";

export default function App({ Component, pageProps }: AppProps) {
  if (pageProps.error) {
    return (
      <Error
        statusCode={pageProps.error.statusCode}
        title={pageProps.error.message}
      />
    );
  }
  return (
    <Layout>
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          max-width: 480px;
          margin: 0 auto;
        }
        a {
          color: black;
          text-decoration: none;
        }
      `}</style>
    </Layout>
  );
}
