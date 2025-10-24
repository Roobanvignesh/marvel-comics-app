import React from "react";
import Hero from "../Hero/Hero";
import NewRelease from "../New_release/NewRelease";
import Explore from "../Explore/Explore";
import TermCondition from "../term-condition/termCondition";
import CommunitySection from "../Community-section/CommunitySection";
import Footer from "../../component/Footer/Footer";


const Home = () => {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="new-release">
        <NewRelease />
      </section>
      <section id="explore">
        <Explore />
      </section>
      <TermCondition />
      <section id="community">
        <CommunitySection />
      </section>
      <section id="footer" > 
        <Footer />
      </section>
    </>
  );
};


export default Home;


