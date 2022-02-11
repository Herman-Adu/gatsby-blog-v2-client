import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import ArticlesComponent from "../components/articles"
import "../assets/css/main.css"

const IndexPage = () => {
  const data = useStaticQuery(query)

  return (
    <Layout seo={data.strapiHomepage.seo}>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{data.strapiHomepage.hero.title}</h1>
          <ArticlesComponent articles={data.allStrapiArticle.edges} />
        </div>
      </div>
    </Layout>
  )
}

const query = graphql`
  query {
    strapiHomepage {
      hero {
        title
      }
      seo {
        metaTitle
        metaDescription
        shareImage {
          publicURL
        }
      }
    }
    allStrapiArticle(filter: { status: { eq: "published" } }) {
      edges {
        node {
          strapiId
          slug
          title
          category {
            name
          }
          image {
            childImageSharp {
              gatsbyImageData(
                width: 700
                height: 450
                layout: CONSTRAINED
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          author {
            name
            picture {
              childImageSharp {
                id
                gatsbyImageData(
                  width: 100
                  height: 100
                  layout: CONSTRAINED
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
