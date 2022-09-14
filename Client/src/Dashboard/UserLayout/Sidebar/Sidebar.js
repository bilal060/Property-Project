import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <>
      <div className="user-profile-box mb-0">
        <div className="sidebar-header">
          <img src={process.env.PUBLIC_URL + "images/logo-blue.svg"} alt="header-logo2.png" />
        </div>
        <div className="header clearfix">
          <img
            src={process.env.PUBLIC_URL + "images/testimonials/ts-1.jpg"}
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
              <Link to="/dashboard/Profile">
                <i className="fa fa-user" />
                Profile
              </Link>
            </li>
            <li>
              <Link to="/dashboard/Properties">
                <i className="fa fa-list" aria-hidden="true" />
                My Properties
              </Link>
            </li>
            <li>
              <Link to="/dashboard/FavProperties">
                <i className="fa fa-heart" aria-hidden="true" />
                Favorited Properties
              </Link>
            </li>
            <li>
              <Link to="/dashboard/AddProperty">
                <i className="fa fa-list" aria-hidden="true" />
                Add Property
              </Link>
            </li>
            <li>
              <Link to="/dashboard/PaymentMethod">
                <i className="fas fa-credit-card" />
                Payments
              </Link>
            </li>
            <li>
              <Link to="/dashboard/Invoice">
                <i className="fas fa-paste" />
                Invoices
              </Link>
            </li>
            <li>
              <Link to="/dashboard/ChangePassword">
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
