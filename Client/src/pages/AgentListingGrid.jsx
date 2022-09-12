import Card from '../components/AgentListingGrid/Card';
import FeatureProperties from '../components/AgentListingGrid/FeatureProperties';
import RecentProperties from '../components/AgentListingGrid/RecentProperties';
import Schedule from '../components/AgentListingGrid/Schedule';
import Special from '../components/AgentListingGrid/Special';
import Sorting from '../components/AgentListingGrid/Sorting';
import React from 'react';

export default function AgentListingGrid() {
  return (
    <>
      <div className="inner-pages agents homepage-4 hd-white">
        <div id="wrapper">
          <section className="blog blog-section portfolio pt-5">
            <div className="container">
              <section className="headings-2 pt-0 pb-55">
                <div className="pro-wrapper">
                  <div className="detail-wrapper-body">
                    <div className="listing-title-bar">
                      <div className="text-heading text-left">
                        <p className="pb-2">
                          <a href="index.html">Home </a> &nbsp;/&nbsp; <span>Listings</span>
                        </p>
                      </div>
                      <h3>All Agents</h3>
                    </div>
                  </div>
                </div>
              </section>
              <div className="row">
                <div className="col-lg-8 col-md-12 col-xs-12">
                  <Sorting/>
                    <div className="row">
                      <Card/>
                    </div>
                </div>
                <aside className="col-lg-4 col-md-12 car">
                  <div className="single widget">
                    <Schedule/>
                      <div className="sidebar">
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
