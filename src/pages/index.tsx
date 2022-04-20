import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const IndexPage = ({ data } :any) => {

  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Drupal + Gatsby
        <hr></hr>
      </h1>

      {
        data.allNodeArticle.nodes.map(( item:any ) => (
          <div style={card}>
            <GatsbyImage style={imageStyle} image={getImage(item.relationships.field_image.localFile)} />
            <div style={{width: 600}}>
              <h2 style={headingStyles}>{item.title}</h2>
              <div dangerouslySetInnerHTML={{__html: item.body.value}} />
            </div>
          </div>
        ))
      }
    </main>
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

// styles
const pageStyles = {
  color: "#232129",
  paddingTop: 100,
  marginBottom: 100,
  // paddingLeft: 400,
  // paddingRight: 400,
  maxWidth: 800,
  margin: "auto",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const card = {
  display: "flex",
  borderBottom: 2,
  marginBottom: 60,
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 30,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const imageStyle = {
  marginRight: 60,
}
const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}
const docLink = {
  text: "TypeScript Documentation",
  url: "https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/",
  color: "#8954A8",
}

export default IndexPage
