import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Card from '../templates/card'

const IndexPage = ({ data }) => {

  return (
    <Layout>
      {
        data.allNodeArticle.nodes.map(( node ) => (
          <Card 
            id={node.drupal_internal__nid} 
            key={node.id} 
            title={node.title} 
            body={node.body.value} 
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
        }
        relationships {
          field_image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 800
                  height: 400
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
