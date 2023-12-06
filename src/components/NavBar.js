import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand mb-0" to="/">MonkeyNews</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item " >
                <Link className="nav-link active" aria-pressed="true" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-pressed="true" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-pressed="true"  to="/business">Business</Link></li>
              <li className="nav-item">
                <Link className="nav-link" aria-pressed="true" to="/entertainment">Entertainment</Link></li>
              <li className="nav-item">
                <Link className="nav-link"  aria-pressed="true" to="/general">General</Link></li>
              <li className="nav-item">
                <Link className="nav-link" aria-pressed="true" to="/health">health</Link></li>
              <li className="nav-item">
                <Link className="nav-link" aria-pressed="true" to="/science">Science</Link></li>
              <li className="nav-item">
                <Link className="nav-link" aria-pressed="true" to="/sports">Sports</Link></li>
              <li className="nav-item">
                <Link className="nav-link" aria-pressed="true" to="/technology">Technology</Link></li>
              </ul>
          </div>
        </nav></div>
    )
  }
}
