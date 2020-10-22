import React from "react"
import "../styles/pages/index.scss"
import Container from "../components/container"
import FullPage from "../components/fullpage"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import ClipboardJS from "clipboard"
import { Helmet } from "react-helmet"

import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import DiscordImage from "../images/icons8-discord-50.png"
import MapImage from "../images/icons8-map-50.png"
import HomePageImage from "../images/icons8-home-page-50.png"
import InfoImage from "../images/icons8-info-50.png"
import GlobeImage from "../images/icons8-location-100.png"
import PoweredImage from "../images/powered_logo.png"
import GitHub from "../images/github-brands.svg"
import packageJson from "../../package.json"

let online_text
if (typeof window !== `undefined`) {
  var clipboard = new ClipboardJS("#mc_ip")

  clipboard.on("success", function(e) {
    e.clearSelection()
    document.getElementById("tooltiptext").style.opacity = 1
    setTimeout(() => {
      document.getElementById("tooltiptext").style.opacity = 0
    }, 750)
  })
  setTimeout(() => {
    var xmlHttp = new XMLHttpRequest()
    xmlHttp.open("GET", "https://api.mcsrvstat.us/2/mc.wisniowasu.pl")
    xmlHttp.send()
    xmlHttp.onreadystatechange = function(e) {
      if (e.target.readyState == 4 && e.target.status == 200) {
        var response = JSON.parse(e.target.responseText)
        if (response.online) {
          var string =
            "Graczy online: <b>" +
            response.players.online +
            "/" +
            response.players.max +
            "</b>"
          document.getElementById("online").innerHTML = string
        } else {
          document.getElementById("online").innerHTML = "<b>SERWER OFFLINE</b>"
        }
      } else {
        document.getElementById("online").innerHTML = "<b>SERWER OFFLINE</b>"
      }
    }
  }, 1000)
}

export default ({ data }) => (
  <FullPage>
    <Container>
      <div id="title">
        <div className="titlelogo">
          <div className="text">
            <h2>CherryCraft</h2>
            <h3>Retold</h3>
          </div>
          <Img className="logo" fluid={data.logo.childImageSharp.fluid} />
        </div>
        <div className="join">
          <div id="ip_box">
            <span className="version">
              Wersja MC: <b>1.15.2</b>
            </span>
            <button id="mc_ip" data-clipboard-text="mc.wisniowasu.pl">
              <span id="tooltiptext">Skopiowano</span>
              mc.wisniowasu.pl
            </button>
            <span id="online">
              GRACZY ONLINE: <b>ŁADUJĘ</b>
            </span>
          </div>
        </div>
      </div>
      <div id="selector">
        <a className="option" href="/wiki">
          <span className="title">WIKI</span>
          <Img
            className="image"
            style={{ position: "absolute" }}
            fluid={data.wiki.childImageSharp.fluid}
          />
        </a>
        <a className="option" href="/rejestracja">
          <span className="title">REJESTRACJA</span>
          <Img
            className="image"
            style={{ position: "absolute" }}
            fluid={data.register.childImageSharp.fluid}
          />
        </a>
        <a className="option" href="/skins">
          <span className="title">SKINY</span>
          <Img
            className="image"
            style={{ position: "absolute" }}
            fluid={data.skins.childImageSharp.fluid}
          />
        </a>
        <a className="option" href="/discord">
          <span className="title">DISCORD</span>
          <Img
            className="image"
            style={{ position: "absolute" }}
            fluid={data.discord.childImageSharp.fluid}
          />
        </a>
        <a className="option" href="/mapa">
          <span className="title">MAPA</span>
          <Img
            className="image"
            style={{ position: "absolute" }}
            fluid={data.map.childImageSharp.fluid}
          />
        </a>
      </div>
      <div id="bottom">
        <div className="left">
          <span>
            Page made by{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/fastfend"
            >
              Piotr Stadnicki
            </a>
          </span>
          <span>
            wersja {packageJson.version} -{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/fastfend/cherrycraft-wisniowasu"
            >
              source <img src={GitHub} alt="Source"></img>
            </a>
          </span>
        </div>
        <div className="right">
          <span>powered by</span>
          <a
            href="https://wisniowasu.pl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={PoweredImage} alt="WiśniowaSU"></img>
          </a>
        </div>
      </div>
      {/* <Tabs forceRenderTabPanel={true}>
        <TabList>
          <Tab>
            <img src={HomePageImage} alt="Strona główna"></img>
          </Tab>
          <div className="divider"></div>
          <Tab>
            <img src={InfoImage} alt="Informacje"></img>
          </Tab>
          <div className="divider"></div>
          <Tab>
            <img src={DiscordImage} alt="Discord"></img>
          </Tab>
          <div className="divider"></div>
          <Tab>
            <img src={MapImage} alt="Mapa"></img>
          </Tab>
        </TabList>

        <TabPanel className="react-tabs__tab-panel main">
          <Img fixed={data.file.childImageSharp.fixed} />
          <h2>CherryCraft: Retold</h2>

        </TabPanel>
        <TabPanel>
          <div id="patchnotes">
            <span className="updatename">
              Trochę o <b>serwerze</b>:
            </span>
            <br></br>
            <span className="text">
              CherryCraft: Reborn to nasz autorski projekt, nad którym siedzimy
              od dłuższego już czasu. Jak na razie prace postępują, a patch za
              patchem pojawiają się na serwerze coraz to nowsze zmiany.
            </span>
            <br></br>
            <span className="updatename">
              <b>Wprowadzenie</b>:
            </span>
            <br></br>
            <span className="text">
              Mamy obecnie rok 1120, jesień złotego okresu rozwoju kraju.
              Stolica, Vale, rozwija się i rozszerza swoje wpływy, budując
              pozamiejskie placówki pokroju Folwarków, i mimo niedawnych
              tajemniczych zdarzeń, oraz burzliwej historii, ma się świetnie.
              Powstają coraz to nowsze miasta i osady na terenie całego państwa,
              a Bariera stworzona nad całym krajem jest silna jak nigdy dotąd,
              chroniąc nas przed zagrożeniami z Zewnątrz. Mieszkańcy wiodą
              spokojne i szczęśliwe życie, a dzielni awanturnicy docierają w
              najdalsze zakątki państwa szukając sławy, bogactw, czy też miejsca
              na osiedlenie się. Sielanka i dobrobyt trwają, ale do czasu...
            </span>
          </div>
        </TabPanel>
        <TabPanel>
          <iframe
            title="Discord"
            src="https://discordapp.com/widget?id=661204871722041344&theme=dark"
            width="350"
            height="500"
            allowtransparency="true"
            frameBorder="0"
          ></iframe>
        </TabPanel>
        <TabPanel className="react-tabs__tab-panel secondary">
          <img src={GlobeImage} alt="Mapa"></img>
          <h2>Mapa świata</h2>
          <a href="/mapa">Otwórz</a>
        </TabPanel>
      </Tabs> */}
    </Container>
    <Helmet>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <meta charSet="utf-8" />
      <title>CherryCraft: Retold</title>
    </Helmet>
  </FullPage>
)

export const query = graphql`
  query {
    logo: file(relativePath: { eq: "logo_retold.png" }) {
      childImageSharp {
        fluid(maxWidth: 250, maxHeight: 250) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    map: file(relativePath: { eq: "map.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    discord: file(relativePath: { eq: "discord.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    skins: file(relativePath: { eq: "skins.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    register: file(relativePath: { eq: "register.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    wiki: file(relativePath: { eq: "wiki.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
