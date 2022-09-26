import React from 'react';
import { Link } from "react-router-dom"
export default function FeatureProperties() {
  return (
    <>
      {/* START SECTION FEATURED PROPERTIES */}
      <section className="featured portfolio bg-white-2 rec-pro full-l">
        <div className="container-fluid">
          <div className="sec-title">
            <h2>
              <span>Featured </span>Properties
            </h2>
            <p>These are our featured properties</p>
          </div>
          <div className="row portfolio-items">
            <div className="item col-xl-6 col-lg-12 col-md-12 col-xs-12 landscapes sale">
              <div className="project-single" data-aos="fade-right">
                <div className="project-inner project-head">
                  <div className="homes">
                    {/* homes img */}
                    <Link to="/propertydetails" className="homes-img">
                      <div className="homes-tag button alt featured">Featured</div>
                      <div className="homes-tag button alt sale">For Sale</div>
                      <img
                        src={process.env.PUBLIC_URL + "/images/blog/b-11.jpg"}
                        alt="home-1"
                        className="img-responsive"
                      />
                    </Link>
                  </div>
                  <div className="button-effect">
                    <Link to="/propertydetails" className="btn">
                      <i className="fa fa-link" />
                    </Link>
                    <a
                      href="https://www.youtube.com/watch?v=14semTlwyUY"
                      className="btn popup-video popup-youtube"
                    >
                      <i className="fas fa-video" />
                    </a>
                    <a href="single-property-2.html" className="img-poppu btn">
                      <i className="fa fa-photo" />
                    </a>
                  </div>
                </div>
                {/* homes content */}
                <div className="homes-content">
                  {/* homes address */}
                  <h3>
                    <Link to="/propertydetails">
                      Real Luxury Family House Villa
                    </Link>
                  </h3>
                  <p className="homes-address mb-3">
                    <Link to="/propertydetails">
                      <i className="fa fa-map-marker" />
                      <span>Est St, 77 - Central Park South, NYC</span>
                    </Link>
                  </p>
                  {/* homes List */}
                  <ul className="homes-list clearfix pb-3">
                    <li className="the-icons">
                      <i className="flaticon-bed mr-2" aria-hidden="true" />
                      <span>6 Bedrooms</span>
                    </li>
                    <li className="the-icons">
                      <i className="flaticon-bathtub mr-2" aria-hidden="true" />
                      <span>3 Bathrooms</span>
                    </li>
                    <li className="the-icons">
                      <i className="flaticon-square mr-2" aria-hidden="true" />
                      <span>720 sq ft</span>
                    </li>
                    <li className="the-icons">
                      <i className="flaticon-car mr-2" aria-hidden="true" />
                      <span>2 Garages</span>
                    </li>
                  </ul>
                  <div className="price-properties footer pt-3 pb-0">
                    <h3 className="title mt-3">
                      <Link to="/propertydetails">$ 150,000</Link>
                    </h3>
                    <div className="compare">
                      <a href="#" title="Compare">
                        <i className="flaticon-compare" />
                      </a>
                      <a href="#" title="Share">
                        <i className="flaticon-share" />
                      </a>
                      <a href="#" title="Favorites">
                        <i className="flaticon-heart" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item col-xl-6 col-lg-12 col-md-12 col-xs-12 people rent">
              <div className="project-single" data-aos="fade-left">
                <div className="project-inner project-head">
                  <div className="homes">
                    {/* homes img */}
                    <Link to="/propertydetails" className="homes-img">
                      <div className="homes-tag button sale rent">For Rent</div>
                      <img
                        src={process.env.PUBLIC_URL + "/images/blog/b-12.jpg"}
                        alt="home-1"
                        className="img-responsive"
                      />
                    </Link>
                  </div>
                  <div className="button-effect">
                    <Link to="/propertydetails" className="btn">
                      <i className="fa fa-link" />
                    </Link>
                    <a
                      href="https://www.youtube.com/watch?v=14semTlwyUY"
                      className="btn popup-video popup-youtube"
                    >
                      <i className="fas fa-video" />
                    </a>
                    <a href="single-property-2.html" className="img-poppu btn">
                      <i className="fa fa-photo" />
                    </a>
                  </div>
                </div>
                {/* homes content */}
                <div className="homes-content">
                  {/* homes address */}
                  <h3>
                    <Link to="/propertydetails">
                      Real Luxury Family House Villa
                    </Link>
                  </h3>
                  <p className="homes-address mb-3">
                    <Link to="/propertydetails">
                      <i className="fa fa-map-marker" />
                      <span>Est St, 77 - Central Park South, NYC</span>
                    </Link>
                  </p>
                  {/* homes List */}
                  <ul className="homes-list clearfix pb-3">
                    <li className="the-icons">
                      <i className="flaticon-bed mr-2" aria-hidden="true" />
                      <span>6 Bedrooms</span>
                    </li>
                    <li className="the-icons">
                      <i className="flaticon-bathtub mr-2" aria-hidden="true" />
                      <span>3 Bathrooms</span>
                    </li>
                    <li className="the-icons">
                      <i className="flaticon-square mr-2" aria-hidden="true" />
                      <span>720 sq ft</span>
                    </li>
                    <li className="the-icons">
                      <i className="flaticon-car mr-2" aria-hidden="true" />
                      <span>2 Garages</span>
                    </li>
                  </ul>
                  <div className="price-properties footer pt-3 pb-0">
                    <h3 className="title mt-3">
                      <Link to="/propertydetails">$ 150,000</Link>
                    </h3>
                    <div className="compare">
                      <a href="#" title="Compare">
                        <i className="flaticon-compare" />
                      </a>
                      <a href="#" title="Share">
                        <i className="flaticon-share" />
                      </a>
                      <a href="#" title="Favorites">
                        <i className="flaticon-heart" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item col-xl-6 col-lg-12 col-md-12 col-xs-12 people landscapes sale">
              <div className="project-single" data-aos="fade-right">
                <div className="project-inner project-head">
                  <div className="homes">
                    {/* homes img */}
                    <Link to="/propertydetails" className="homes-img">
                      <div className="homes-tag button alt sale">For Sale</div>
                      <img
                        src={process.env.PUBLIC_URL + "/images/blog/b-1.jpg"}
                        alt="home-1"
                        className="img-responsive"
                      />
                    </Link>
                  </div>
                  <div className="button-effect">
                    <Link to="/propertydetails" className="btn">
                      <i className="fa fa-link" />
                    </Link>
                    <a
                      href="https://www.youtube.com/watch?v=14semTlwyUY"
                      className="btn popup-video popup-youtube"
                    >
                      <i className="fas fa-video" />
                    </a>
                    <a href="single-property-2.html" className="img-poppu btn">
                      <i className="fa fa-photo" />
                    </a>
                  </div>
                </div>
                {/* homes content */}
                <div className="homes-content">
                  {/* homes address */}
                  <h3>
                    <Link to="/propertydetails">
                      Real Luxury Family House Villa
                    </Link>
                  </h3>
                  <p className="homes-address mb-3">
                    <Link to="/propertydetails">
                      <i className="fa fa-map-marker" />
                      <span>Est St, 77 - Central Park South, NYC</span>
                    </Link>
                  </p>
                  {/* homes List */}
                  <ul className="homes-list clearfix pb-3">
                    <li className="the-icons">
                      <i className="flaticon-bed mr-2" aria-hidden="true" />
                      <span>6 Bedrooms</span>
                    </li>
                    <li className="the-icons">
                      <i className="flaticon-bathtub mr-2" aria-hidden="true" />
                      <span>3 Bathrooms</span>
                    </li>
                    <li className="the-icons">
                      <i className="flaticon-square mr-2" aria-hidden="true" />
                      <span>720 sq ft</span>
                    </li>
                    <li className="the-icons">
                      <i className="flaticon-car mr-2" aria-hidden="true" />
                      <span>2 Garages</span>
                    </li>
                  </ul>
                  <div className="price-properties footer pt-3 pb-0">
                    <h3 className="title mt-3">
                      <Link to="/propertydetails">$ 150,000</Link>
                    </h3>
                    <div className="compare">
                      <a href="#" title="Compare">
                        <i className="flaticon-compare" />
                      </a>
                      <a href="#" title="Share">
                        <i className="flaticon-share" />
                      </a>
                      <a href="#" title="Favorites">
                        <i className="flaticon-heart" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item col-xl-6 col-lg-12 col-md-12 col-xs-12 people landscapes rent no-pb">
              <div className="project-single no-mb" data-aos="fade-left">
                <div className="project-inner project-head">
                  <div className="homes">
                    {/* homes img */}
                    <Link to="/propertydetails" className="homes-img">
                      <div className="homes-tag button alt featured">Featured</div>
                      <div className="homes-tag button sale rent">For Rent</div>
                      <img
                        src={process.env.PUBLIC_URL + "/images/feature-properties/fp-10.jpg"}
                        alt="home-1"
                        className="img-responsive"
                      />
                    </Link>
                  </div>
                  <div className="button-effect">
                    <Link to="/propertydetails" className="btn">
                      <i className="fa fa-link" />
                    </Link>
                    <a
                      href="https://www.youtube.com/watch?v=14semTlwyUY"
                      className="btn popup-video popup-youtube"
                    >
                      <i className="fas fa-video" />
                    </a>
                    <a href="single-property-2.html" className="img-poppu btn">
                      <i className="fa fa-photo" />
                    </a>
                  </div>
                </div>
                {/* homes content */}
                <div className="homes-content">
                  {/* homes address */}
                  <h3>
                    <Link to="/propertydetails">
                      Real Luxury Family House Villa
                    </Link>
                  </h3>
                  <p className="homes-address mb-3">
                    <a href="properties-details.html">
                      <i className="fa fa-map-marker" />
                      <span>Est St, 77 - Central Park South, NYC</span>
                    </a>
                  </p>
                  {/* homes List */}
                  <ul className="homes-list clearfix pb-3">
                    <li className="the-icons">
                      <i className="flaticon-bed mr-2" aria-hidden="true" />
                      <span>6 Bedrooms</span>
                    </li>
                    <li className="the-icons">
                      <i className="flaticon-bathtub mr-2" aria-hidden="true" />
                      <span>3 Bathrooms</span>
                    </li>
                    <li className="the-icons">
                      <i className="flaticon-square mr-2" aria-hidden="true" />
                      <span>720 sq ft</span>
                    </li>
                    <li className="the-icons">
                      <i className="flaticon-car mr-2" aria-hidden="true" />
                      <span>2 Garages</span>
                    </li>
                  </ul>
                  <div className="price-properties footer pt-3 pb-0">
                    <h3 className="title mt-3">
                      <Link to="/propertydetails">$ 150,000</Link>
                    </h3>
                    <div className="compare">
                      <a href="#" title="Compare">
                        <i className="flaticon-compare" />
                      </a>
                      <a href="#" title="Share">
                        <i className="flaticon-share" />
                      </a>
                      <a href="#" title="Favorites">
                        <i className="flaticon-heart" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item col-xl-6 col-lg-12 col-md-12 col-xs-12 people sale no-pb">
              <div className="project-single no-mb" data-aos="fade-right">
                <div className="project-inner project-head">
                  <div className="homes">
                    {/* homes img */}
                    <Link to="/propertydetails" className="homes-img">
                      <div className="homes-tag button alt featured">Featured</div>
                      <div className="homes-tag button alt sale">For Sale</div>
                      <img
                        src={process.env.PUBLIC_URL + "/images/feature-properties/fp-11.jpg"}
                        alt="home-1"
                        className="img-responsive"
                      />
                    </Link>
                  </div>
                  <div className="button-effect">
                    <Link to="/propertydetails" className="btn">
                      <i className="fa fa-link" />
                    </Link>
                    <a
                      href="https://www.youtube.com/watch?v=14semTlwyUY"
                      className="btn popup-video popup-youtube"
                    >
                      <i className="fas fa-video" />
                    </a>
                    <a href="single-property-2.html" className="img-poppu btn">
                      <i className="fa fa-photo" />
                    </a>
                  </div>
                </div>
                {/* homes content */}
                <div className="homes-content">
                  {/* homes address */}
                  <h3>
                    <Link to="/propertydetails">
                      Real Luxury Family House Villa
                    </Link>
                  </h3>
                  <p className="homes-address mb-3">
                    <Link to="/propertydetails">
                      <i className="fa fa-map-marker" />
                      <span>Est St, 77 - Central Park South, NYC</span>
                    </Link>
                  </p>
                  {/* homes List */}
                  <ul className="homes-list clearfix pb-3">
                    <li className="the-icons">
                      <i className="flaticon-bed mr-2" aria-hidden="true" />
                      <span>6 Bedrooms</span>
                    </li>
                    <li className="the-icons">
                      <i className="flaticon-bathtub mr-2" aria-hidden="true" />
                      <span>3 Bathrooms</span>
                    </li>
                    <li className="the-icons">
                      <i className="flaticon-square mr-2" aria-hidden="true" />
                      <span>720 sq ft</span>
                    </li>
                    <li className="the-icons">
                      <i className="flaticon-car mr-2" aria-hidden="true" />
                      <span>2 Garages</span>
                    </li>
                  </ul>
                  <div className="price-properties footer pt-3 pb-0">
                    <h3 className="title mt-3">
                      <Link to="/propertydetails">$ 150,000</Link>
                    </h3>
                    <div className="compare">
                      <a href="#" title="Compare">
                        <i className="flaticon-compare" />
                      </a>
                      <a href="#" title="Share">
                        <i className="flaticon-share" />
                      </a>
                      <a href="#" title="Favorites">
                        <i className="flaticon-heart" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item col-xl-6 col-lg-12 col-md-12 col-xs-12 it2 web rent no-pb">
              <div className="project-single no-mb last" data-aos="fade-left">
                <div className="project-inner project-head">
                  <div className="homes">
                    {/* homes img */}
                    <Link to="/propertydetails" className="homes-img">
                      <div className="homes-tag button sale rent">For Rent</div>
                      <img
                        src={process.env.PUBLIC_URL + "/images/feature-properties/fp-12.jpg"}
                        alt="home-1"
                        className="img-responsive"
                      />
                    </Link>
                  </div>
                  <div className="button-effect">
                    <Link to="/propertydetails" className="btn">
                      <i className="fa fa-link" />
                    </Link>
                    <a
                      href="https://www.youtube.com/watch?v=14semTlwyUY"
                      className="btn popup-video popup-youtube"
                    >
                      <i className="fas fa-video" />
                    </a>
                    <a href="single-property-2.html" className="img-poppu btn">
                      <i className="fa fa-photo" />
                    </a>
                  </div>
                </div>
                {/* homes content */}
                <div className="homes-content">
                  {/* homes address */}
                  <h3>
                    <Link to="/propertydetails">
                      Real Luxury Family House Villa
                    </Link>
                  </h3>
                  <p className="homes-address mb-3">
                    <Link to="/propertydetails">
                      <i className="fa fa-map-marker" />
                      <span>Est St, 77 - Central Park South, NYC</span>
                    </Link>
                  </p>
                  {/* homes List */}
                  <ul className="homes-list clearfix pb-3">
                    <li className="the-icons">
                      <i className="flaticon-bed mr-2" aria-hidden="true" />
                      <span>6 Bedrooms</span>
                    </li>
                    <li className="the-icons">
                      <i className="flaticon-bathtub mr-2" aria-hidden="true" />
                      <span>3 Bathrooms</span>
                    </li>
                    <li className="the-icons">
                      <i className="flaticon-square mr-2" aria-hidden="true" />
                      <span>720 sq ft</span>
                    </li>
                    <li className="the-icons">
                      <i className="flaticon-car mr-2" aria-hidden="true" />
                      <span>2 Garages</span>
                    </li>
                  </ul>
                  <div className="price-properties footer pt-3 pb-0">
                    <h3 className="title mt-3">
                      <Link to="/propertydetails">$ 150,000</Link>
                    </h3>
                    <div className="compare">
                      <a href="#" title="Compare">
                        <i className="flaticon-compare" />
                      </a>
                      <a href="#" title="Share">
                        <i className="flaticon-share" />
                      </a>
                      <a href="#" title="Favorites">
                        <i className="flaticon-heart" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-all pt-3">
            <Link to="/allproperties" className="btn btn-outline-light">
              View More
            </Link>
          </div>
        </div>
      </section>
      {/* END SECTION FEATURED PROPERTIES */}
    </>

  );
}
