import { useState } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import TezosContext from "../utils/context";
import { beaconWallet } from "../utils/tezos";

function MyApp({ Component, pageProps }: AppProps) {
    const [wallet, setWallet] = useState(beaconWallet);

    return (
        <TezosContext.Provider value={wallet}>
            <div className="w-11/12 mx-auto mb-10">
                <Navbar />
                <Component {...pageProps} />
            </div>
        </TezosContext.Provider>
    );
}

export default MyApp;
