import React from 'react'
import { useNavigate } from 'react-router-dom';

const ForgotPasswordPage = () => {
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    navigate("/auth/password-reset");
  }

  return (
    <main className="main pages">
  <div className="page-header breadcrumb-wrap">
    <div className="container">
      <div className="breadcrumb">
        <a href="index.html" rel="nofollow"><i className="fi-rs-home mr-5" />Home</a>
        <span /> Pages <span /> My Account
      </div>
    </div>
  </div>
  <div className="page-content pt-150 pb-150">
    <div className="container">
      <div className="row">
        <div className="col-xl-4 col-lg-6 col-md-12 m-auto">
          <div className="login_wrap widget-taber-content background-white">
            <div className="padding_eight_all bg-white">
              <div className="heading_s1">
                <img className="border-radius-15" src="assets/imgs/page/forgot_password.svg" alt="" />
                <h2 className="mb-15 mt-15">Forgot your password?</h2>
                <p className="mb-30">Not to worry, we got you! Let’s get you a new password. Please enter your email address or your Username.</p>
              </div>
              <form onSubmit={submit}>
                <div className="form-group">
                  <input type="text" required name="email" placeholder="Username or Email *" />
                </div>
                <div className="login_footer form-group">
                  <div className="chek-form">
                    <input type="text" required name="email" placeholder="Security code *" />
                  </div>
                  <span className="security-code">
                    <b className="text-new">8</b>
                    <b className="text-hot">6</b>
                    <b className="text-sale">7</b>
                    <b className="text-best">5</b>
                  </span>
                </div>
                <div className="login_footer form-group mb-50">
                  <div className="chek-form">
                    <div className="custome-checkbox">
                      <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox1" defaultValue />
                      <label className="form-check-label" htmlFor="exampleCheckbox1"><span>I agree to terms &amp; Policy.</span></label>
                    </div>
                  </div>
                  <a className="text-muted" href="#">Learn more</a>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-heading btn-block hover-up" name="login">Reset password</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

  )
}

export default ForgotPasswordPage