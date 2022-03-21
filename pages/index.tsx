import type { NextPage } from "next";
import Hero from "../components/molecules/Hero";
import Footer from "../components/organisms/Footer";
import Navbar from "../components/organisms/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
};

export default Home;
