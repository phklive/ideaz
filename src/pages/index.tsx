import type { NextPage } from "next";
import Head from "next/head";
import LandingHeader from "../components/LandingHeader";
import Users from "../components/Users";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Ideaz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingHeader />
      <Users />
    </div>
  );
};

export default Home;
