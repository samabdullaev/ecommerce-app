import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <main className="main page-404">
  <div className="page-content pt-150 pb-150">
    <div className="container">
      <div className="row">
        <div className="col-xl-8 col-lg-10 col-md-12 m-auto text-center">
          <p className="mb-20"><img src="assets/imgs/page/page-404.png" alt="" className="hover-up" /></p>
          <h1 className="display-2 mb-30">Page Not Found</h1>
          <p className="font-lg text-grey-700 mb-30">
            The link you clicked may be broken or the page may have been removed.<br />
            visit the <Link to="/"> <span> Homepage</span></Link> or <Link to="/contact"><span>Contact us</span></Link> about the problem
          </p>
          <Link 
            className="btn btn-default submit-auto-width font-xs hover-up mt-30" 
            to="/"
          >
            <i className="fi-rs-home mr-5" /> Back To Home Page
          </Link>
        </div>
      </div>
    </div>
  </div>
</main>

  )
}

export default NotFoundPage