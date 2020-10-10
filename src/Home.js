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

import WHNGIF1 from './images/WHN/WHNGIF1.gif';
import WHNGIF2 from './images/WHN/WHNGIF2.gif';
import WHNGIF3 from './images/WHN/WHNGIF3.gif';
import WHNSS1 from './images/WHN/WHNSS1.png';

import ControllerIcon from './images/Icons/Controller Icon.png';
import ComputerIcon from './images/Icons/Computer Icon.png';
import PeopleIcon from './images/Icons/People Icon.png';
import WWWIcon from './images/Icons/WWW Icon.png';
import ARIcon from './images/Icons/AR Icon.png';

import AstroParadeGif1 from './images/Astro Parade/title.jpg';
import AstroParadeGif2 from './images/Astro Parade/gif1.gif';
import AstroParadeGif3 from './images/Astro Parade/gif2.gif';

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
            switchSpeed="20"
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
                    />,
                
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
                    />,

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
                            <div className="col">
                                <img src={PeopleIcon} alt="A cute lil icon of some ppl networking" style={{width: "128px", height: "128px", padding: "10px"}}/>
                                <p style={{flex: "1", flexWrap: "wrap", fontSize: "20px"}}>Collaboration</p>
                                <p style={{flex: "1", flexWrap: "wrap"}}>I'm quite comfortable with Git and other forms of game development collaboration. Let's work together!</p>
                            </div>
                            <div className="col">
                                <img src={WWWIcon} alt="A cute lil icon of some web" style={{width: "128px", height: "128px", padding: "10px"}}/>
                                <p style={{flex: "1", flexWrap: "wrap", fontSize: "20px"}}>Web Development</p>
                                <p style={{flex: "1", flexWrap: "wrap"}}>I have experience with React and Node.js. I made the website you're on right now!</p>
                            </div>
                            <div className="col">
                                <img src={ARIcon} alt="A cute lil icon of AR" style={{width: "128px", height: "128px", padding: "10px"}}/>
                                <p style={{flex: "1", flexWrap: "wrap", fontSize: "20px"}}>AR/VR</p>
                                <p style={{flex: "1", flexWrap: "wrap"}}>I have experience making AR experiences in Unity!</p>
                            </div>
                        </div>
                    }
                />

                <Window title ="Check Out El's Resume"
                    content={
                        <a href="https://drive.google.com/file/d/1ikjWua3lN1mB6HweclItJgxC8K5KDhk3/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <button>Go!</button>
                        </a>
                    }
                />
                <Window title="Get in Contact with El"
                content={
                    <div>
                        <h5><a href="mailto:elchristopher@outlook.com" target="_blank" rel="noopener noreferrer"><button>elchristopher@outlook.com</button></a></h5>
                    </div>
                }
                />

            </div>
        </div>
    </div>
       
) 