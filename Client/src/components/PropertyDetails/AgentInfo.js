import React from 'react';

export default function AgentInfo() {
  return (
    <>
      <div className="widget-boxed mt-33 mt-5">
        <div className="widget-boxed-header">
          <h4>Agent Information</h4>
        </div>
        <div className="widget-boxed-body">
          <div className="sidebar-widget author-widget2">
            <div className="author-box clearfix">
              <img src={process.env.PUBLIC_URL + "/images/testimonials/ts-1.jpg"} alt="author-image" className="author__img" />
              <h4 className="author__title">Lisa Clark</h4>
              <p className="author__meta">Agent of Property</p>
            </div>
            <ul className="author__contact">
              <li>
                <span className="la la-map-marker">
                  <i className="fa fa-map-marker" />
                </span>
                302 Av Park, New York
              </li>
              <li>
                <span className="la la-phone">
                  <i className="fa fa-phone" aria-hidden="true" />
                </span>
                <a href="#">(234) 0200 17813</a>
              </li>
              <li>
                <span className="la la-envelope-o">
                  <i className="fa fa-envelope" aria-hidden="true" />
                </span>
                <a href="#">lisa@gmail.com</a>
              </li>
            </ul>
            <div className="agent-contact-form-sidebar">
              <h4>Request Inquiry</h4>
              <form
                name="contact_form"
                method="post"
                action="https://code-theme.com/html/findhouses/functions.php"
              >
                <input
                  type="text"
                  id="fname"
                  name="full_name"
                  placeholder="Full Name"
                  required=""
                />
                <input
                  type="number"
                  id="pnumber"
                  name="phone_number"
                  placeholder="Phone Number"
                  required=""
                />
                <input
                  type="email"
                  id="emailid"
                  name="email_address"
                  placeholder="Email Address"
                  required=""
                />
                <textarea placeholder="Message" name="message" required="" defaultValue={''} />
                <input
                  type="submit"
                  name="sendmessage"
                  className="multiple-send-message"
                  defaultValue="Submit Request"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
