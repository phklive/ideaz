import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { ColorMode, NetworkType } from "@airgap/beacon-types";

export const NETWORK = NetworkType.GHOSTNET;
export const RPC = "https://ghostnet.smartpy.io";

const tezos = new TezosToolkit(RPC);
export const beaconWallet = new BeaconWallet({
    name: "ideaz",
    preferredNetwork: NETWORK,
    colorMode: ColorMode.LIGHT,
});
tezos.setWalletProvider(beaconWallet);
