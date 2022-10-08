import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <Head>
                <title>Ideaz</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-7xl font-bold">
                Home to the <em className="font-normal">world's best</em> web3
                builders
            </h1>
        </div>
    );
};

export default Home;
