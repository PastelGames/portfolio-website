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
                    <ProjectWindow 
                        name="The Holy Sword" 
                        images={[TheHolySwordScreenshot, TheHolySwordBanner]} 
                        switchSpeed="5" 
                        description="A fighting game in which you don’t actually do damage to the enemy player! Your goal is to stop the other player from destroying your shrine through rituals. When you pray, you completely immobilize yourself and you have to outsmart the enemy in order to get a fighting chance at keeping your shrine alive." 
                        buttons={[{link: "https://google.com", label: "Source (Unity Project)"}]}
                        itchEmbed={<iframe src="https://itch.io/embed/617071" height="100%" width="60%" frameBorder="1px" style={{padding: "0px"}}><a href="https://pastelgames.itch.io/the-holy-sword">The Holy Sword by PastelGames</a></iframe>}
                    />
                }
                />
            </div>
        </div>
    </div> 
) 
