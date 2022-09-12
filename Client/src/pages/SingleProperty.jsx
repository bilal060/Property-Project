import AddReview from '../components/SingleProperty/AddReview';
import AgentInfo from '../components/SingleProperty/AgentInfo';
import Description from '../components/SingleProperty/Description';
import FeatureProperties from '../components/SingleProperty/FeatureProperties';
import Floorplans from '../components/SingleProperty/Floorplans';
import Gallery from '../components/SingleProperty/Gallery';
import Location from '../components/SingleProperty/Location';
import Nearby from '../components/SingleProperty/Nearby';
import PopularTags from '../components/SingleProperty/PopularTags';
import PropertyDetails from '../components/SingleProperty/PropertyDetails';
import Propertyname from '../components/SingleProperty/Propertyname';
import PropertyVideo from '../components/SingleProperty/PropertyVideo';
import Reviews from '../components/SingleProperty/Reviews';
import Index from '../components/SingleProperty/Schedule';
import SimilarProperties from '../components/SingleProperty/SimilarProperties';
import Special from '../components/SingleProperty/Special';
import React from 'react';
import RecentProperties from '../components/SingleProperty/RecentProperties';

export default function SingleProperty() {
  return (
    <>
      <div className="inner-pages sin-1 homepage-4 hd-white">
        <div id="wrapper">
          <section className="single-proper blog details">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-12 blog-pots">
                  <div className="row">
                    <div className="col-md-12">
                      <Propertyname/>
                      <Gallery/>
                      <Description/>
                    </div>
                  </div>
                  <PropertyDetails/>
                  <Floorplans/>
                  <Nearby/>
                  <PropertyVideo/>
                  <Location/>
                  <Reviews/>
                  <AddReview/>
                </div>
                <aside className="col-lg-4 col-md-12 car">
                  <div className="single widget">
                    <Index/>
                    <div className="sidebar">
                      <AgentInfo/>
                      <div className="main-search-field-2">
                        <RecentProperties/>
                        <FeatureProperties/>
                        <Special/>
                        <PopularTags/>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
              <SimilarProperties/>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
