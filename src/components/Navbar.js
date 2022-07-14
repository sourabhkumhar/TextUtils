import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${props.currMode} navbar-${props.currMode}`}>
        <div className="container-fluid">
          <a className={`navbar-brand text-${props.currTheme}`} href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link className="nav-link active" aria-current="page" to="/">{props.homepage}</Link> */}
                <a className="nav-link active" aria-current="page" href="/">{props.homepage}</a>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/about">About</Link>
                <a className="nav-link" aria-current="page" href="/about">About</a>
              </li> */}

            </ul>

            <form className="d-flex">

              <div className={`form-check form-switch text-${props.currMode === 'light' ? 'dark' : 'light'}`}>
                <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" />
                <label className="form-check-label">{props.currMode === 'light' ? 'Enable' : 'Disable'} DarkMode</label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  homepage: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: 'Set Title Here',
  homepage: 'Set home page here'
}