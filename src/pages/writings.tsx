import { css } from "@emotion/core";
import { graphql, useStaticQuery } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import * as React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const WritingsPage = () => {
  const data = useStaticQuery(graphql`
    query MediumPostsQuery {
      mediumUser {
        posts {
          previewContent {
            subtitle
          }
          medium_id
          firstPublishedAt(formatString: "MM/d/yyyy")
          title
          slug
          virtuals {
            previewImage {
              imageId
            }
          }
        }
      }
    }
  `);

  const { posts } = data.mediumUser;

  return (
    <Layout>
      <SEO title="Writings" />
      {posts.map((p) => (
        <OutboundLink
          key={p.medium_id}
          href={`https://medium.com/@VirtuaBoza/${p.slug}-${p.medium_id}`}
          css={css`
            text-decoration: none;
            display: flex;
            margin-top: 2rem;
            flex-direction: column;
          `}
        >
          <h2
            css={css`
              margin-top: 0px;
            `}
          >
            {p.title}
          </h2>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              @media (min-width: 768px) {
                flex-direction: row;
              }
            `}
          >
            <div
              css={css`
                margin-right: 2rem;
                flex: 1;
              `}
            >
              <p>{p.firstPublishedAt}</p>
              <p>{p.previewContent.subtitle}</p>
            </div>
            <div
              css={css`
                flex: 1;
              `}
            >
              <img
                width="700"
                height="210"
                srcSet={[276, 552, 640, 700].reduce(
                  (acc, cur) =>
                    `${acc} https://miro.medium.com/fit/c/${cur}/210/${p.virtuals.previewImage.imageId} ${cur}w,`,
                  ""
                )}
                sizes="700px"
                src={`https://miro.medium.com/fit/c/700/210/${p.virtuals.previewImage.imageId}`}
              />
            </div>
          </div>
        </OutboundLink>
      ))}
    </Layout>
  );
};

export default WritingsPage;
