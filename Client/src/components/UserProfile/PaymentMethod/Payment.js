import React from 'react';

export default function PaymentMethod() {
  return (
    <>
      <div className="tr-single-box">
        <div className="tr-single-body">
          <div className="tr-single-header">
            <h4>
              <i className="far fa-credit-card pr-2" />
              Payment Method
            </h4>
          </div>
          {/* Paypal Option */}
          <div className="payment-card">
            <header
              className="payment-card-header cursor-pointer"
              data-toggle="collapse"
              data-target="#paypal"
              aria-expanded="true"
            >
              <div className="payment-card-title flexbox">
                <h4>PayPal</h4>
              </div>
              <div className="pull-right">
                <img src="images/paypal.png" className="img-responsive" alt="" />
              </div>
            </header>
            <div className="collapse" id="paypal" role="tablist" aria-expanded="false">
              <div className="payment-card-body">
                <div className="row mrg-bot-20">
                  <div className="col-sm-6">
                    <span className="custom-checkbox d-block font-12 mb-2">
                      <input type="checkbox" id="promo1" />
                      <label htmlFor="promo1" />
                      Have a promo code?
                    </span>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-sm-6 padd-top-10 text-right">
                    <label>Total Order</label>
                    <h2 className="mrg-0">
                      <span className="theme-cl">$</span>950
                    </h2>
                  </div>
                  <div className="col-sm-12 bt-1 padd-top-15 pt-3">
                    <span className="custom-checkbox d-block font-12 mb-3">
                      <input type="checkbox" id="privacy" />
                      <label htmlFor="privacy" />
                      By ordering you are agreeing to our{' '}
                      <a href="#" className="theme-cl">
                        Privacy policy
                      </a>
                      .
                    </span>
                    <button type="submit" className="btn btn-m btn-success">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Debit card option */}
          <div className="payment-card mb-0">
            <header
              className="payment-card-header cursor-pointer"
              data-toggle="collapse"
              data-target="#debit-credit"
              aria-expanded="true"
            >
              <div className="payment-card-title flexbox">
                <h4>Credit / Debit Card</h4>
              </div>
              <div className="pull-right">
                <img src="images/credit.png" className="img-responsive" alt="" />
              </div>
            </header>
            <div className="collapse" id="debit-credit" role="tablist" aria-expanded="false">
              <div className="payment-card-body">
                <div className="row mrg-bot-20">
                  <div className="col-sm-6">
                    <label>Card Holder Name</label>
                    <input type="text" className="form-control" placeholder="Chris Seail" />
                  </div>
                  <div className="col-sm-6">
                    <label>Card No.</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="1800 5785 6758 2458"
                    />
                  </div>
                </div>
                <div className="row mrg-bot-20">
                  <div className="col-sm-4 col-md-4">
                    <label>Expire Month</label>
                    <input type="text" className="form-control" placeholder="09" />
                  </div>
                  <div className="col-sm-4 col-md-4">
                    <label>Expire Year</label>
                    <input type="email" className="form-control" placeholder="2022" />
                  </div>
                  <div className="col-sm-4 col-md-4">
                    <label>CCV Code</label>
                    <input type="email" className="form-control" placeholder="258" />
                  </div>
                </div>
                <div className="row mrg-bot-20">
                  <div className="col-sm-7">
                    <span className="custom-checkbox d-block font-12 mb-2">
                      <input type="checkbox" id="promo" />
                      <label htmlFor="promo" />
                      Have a promo code?
                    </span>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-sm-5 padd-top-10 text-right">
                    <label>Total Order</label>
                    <h2 className="mrg-0">
                      <span className="theme-cl">$</span>987
                    </h2>
                  </div>
                  <div className="col-sm-12 bt-1 padd-top-15 pt-3">
                    <span className="custom-checkbox d-block font-12 mb-3">
                      <input type="checkbox" id="privacy1" />
                      <label htmlFor="privacy1" />
                      By ordering you are agreeing to our{' '}
                      <a href="#" className="theme-cl">
                        Privacy policy
                      </a>
                      .
                    </span>
                    <button type="submit" className="btn btn-m btn-success">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
