import React from 'react';
import "98.css";
import Window from './components/Window';
import {ProjectWindow} from './components/ProjectWindow';

import THSSS1 from './images/THS/the holy sword images.png';
import THSBanner from './images/THS/holy sword banner.png';
import THSSS2 from './images/THS/thsss2.png';
import THSSS3 from './images/THS/thsss3.png';

import WHNGIF1 from './images/WHN/WHNGIF1.gif';
import WHNGIF2 from './images/WHN/WHNGIF2.gif';
import WHNGIF3 from './images/WHN/WHNGIF3.gif';
import WHNSS1 from './images/WHN/WHNSS1.png';

import AstroParadeGif1 from './images/Astro Parade/title.jpg';
import AstroParadeGif2 from './images/Astro Parade/gif1.gif';
import AstroParadeGif3 from './images/Astro Parade/gif2.gif';

import CloutBaner from './images/Clout/banner.png';
import CloutGif1 from './images/Clout/gif1.gif';
import CloutGif2 from './images/Clout/gif2.gif';
import CloutGif3 from './images/Clout/gif3.gif';

import FOTVGIF1 from './images/Father of the Vampire/gif1.gif';
import FOTVGIF2 from './images/Father of the Vampire/gif2.gif';
import FOTVGIF3 from './images/Father of the Vampire/gif3.gif';

import HSHGIF1 from './images/Home Sweet Home/title.png';
import HSHGIF2 from './images/Home Sweet Home/gif1.gif';
import HSHGIF3 from './images/Home Sweet Home/gif2.gif';
import HSHGIF4 from './images/Home Sweet Home/gif3.gif';

import JeopardySS1 from './images/Jeopardy/ss1.png';
import JeopardySS2 from './images/Jeopardy/ss2.png';
import JeopardySS3 from './images/Jeopardy/ss3.png';
import JeopardySS4 from './images/Jeopardy/ss4.png';
import JeopardySS5 from './images/Jeopardy/ss5.png';

import WTSCMFCBanner from './images/WTSCMFC/Banner.png';

import OrbeatzBanner from './images/Orbeatz/Header.png';
import OrbeatzGif1 from './images/Orbeatz/gif1.gif';
import OrbeatzGif2 from './images/Orbeatz/gif2.gif';
import OrbeatzGif3 from './images/Orbeatz/gif3.gif';
import OrbeatzGif4 from './images/Orbeatz/gif4.gif';

import OTRBanner from './images/Off the Ringer/OTRHeadre.png';
import OTRGif1 from './images/Off the Ringer/gif1.gif';
import OTRGif2 from './images/Off the Ringer/gif2.gif';
import OTRGif3 from './images/Off the Ringer/gif3.gif';
import OTRGif4 from './images/Off the Ringer/gif4.gif';

import PIGCBanner from './images/Panic/PIGCBanner.png';

const ImageBox = props => (
    <ul className="tree-view"><img src={props.src} alt="THSSS1" style={{width: "100%", height: "100%", padding: "5px"}}/></ul>
)

