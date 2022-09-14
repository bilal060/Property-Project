import React from 'react';
import Banner from '../components/Home/SearchHeader/index.js';
import ClientTestimonials from '../components/Home/ClientTestimonials/ClientTestimonials';
import FeatureProperties from '../components/Home/FeatureProperties/FeatureProperties';
import MeetOurAgents from '../components/Home/MeetOurAgents/MeetOurAgents';
import AllSocities from '../components/Home/Socities';
import PopularProperties from '../components/Home/PopularProperties/PopularProperties';
import WhyChooseUs from '../components/Home/WhyChooseUs/WhyChooseUs';

const Home = () => {
  return (
    <>
      {/* <Preloader/> */}
      <div className="homepage-9 hp-6 homepage-1 mh">
        <div id="wrapper">
          <Banner />
          <AllSocities />
          <FeatureProperties />
          <WhyChooseUs />
          <PopularProperties />
          <MeetOurAgents />
          <ClientTestimonials />
        </div>
      </div>
    </>
  );
};

export default Home;
