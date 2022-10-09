import { AccountInfo } from "@airgap/beacon-types";
import React, { useContext, useEffect, useState } from "react";
import TezosContext from "../utils/context";

export default function LoginButton() {
    const [account, setAccount] = useState<AccountInfo>();
    const context = useContext(TezosContext);

    useEffect(() => {
        context.client.getActiveAccount().then((acc) => {
            if (acc) setAccount(acc);
        });
    }, []);

    const handleLogin = () => {
        // if (!isLoggedIn) {
        //     getActiveAccount().then((account) => {
        //         setIsLoggedIn(true);
        //         console.log(account);
        //     });
        // } else {
        //     clearActiveAccount();
        //     setIsLoggedIn(false);
        // }
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
