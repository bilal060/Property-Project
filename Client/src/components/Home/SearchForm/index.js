import React from 'react'
import Search from '../Search'

const SearchForm = () => {
    return (
        <div className="col-12">
            <div className="banner-search-wrap">
                <ul className="nav nav-tabs rld-banner-tab">
                    <li className="nav-item">
                        <a
                            className="nav-link active"
                            data-toggle="tab"
                            href="#tabs_1"
                        >
                            For Sale
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#tabs_2">
                            For Rent
                        </a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="tabs_1">
                        <Search />
                    </div>
                    <div className="tab-pane fade" id="tabs_2">
                        <Search />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchForm