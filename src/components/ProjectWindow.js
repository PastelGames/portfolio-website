import React from 'react';
import "98.css";

export const ProjectWindow = props => {
    return (
        <div className="m-3" >
            <div className="row align-items-center d-flex justify-content-center">
                <div className="col-lg-6">
                    <ImagePanelSlider id={props.title} images={props.images} switchSpeed={props.imageSwapSpeed}/>
                </div>
                <div className="col-lg-6">
                    <p style={{flex: "1", flexWrap: "wrap", fontSize: "20px"}}>{props.description}</p>
                    <a href="https://github.com/PastelGames/The-Holy-Sword" target="_blank" rel="noopener noreferrer">
                        <button style={{paddingLeft: "30px", paddingRight: "30px"}}>View Source (Unity 5)</button>
                    </a>
                </div>
            </div>
            <div className="row align-items-center justify-content-center" style={{marginTop: "10px"}}>
                {props.itchEmbed}
            </div>
        </div>
    )
}