export const Games = () => (
    <div className="container-fluid">
        <div className="row">
            <div className="col">
            <Window title="The Arkham Asylum Files: Panic in Gotham City"
                content={
                    <div>
                    <img src={PIGCBanner} alt="PIGCBanner" style={{width: "100%", height: "100%", padding: "5px"}}/>
                    <ProjectWindow
                        name="The Arkham Asylum Files: Panic in Gotham City" 
                        images={[
                            <ul className="tree-view"><iframe width="100%" height="250" src="https://www.youtube.com/embed/sXmb7qYY-lk" title="The Arkham Asylum Files - AVAILABLE NOW" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></ul>
                        ]} 
                        switchSpeed="6" 
                        description="Immerse yourselves in the world of Batman and Harley Quinn, as Gotham City comes to life with the amazing magic of mobile augmented reality." 
                        buttons={[{link: "https://infiniterabbitholes.com", label: "Buy Now!"}]}
                    />
                    </div>
                }
                />

            <Window title="Off the Ringer"
                content={
                    <div>
                    <img src={OTRBanner} alt="OTRBanner" style={{width: "100%", height: "100%", padding: "5px"}}/>
                    <ProjectWindow
                        name="Off the Ringer" 
                        images={[
                           <ImageBox src={OTRGif1} />,
                           <ImageBox src={OTRGif2} />,
                           <ImageBox src={OTRGif3} />,
                           <ImageBox src={OTRGif4} />
                        ]} 
                        switchSpeed="6" 
                        description="The phones never stop ringing! Reconnect callers with their lost objects in this mini Swiss design-inspired puzzle game." 
                        buttons={[{link: "https://globalgamejam.org/2021/games/untitled-phone-game-2", label: "Global Game Jam Submission"}, {link: "https://github.com/PastelGames/OffTheRinger", label: "View Source (Unity Project)"}]}
                        itchEmbed={<iframe src="https://itch.io/embed/904088" height="100%" width="60%" frameborder="1px" style={{padding: "0px"}}><a href="https://ruthie.itch.io/off-the-ringer">Off the Ringer by Ruthie Edwards</a></iframe>}
                    />
                    </div>
                }
                />

            <Window title="Orbeatz"
                content={
                    <div>
                    <img src={OrbeatzBanner} alt="OrbeatzBanner" style={{width: "100%", height: "100%", padding: "5px"}}/>
                    <ProjectWindow
                        name="Orbeatz" 
                        images={[
                           <ImageBox src={OrbeatzGif1} />,
                           <ImageBox src={OrbeatzGif2} />,
                           <ImageBox src={OrbeatzGif3} />,
                           <ImageBox src={OrbeatzGif4} />
                        ]} 
                        switchSpeed="6" 
                        description="Orbeatz! A fast-paced rhythm game all about a good ear and a good time. Enjoy some tunes while tapping into some beats. If you enjoy Dance Dance Revolution and similar games, you'll enjoy the visual twist applied to this game." 
                        buttons={[{link: "https://ldjam.com/events/ludum-dare/47/orbeatz", label: "Ludum Dare Submission"}, {link: "https://github.com/PastelGames/Orbeatz", label: "View Source (Unity Project)"}]}
                        itchEmbed={<iframe src="https://itch.io/embed/778752" height="100%" width="60%" frameborder="1px" style={{padding: "0px"}}><a href="https://pastelgames.itch.io/orbeatz">Orbeatz by PastelGames</a></iframe>}
                    />
                    </div>
                }
                />

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
                        buttons={[{link: "https://github.com/PastelGames/The-Holy-Sword", label: "Source (Unity Project)"}, {link: "https://ldjam.com/events/ludum-dare/46/the-holy-sword-1", label: "Ludum Dare Submission"}]}
                        itchEmbed={<iframe src="https://itch.io/embed/617071" height="100%" width="60%" frameBorder="1px" style={{padding: "0px"}}><a href="https://pastelgames.itch.io/the-holy-sword">The Holy Sword by PastelGames</a></iframe>}
                    />
                    </div>
                }
                />

                <Window title="AstroParade"
                content={
                    <div>
                    <ProjectWindow
                        name="AstroParade" 
                        images={[
                           <ImageBox src={AstroParadeGif1} />,
                           <ImageBox src={AstroParadeGif2} />,
                           <ImageBox src={AstroParadeGif3} />
                        ]} 
                        switchSpeed="6" 
                        description="AstroParade is a game made with Unreal Engine 4. It is a 3D exploration game where you have to gain the favor of monsters to bring back to your home planet by completing rhythm minigames and dancing for monsters." 
                        buttons={[{link: "https://drive.google.com/drive/folders/1XfvH7IN5beekhULkfBxysQgqqwy2NzCz?usp=sharing", label: "Play Game (Executable)"}]}
                    />
                    </div>
                }
                />

                <Window title="When the Seasons Change, My Feelings Change (VR)"
                content={
                    <div>
                    <img src={WTSCMFCBanner} alt="WTSCMFC Banner" style={{width: "100%", height: "100%", padding: "5px"}}/>
                    <ProjectWindow
                        name="When the Seasons Change, My Feelings Change" 
                        images={[
                            <ul className="tree-view"><iframe width="100%" height="315" title="ytv" src="https://www.youtube.com/embed/iabsWJicG1I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></ul>
                        ]} 
                        switchSpeed="50000" 
                        description="A Virtual Reality Experience created with a team of artists in a class classed Virtual Interactive Worlds with Semi Ryu. Ryu is a long-time educator and researcher in the field of AR with a focus on the mind-body experience."
                        buttons={[{link: "https://drive.google.com/file/d/1cKxs-5y6aAJWFwhWsGnhDLh5pmORn9ZV/view?usp=sharing", label: "View Documentation"}]}
                    />
                    </div>
                }
                />

                <Window title="Home Sweet Home"
                content={
                    <div>
                    <ProjectWindow
                        name="Home Sweet Home" 
                        images={[
                           <ImageBox src={HSHGIF1} />,
                           <ImageBox src={HSHGIF2} />,
                           <ImageBox src={HSHGIF3} />,
                           <ImageBox src={HSHGIF4} />,
                        ]} 
                        switchSpeed="5" 
                        description={'Play as Dr Apple, Blood Orange, Strawberry Hero, Pom Pom Pomegranate, Grapezzz, or Dunkin Donut, competing in two player battles against each other to bring all the sugar kitty crystals back to your home planet. Watch out for the insidious Captain Arrrtichoke!'} 
                        buttons={[{link: "https://globalgamejam.org/2019/games/home-sweet-home-38", label: "Global Game Jam Submission"}]}
                        itchEmbed={<iframe src="https://itch.io/embed/362353" height="100%" width="60%" frameborder="1px"><a href="https://pastelgames.itch.io/home-sweet-home">Home Sweet Home by PastelGames</a></iframe>}
                    />
                    </div>
                }
                />

                <Window title="Clout"
                content={
                    <div>
                    <img src={CloutBaner} alt="Clout Banner" style={{width: "100%", height: "100%", padding: "5px"}}/>
                    <ProjectWindow
                        name="Clout" 
                        images={[
                           <ImageBox src={CloutGif1} />,
                           <ImageBox src={CloutGif2} />,
                           <ImageBox src={CloutGif3} />
                        ]} 
                        switchSpeed="5" 
                        description="Clout is a commentary on our cultural obsession with social media,
                        and the way a digital following affects real-life social status. Though this
                        online persona is often fabricated, viewing interpersonal relationships as a
                        means to increase social capital. Social media also encourages anonymity
                        and the use of pseudonyms, which is why the other characters will become
                        characterized by only their screen name after following the player." 
                        buttons={[{link: "https://drive.google.com/file/d/10BbgAltSjiL1_Js_9zYnmUzAqOaitBYC/view?usp=sharing", label: "View Documentation"}]}
                        itchEmbed={<iframe src="https://itch.io/embed/536545" height="100%" width="60%" frameborder="1px"><a href="https://pastelgames.itch.io/clout">Clout by PastelGames</a></iframe>}
                    />
                    </div>
                }
                />

                <Window title="Weeds Have Needs"
                content={
                    <div>
                    <ProjectWindow
                        name="Weeds Have Needs" 
                        images={[
                           <ImageBox src={WHNSS1} />,
                           <ImageBox src={WHNGIF1} />,
                           <ImageBox src={WHNGIF2} />,
                           <ImageBox src={WHNGIF3} />
                        ]} 
                        switchSpeed="5" 
                        description="Weeds Have Needs is a game that is all about quick thinking! You have plants that need to be taken care of. Bring them their resources or they'll die!"
                        itchEmbed={<iframe src="https://itch.io/embed/486994" height="100%" width="60%" frameborder="1px"><a href="https://pastelgames.itch.io/weeds-have-needs">Weeds Have Needs by PastelGames</a></iframe>}
                    />
                    </div>
                }
                />

                <Window title="Father of the Vampire"
                content={
                    <div>
                    <ProjectWindow
                        name="Father of the Vampire" 
                        images={[
                           <ImageBox src={FOTVGIF1} />,
                           <ImageBox src={FOTVGIF2} />,
                           <ImageBox src={FOTVGIF3} />,
                        ]} 
                        switchSpeed="5" 
                        description="A collaborative effort by some of the awesome members of Game Creators Coalition. This game is a text-based adventure game in which you are the POTUS and you must not let anyone know you are a vampire while collecting as much blood as possible." 
                        itchEmbed={<iframe src="https://itch.io/embed/339380" height="100%" width="60%" frameborder="1px"><a href="https://pastelgames.itch.io/father-of-the-vampire">Father of the Vampire by PastelGames</a></iframe>}
                    />
                    </div>
                }
                />

                <Window title="Jeopardy!"
                content={
                    <div>
                    <ProjectWindow
                        name="Jeopardy" 
                        images={[
                           <ImageBox src={JeopardySS1} />,
                           <ImageBox src={JeopardySS2} />,
                           <ImageBox src={JeopardySS3} />,
                           <ImageBox src={JeopardySS4} />,
                           <ImageBox src={JeopardySS5} />,
                        ]} 
                        switchSpeed="3" 
                        description="This was a tool that I created to help out a Twitch streamer who was playing Jeopardy game using OBS. I saw him suffering and offered to help him out by creating this software which proved to be quite useful!" 
                        buttons={[{link: "https://github.com/PastelGames/Jeopardy-Game", label: "View Source Code (Unity Project)"}, {link: "https://drive.google.com/file/d/1L4zPrUeRgDegYqPD1dzyDPTpmM3_Byrj/view?usp=sharing", label: "Play Game (Executable)"}]}
                    />
                    </div>
                }
                />
            </div>
        </div>
    </div> 
) 
