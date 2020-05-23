import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const NavLink = styled(Link)`
  text-decoration: none;
  font-family: "Poiret One";
  font-size: 36px;
  &:not(:first-of-type) {
    @media (min-width: 768px) {
      margin-left: 1rem;
    }
  }
`;

const activeNavStyle = { textDecoration: "underline" };

const Header = ({ siteTitle }) => (
  <header
    css={css`
      display: flex;
      justify-content: center;
    `}
  >
    <div
      css={css`
        flex-grow: 1;
        @media (min-width: 768px) {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          max-width: 1100px;
          padding-left: 2rem;
          padding-right: 2rem;
        }
      `}
    >
      <h1
        css={css`
          text-align: center;
        `}
      >
        <Link
          to="/"
          css={css`
            text-decoration: none;
            font-family: "Poiret One";
            font-size: 48px;
          `}
        >
          {siteTitle}
        </Link>
      </h1>
      <nav
        css={css`
          display: flex;
          justify-content: space-around;
        `}
      >
        <NavLink to="/projects" activeStyle={activeNavStyle}>
          Projects
        </NavLink>
        <NavLink to="/talks" activeStyle={activeNavStyle}>
          Talks
        </NavLink>
        <NavLink to="/writings" activeStyle={activeNavStyle}>
          Writings
        </NavLink>
      </nav>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
