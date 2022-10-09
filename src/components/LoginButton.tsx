import React, { useContext, useEffect, useState } from "react";
import { AccountInfo } from "@airgap/beacon-types";
import { TezosToolkit } from "@taquito/taquito";
import { bytes2Char } from "@taquito/utils";
import TezosContext from "../utils/context";
import { NETWORK, RPC } from "../utils/tezos";

export default function LoginButton() {
    const [account, setAccount] = useState<AccountInfo>();
    const context = useContext(TezosContext);

    const connect = async () => {
        context.client.getActiveAccount().then(async (acc) => {
            if (acc) setAccount(acc);
            else
                await context
                    .requestPermissions({
                        network: {
                            type: NETWORK,
                            rpcUrl: RPC,
                        },
                    })
                    .then(() => connect());
        });
    };

    const getUserNfts = async () => {
        let userNfts: { tokenId: number; ipfsHash: string }[] = [];
        const tezos = new TezosToolkit(RPC);
        const contract = await tezos.wallet.at(
            "KT1VbJAzSAHQMvf5HC9zfEVMPbT2UcBvaMXb"
        );
        await contract.storage().then(async (storage: any) => {
            const getTokenIds = await storage.reverse_ledger.get(
                account?.address
            );
            if (getTokenIds) {
                userNfts = await Promise.all([
                    ...getTokenIds.map(async (id: any) => {
                        console.log(id);
                        const tokenId = id.toNumber();
                        const metadata = await storage.token_metadata.get(
                            tokenId
                        );
                        const tokenInfoBytes = metadata.token_info.get("");
                        const tokenInfo = bytes2Char(tokenInfoBytes);
                        return {
                            tokenId,
                            ipfsHash:
                                tokenInfo.slice(0, 7) === "ipfs://"
                                    ? tokenInfo.slice(7)
                                    : null,
                        };
                    }),
                ]);
            }
        });
    };

    useEffect(() => {
        // connect();
        // getUserNfts();
    }, []);

    const handleLogin = () => {
        if (account) {
            context.client.clearActiveAccount();
            setAccount(undefined);
        } else {
            connect();
        }
    };

    return (
        <>
            <span onClick={handleLogin}>
                {account &&
                    `Connected: ${account.address.slice(
                        0,
                        3
                    )}...${account.address.slice(account.address.length - 3)}`}
            </span>
            <button onClick={handleLogin}>{account ? "" : "Connect"}</button>
        </>
    );
}
