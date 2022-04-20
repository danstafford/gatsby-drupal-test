import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const IndexPage = ({ data } :any) => {

  return (
    <Layout>
      {
        data.allNodeArticle.nodes.map(( item:any ) => (
          <div className="card">
            <GatsbyImage className="imageStyle" image={getImage(item.relationships.field_image.localFile)} />
            <div style={{width: 600}}>
              <h2 className="headingStyles">{item.title}</h2>
              <div dangerouslySetInnerHTML={{__html: item.body.value}} />
            </div>
          </div>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  {
    allNodeArticle(sort: {fields: [created], order: DESC}) {
      nodes {
        title
        body {
          value
          format
          processed
          summary
        }
        relationships {
          field_image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  width: 400
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
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
