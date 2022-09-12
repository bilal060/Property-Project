import React from 'react';

export default function Index() {
  return (
    <>
      <div className="col-md-12 col-xs-12">
        <div className="news-item news-item-sm">
          <a href="agent-details.html" className="news-img-link">
            <div className="news-item-img homes">
              <div className="homes-tag button alt featured">3 Listings</div>
              <img className="resp-img" src="images/team/a-1.png" alt="blog image" />
            </div>
          </a>
          <div className="news-item-text">
            <a href="agent-details.html">
              <h3>Carls Jhons</h3>
            </a>
            <div className="the-agents">
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
            <div className="news-item-bottom">
              <a href="properties-full-grid-2.html" className="news-link">
                View My Listings
              </a>
              <div className="admin">
                <p>Company Name</p>
                <img src="images/partners/1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
