import Profile from '../components/UserProfile/Profile/Profile'
import Sidebar from '../components/UserProfile/UserLayout/Sidebar/Sidebar'
import React from 'react'
import Header from '../components/UserProfile/UserLayout/Header/Header'

export default function UserProfile() {
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
                <div className="col-lg-6 col-md-6 col-xs-6 widget-boxed mt-33 mt-0 offset-lg-2 offset-md-3">
                    <Profile/>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
