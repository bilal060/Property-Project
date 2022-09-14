import React from 'react';

export default function PopularPlaces() {
  return (
    <>
      <section className="feature-categories bg-white rec-pro">
        <div className="container-fluid">
          <div className="sec-title">
            <h2>
              <span>Popular </span>Places
            </h2>
            <p>Properties In Most Popular Places.</p>
          </div>
          <div className="row">
            {/* Single category */}
            <div className="col-xl-3 col-lg-6 col-sm-6" data-aos="fade-up" data-aos-delay={150}>
              <div className="small-category-2">
                <div className="small-category-2-thumb img-1">
                  <a href="properties-full-grid-1.html">
                    <img src="images/popular-places/12.jpg" alt="" />
                  </a>
                </div>
                <div className="sc-2-detail">
                  <h4 className="sc-jb-title">
                    <a href="properties-full-grid-1.html">New York</a>
                  </h4>
                  <span>203 Properties</span>
                </div>
              </div>
            </div>
            {/* Single category */}
            <div className="col-xl-3 col-lg-6 col-sm-6" data-aos="fade-up" data-aos-delay={250}>
              <div className="small-category-2">
                <div className="small-category-2-thumb img-2">
                  <a href="properties-full-grid-1.html">
                    <img src="images/popular-places/13.jpg" alt="" />
                  </a>
                </div>
                <div className="sc-2-detail">
                  <h4 className="sc-jb-title">
                    <a href="properties-full-grid-1.html">Los Angeles</a>
                  </h4>
                  <span>307 Properties</span>
                </div>
              </div>
            </div>
            {/* Single category */}
            <div className="col-xl-3 col-lg-6 col-sm-6" data-aos="fade-up" data-aos-delay={350}>
              <div className="small-category-2">
                <div className="small-category-2-thumb img-3">
                  <a href="properties-full-grid-1.html">
                    <img src="images/popular-places/14.jpg" alt="" />
                  </a>
                </div>
                <div className="sc-2-detail">
                  <h4 className="sc-jb-title">
                    <a href="properties-full-grid-1.html">San Francisco</a>
                  </h4>
                  <span>409 Properties</span>
                </div>
              </div>
            </div>
            {/* Single category */}
            <div className="col-xl-3 col-lg-6 col-sm-6" data-aos="fade-up" data-aos-delay={450}>
              <div className="small-category-2">
                <div className="small-category-2-thumb img-3">
                  <a href="properties-full-grid-1.html">
                    <img src="images/popular-places/9.jpg" alt="" />
                  </a>
                </div>
                <div className="sc-2-detail">
                  <h4 className="sc-jb-title">
                    <a href="properties-full-grid-1.html">Atlanta</a>
                  </h4>
                  <span>409 Properties</span>
                </div>
              </div>
            </div>
            {/* Single category */}
            <div className="col-xl-3 col-lg-6 col-sm-6" data-aos="fade-up" data-aos-delay={150}>
              <div className="small-category-2 mob-mt">
                <div className="small-category-2-thumb img-8">
                  <a href="properties-full-grid-1.html">
                    <img src="images/popular-places/15.jpg" alt="" />
                  </a>
                </div>
                <div className="sc-2-detail">
                  <h4 className="sc-jb-title">
                    <a href="properties-full-grid-1.html">Miami</a>
                  </h4>
                  <span>145 Properties</span>
                </div>
              </div>
            </div>
            {/* Single category */}
            <div className="col-xl-3 col-lg-6 col-sm-6" data-aos="fade-up" data-aos-delay={250}>
              <div className="small-category-2">
                <div className="small-category-2-thumb img-10">
                  <a href="properties-full-grid-1.html">
                    <img src="images/popular-places/10.jpg" alt="" />
                  </a>
                </div>
                <div className="sc-2-detail">
                  <h4 className="sc-jb-title">
                    <a href="properties-full-grid-1.html">Chicago</a>
                  </h4>
                  <span>112 Properties</span>
                </div>
              </div>
            </div>
            {/* Single category */}
            <div className="col-xl-3 col-lg-6 col-sm-6" data-aos="fade-up" data-aos-delay={350}>
              <div className="small-category-2 si-mt">
                <div className="small-category-2-thumb img-11">
                  <a href="properties-full-grid-1.html">
                    <img src="images/popular-places/5.jpg" alt="" />
                  </a>
                </div>
                <div className="sc-2-detail">
                  <h4 className="sc-jb-title">
                    <a href="properties-full-grid-1.html">Houston</a>
                  </h4>
                  <span>254 Properties</span>
                </div>
              </div>
            </div>
            {/* Single category */}
            <div className="col-xl-3 col-lg-6 col-sm-6" data-aos="fade-up" data-aos-delay={450}>
              <div className="small-category-2 no-mb si-mt">
                <div className="small-category-2-thumb img-11">
                  <a href="properties-full-grid-1.html">
                    <img src="images/popular-places/6.jpg" alt="" />
                  </a>
                </div>
                <div className="sc-2-detail">
                  <h4 className="sc-jb-title">
                    <a href="properties-full-grid-1.html">Orlando</a>
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
