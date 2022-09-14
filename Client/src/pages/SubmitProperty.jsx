import React from 'react';
import ContactInfo from '../components/UserProfile/AddProperty/ContactInfo';
import ExtraInfo from '../components/UserProfile/AddProperty/ExtraInfo';
import PropertyDescription from '../components/UserProfile/AddProperty/PropertyDescription';
import PropertyFeatures from '../components/UserProfile/AddProperty/PropertyFeatures';
import PropertyLocation from '../components/UserProfile/AddProperty/PropertyLocation';
import PropertyMedia from '../components/UserProfile/AddProperty/PropertyMedia';
import Sidebar from '../components/UserProfile/UserLayout/Sidebar/Sidebar';
import Header from '../components/UserProfile/UserLayout/Header/Header';


export default function SubmitProperty() {
  return (
    <>
      <div className="inner-pages maxw1600 m0a dashboard-bd">
        <div id="wrapper" className="int_main_wraapper">
        <section class="headings">
            <div class="text-heading text-center">
                <div class="container">
                    <h1>Submit Property</h1>
                    <h2><a href="index.html">Home </a> &nbsp;/&nbsp; Submit Property</h2>
                </div>
            </div>
        </section>
          <section class="royal-add-property-area section_100">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  {/* <div className="col-lg-12 mobile-dashbord dashbord">
                    <div className="dashboard_navigationbar dashxl">
                      <div className="dropdown">
                        <button onclick="myFunction()" className="dropbtn">
                          <i className="fa fa-bars pr10 mr-2" />
                          Dashboard Navigation
                        </button>
                        <ul id="myDropdown" className="dropdown-content">
                          <li>
                            <a href="dashboard.html">
                              <i className="fa fa-map-marker mr-3" /> Dashboard
                            </a>
                          </li>
                          <li>
                            <a href="user-profile.html">
                              <i className="fa fa-user mr-3" />
                              Profile
                            </a>
                          </li>
                          <li>
                            <a href="my-listings.html">
                              <i className="fa fa-list mr-3" aria-hidden="true" />
                              My Properties
                            </a>
                          </li>
                          <li>
                            <a href="favorited-listings.html">
                              <i className="fa fa-heart mr-3" aria-hidden="true" />
                              Favorited Properties
                            </a>
                          </li>
                          <li>
                            <a className="active" href="add-property.html">
                              <i className="fa fa-list mr-3" aria-hidden="true" />
                              Add Property
                            </a>
                          </li>
                          <li>
                            <a href="payment-method.html">
                              <i className="fas fa-credit-card mr-3" />
                              Payments
                            </a>
                          </li>
                          <li>
                            <a href="invoice.html">
                              <i className="fas fa-paste mr-3" />
                              Invoices
                            </a>
                          </li>
                          <li>
                            <a href="change-password.html">
                              <i className="fa fa-lock mr-3" />
                              Change Password
                            </a>
                          </li>
                          <li>
                            <a href="index.html">
                              <i className="fas fa-sign-out-alt mr-3" />
                              Log Out
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div> */}
                      <PropertyDescription/>
                      <PropertyMedia/>
                      <PropertyLocation/>
                      <ExtraInfo/>
                      <PropertyFeatures/>
                      <ContactInfo/>
                </div>
              </div>
            </div>
          </section>
          {/* END SECTION USER PROFILE */}
          {/* START FOOTER */}
        </div>
        {/* Wrapper / End */}
      </div>
    </>
  );
}
