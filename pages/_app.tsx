import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MainLayout } from "components/interface/layouts/mainLayout/container";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <MainLayout>
      <Component {...pageProps} key={router.pathname} />
    </MainLayout>
  );
}
