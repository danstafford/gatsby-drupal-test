import * as React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const Card = (props) => {
  return (
    <div>
      <GatsbyImage className='imageStyle' image={getImage(props.image)} alt={'placeholder'} /> 
      <div className='card-text'>
        <Link to={'node/' + props.id}>
          <h2>{props.title}</h2>
        </Link>
        <div dangerouslySetInnerHTML={{__html: props.body}} />
      </div>
    </div>
  )
}

export default Card
