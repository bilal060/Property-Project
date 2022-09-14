import React from 'react';

export default function ClientTestimonials() {
  return (
    <>
      <section className="testimonials bg-white-2 rec-pro">
        <div className="container-fluid">
          <div className="sec-title">
            <h2>
              <span>Clients </span>Testimonials
            </h2>
            <p>We collect reviews from our customers.</p>
          </div>
          <div className="owl-carousel job_clientSlide">
            <div className="singleJobClinet" data-aos="zoom-in" data-aos-delay={150}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore gna a. Ut enim ad minim veniam,
              </p>
              <div className="detailJC">
                <span>
                  <img src="images/testimonials/ts-1.jpg" alt="" />
                </span>
                <h5>Lisa Smith</h5>
                <p>New York</p>
              </div>
            </div>
            <div className="singleJobClinet" data-aos="zoom-in" data-aos-delay={250}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore gna a. Ut enim ad minim veniam,
              </p>
              <div className="detailJC">
                <span>
                  <img src="images/testimonials/ts-2.jpg" alt="" />
                </span>
                <h5>Jhon Morris</h5>
                <p>Los Angeles</p>
              </div>
            </div>
            <div className="singleJobClinet" data-aos="zoom-in"data-aos-delay={350}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore gna a. Ut enim ad minim veniam,
              </p>
              <div className="detailJC">
                <span>
                  <img src="images/testimonials/ts-3.jpg" alt="" />
                </span>
                <h5>Mary Deshaw</h5>
                <p>Chicago</p>
              </div>
            </div>
            <div className="singleJobClinet">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore gna a. Ut enim ad minim veniam,
              </p>
              <div className="detailJC">
                <span>
                  <img src="images/testimonials/ts-4.jpg" alt="" />
                </span>
                <h5>Gary Steven</h5>
                <p>Philadelphia</p>
              </div>
            </div>
            <div className="singleJobClinet">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore gna a. Ut enim ad minim veniam,
              </p>
              <div className="detailJC">
                <span>
                  <img src="images/testimonials/ts-5.jpg" alt="" />
                </span>
                <h5>Cristy Mayer</h5>
                <p>San Francisco</p>
              </div>
            </div>
            <div className="singleJobClinet">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore gna a. Ut enim ad minim veniam,
              </p>
              <div className="detailJC">
                <span>
                  <img src="images/testimonials/ts-6.jpg" alt="" />
                </span>
                <h5>Ichiro Tasaka</h5>
                <p>Houston</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
