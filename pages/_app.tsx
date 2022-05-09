import type { AppProps } from "next/app";
import { NextPageWithLayout } from "./page";
import "../styles/globals.css";
import "../styles/styles.css";
import { Toaster } from "react-hot-toast";
import { UserContext } from "../lib/context";
import { useUserData } from "../lib/hooks";
interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  const userData = useUserData();

  return (
    <UserContext.Provider value={userData}>
      {getLayout(
        <>
          <Component {...pageProps} />
          <Toaster />
        </>
      )}
    </UserContext.Provider>
  );
}

export default MyApp;
