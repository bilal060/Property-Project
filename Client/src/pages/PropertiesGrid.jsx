import React from 'react';
import GridView from '../components/propertiesGrid/GridView';
import Sorting from '../components/propertiesGrid/Sorting';
import Cards from '../components/propertiesGrid/Cards';

export default function PropertiesGrid() {
  return (
    <>
      <div className="inner-pages homepage-4 agents list hp-6 full hd-white">
        <div id="wrapper">
            <div className="clearfix" />
            <section className="properties-list full featured portfolio blog">
              <div className="container">
                <GridView/>
                  <Sorting/>
                    <div className="row">
                      <Cards/>
                    </div>
              </div>
            </section>
        </div>
      </div>
    </>
  );
}
