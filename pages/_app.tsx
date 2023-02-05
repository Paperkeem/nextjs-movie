import Layout from "@/src/components/Layout";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
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
