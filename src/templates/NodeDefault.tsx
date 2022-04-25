import * as React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const NodeDefault = ({ data }) => {
  const node = data.nodeArticle
  return (
    <Layout>
      <GatsbyImage className='imageStyle' image={getImage(node.relationships.field_image.localFile)} alt={'placeholder'} /> 
      <h2>{node.title}</h2>
      <div dangerouslySetInnerHTML={{__html: node.body.value}} />
    </Layout>
  )
}

export const query = graphql`
  query($nodeId: Int!){
    nodeArticle(drupal_internal__nid: {eq: $nodeId}) {
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
`

export default NodeDefault



