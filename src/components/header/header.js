import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import StyledHeader from "./header.css";

const Header = ({ siteTitle, path }) => (
  <StyledHeader>
    <nav>
      <h1 style={{ margin: 0 }}>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
      <ul>
        <li>
        <Link to="/portfolio">
          Portfolio
        </Link>
        </li>
        <li>
        <Link to="/about">
          About
        </Link>
        </li>
      </ul>
    </nav>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
