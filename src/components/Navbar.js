import React, { Component } from "react";
import Modal from "./Modal";
import search from "../image/search.png";
class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent  ">
          <div className="container navContainer">
            <a className="navbar-brand" href="#">
              <img src={search} height="50px" width="50px" alt="logoImage" />
              <span className="appName"> SnapShot</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link aboutLink"
                    href="#"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div
          className="modal fade"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <Modal />
        </div>
      </div>
    );
  }
}
export default Navbar;
