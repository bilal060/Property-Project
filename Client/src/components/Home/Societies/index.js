import React from 'react';
import { Link } from "react-router-dom";
export default function PopularPlaces() {
  return (
    <>
      <section className="feature-categories bg-white rec-pro">
        <div className="container-fluid">
          <div className="sec-title">
            <h2>
              <span>All </span>Societies
            </h2>
            <p>Properties In  All Societies.</p>
          </div>
          <div className="row">
            {/* Single category */}
            <div className="col-xl-3 col-lg-6 col-sm-6" data-aos="fade-up" data-aos-delay={150}>
              <div className="small-category-2">
                <div className="small-category-2-thumb img-1">
                  <Link to="/allproperties">
                    <img src={process.env.PUBLIC_URL + "/images/popular-places/12.jpg"} alt="" />
                  </Link>
                </div>
                <div className="sc-2-detail">
                  <h4 className="sc-jb-title">
                    <Link to="/allproperties">New York</Link>
                  </h4>
                  <span>203 Properties</span>
                </div>
              </div>
            </div>
            {/* Single category */}
            <div className="col-xl-3 col-lg-6 col-sm-6" data-aos="fade-up" data-aos-delay={250}>
              <div className="small-category-2">
                <div className="small-category-2-thumb img-2">
                  <Link to="/allproperties">
                    <img src={process.env.PUBLIC_URL + "/images/popular-places/13.jpg"} alt="" />
                  </Link>
                </div>
                <div className="sc-2-detail">
                  <h4 className="sc-jb-title">
                    <Link to="/allproperties">Los Angeles</Link>
                  </h4>
                  <span>307 Properties</span>
                </div>
              </div>
            </div>
            {/* Single category */}
            <div className="col-xl-3 col-lg-6 col-sm-6" data-aos="fade-up" data-aos-delay={350}>
              <div className="small-category-2">
                <div className="small-category-2-thumb img-3">
                  <Link to="/allproperties">
                    <img src={process.env.PUBLIC_URL + "/images/popular-places/14.jpg"} alt="" />
                  </Link>
                </div>
                <div className="sc-2-detail">
                  <h4 className="sc-jb-title">
                    <Link to="/allproperties">San Francisco</Link>
                  </h4>
                  <span>409 Properties</span>
                </div>
              </div>
            </div>
            {/* Single category */}
            <div className="col-xl-3 col-lg-6 col-sm-6" data-aos="fade-up" data-aos-delay={450}>
              <div className="small-category-2">
                <div className="small-category-2-thumb img-3">
                  <Link to="/allproperties">
                    <img src={process.env.PUBLIC_URL + "/images/popular-places/9.jpg"} alt="" />
                  </Link>
                </div>
                <div className="sc-2-detail">
                  <h4 className="sc-jb-title">
                    <Link to="/allproperties">Atlanta</Link>
                  </h4>
                  <span>409 Properties</span>
                </div>
              </div>
            </div>
            {/* Single category */}
            <div className="col-xl-3 col-lg-6 col-sm-6" data-aos="fade-up" data-aos-delay={150}>
              <div className="small-category-2 mob-mt">
                <div className="small-category-2-thumb img-8">
                  <Link to="/allproperties">
                    <img src={process.env.PUBLIC_URL + "/images/popular-places/15.jpg"} alt="" />
                  </Link>
                </div>
                <div className="sc-2-detail">
                  <h4 className="sc-jb-title">
                    <Link to="/allproperties">Miami</Link>
                  </h4>
                  <span>145 Properties</span>
                </div>
              </div>
            </div>
            {/* Single category */}
            <div className="col-xl-3 col-lg-6 col-sm-6" data-aos="fade-up" data-aos-delay={250}>
              <div className="small-category-2">
                <div className="small-category-2-thumb img-10">
                  <Link to="/allproperties">
                    <img src={process.env.PUBLIC_URL + "/images/popular-places/10.jpg"} alt="" />
                  </Link>
                </div>
                <div className="sc-2-detail">
                  <h4 className="sc-jb-title">
                    <Link to="/allproperties">Chicago</Link>
                  </h4>
                  <span>112 Properties</span>
                </div>
              </div>
            </div>
            {/* Single category */}
            <div className="col-xl-3 col-lg-6 col-sm-6" data-aos="fade-up" data-aos-delay={350}>
              <div className="small-category-2 si-mt">
                <div className="small-category-2-thumb img-11">
                  <Link to="/allproperties">
                    <img src={process.env.PUBLIC_URL + "/images/popular-places/5.jpg"} alt="" />
                  </Link>
                </div>
                <div className="sc-2-detail">
                  <h4 className="sc-jb-title">
                    <Link to="/allproperties">Houston</Link>
                  </h4>
                  <span>254 Properties</span>
                </div>
              </div>
            </div>
            {/* Single category */}
            <div className="col-xl-3 col-lg-6 col-sm-6" data-aos="fade-up" data-aos-delay={450}>
              <div className="small-category-2 no-mb si-mt">
                <div className="small-category-2-thumb img-11">
                  <Link to="/allproperties">
                    <img src={process.env.PUBLIC_URL + "/images/popular-places/6.jpg"} alt="" />
                  </Link>
                </div>
                <div className="sc-2-detail">
                  <h4 className="sc-jb-title">
                    <Link to="/allproperties">Orlando</Link>
                  </h4>
                  <span>254 Properties</span>
                </div>
              </div>
            </div>
          </div>
          {/* /row */}
        </div>
      </section>
    </>
  );
}
