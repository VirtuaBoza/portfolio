import { css } from "@emotion/core";
import { graphql, useStaticQuery } from "gatsby";
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
        <a
          key={p.medium_id}
          href={`https://medium.com/@VirtuaBoza/${p.slug}-${p.medium_id}`}
          css={css`
            text-decoration: none;
            display: flex;
            flex-direction: row;
            margin-top: 2rem;
          `}
        >
          <div
            css={css`
              margin-right: 2rem;
            `}
          >
            <h2
              css={css`
                margin-top: 0px;
              `}
            >
              {p.title}
            </h2>
            <p>{p.firstPublishedAt}</p>
            <p>{p.previewContent.subtitle}</p>
          </div>
          <img
            width="700"
            height="210"
            sizes="700px"
            src={`https://miro.medium.com/fit/c/276/210/${p.virtuals.previewImage.imageId}`}
          />
        </a>
      ))}
    </Layout>
  );
};

export default WritingsPage;
