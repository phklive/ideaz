import { BeaconWallet } from "@taquito/beacon-wallet";
import { Context, createContext } from "react";

const TezosContext: Context<BeaconWallet> = createContext({} as BeaconWallet);

export default TezosContext;
