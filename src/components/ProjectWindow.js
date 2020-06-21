import React from 'react';
import "98.css";
import Window from './Window';
import ImagePanelSlider from './ImagePanelSlider';

export const ProjectWindow = props => {

    var links = null;

    if (props.buttons) {
        links = props.buttons.map(button => {
                return (
                    <a href={button.link} target="_blank" rel="noopener noreferrer">
                        <button style={{paddingLeft: "10px", paddingRight: "10px" }} className="m-2">{button.label}</button>
                    </a>
                )
        })
    }   

    return (
        <div className="m-3" >
            <div className="row align-items-center d-flex justify-content-center">
                <div className="col-lg-6">
                    <ImagePanelSlider id={Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)} images={props.images} switchSpeed={props.switchSpeed}/>
                </div>
                <div className="col-lg-6">
                    <h3>{props.name}</h3>
                    <p style={{flex: "1", flexWrap: "wrap", fontSize: "20px"}}>{props.description}</p>
                    <div className="row align-items-center d-flex justify-content-center">{links}</div>
                </div>
            </div>
            <div className="row align-items-center justify-content-center" style={{marginTop: "10px"}}>
                {props.itchEmbed}
            </div>
        </div>
    )
}