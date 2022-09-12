import React from 'react';

export default function Propertyname() {
  return (
    <>
      <section className="headings-2 pt-0">
        <div className="pro-wrapper">
          <div className="detail-wrapper-body">
            <div className="listing-title-bar">
              <h3>
                Luxury Villa House <span className="mrg-l-5 category-tag">For Sale</span>
              </h3>
              <div className="mt-0">
                <a href="#listing-location" className="listing-address">
                  <i className="fa fa-map-marker pr-2 ti-location-pin mrg-r-5" />
                  77 - Central Park South, NYC
                </a>
              </div>
            </div>
          </div>
          <div className="single detail-wrapper mr-2">
            <div className="detail-wrapper-body">
              <div className="listing-title-bar">
                <h4>$ 230,000</h4>
                <div className="mt-0">
                  <a href="#listing-location" className="listing-address">
                    <p>$ 1,200 / sq ft</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
