import React from 'react';
import { Link } from 'react-router-dom';
export default function Block({item}) {
  return (
    <>
      <div className="col-xl-3 col-lg-6 col-sm-6" data-aos="fade-up" data-aos-delay={150}>
        <div className="small-category-2">
          <div className="small-category-2-thumb img-1">
            <Link to="/AllProperties">
              <img src={process.env.REACT_APP_IMAGE_URL + item.photo} alt="" />
            </Link>
          </div>
          <div className="sc-2-detail">
            <h4 className="sc-jb-title">
              <Link to="/AllProperties">{item.name}</Link>
            </h4>
            <span>203 Blocks</span>
          </div>
        </div>
      </div>
    </>
  );
}
