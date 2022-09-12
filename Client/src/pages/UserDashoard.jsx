import React from 'react';
import Sidebar from '../components/UserProfile/UserLayout/Sidebar/Sidebar';
import Header from '../components/UserProfile/UserLayout/Header/Header'
import ManageDashboard from '../components/UserProfile/Dashboard/ManageDashboard';
import Listing from '../components/UserProfile/Dashboard/Listing';
import Message from '../components/UserProfile/Dashboard/Message';
import Review from '../components/UserProfile/Dashboard/Review';
import PersonalInformation from '../components/UserProfile/Dashboard/PersonalInformation';
import Footer from '../components/UserProfile/UserLayout/Footer/Footer';

export default function Dashboard() {
  return (
    <>
      <div className="maxw1600 m0a dashboard-bd">
        <div id="wrapper" className="int_main_wraapper">
              <Header/>
          <div className="clearfix" />
          <section className="user-page section-padding">
            <div className="container-fluid">
              <div className="row">
               <div class="col-lg-3 col-md-12 col-xs-12 pl-0 pr-0 user-dash">
                  <Sidebar/>
                </div>
                <div className="col-lg-9 col-md-12 col-xs-12 pl-0 user-dash2">
                  <ManageDashboard/>
                  <Listing/>
                  <Message/>
                  <Review/>
                  <PersonalInformation/>
                  <Footer/>
                </div>
              </div>
            </div>
          </section>
          <a data-scroll="" href="#wrapper" className="go-up">
            <i className="fa fa-angle-double-up" aria-hidden="true" />
          </a>
        </div>
      </div>
    </>
  );
}
