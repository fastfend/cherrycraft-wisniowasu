import React from "react"
import { graphql, StaticQuery } from 'gatsby'
import containerStyles from "../styles/components/fullpage.module.scss"
import BackgroundImage from 'gatsby-background-image'

// export default ({ children }) => (
//   <div className={containerStyles.container}>{children}</div>
// )

const BackgroundSection = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "background.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 3840) {
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
          className={containerStyles.bg}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
            <div className={containerStyles.container}>{children}</div>
        </BackgroundImage>
        
      )
    }}
  />
)

export default BackgroundSection