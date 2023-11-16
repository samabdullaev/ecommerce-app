import React from 'react'

const BreadcrumbFilter = () => {
  return (
    <div className="page-header mt-30 mb-50">
    <div className="container">
      <div className="archive-header">
        <div className="row align-items-center">
          <div className="col-xl-3">
            <h1 className="mb-15">Snack</h1>
            <div className="breadcrumb">
              <a href="index.html" rel="nofollow"><i className="fi-rs-home mr-5" />Home</a>
              <span /> Shop <span /> Snack
            </div>
          </div>
          <div className="col-xl-9 text-end d-none d-xl-block">
            <ul className="tags-list">
              <li className="hover-up">
                <a href="blog-category-grid.html"><i className="fi-rs-cross mr-10" />Cabbage</a>
              </li>
              <li className="hover-up active">
                <a href="blog-category-grid.html"><i className="fi-rs-cross mr-10" />Broccoli</a>
              </li>
              <li className="hover-up">
                <a href="blog-category-grid.html"><i className="fi-rs-cross mr-10" />Artichoke</a>
              </li>
              <li className="hover-up">
                <a href="blog-category-grid.html"><i className="fi-rs-cross mr-10" />Celery</a>
              </li>
              <li className="hover-up mr-0">
                <a href="blog-category-grid.html"><i className="fi-rs-cross mr-10" />Spinach</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BreadcrumbFilter