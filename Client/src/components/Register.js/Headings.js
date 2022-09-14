import React from 'react'

function Headings() {
  return (
    <div>
        <section class="headings">
            <div class="text-heading text-center">
                <div class="container">
                    <h1>Register</h1>
                    <h2><a href="index.html">Home </a> &nbsp;/&nbsp; Register</h2>
                </div>
            </div>
        </section>
        {/* <!-- END SECTION HEADINGS --> */}

        {/* <!-- START SECTION 404 --> */}
        <div id="login">
            <div class="login">
                <form autocomplete="off">
                    <div class="form-group">
                        <label>Your Name</label>
                        <input class="form-control" type="text"/>
                        <i class="ti-user"></i>
                    </div>
                    <div class="form-group">
                        <label>Your Last Name</label>
                        <input class="form-control" type="text"/>
                        <i class="ti-user"></i>
                    </div>
                    <div class="form-group">
                        <label>Your Email</label>
                        <input class="form-control" type="email"/>
                        <i class="icon_mail_alt"></i>
                    </div>
                    <div class="form-group">
                        <label>Your password</label>
                        <input class="form-control" type="password" id="password1"/>
                        <i class="icon_lock_alt"></i>
                    </div>
                    <div class="form-group">
                        <label>Confirm password</label>
                        <input class="form-control" type="password" id="password2"/>
                        <i class="icon_lock_alt"></i>
                    </div>
                    <div id="pass-info" class="clearfix"></div>
                    <a href="#0" class="btn_1 rounded full-width add_top_30">Register Now!</a>
                    <div class="text-center add_top_10">Already have an acccount? <strong><a href="login.html">Sign In</a></strong></div>
                </form>
            </div>
        </div>
        {/* <!-- END SECTION 404 --> */}
          </div>
  )
}

export default Headings
