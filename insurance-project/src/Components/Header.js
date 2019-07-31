import React from "react";
import logo from "../logo.png";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="nav">
          <li>
            <i className="fas fa-umbrella" />Policies
          </li>
          <li>
            <i className="fas fa-bolt" />Claims
          </li>
          <li>
            <i className="fas fa-user" />Contact
          </li>
          <li>
            <i className="fas fa-chart-bar" />Data
          </li>
          <li className="active">
            <i className="fas fa-book" />Lines
          </li>
          <li>
            <i className="fas fa-th" />All Modules
          </li>
        </ul>
        <p className="page-title">Comercial Property - Add Field</p>
      </header>
    );
  }
}

export default Header;
