import React from 'react';

export default function PropertyDetails() {
  return (
    <>
      <div className="single homes-content details mb-30">
        {/* title */}
        <h5 className="mb-4">Property Details</h5>
        <ul className="homes-list clearfix">
          <li>
            <span className="font-weight-bold mr-1">Property ID:</span>
            <span className="det">V254680</span>
          </li>
          <li>
            <span className="font-weight-bold mr-1">Property Type:</span>
            <span className="det">House</span>
          </li>
          <li>
            <span className="font-weight-bold mr-1">Property status:</span>
            <span className="det">For Sale</span>
          </li>
          <li>
            <span className="font-weight-bold mr-1">Property Price:</span>
            <span className="det">$230,000</span>
          </li>
          <li>
            <span className="font-weight-bold mr-1">Rooms:</span>
            <span className="det">6</span>
          </li>
          <li>
            <span className="font-weight-bold mr-1">Bedrooms:</span>
            <span className="det">7</span>
          </li>
          <li>
            <span className="font-weight-bold mr-1">Bath:</span>
            <span className="det">4</span>
          </li>
          <li>
            <span className="font-weight-bold mr-1">Garages:</span>
            <span className="det">2</span>
          </li>
          <li>
            <span className="font-weight-bold mr-1">Year Built:</span>
            <span className="det">10/6/2020</span>
          </li>
        </ul>
        {/* title */}
        <h5 className="mt-5">Amenities</h5>
        {/* cars List */}
        <ul className="homes-list clearfix">
          <li>
            <i className="fa fa-check-square" aria-hidden="true" />
            <span>Air Cond</span>
          </li>
          <li>
            <i className="fa fa-check-square" aria-hidden="true" />
            <span>Balcony</span>
          </li>
          <li>
            <i className="fa fa-check-square" aria-hidden="true" />
            <span>Internet</span>
          </li>
          <li>
            <i className="fa fa-check-square" aria-hidden="true" />
            <span>Dishwasher</span>
          </li>
          <li>
            <i className="fa fa-check-square" aria-hidden="true" />
            <span>Bedding</span>
          </li>
          <li>
            <i className="fa fa-check-square" aria-hidden="true" />
            <span>Cable TV</span>
          </li>
          <li>
            <i className="fa fa-check-square" aria-hidden="true" />
            <span>Parking</span>
          </li>
          <li>
            <i className="fa fa-check-square" aria-hidden="true" />
            <span>Pool</span>
          </li>
          <li>
            <i className="fa fa-check-square" aria-hidden="true" />
            <span>Fridge</span>
          </li>
        </ul>
      </div>
    </>
  );
}
