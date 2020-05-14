import React from 'react';
import "98.css";
import Window from './components/Window';
import Portrait from './IMG_0816.PNG';
import GithubLogo from './GitHub_Logo.png';
import LinkedInLogo from './LI-Logo.png';
import { ProjectWindow } from './components/ProjectWindow';

export const Home = () => (
    <div className="container-fluid">
        <ProjectWindow title="Project Spotlight" name="some faggot bitch" images={[GithubLogo, LinkedInLogo]} imageSwapSpeed="5" description="this is the description of the game" buttons={[{link: "https://google.com", label: "google"}, {link: "https://pornhub.com", label: "pornhub"}]}/>
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