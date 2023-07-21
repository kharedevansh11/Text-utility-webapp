import React from 'react'
import PropTypes from 'prop-types'
import {Link}  from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
              <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <div className="container-fluid">
          <a class="navbar-brand" href="/">
      <img src="https://www.doozytools.com/wp-content/uploads/2022/10/text-tools-768x403.webp" alt="" width="50" height="24" class="d-inline-block align-text-top"/>
      {props.title}
    </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link " aria-current="page" >Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">About</Link>
                </li>
                
              </ul>
                            <div className={`form-check form-switch text-${props.mode==="dark"? "light":"dark"}`}>
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >{`${props.btnText}`}</label>
              </div>
            </div>
          </div>
        </nav>
    </div>
  )

}

Navbar.propTypes ={
    title: PropTypes.string
}

