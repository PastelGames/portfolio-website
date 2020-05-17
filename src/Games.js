import React from 'react';
import "98.css";
import Window from './components/Window';
import {ProjectWindow} from './components/ProjectWindow';
import THSBanner from './images/THS/holy sword banner.png';

import THSSS1 from './images/THS/thsg3.gif';
import THSSS2 from './images/THS/thsg2.gif';
import THSSS3 from './images/THS/thsss3.png';

const ImageBox = props => (
    <ul className="tree-view"><img src={props.src} alt="THSSS1" style={{width: "100%", height: "100%", padding: "5px"}}/></ul>
)

export const Games = () => (
    <div className="container-fluid">
        <div className="row">
            <div className="col">
                <Window title="The Holy Sword"
                content={
                    <div>
                    <img src={THSBanner} alt="THSSS1" style={{width: "100%", height: "100%", padding: "5px"}}/>
                    <ProjectWindow 
                        name="The Holy Sword" 
                        images={[
                           <ImageBox src={THSSS1} />,
                           <ImageBox src={THSSS2} />,
                           <ImageBox src={THSSS3} />
                        ]} 
                        switchSpeed="5" 
                        description="A fighting game in which you don’t actually do damage to the enemy player! Your goal is to stop the other player from destroying your shrine through rituals. When you pray, you completely immobilize yourself and you have to outsmart the enemy in order to get a fighting chance at keeping your shrine alive." 
                        buttons={[{link: "https://google.com", label: "Source (Unity Project)"}, {link: "https://ldjam.com/events/ludum-dare/46/the-holy-sword-1", label: "Ludum Dare Submission"}]}
                        itchEmbed={<iframe src="https://itch.io/embed/617071" height="100%" width="60%" frameBorder="1px" style={{padding: "0px"}}><a href="https://pastelgames.itch.io/the-holy-sword">The Holy Sword by PastelGames</a></iframe>}
                    />
                    </div>
                }
                />
            </div>
        </div>
    </div> 
) 
