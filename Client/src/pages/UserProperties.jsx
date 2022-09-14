import Properties from '../components/UserProfile/Properties/Properties';
import Sidebar from '../components/UserProfile/UserLayout/Sidebar/Sidebar';
import Header from '../components/UserProfile/UserLayout/Header/Header';
import React from 'react';

export default function UserProperties() {
  return (
    <>
      <div className="maxw1600 m0a dashboard-bd">
        <div id="wrapper" className="int_main_wraapper">
          <Header/>
          <section className="user-page section-padding pt-5">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-3 col-md-12 col-xs-12 pl-0 pr-0 user-dash">
                  <Sidebar/>
                </div>
                <Properties/>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
