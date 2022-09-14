import React from 'react';

export default function Card() {
  return (
    <>
        <div className="item col-lg-6 col-md-6 col-xs-12 landscapes sale">
          <div className="project-single">
            <div className="project-inner project-head">
              <div className="homes">
                {/* homes img */}
                <a href="single-property-1.html" className="homes-img">
                  <div className="homes-tag button alt featured">3 Listings</div>
                  <img src="images/team/a-1.png" alt="home-1" className="img-responsive" />
                </a>
              </div>
            </div>
            {/* homes content */}
            <div className="homes-content">
              {/* homes address */}
              <div className="the-agents">
                <h3>
                  <a href="agent-details.html">Carls Jhons</a>
                </h3>
                <ul className="the-agents-details">
                  <li>
                    <a href="#">Office: (234) 0200 17813</a>
                  </li>
                  <li>
                    <a href="#">Mobile: (657) 9854 12095</a>
                  </li>
                  <li>
                    <a href="#">Fax: 809 123 0951</a>
                  </li>
                  <li>
                    <a href="#">Email: info@agent.com</a>
                  </li>
                </ul>
              </div>
              <div className="footer">
                <a href="agent-details.html">
                  <img src="images/partners/1.png" alt="" className="mr-2" /> Company Name
                </a>
                <span className="view-my-listing">
                  <a href="properties-full-grid-2.html">View My Listings</a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="item col-lg-6 col-md-6 col-xs-12 people rent">
          <div className="project-single">
            <div className="project-inner project-head">
              <div className="homes">
                {/* homes img */}
                <a href="single-property-1.html" className="homes-img">
                  <div className="homes-tag button alt featured">3 Listings</div>
                  <img src="images/team/a-2.png" alt="home-1" className="img-responsive" />
                </a>
              </div>
            </div>
            {/* homes content */}
            <div className="homes-content">
              {/* homes address */}
              <div className="the-agents">
                <h3>
                  <a href="agent-details.html">Arling Tracy</a>
                </h3>
                <ul className="the-agents-details">
                  <li>
                    <a href="#">Office: (234) 0200 17813</a>
                  </li>
                  <li>
                    <a href="#">Mobile: (657) 9854 12095</a>
                  </li>
                  <li>
                    <a href="#">Fax: 809 123 0951</a>
                  </li>
                  <li>
                    <a href="#">Email: info@agent.com</a>
                  </li>
                </ul>
              </div>
              <div className="footer">
                <a href="agent-details.html">
                  <img src="images/partners/2.png" alt="" className="mr-2" /> Company Name
                </a>
                <span className="view-my-listing">
                  <a href="properties-full-grid-2.html">View My Listings</a>
                </span>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
