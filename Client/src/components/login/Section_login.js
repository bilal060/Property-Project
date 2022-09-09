import React from 'react'

function Section_login() {
  return (
    <div>
      <div id="login">
            <div className="login">
                <form>
                    <div className="access_social">
                        <a href="#0" className="social_bt facebook">Login with Facebook</a>
                        <a href="#0" className="social_bt google">Login with Google</a>
                        <a href="#0" className="social_bt linkedin">Login with Linkedin</a>
                    </div>
                    <div className="divider"><span>Or</span></div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" name="email" id="email"/>
                        <i className="icon_mail_alt"></i>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" name="password" id="password" value=""/>
                        <i className="icon_lock_alt"></i>
                    </div>
                    <div className="fl-wrap filter-tags clearfix add_bottom_30">
                        <div className="checkboxes float-left">
                            <div className="filter-tags-wrap">
                                <input id="check-b" type="checkbox" name="check"/>
                                <label htmlFor="check-b">Remember me</label>
                            </div>
                        </div>
                        <div className="float-right mt-1"><a id="forgot" href="javascript:void(0);">Forgot Password?</a></div>
                    </div>
                    <a href="#0" className="btn_1 rounded full-width">Login to Find Houses</a>
                    <div className="text-center add_top_10">New to Find Houses? <strong><a href="register.html">Sign up!</a></strong></div>
                </form>
            </div>
        </div>
        {/* <!-- END SECTION LOGIN --> */}
    </div>
  )
}

export default Section_login
