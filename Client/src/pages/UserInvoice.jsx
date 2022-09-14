import React from 'react';
import Header from '../components/UserProfile/UserLayout/Header/Header';
import Sidebar from '../components/UserProfile/UserLayout/Sidebar/Sidebar';
import Invoice from '../components/UserProfile/Invoice/Invoice';
export default function UserInvoice() {
  return (
    <>
      <div className="inner-pages maxw1600 m0a dashboard-bd">
        {/* Wrapper */}
        <div id="wrapper" className="int_main_wraapper">
          <Header/>
          <section className="user-page section-padding pt-5">a
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-3 col-md-12 col-xs-12 pl-0 pr-0 user-dash">
                  <Sidebar/>
                </div>
                <div className="col-lg-9 col-md-12 col-xs-12 py-0 pl-0 user-dash2">
                  {/* <div className="col-lg-12 mobile-dashbord dashbord">
                    <div className="dashboard_navigationbar dashxl">
                      <div className="dropdown">
                        <button onclick="myFunction()" className="dropbtn">
                          <i className="fa fa-bars pr10 mr-2" /> Dashboard Navigation
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
                            <a href="add-property.html">
                              <i className="fa fa-list mr-3" aria-hidden="true" />
                              Add Property
                            </a>
                          </li>
                          <li>
                            <a className="active" href="payment-method.html">
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
                  {/* START SECTION Invoice-METHOD */}
                   <Invoice/>
                  {/* END SECTION Invoice-METHOD */}
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* Wrapper / End */}
      </div>
    </>
  );
}
