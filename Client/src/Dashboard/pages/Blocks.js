import React from 'react'
import Hooks from '../../hooks';

export default function AllBlocks() {

  const { SuperAdmin } = Hooks();
  return (
    <>
      <div className="col-lg-9 col-md-12 py-3 col-xs-12 pl-0 user-dash2">
        {SuperAdmin() &&
          <> <div className="Actions w-100 d-flex justify-content-end mb-2">
            <button className="btn  btn-common" data-toggle="modal" data-target="#exampleModalCenter">
              Add New Society
            </button>
          </div>

            <div
              className="modal fade"
              id="exampleModalCenter"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">
                      Modal title
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body"><form>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                      />
                      <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                      </small>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group form-check">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                      <label className="form-check-label" htmlFor="exampleCheck1">
                        Check me out
                      </label>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </form>
                  </div>
                </div>
              </div>
            </div>

          </>
        }
        <div className="my-properties">
          <table className="table-responsive">
            <thead>
              <tr>
                <th className="pl-2">All</th>
                <th className="p-0" />
                <th>Date Added</th>
                <th>Views</th>
                <th>Views</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="image myelist">
                  <a href="single-property-1.html">
                    <img
                      alt="my-properties-3"
                      src={process.env.PUBLIC_URL + "/images/feature-properties/fp-1.jpg"}
                      className="img-fluid"
                    />
                  </a>
                </td>
                <td>
                  <div className="inner">
                    <a href="single-property-1.html">
                      <h2>Luxury Villa House</h2>
                    </a>
                    <figure>
                      <i className="lni-map-marker" /> Est St, 77 - Central Park South, NYC
                    </figure>
                    <ul className="starts text-left mb-0">
                      <li className="mb-0">
                        <i className="fa fa-star" />
                      </li>
                      <li className="mb-0">
                        <i className="fa fa-star" />
                      </li>
                      <li className="mb-0">
                        <i className="fa fa-star" />
                      </li>
                      <li className="mb-0">
                        <i className="fa fa-star" />
                      </li>
                      <li className="mb-0">
                        <i className="fa fa-star" />
                      </li>
                      <li className="ml-3">(6 Reviews)</li>
                    </ul>
                  </div>
                </td>
                <td>08.14.2020</td>
                <td>163</td>
                <td>163</td>
                <td className="actions">
                  <a href="#" className="edit">
                    <i className="lni-pencil" />
                    Edit
                  </a>
                  <a href="#">
                    <i className="far fa-trash-alt" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="pagination-container">
            <nav>
              <ul className="pagination">
                <li className="page-item">
                  <a className="btn btn-common" href="#">
                    <i className="lni-chevron-left" /> Previous{' '}
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="btn btn-common" href="#">
                    Next <i className="lni-chevron-right" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
