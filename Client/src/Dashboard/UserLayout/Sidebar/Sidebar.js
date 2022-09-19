import React from 'react';
import { Link } from 'react-router-dom';
import SideBarRoutes from './SideBarRoutes';
import Hooks from '../../../hooks'

export default function Sidebar() {
  const SideBarRoute = SideBarRoutes();
  const { ActivatedRoutes } = Hooks();

  return (
    <>
      <div className="user-profile-box mb-0">
        <div className="sidebar-header">
          <Link to="/">
            <img src={process.env.PUBLIC_URL + "/images/logo-blue.svg"} alt="header-logo2.png" />

          </Link>
        </div>
        <div className="header clearfix">
          <img
            src={process.env.PUBLIC_URL + "/images/testimonials/ts-1.jpg"}
            alt="avatar"
            className="img-fluid profile-img"
          />
        </div>
        <div className="active-user">
          <h2>Mary Smith</h2>
        </div>
        <div className="detail clearfix">
          <ul className="mb-0">

            {SideBarRoute.map((item, index) => {
              if (item.visiblity === true) {
                return <li>
                  <Link className={ActivatedRoutes() === item.link ? "active" : ""} to={item.link}>
                    <i className={item.icon} /> {item.name}
                  </Link>
                </li>
              }
            })}

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
