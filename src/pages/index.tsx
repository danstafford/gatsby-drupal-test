import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Card from '../templates/Card'

const IndexPage = ({ data }) => {

  return (
    <Layout>
      {
        data.allNodeArticle.nodes.map(( node ) => (
          <Card 
            id={node.drupal_internal__nid} 
            key={node.drupal_internal__nid} 
            title={node.title} 
            body={node.body.summary} 
            image={node.relationships.field_image.localFile}
          />
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  {
    allNodeArticle(sort: {fields: [created], order: DESC}) {
      nodes {
        drupal_internal__nid
        title
        body {
          value
          summary
        }
        relationships {
          field_image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 800
                  height: 300
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
