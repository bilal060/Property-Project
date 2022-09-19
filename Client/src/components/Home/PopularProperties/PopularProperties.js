import React from 'react';
import Slider from "react-slick";
export default function PopularProperties() {
  const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    adaptiveHeight: true,
    responsive: [{
      breakpoint: 1292,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false
      }
    }, {
      breakpoint: 993,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false
      }
    }, {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }
    }]
  }
  return (
    <>
      <section className="featured portfolio rec-pro disc">
        <div className="container-fluid">
          <div className="sec-title discover">
            <h2>
              <span>Discover </span>Popular Properties
            </h2>
            <p>We provide full service at every step.</p>
          </div>
          <div className="portfolio col-xl-12">

            <Slider {...settings}>
              <div className="agents-grid" data-aos="fade-up" data-aos-delay={150}>
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        {/* homes img */}
                        <a href="single-property-1.html" className="homes-img">
                          <div className="homes-tag button alt featured">Featured</div>
                          <div className="homes-tag button alt sale">For Sale</div>
                          <img src={process.env.PUBLIC_URL + "/images/blog/b-11.jpg"} alt="home-1" className="img-responsive" />
                        </a>
                      </div>
                      <div className="button-effect">
                        <a href="single-property-1.html" className="btn">
                          <i className="fa fa-link" />
                        </a>
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
                        <a href="single-property-1.html">Real House Luxury Villa</a>
                      </h3>
                      <p className="homes-address mb-3">
                        <a href="single-property-1.html">
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
                          <a href="single-property-1.html">$ 350,000</a>
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
              <div className="agents-grid" data-aos="fade-up" data-aos-delay={250}>
                <div className="people">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        {/* homes img */}
                        <a href="single-property-1.html" className="homes-img">
                          <div className="homes-tag button sale rent">For Rent</div>
                          <img src={process.env.PUBLIC_URL + "/images/blog/b-12.jpg"} alt="home-1" className="img-responsive" />
                        </a>
                      </div>
                      <div className="button-effect">
                        <a href="single-property-1.html" className="btn">
                          <i className="fa fa-link" />
                        </a>
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
                        <a href="single-property-1.html">Real House Luxury Villa</a>
                      </h3>
                      <p className="homes-address mb-3">
                        <a href="single-property-1.html">
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
                          <a href="single-property-1.html">$ 150,000</a>
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
              <div className="agents-grid" data-aos="fade-up" data-aos-delay={350}>
                <div className="people landscapes no-pb pbp-3">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        {/* homes img */}
                        <a href="single-property-1.html" className="homes-img">
                          <div className="homes-tag button alt sale">For Sale</div>
                          <img src={process.env.PUBLIC_URL + "/images/blog/b-1.jpg"} alt="home-1" className="img-responsive" />
                        </a>
                      </div>
                      <div className="button-effect">
                        <a href="single-property-1.html" className="btn">
                          <i className="fa fa-link" />
                        </a>
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
                        <a href="single-property-1.html">Real House Luxury Villa</a>
                      </h3>
                      <p className="homes-address mb-3">
                        <a href="single-property-1.html">
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
                          <a href="single-property-1.html">$ 350,000</a>
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
              <div className="agents-grid" data-aos="fade-up" data-aos-delay={450}>
                <div className="landscapes">
                  <div className="project-single no-mb">
                    <div className="project-inner project-head">
                      <div className="homes">
                        {/* homes img */}
                        <a href="single-property-1.html" className="homes-img">
                          <div className="homes-tag button alt featured">Featured</div>
                          <div className="homes-tag button sale rent">For Rent</div>
                          <img
                            src={process.env.PUBLIC_URL + "/images/feature-properties/fp-10.jpg"
                            } alt="home-1"
                            className="img-responsive"
                          />
                        </a>
                      </div>
                      <div className="button-effect">
                        <a href="single-property-1.html" className="btn">
                          <i className="fa fa-link" />
                        </a>
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
                        <a href="single-property-1.html">Real House Luxury Villa</a>
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
                          <a href="single-property-1.html">$ 150,000</a>
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
              <div className="agents-grid" data-aos="fade-up">
                <div className="people">
                  <div className="project-single no-mb">
                    <div className="project-inner project-head">
                      <div className="homes">
                        {/* homes img */}
                        <a href="single-property-1.html" className="homes-img">
                          <div className="homes-tag button alt sale">For Sale</div>
                          <img
                            src={process.env.PUBLIC_URL + "/images/feature-properties/fp-11.jpg"}
                            alt="home-1"
                            className="img-responsive"
                          />
                        </a>
                      </div>
                      <div className="button-effect">
                        <a href="single-property-1.html" className="btn">
                          <i className="fa fa-link" />
                        </a>
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
                        <a href="single-property-1.html">Real House Luxury Villa</a>
                      </h3>
                      <p className="homes-address mb-3">
                        <a href="single-property-1.html">
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
                          <a href="single-property-1.html">$ 350,000</a>
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
              <div className="agents-grid" data-aos="fade-up">
                <div className="people landscapes no-pb pbp-3">
                  <div className="project-single no-mb last">
                    <div className="project-inner project-head">
                      <div className="homes">
                        {/* homes img */}
                        <a href="single-property-1.html" className="homes-img">
                          <div className="homes-tag button sale rent">For Rent</div>
                          <img
                            src={process.env.PUBLIC_URL + "/images/feature-properties/fp-12.jpg"}
                            alt="home-1"
                            className="img-responsive"
                          />
                        </a>
                      </div>
                      <div className="button-effect">
                        <a href="single-property-1.html" className="btn">
                          <i className="fa fa-link" />
                        </a>
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
                        <a href="single-property-1.html">Real House Luxury Villa</a>
                      </h3>
                      <p className="homes-address mb-3">
                        <a href="single-property-1.html">
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
                          <a href="single-property-1.html">$ 150,000</a>
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
              <div className="agents-grid" data-aos="fade-up">
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        {/* homes img */}
                        <a href="single-property-1.html" className="homes-img">
                          <div className="homes-tag button alt featured">Featured</div>
                          <div className="homes-tag button alt sale">For Sale</div>
                          <img src={process.env.PUBLIC_URL + "/images/blog/b-11.jpg"} alt="home-1" className="img-responsive" />
                        </a>
                      </div>
                      <div className="button-effect">
                        <a href="single-property-1.html" className="btn">
                          <i className="fa fa-link" />
                        </a>
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
                        <a href="single-property-1.html">Real House Luxury Villa</a>
                      </h3>
                      <p className="homes-address mb-3">
                        <a href="single-property-1.html">
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
                          <a href="single-property-1.html">$ 350,000</a>
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
              <div className="agents-grid" data-aos="fade-up">
                <div className="people">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        {/* homes img */}
                        <a href="single-property-1.html" className="homes-img">
                          <div className="homes-tag button sale rent">For Rent</div>
                          <img src={process.env.PUBLIC_URL + "/images/blog/b-12.jpg"} alt="home-1" className="img-responsive" />
                        </a>
                      </div>
                      <div className="button-effect">
                        <a href="single-property-1.html" className="btn">
                          <i className="fa fa-link" />
                        </a>
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
                        <a href="single-property-1.html">Real House Luxury Villa</a>
                      </h3>
                      <p className="homes-address mb-3">
                        <a href="single-property-1.html">
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
                          <a href="single-property-1.html">$ 150,000</a>
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
            </Slider>

          </div>
        </div>
      </section>
    </>
  );
}
