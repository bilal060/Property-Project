import React from 'react';

export default function AgentName({ agent }) {
  return (
    <>
      <section className="headings-2 pt-0 hee">
        <div className="pro-wrapper">
          <div className="detail-wrapper-body">
            <div className="listing-title-bar">
              <div className="text-heading text-left">
                <p>
                  <a href="index.html">Home </a> &nbsp;/&nbsp; <span>Agent Details</span>
                </p>
              </div>
              <h3>{`${agent.firstName} ${agent.lastName}`}</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
