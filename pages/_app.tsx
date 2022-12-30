import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
// Components
import { MainLayout } from "components/interface/layouts/mainLayout/container";
import CustomCursor from "components/interface/Custom/Cursor";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <MainLayout>
      <Component {...pageProps} key={router.pathname} />
      {/* cursor */}
      <CustomCursor />
    </MainLayout>
  );
}
