import React, { useState } from 'react';
import PropertiesGridView from '../components/AllProperties/PropertiesGridView';
import SearchForm from '../components/Home/SearchForm';
import PropertiesListview from '../components/AllProperties/PropertiesListView';

export default function PropertiesGrid() {
  const [Gridview, setGridView] = useState(true);
  const ToggleView = (view) => {
    if (view === 'Grid') {
      setGridView(true);
    } else {
      setGridView(false);
    }
  };
  return (
    <>
      <div className="inner-pages homepage-4 agents list hp-6  p-5 full hd-white">
        <section className="properties-list full featured portfolio blog  p-5">
          <div className="container-fluid mt-5">
            <SearchForm />
            <section className="headings-2 pt-0">
              <div className="pro-wrapper">
                <div className="detail-wrapper-body">
                  <div className="listing-title-bar">
                    <div className="text-heading text-left">
                      <p className="font-weight-bold mb-0 mt-3">8 Search results</p>
                    </div>
                  </div>
                </div>
                <div className="cod-pad single detail-wrapper mr-2 mt-0 d-flex justify-content-md-end align-items-center grid">
                  <div className="input-group border rounded input-group-lg w-auto mr-4">
                    <label
                      className="input-group-text bg-transparent border-0 text-uppercase letter-spacing-093 pr-1 pl-3"
                      htmlFor="inputGroupSelect01"
                    >
                      <i className="fas fa-align-left fs-16 pr-2" />
                      Sortby:
                    </label>
                    <select
                      className="form-control border-0 bg-transparent shadow-none p-0 selectpicker sortby"
                      data-style="bg-transparent border-0 font-weight-600 btn-lg pl-0 pr-3"
                      id="inputGroupSelect01"
                      name="sortby"
                    >
                      <option selected="">Top Selling</option>
                      <option value={1}>Most Viewed</option>
                      <option value={2}>Price(low to high)</option>
                      <option value={3}>Price(high to low)</option>
                    </select>
                  </div>
                  <div className="sorting-options">
                    <a
                      onClick={() => ToggleView('List')}
                      className={
                        Gridview === true
                          ? 'cursor-pointer change-view-btn lde'
                          : 'cursor-pointer change-view-btn active-view-btn'
                      }
                    >
                      <i className="fa fa-th-list" />
                    </a>
                    <a
                      onClick={() => ToggleView('Grid')}
                      className={
                        Gridview === false
                          ? 'cursor-pointer change-view-btn lde'
                          : 'cursor-pointer change-view-btn active-view-btn'
                      }
                    >
                      <i className="fa fa-th-large" />
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <div className="row">{Gridview ? <PropertiesGridView /> : <PropertiesListview />}</div>
          </div>
        </section>
      </div>
    </>
  );
}
