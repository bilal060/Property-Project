import AgentName from '../components/AgentDetails/AgentName';
import ContactAgent from '../components/AgentDetails/ContactAgent';
import Schedule from '../components/SingleProperty/Schedule';
import AddReview from '../components/SingleProperty/AddReview';
import Description from '../components/SingleProperty/Description';
import FeatureProperties from '../components/SingleProperty/FeatureProperties';
import RecentProperties from '../components/SingleProperty/RecentProperties';
import Reviews from '../components/SingleProperty/Reviews';
import SimilarProperties from '../components/AgentDetails/SimilarProperties';
import Special from '../components/SingleProperty/Special';
import Index from '../components/AgentListingRow/AgentListingRow';
import React from 'react';

export default function AgentDetails() {
  return (
    <>
      <div className="inner-pages agents homepage-4 det hd-white">
        <div id="wrapper">
          <section className="blog blog-section portfolio single-proper details mb-0">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-12 col-xs-12">
                  <div className="row">
                    <div className="col-md-12 col-xs-12">
                      <AgentName/>
                      <Index/>
                    </div>
                  </div>
                  <div className="blog-pots py-0">
                    <Description/>
                    <SimilarProperties/>
                    <Reviews/>
                    <AddReview/>
                  </div>
                </div>
                <aside className="col-lg-4 col-md-12 car">
                  <div className="single widget">
                    <Schedule/>
                    <div className="sidebar">
                      <ContactAgent/>
                      <div className="main-search-field-2">
                        <RecentProperties/>
                        <FeatureProperties/>
                        <Special/>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
