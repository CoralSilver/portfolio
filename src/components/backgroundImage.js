import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
 
import BackgroundImage from 'gatsby-background-image-es5';
 
const BackgroundSection = ({ children, className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "clouds.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          {children}
        </BackgroundImage>
      )
    }}
  />
)
 
const StyledBackgroundSection = styled(BackgroundSection)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`
 
export default StyledBackgroundSection;