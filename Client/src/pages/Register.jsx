import React from 'react';
function Register() {
  return (
    <div className="inner-pages">
      <section class="headings">
        <div class="text-heading text-center">
          <div class="container">
            <h1>Register</h1>
            <h2>
              <a href="index.html">Home </a> &nbsp;/&nbsp; Register
            </h2>
          </div>
        </div>
      </section>
      <div id="login">
        <div className="login">
          <form autoComplete="off">
            <div className="form-group">
              <label> Name</label>
              <input className="form-control" type="text" />
              <i className="ti-user" />
            </div>
            <div className="form-group">
              <label> Last Name</label>
              <input className="form-control" type="text" />
              <i className="ti-user" />
            </div>
            <div className="form-group">
              <label> Email</label>
              <input className="form-control" type="email" />
              <i className="icon_mail_alt" />
            </div>
            <div className="form-group">
              <label> password</label>
              <input className="form-control" type="password" id="password1" />
              <i className="icon_lock_alt" />
            </div>
            <div className="form-group">
              <label>Confirm password</label>
              <input className="form-control" type="password" id="password2" />
              <i className="icon_lock_alt" />
            </div>
            <div id="pass-info" className="clearfix" />
            <a href="#0" className="btn_1 rounded full-width add_top_30">
              Register Now!
            </a>
            <div className="text-center add_top_10">
              Already have an acccount?{' '}
              <strong>
                <a href="login.html">Sign In</a>
              </strong>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
