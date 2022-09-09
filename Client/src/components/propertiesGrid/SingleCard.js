import React from 'react'

export default function SingleCard(props) {
  return (
    <>
        <div className="item col-lg-4 col-md-6 col-xs-12 landscapes sale">
            <div className="project-single" data-aos="fade-up">
                <div className="project-inner project-head">
                    <div className="homes">
                        {/* <!-- homes img --> */}
                        <a href="single-property-1.html" className="homes-img">
                            <div className="homes-tag button alt featured">Featured</div>
                            <div className="homes-tag button alt sale">For Sale</div>
                            <div className="homes-price">{props.price}</div>
                            <img src={props.propertiesGridImgSrc} alt="home-1" className="img-responsive"/>
                        </a>
                    </div>
                    <div className="button-effect">
                        <a href="single-property-1.html" className="btn"><i className="fa fa-link"></i></a>
                        <a href="https://www.youtube.com/watch?v=14semTlwyUY" className="btn popup-video popup-youtube"><i className="fas fa-video"></i></a>
                        <a href="single-property-2.html" className="img-poppu btn"><i className="fa fa-photo"></i></a>
                    </div>
                </div>
                {/* <!-- homes content --> */}
                <div className="homes-content">
                    {/* <!-- homes address --> */}
                    <h3><a href="single-property-1.html">Real House Luxury Villa</a></h3>
                    <p className="homes-address mb-3">
                        <a href="single-property-1.html">
                            <i className="fa fa-map-marker"></i><span>Est St, 77 - Central Park South, NYC</span>
                        </a>
                    </p>
                    {/* <!-- homes List --> */}
                    <ul className="homes-list clearfix pb-3">
                        <li className="the-icons">
                            <i className="flaticon-bed mr-2" aria-hidden="true"></i>
                            <span>6 Bedrooms</span>
                        </li>
                        <li className="the-icons">
                            <i className="flaticon-bathtub mr-2" aria-hidden="true"></i>
                            <span>3 Bathrooms</span>
                        </li>
                        <li className="the-icons">
                            <i className="flaticon-square mr-2" aria-hidden="true"></i>
                            <span>720 sq ft</span>
                        </li>
                        <li className="the-icons">
                            <i className="flaticon-car mr-2" aria-hidden="true"></i>
                            <span>2 Garages</span>
                        </li>
                    </ul>
                    <div className="footer">
                        <a href="agent-details.html">
                            <img src={props.PropertiesGridAgentImg} alt="" className="mr-2"/> Lisa Jhonson
                        </a>
                        <span>2 months ago</span>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
