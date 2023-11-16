import React from 'react'

const Pagination = () => {
  return (
    <div className="pagination-area mt-20 mb-20">
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-start">
        <li className="page-item">
          <a className="page-link" href="#"><i className="fi-rs-arrow-small-left" /></a>
        </li>
        <li className="page-item"><a className="page-link" href="#">1</a></li>
        <li className="page-item active"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item"><a className="page-link dot" href="#">...</a></li>
        <li className="page-item"><a className="page-link" href="#">6</a></li>
        <li className="page-item">
          <a className="page-link" href="#"><i className="fi-rs-arrow-small-right" /></a>
        </li>
      </ul>
    </nav>
  </div>
  )
}

export default Pagination