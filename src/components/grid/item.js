import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Title, Copy, Card } from "./item.css"

const Item = ({ title, copy, image, linkTo }) => (
  <Card>
    <Link to={linkTo}>
      <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
      <figcaption>
        {title && <Title>{title}</Title>}
        {copy && <Copy>{copy}</Copy>}
      </figcaption>
    </Link>
  </Card>
)

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
}

export default Item
