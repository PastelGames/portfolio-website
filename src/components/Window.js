import React from 'react';
import "98.css";

const Window = props => { 
    return (
        <div>
            <div className="window m-3">
                <div className="title-bar" style={{
                    background: "linear-gradient(90deg, #ff66ff, #ffccff)"
                }}>
                    <div className="title-bar-text">{props.title}</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize" />
                        <button aria-label="Maximize" />
                        <button aria-label="Close" />
                    </div>
                </div>
                <div className="window-body">
                    {props.content}
                </div>
            </div>
        </div>
    )
}

export default Window;