import AddReview from '../components/PropertyDetails/AddReview';
import AgentInfo from '../components/PropertyDetails/AgentInfo';
import Description from '../components/PropertyDetails/Description';
import FeatureProperties from '../components/PropertyDetails/FeatureProperties';
import Floorplans from '../components/PropertyDetails/Floorplans';
import Gallery from '../components/PropertyDetails/Gallery';
import Location from '../components/PropertyDetails/Location';
import Nearby from '../components/PropertyDetails/Nearby';
import PopularTags from '../components/PropertyDetails/PopularTags';
import Details from '../components/PropertyDetails/Details';
import Propertyname from '../components/PropertyDetails/Propertyname';
import PropertyVideo from '../components/PropertyDetails/PropertyVideo';
import Reviews from '../components/PropertyDetails/Reviews';
import Index from '../components/PropertyDetails/Schedule';
import SimilarProperties from '../components/PropertyDetails/SimilarProperties';
import Special from '../components/PropertyDetails/Special';
import React from 'react';
import RecentProperties from '../components/PropertyDetails/RecentProperties';

export default function PropertyDetails() {
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
                      <Propertyname />
                      <Gallery />
                      <Description />
                    </div>
                  </div>
                  <Details />
                  <Floorplans />
                  <Nearby />
                  <PropertyVideo />
                  <Location />
                  <Reviews />
                  <AddReview />
                </div>
                <aside className="col-lg-4 col-md-12 car">
                  <div className="single widget">
                    <Index />
                    <div className="sidebar">
                      <AgentInfo />
                      <div className="main-search-field-2">
                        <RecentProperties />
                        <FeatureProperties />
                        <Special />
                        <PopularTags />
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
              <SimilarProperties />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
