import React from "react"
import { graphql, StaticQuery } from "gatsby"
import containerStyles from "../styles/components/fullpage.module.scss"
import BackgroundImage from "gatsby-background-image"

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
        <section className={containerStyles.bg}>
          <div className={containerStyles.video}>
            <iframe
              src="https://www.youtube.com/embed/BpfFSXtkLJs?controls=0&hd=1&showinfo=0&rel=0&autoplay=1&playlist=BpfFSXtkLJs&loop=1&fs=0&mute=1&disablekb=1&modestbranding=0"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              id="ytplayer"
            ></iframe>
          </div>
          <div className={containerStyles.container}>{children}</div>
        </section>
        // <BackgroundImage
        //   Tag="section"
        //   className={containerStyles.bg}
        //   fluid={imageData}
        //   backgroundColor={`#040e18`}
        // >
        //   <div className={containerStyles.video}>
        //     <iframe
        //       src="https://www.youtube.com/embed/HPRA6JkyUZU?controls=0&hd=1&showinfo=0&rel=0&autoplay=1&loop=1&start=38&fs=0&mute=1&disablekb=1&modestbranding=0"
        //       frameBorder="0"
        //       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        //       allowFullScreen
        //       id="ytplayer"
        //     ></iframe>
        //   </div>
        //   <div className={containerStyles.container}>{children}</div>
        // </BackgroundImage>
      )
    }}
  />
)

export default BackgroundSection
