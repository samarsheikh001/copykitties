import type { AppProps } from "next/app";
import { NextPageWithLayout } from "./page";
import "../styles/globals.css";
import { Toaster } from "react-hot-toast";

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <>
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}

export default MyApp;
