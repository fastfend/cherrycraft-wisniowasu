import React from "react"
import "../styles/pages/index.scss"
import Container from "../components/container"
import FullPage from "../components/fullpage"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import ClipboardJS from "clipboard";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import DiscordImage from "../images/icons8-discord-50.png";
import HomePageImage from "../images/icons8-home-page-50.png";
import InfoImage from "../images/icons8-info-50.png";
import PoweredImage from "../images/powered_logo.png";
import GitHub from "../images/github-brands.svg";
import packageJson from '../../package.json';

let online_text;
if (typeof window !== `undefined`) {
    var clipboard = new ClipboardJS('#mc_ip');

    clipboard.on('success', function(e) {
        e.clearSelection();
        document.getElementById("tooltiptext").style.opacity = 1;
        setTimeout(()=>{
            document.getElementById("tooltiptext").style.opacity = 0;
        },750);
    
    });

    setTimeout(()=>{
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", "https://api.mcsrvstat.us/2/mc.wisniowasu.pl", false );
        xmlHttp.send( null );
        var response = JSON.parse(xmlHttp.responseText);
        var string = "Graczy online: <b>" + response.players.online + "/" + response.players.max + "</b>";
        document.getElementById("online").innerHTML = string;
    },1000);
}


export default ({ data }) => (
    <FullPage>
        <Container>
            <Tabs forceRenderTabPanel={true}>
                <TabList>
                <Tab><img src={HomePageImage} alt="Strona główna"></img></Tab>
                <div className="divider"></div>
                <Tab><img src={InfoImage} alt="Informacje"></img></Tab>
                <div className="divider"></div>
                <Tab><img src={DiscordImage} alt="Discord"></img></Tab>
                </TabList>
            
                <TabPanel className="react-tabs__tab-panel main">
                <Img fixed={data.file.childImageSharp.fixed} />
                <h2>CherryCraft: Reborn</h2>
                <div id="ip_box">
                    <span className="name">Adres IP:</span>
                    <button id="mc_ip" data-clipboard-text="mc.wisniowasu.pl">
                        <span id="tooltiptext">Skopiowano</span>
                        mc.wisniowasu.pl
                    </button>
                    <span className="version">Wersja MC: <b>1.14.4</b></span>
                    <span id="online">GRACZY ONLINE: <b>ŁADUJĘ</b></span>
                </div>
                </TabPanel>
                <TabPanel>
                <div id="patchnotes">
                <span className="updatename">Trochę o <b>serwerze</b></span>
                
                </div>
                </TabPanel>
                <TabPanel>
                <iframe title="Discord" src="https://discordapp.com/widget?id=661204871722041344&theme=dark" width="350" height="500" allowtransparency="true" frameBorder="0"></iframe>
                </TabPanel>
            </Tabs>
        </Container>
        <div className="info">
            <div className="left">
                <span>Made by <a target="_blank" rel="noopener noreferrer" href="https://github.com/fastfend">Piotr Stadnicki</a></span>
                <span>Ikony wykorzystane z <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">Icons8</a></span>
                <span>wersja {packageJson.version} - <a target="_blank" rel="noopener noreferrer" href="https://github.com/fastfend/cherrycraft-wisniowasu">source <img src={GitHub} alt="Source"></img></a></span>    
            </div>
            <div className="right">
                <span>powered by</span>
                <a href="https://wisniowasu.pl" target="_blank" rel="noopener noreferrer"><img src={PoweredImage} alt="WiśniowaSU"></img></a>
            </div>
        </div>
    </FullPage>
)



export const query = graphql`
  query {
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`