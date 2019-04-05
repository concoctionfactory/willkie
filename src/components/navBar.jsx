import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark main-color-dark ">
        <Link className=" navbar-brand" to="/">
          <img
            src="/images/Willkie_logo_white.png"
            width="auto"
            height="30"
            alt=""
          />
        </Link>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="navbar-collapse collapse" id="navbar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
              <Link className="nav-link text-center" to="/">
                Clients <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-center" to="/matters">
                Matters
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
