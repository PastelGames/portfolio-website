import React from 'react';
import "98.css";
import Window from './components/Window';
import Portrait from './IMG_0816.PNG';
import GithubLogo from './GitHub_Logo.png';
import LinkedInLogo from './LI-Logo.png';
import { ProjectWindow } from './components/ProjectWindow';
import ImagePanelSlider from './components/ImagePanelSlider';

import THSSS1 from './images/THS/the holy sword images.png';
import THSSS2 from './images/THS/thsss2.png';
import THSSS3 from './images/THS/thsss3.png';

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
            switchSpeed="10"
            images={[
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
                    <h5>Hi visitor! My name is El and I’m super passionate about expressing myself through mathematics, game development/design, and programming. I am more specifically focused on computer graphics and rendering techniques. I'm also a third-year Computer Science major at Virginia Commonwealth University and president of Game Creators Coalition. Enjoy your time here and check out some of my work! Love you all!</h5>
                } />
                
            </div>

            <div className="col-md-6">
                <Window title ="Check Out El's Resume"
                    content={
                        <a href="https://drive.google.com/file/d/1NRo0ud4enXseYtfVtE1MuMEDS3I7s-iW/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <button>Go!</button>
                        </a>
                    }
                />
                <Window title="Get in Contact with El"
                content={
                    <div>
                        <h5>el@pastelpink.games</h5>
                    </div>
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
            </div>
        </div>
    </div>
       
) 