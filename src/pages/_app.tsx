import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="w-11/12 mx-auto mb-10">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
