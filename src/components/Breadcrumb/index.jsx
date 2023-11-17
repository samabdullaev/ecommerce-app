import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = ({title}) => {
  return (
    <div className="page-header breadcrumb-wrap">
    <div className="container">
      <div className="breadcrumb">
        <Link to="/" rel="nofollow"><i className="fi-rs-home mr-5" />Home</Link>
        <span>{title}</span>
      </div>
    </div>
  </div>
  )
}

export default Breadcrumb