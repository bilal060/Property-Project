import ChangePassword from '../components/UserProfile/ChangePassword/ChangePassword';
import Sidebar from '../components/UserProfile/UserLayout/Sidebar/Sidebar';
import React from 'react';

export default function UserChangePassword() {
  return (
    <>
      <div className="inner-pages maxw1600 m0a dashboard-bd">
        <div id="wrapper" className="int_main_wraapper">
          <section className="user-page section-padding pt-55">
            <div className="container-fluid">
              <div className="row">
                <div class="col-lg-3 col-md-12 col-xs-12 pl-0 pr-0 user-dash">
                  <Sidebar />
                </div>
                <div className="col-lg-7 col-md-6 col-xs-6 pl-3 offset-lg-1 offset-md-3">
                  <ChangePassword />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
