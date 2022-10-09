import { AccountInfo, NetworkType } from "@airgap/beacon-types";
import React, { useContext, useEffect, useState } from "react";
import TezosContext from "../utils/context";

export default function LoginButton() {
    const [account, setAccount] = useState<AccountInfo>();
    const context = useContext(TezosContext);

    const connect = async () => {
        context.client.getActiveAccount().then(async (acc) => {
            if (acc) setAccount(acc);
            else
                await context
                    .requestPermissions({
                        // network: {
                        //     type: NetworkType.GRANADANET,
                        //     rpcUrl: "https://granadanet.smartpy.io",
                        // },
                    })
                    .then(() => connect());
        });
    };

    // useEffect(() => {
    //     connect();
    // }, []);

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
            <span>
                {account && `Connected as ${account.address.slice(0, 6)}...`}
            </span>
            <button onClick={handleLogin}>
                {account ? "Disconnect" : "Connect"}
            </button>
        </>
    );
}
