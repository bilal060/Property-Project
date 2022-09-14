import React from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

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

          <OwlCarousel className="owl-theme" loop margin={10} >
            <div className="singleJobClinet" data-aos-delay={150}>
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
            </div> <div className="singleJobClinet" data-aos-delay={150}>
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
            </div> <div className="singleJobClinet" data-aos-delay={150}>
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
            </div> <div className="singleJobClinet" data-aos-delay={150}>
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
            </div> <div className="singleJobClinet" data-aos-delay={150}>
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
          </OwlCarousel>

        </div>
      </section>
    </>
  );
}
