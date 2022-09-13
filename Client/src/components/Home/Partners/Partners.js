import React from 'react';

export default function Partners() {
  $('.style2').owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    autoWidth: false,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
        0: {
            items: 2,
            margin: 20
        },
        400: {
            items: 2,
            margin: 20
        },
        500: {
            items: 3,
            margin: 20
        },
        768: {
            items: 4,
            margin: 20
        },
        992: {
            items: 5,
            margin: 20
        },
        1000: {
            items: 7,
            margin: 20
        }
    }
  });
  
  
  
  return (
    <>
      <div className="partners bg-white rec-pro">
        <div className="container-fluid">
          <div className="sec-title">
            <h2>
              <span>Our </span>Partners
            </h2>
            <p>The Companies That Represent Us.</p>
          </div>
          <div className="owl-carousel style2">
            <div className="owl-item" >
              <img src="images/partners/11.jpg" alt="" />
            </div>
            <div className="owl-item" >
              <img src="images/partners/12.jpg" alt="" />
            </div>
            <div className="owl-item" >
              <img src="images/partners/13.jpg" alt="" />
            </div>
            <div className="owl-item" >
              <img src="images/partners/14.jpg" alt="" />
            </div>
            <div className="owl-item" >
              <img src="images/partners/15.jpg" alt="" />
            </div>
            <div className="owl-item" >
              <img src="images/partners/16.jpg" alt="" />
            </div>
            <div className="owl-item" >
              <img src="images/partners/17.jpg" alt="" />
            </div>
            <div className="owl-item" >
              <img src="images/partners/11.jpg" alt="" />
            </div>
            <div className="owl-item" >
              <img src="images/partners/12.jpg" alt="" />
            </div>
            <div className="owl-item" >
              <img src="images/partners/13.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
