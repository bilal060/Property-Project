import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import { DataEncryption, loginValidationSchema } from '../utils';

function Login() {
  const onSubmit = (values, props) => {
    console.log(values);
    console.log(props);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };

  const initialValues = {
    email: '',
    password: '',
    rememberMe: false,
    userType: 'Customer',
  };
  return (
    <div className="inner-pages">
      <div className="clearfix" />
      {/* Header Container / End */}
      <section className="headings">
        <div className="text-heading text-center">
          <div className="container">
            <h1>Login</h1>
            <h2>
              <Link to="/">Home </Link> &nbsp;/&nbsp; login
            </h2>
          </div>
        </div>
      </section>

      <div id="login">
        <Formik
          initialValues={initialValues}
          validationSchema={loginValidationSchema}
          onSubmit={onSubmit}
        >
          {({ touched, errors, isSubmitting, values }) => (
            <div className="login">
              <Form autoComplete="off">
                {/* <div className="access_social">
              <a href="#0" className="social_bt facebook">
                Login with Facebook
              </a>
              <a href="#0" className="social_bt google">
                Login with Google
              </a>
              <a href="#0" className="social_bt linkedin">
                Login with Linkedin
              </a>
            </div>
            <div className="divider">
              <span>Or</span>
            </div> */}
                <div className="form-group">
                  <label> Email</label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    autoComplete="off"
                    className={`form-control
                    ${touched.email && errors.email ? 'is-invalid' : ''}`}
                  />
                  <i className="icon_mail_alt" />
                  <ErrorMessage component="div" name="email" className="invalid-feedback" />
                </div>
                <div className="form-group">
                  <label> Password</label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    autoComplete="off"
                    className={`form-control
                    ${touched.password && errors.password ? 'is-invalid' : ''}`}
                  />
                  <i className="icon_lock_alt" />
                  <ErrorMessage component="div" name="password" className="invalid-feedback" />
                </div>
                <div className="row mb-2 form-group">
                  <div className="col-12">
                    <div className="custom-control custom-radio custom-control-inline float-left">
                      <Field
                        type="radio"
                        checked
                        id="customRadioInline1"
                        name="userType"
                        value="Customer"
                        className="custom-control-input"
                      />
                      <label className="custom-control-label" htmlFor="customRadioInline1">
                        Customer
                      </label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline float-right">
                      <Field
                        type="radio"
                        id="customRadioInline2"
                        name="userType"
                        value="Agent"
                        className="custom-control-input"
                      />
                      <label className="custom-control-label" htmlFor="customRadioInline2">
                        Agent
                      </label>
                    </div>
                  </div>
                </div>

                <div className="fl-wrap filter-tags clearfix add_bottom_30">
                  <div className="checkboxes float-left">
                    <div className="filter-tags-wrap">
                      <Field id="check-b" type="checkbox" name="rememberMe" />
                      <label htmlFor="check-b">Remember me</label>
                    </div>
                  </div>
                  <div className="float-right mt-1">
                    <a id="forgot" href="/">
                      Forgot Password?
                    </a>
                  </div>
                </div>
                <button type="submit" className="btn_1 rounded full-width">
                  Login to Property
                </button>
                <div className="text-center add_top_10">
                  New to Property ?{' '}
                  <strong>
                    <Link to="/register">Sign up!</Link>
                  </strong>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
