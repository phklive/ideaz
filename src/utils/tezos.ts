import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { ColorMode, NetworkType } from "@airgap/beacon-types";

const NETWORK = NetworkType.GRANADANET;

const tezos = new TezosToolkit("https://granadanet.smartpy.io");
export const beaconWallet = new BeaconWallet({
    name: "ideaz",
    preferredNetwork: NETWORK,
    colorMode: ColorMode.LIGHT,
});
tezos.setWalletProvider(beaconWallet);
