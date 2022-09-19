import React from 'react';

export default function Gallery() {
  return (
    <>
      <div id="listingDetailsSlider" className="carousel listing-details-sliders slide mb-30">
        <h5 className="mb-4">Gallery</h5>
        <div className="carousel-inner">
          <div className="active item carousel-item" data-slide-number={0}>
            <img src={process.env.PUBLIC_URL + "/images/single-property/s-1.jpg"} className="img-fluid" alt="slider-listing" />
          </div>
          <div className="item carousel-item" data-slide-number={1}>
            <img src={process.env.PUBLIC_URL + "/images/single-property/s-2.jpg"} className="img-fluid" alt="slider-listing" />
          </div>
          <div className="item carousel-item" data-slide-number={2}>
            <img src={process.env.PUBLIC_URL + "/images/single-property/s-3.jpg"} className="img-fluid" alt="slider-listing" />
          </div>
          <div className="item carousel-item" data-slide-number={4}>
            <img src={process.env.PUBLIC_URL + "/images/single-property/s-4.jpg"} className="img-fluid" alt="slider-listing" />
          </div>
          <div className="item carousel-item" data-slide-number={5}>
            <img src={process.env.PUBLIC_URL + "/images/single-property/s-5.jpg"} className="img-fluid" alt="slider-listing" />
          </div>
          <a className="carousel-control left" href="#listingDetailsSlider" data-slide="prev">
            <i className="fa fa-angle-left" />
          </a>
          <a className="carousel-control right" href="#listingDetailsSlider" data-slide="next">
            <i className="fa fa-angle-right" />
          </a>
        </div>
        {/* main slider carousel nav controls */}
        <ul className="carousel-indicators smail-listing list-inline">
          <li className="list-inline-item active">
            <a
              id="carousel-selector-0"
              className="selected"
              data-slide-to={0}
              data-target="#listingDetailsSlider"
            >
              <img src={process.env.PUBLIC_URL + "/images/single-property/s-1.jpg"} className="img-fluid" alt="listing-small" />
            </a>
          </li>
          <li className="list-inline-item">
            <a id="carousel-selector-1" data-slide-to={1} data-target="#listingDetailsSlider">
              <img src={process.env.PUBLIC_URL + "/images/single-property/s-2.jpg"} className="img-fluid" alt="listing-small" />
            </a>
          </li>
          <li className="list-inline-item">
            <a id="carousel-selector-2" data-slide-to={2} data-target="#listingDetailsSlider">
              <img src={process.env.PUBLIC_URL + "/images/single-property/s-3.jpg"} className="img-fluid" alt="listing-small" />
            </a>
          </li>
          <li className="list-inline-item">
            <a id="carousel-selector-3" data-slide-to={3} data-target="#listingDetailsSlider">
              <img src={process.env.PUBLIC_URL + "/images/single-property/s-4.jpg"} className="img-fluid" alt="listing-small" />
            </a>
          </li>
          <li className="list-inline-item">
            <a id="carousel-selector-4" data-slide-to={4} data-target="#listingDetailsSlider">
              <img src={process.env.PUBLIC_URL + "/images/single-property/s-5.jpg"} className="img-fluid" alt="listing-small" />
            </a>
          </li>
        </ul>
        {/* main slider carousel items */}
      </div>
    </>
  );
}
