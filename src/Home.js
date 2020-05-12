import React from 'react';
import "98.css";
import Window from './components/Window'

export const Home = () => (
    <div className="container-fluid">
        <div className="row">
            <div className="col">
                <Window title="A" content="nigga"/>
                <Window title="nigger" content={
                    <p style={{textAlign: "center"}}>Test</p>
                } />
            </div>
            <div className="col">
                <Window title="bitch" content="nigga"/>
            </div>
        </div>
    </div>
       
) 