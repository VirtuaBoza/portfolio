import { css } from "@emotion/core";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      gravatar {
        url
      }
    }
  `);

  return (
    <img
      src={data.gravatar.url}
      css={css`
        border-radius: 50%;
        border-style: solid;
        border-color: black;
        border-width: 1px;
        max-width: 250px;
        margin-left: auto;
        margin-right: auto;
      `}
    />
  );
};

export default Image;
