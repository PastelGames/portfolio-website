import React from 'react';
import "98.css";
import './../App.css';

function Minimize(ID) {
    var x = document.getElementById(ID);
    if(x) {
        x.style.display = "none";
    }
    console.log(x);
}

function Maximize(ID) {
    var x = document.getElementById(ID);
    if(x) {
        x.style.display = "block";
    }
    console.log(x);
}

const Window = props => {
    return (
        <div>
            <div className="window m-3">
                <div className="title-bar" style={{
                    background: "linear-gradient(90deg, #ff66ff, #ffccff)"
                }}>
                    <div className="title-bar-text">{props.title}</div>
                    <div className="title-bar-controls" >
                        <button aria-label="Minimize" onClick={ () => Minimize(props.title) }/>
                        <button aria-label="Maximize" onClick={ () => Maximize(props.title) }/>
                        <button aria-label="Close" />
                    </div>
                </div>
                <div className="window-body text-center" id={props.title}>
                    {props.content}
                </div>
            </div>
        </div>
    )
}

export default Window;