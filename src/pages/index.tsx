import Header from "@/components/Header";
import Landing from "@/components/Landing";
import React from "react";
import Head from "next/head";
import type { NextPage } from "next/types";
import Image from "next/image";
import { Tab } from "@headlessui/react";

const Home: NextPage = () => {
  {
    return (
      <div>
        <Head>
          <title>Apple Redesign</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main className="relative h-[200vh] bg-[#ffffff]">
          <Landing />
        </main>
        <section className="relative z-40 -mt-[100vh] min-h-screen bg-[#1B1B1B]">
          <div>
            <h1 className="text-center text-4xl font-medium tracking-wide text-white md:text-5xl">
              New Promos
            </h1>
          </div>
        </section>
      </div>
    );
  }
};
export default Home;
