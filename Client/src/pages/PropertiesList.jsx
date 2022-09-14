import React from 'react'
import ListView from '../components/PropertiesList/ListView'
import Sorting from '../components/PropertiesList/Sorting'
import Cards from '../components/PropertiesList/Cards'


export default function PropertiesList() {
  return (
    <>
      <div className="inner-pages homepage-4 agents list hp-6 full hd-white">
        <div id="wrapper">
            <div className="clearfix" />
            <section className="properties-list full featured portfolio blog">
              <div className="container">
                <ListView/>
                  <Sorting/>
                    <div className="row featured portfolio-items">
                      <Cards/>
                    </div>
              </div>
            </section>
        </div>
      </div>
    </>
  )
}
