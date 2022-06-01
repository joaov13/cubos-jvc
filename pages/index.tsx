import Head from "next/head";
import CubeSlide from "../components/items/cubeSlide";
import Footer from "../components/sections/footer";
import Header from "../components/sections/header";
import Nav from "../components/sections/nav";
import Tutorials from "../components/sections/tutorials";

const Home = ()=> {
  return (
    <>
      <Head >
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1"></meta>
      </Head>
      <Nav />
      <Header />
      <Tutorials />
      <Footer />

      
    </>
  )
};

export default Home;