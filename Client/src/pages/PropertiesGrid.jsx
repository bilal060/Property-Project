import React from 'react';
import GridView from '../components/PropertiesGrid/GridView';
import Sorting from '../components/PropertiesGrid/Sorting';
import Cards from '../components/PropertiesGrid/Cards';

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
