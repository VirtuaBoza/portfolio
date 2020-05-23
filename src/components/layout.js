/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { css, Global } from "@emotion/core";
import styled from "@emotion/styled";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import "typeface-lora";
import "typeface-poiret-one";
import Header from "./header";
import "./preflight.css";

const IconLink = styled.a`
  font-size: 36px;
  &:not(:first-of-type) {
    margin-left: 2rem;
  }
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Global
        styles={css`
          h2 {
            margin-top: 2rem;
            font-size: 2em;
            font-family: Lora;
            font-style: oblique;
          }
        `}
      />
      <div
        css={css`
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        `}
      >
        <Header siteTitle={data.site.siteMetadata.title} />
        <main
          css={css`
            flex-grow: 1;
            display: flex;
            justify-content: center;
          `}
        >
          <div
            css={css`
              flex-grow: 1;
              max-width: 1000px;
              padding-left: 4rem;
              padding-right: 4rem;
            `}
          >
            {children}
          </div>
        </main>
        <footer
          css={css`
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            margin-bottom: 1rem;
          `}
        >
          <IconLink href="https://github.com/VirtuaBoza">
            <FontAwesomeIcon icon={faGithub} />
          </IconLink>
          <IconLink href="https://www.linkedin.com/in/andrewboza/">
            <FontAwesomeIcon icon={faLinkedin} />
          </IconLink>
          <IconLink href="https://twitter.com/VirtuaBoza">
            <FontAwesomeIcon icon={faTwitter} />
          </IconLink>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
