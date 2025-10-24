import React from "react";
import Hero from "../Hero/Hero";
import NewRelease from "../New_release/NewRelease";
import Explore from "../Explore/Explore";
import TermCondition from "../term-condition/termCondition";
import CommunitySection from "../Community-section/CommunitySection";

const Home = () => {
  return (
    <>
      <Hero />
      <NewRelease />
      <Explore />
      <TermCondition />
      <CommunitySection/>
    </>
  );
};

export default Home;
