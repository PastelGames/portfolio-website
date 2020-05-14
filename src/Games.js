import React from 'react';
import "98.css";
import Window from './components/Window';
import {ProjectWindow} from './components/ProjectWindow';
import ImagePanelSlider from './components/ImagePanelSlider';
import TheHolySwordScreenshot from './images/the holy sword images.png';
import TheHolySwordBanner from './images/holy sword banner.png';
import GHL from './GitHub_Logo.png';

export const Games = () => (
    <div className="container-fluid">
        <div className="row">
            <div className="col">
                <Window title="The Holy Sword"
                content={
                    <div className="m-3" >
                        <div className="row align-items-center d-flex justify-content-center">
                            <div className="col-lg-6">
                                <ImagePanelSlider id="The Holy Sword" images={[TheHolySwordScreenshot, TheHolySwordBanner, GHL]} switchSpeed="5"/>
                            </div>
                            <div className="col-lg-6">
                                <p style={{flex: "1", flexWrap: "wrap", fontSize: "20px"}}>A fighting game in which you don’t actually do damage to the enemy player! Your goal is to stop the other player from destroying your shrine through rituals. When you pray, you completely immobilize yourself and you have to outsmart the enemy in order to get a fighting chance at keeping your shrine alive.</p>
                                <a href="https://github.com/PastelGames/The-Holy-Sword" target="_blank" rel="noopener noreferrer">
                                    <button style={{paddingLeft: "30px", paddingRight: "30px"}}>View Source (Unity 5)</button>
                                </a>
                            </div>
                        </div>
                        <div className="row align-items-center justify-content-center" style={{marginTop: "10px"}}>
                            <iframe src="https://itch.io/embed/617071" height="100%" width="60%" frameBorder="1px" style={{padding: "0px"}}><a href="https://pastelgames.itch.io/the-holy-sword">The Holy Sword by PastelGames</a></iframe>
                        </div>
                    </div>
                }
                />
                <ProjectWindow title="some game title" images={[TheHolySwordScreenshot, TheHolySwordBanner]} imageSwapSpeed="5" description="this is the description of the game" buttons={[{link: "https://google.com", label: "google"}, {link: "https://pornhub.com", label: "pornhub"}]}/>
            </div>
        </div>
    </div> 
) 
