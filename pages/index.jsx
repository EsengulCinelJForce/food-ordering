import Head from "next/head";
import Input from "../components/form/Input";
import Header from "../components/layout/Header";
import Home from "./home";

export default function Index() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin ="true"/>       
      </Head>
      <Home/>

      




    </div>
  );
}
