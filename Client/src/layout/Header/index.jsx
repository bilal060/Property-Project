import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header id="header-container">
      {/* Header */}
      <div id="header">
        <div className="container-fluid">
          {/* Left Side Content */}
          <div className="left-side">
            {/* Logo */}
            <div id="logo">
              <Link to="/">
                <img src="images/logo.svg" alt="" />
              </Link>
            </div>
            {/* Mobile Navigation */}
            <div className="mmenu-trigger">
              <button className="hamburger hamburger--collapse" type="button">
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </button>
            </div>
            {/* Main Navigation */}
            <nav id="navigation" className="style-1">
              <ul id="responsive">
                <li>
                  <Link to="AllSocities">Socities</Link>
                </li>
                <li>
                  <Link to="AllAgents">Agents</Link>
                </li>

                <li>
                  <Link to="AllProperties">Properties</Link>
                </li>
                <li>
                  <a href="contact-us.html">Contact</a>
                </li>
                <li className="d-none d-xl-none d-block d-lg-block">
                  <a href="login.html">Login</a>
                </li>
                <li className="d-none d-xl-none d-block d-lg-block">
                  <a href="register.html">Register</a>
                </li>
                <li className="d-none d-xl-none d-block d-lg-block mt-5 pb-4 ml-5 border-bottom-0">
                  <a
                    href="add-property.html"
                    className="button border btn-lg btn-block text-center"
                  >
                    Add Listing
                    <i className="fas fa-laptop-house ml-2" />
                  </a>
                </li>
              </ul>
            </nav>
            <div className="clearfix" />
            {/* Main Navigation / End */}
          </div>
          {/* Left Side Content / End */}
          {/* Right Side Content / */}
          <div className="header-user-menu user-menu">
            <div className="header-user-name">
              <span>
                <img src="images/testimonials/ts-1.jpg" alt="" />
              </span>
              Hi, Mary!
            </div>
            <ul>
              <li>
                <a href="user-profile.html"> Edit profile</a>
              </li>
              <li>
                <a href="add-property.html"> Add Property</a>
              </li>
              <li>
                <a href="payment-method.html"> Payments</a>
              </li>
              <li>
                <a href="change-password.html"> Change Password</a>
              </li>
              <li>
                <a href="#">Log Out</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Header / End */}
    </header>
  );
}
