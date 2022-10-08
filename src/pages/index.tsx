import type { NextPage } from "next";
import Head from "next/head";
import LandingHeader from "../components/LandingHeader";
import Users from "../components/Users";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start py-2">
      <Head>
        <title>Ideaz</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Questrial&display=swap"
          rel="stylesheet"
        />
      </Head>
      <LandingHeader />
    </div>
  );
};

export default Home;
