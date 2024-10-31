import React from 'react';
import "98.css";
import Window from './components/Window';
import Portrait from './IMG_0816.PNG';
import GithubLogo from './GitHub_Logo.png';
import LinkedInLogo from './LI-Logo.png';
import { ProjectWindow } from './components/ProjectWindow';
import ImagePanelSlider from './components/ImagePanelSlider';

import ControllerIcon from './images/Icons/Controller Icon.png';
import ComputerIcon from './images/Icons/Computer Icon.png';
import PeopleIcon from './images/Icons/People Icon.png';
import ARIcon from './images/Icons/AR Icon.png';

import OTRGif1 from './images/Off the Ringer/gif1.gif';
import OTRGif2 from './images/Off the Ringer/gif2.gif';
import OTRGif3 from './images/Off the Ringer/gif3.gif';
import OTRGif4 from './images/Off the Ringer/gif4.gif';

import OrbeatzGif1 from './images/Orbeatz/gif1.gif';
import OrbeatzGif2 from './images/Orbeatz/gif2.gif';
import OrbeatzGif3 from './images/Orbeatz/gif3.gif';
import OrbeatzGif4 from './images/Orbeatz/gif4.gif';

const ImageBox = props => (
    <ul className="tree-view"><img src={props.src} alt="THSSS1" style={{width: "100%", height: "100%", padding: "5px"}}/></ul>
)

export const Home = () => (
    <div className="container-fluid">
        <Window 
        title="Project Spotlight" 
        content={
            <ImagePanelSlider 
            id="Project Spotlight"
            switchSpeed="100000"
            images={[
                <ProjectWindow
                        name="The Arkham Asylum Files: Panic in Gotham City" 
                        images={[
                            <ul className="tree-view"><iframe width="100%" height="250" src="https://www.youtube.com/embed/sXmb7qYY-lk" title="The Arkham Asylum Files - AVAILABLE NOW" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></ul>
                        ]} 
                        switchSpeed="6" 
                        description="Immerse yourselves in the world of Batman and Harley Quinn, as Gotham City comes to life with the amazing magic of mobile augmented reality." 
                        buttons={[{link: "https://infiniterabbitholes.com", label: "Buy Now!"}]}
                    />,

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
                    />,

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
                />,
            ]}
            />
        }
        />

        <div className="row">
            <div className="col-md-6">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                        <Window title="A Lovely Photo of El" 
                    
                        content={
                            <img src={Portrait} alt="Portrait" 
                            style={{
                                height: "130%",
                                width: "130%",
                            }}
                            className="img-fluid"
                            />
                        }
                        />
                    </div>
                </div>

                <Window title="About El" 
            
                content={
                    <h5>Hi visitor! My name is El and I’m super passionate about expressing myself through mathematics, game development/design, and programming. I particularly excel in gameplay programming techniques. I am also a recent graduate of VCU with a Bachelor's Degree in Interdisciplinary Studies: Game Development &amp; Design and founder of Game Creators Coalition. Enjoy your time here and check out some of my work! Take care!</h5>
                } />

                <Window title="Connect with El on LinkedIn"

                content={
                    <a href="https://www.linkedin.com/in/el-tucker/" target="_blank" rel="noopener noreferrer">
                        <button style={{
                            paddingTop: "10px",
                            paddingBottom: "10px",
                            marginRight: "60px",
                            marginLeft: "60px"
                        }}>
                            <img src={LinkedInLogo} alt="My Linkedin" 
                            className="img-fluid"
                            style={{
                                height: "65%",
                                width: "90%",
                            }}
                            />
                        </button>
                    </a>
                    
                }
                />

                <Window title="Check El Out on GitHub"

                content={
                    <a href="https://github.com/PastelGames" target="_blank" rel="noopener noreferrer">
                        <button style={{
                                height: "50%",
                                width: "50%",
                            }}>
                            <img src={GithubLogo} alt="My Github" 
                            className="img-fluid"
                            />
                        </button>
                    </a>
                    
                }
                />
                
            </div>

            <div className="col-md-6">

                
                <Window 
                    title="Cool Things That El Can Do" 
                    content={
                        <div>
                            <div className="row">
                                <div className="col">
                                    <img src={ControllerIcon} alt="A cute lil icon of a controller" style={{width: "128px", height: "128px", padding: "10px"}}/>
                                    <p style={{flex: "1", flexWrap: "wrap", fontSize: "20px"}}>Game Design</p>
                                    <p style={{flex: "1", flexWrap: "wrap"}}>Check out my games! Having a really fun core game loop is integral to any memorable gaming experience.</p>
                                </div>
                                <div className="col">
                                    <img src={ComputerIcon} alt="A cute lil icon of a computer" style={{width: "128px", height: "128px", padding: "10px"}}/>
                                    <p style={{flex: "1", flexWrap: "wrap", fontSize: "20px"}}>Programming</p>
                                    <p style={{flex: "1", flexWrap: "wrap"}}>I'm proficient in Java, C#, C++ and always learning more!</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <img src={PeopleIcon} alt="A cute lil icon of some ppl networking" style={{width: "128px", height: "128px", padding: "10px"}}/>
                                    <p style={{flex: "1", flexWrap: "wrap", fontSize: "20px"}}>Collaboration</p>
                                    <p style={{flex: "1", flexWrap: "wrap"}}>I'm quite comfortable with Git and other forms of game development collaboration. Let's work together!</p>
                                </div>
                                <div className="col">
                                    <img src={ARIcon} alt="A cute lil icon of AR" style={{width: "128px", height: "128px", padding: "10px"}}/>
                                    <p style={{flex: "1", flexWrap: "wrap", fontSize: "20px"}}>AR/VR</p>
                                    <p style={{flex: "1", flexWrap: "wrap"}}>I have experience making AR experiences in Unity!</p>
                                </div>
                            </div>
                        </div>
                    }
                />
                <Window title ="Check Out El's Resume"
                    content={
                        <a href="https://docs.google.com/document/d/1N378CCdRIwV_7zKB5mw6wCRS7BDVcBXK8bdWzq3o8xA/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <button>Go!</button>
                        </a>
                    }
                />
                <Window title="Get in Contact with El"
                content={
                    <div>
                        <h5><a href="mailto:el@pastelpink.games" target="_blank" rel="noopener noreferrer"><button>el@pastelpink.games</button></a></h5>
                    </div>
                }
                />

            </div>
        </div>
    </div>
       
) 