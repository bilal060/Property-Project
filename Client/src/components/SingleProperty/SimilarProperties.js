import React from 'react';
import SingleCard from '../PropertiesGrid/SingleCard';

export default function SimilarProperties() {
  return (
    <>
      <section className="similar-property featured portfolio p-0 bg-white-inner">
        <div className="container">
          <h5>Similar Properties</h5>
          <div className="row portfolio-items">
            <SingleCard/>
            <SingleCard/>
            <SingleCard/>
          </div>
        </div>
      </section>
    </>
  );
}
