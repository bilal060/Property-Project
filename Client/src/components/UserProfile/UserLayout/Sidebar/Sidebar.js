import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <>
        <div className="user-profile-box mb-0">
          <div className="sidebar-header">
            <img src="images/logo-blue.svg" alt="header-logo2.png" />{' '}
          </div>
          <div className="header clearfix">
            <img
              src="images/testimonials/ts-1.jpg"
              alt="avatar"
              className="img-fluid profile-img"
            />
          </div>
          <div className="active-user">
            <h2>Mary Smith</h2>
          </div>
          <div className="detail clearfix">
            <ul className="mb-0">
              <li>
                <Link className="active" to="/dashboard">
                  <i className="fa fa-map-marker" /> Dashboard
                </Link>
              </li>
              <li>
                <Link to="/UserProfile">
                  <i className="fa fa-user" />
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/UserProperties">
                  <i className="fa fa-list" aria-hidden="true" />
                  My Properties
                </Link>
              </li>
              <li>
                <Link to="/UserFavProperties">
                  <i className="fa fa-heart" aria-hidden="true" />
                  Favorited Properties
                </Link>
              </li>
              <li>
                <Link to="/UserAddProperties">
                  <i className="fa fa-list" aria-hidden="true" />
                  Add Property
                </Link>
              </li>
              <li>
                <Link to="/UserPaymentMethod">
                  <i className="fas fa-credit-card" />
                  Payments
                </Link>
              </li>
              <li>
                <Link to="/UserInvoice">
                  <i className="fas fa-paste" />
                  Invoices
                </Link>
              </li>
              <li>
                <Link to="/UserChangePassword">
                  <i className="fa fa-lock" />
                  Change Password
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fas fa-sign-out-alt" />
                  Log Out
                </Link>
              </li>
            </ul>
          </div>
        </div>
    </>
  );
}
