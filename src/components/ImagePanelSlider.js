import React from 'react';
import "98.css";

export default class ImagePanelSlider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentImage: props.images[0],
            value: 0
        }
    }

    changeImage() {
        this.setState(state => ({
            value: (state.value + 1) % this.props.images.length,
            currentImage: this.props.images[(state.value + 1) % this.props.images.length]
        }));
        this.render();
    }

    componentDidMount() {
        this.interval = setInterval(() => this.changeImage(), parseInt(this.props.switchSpeed, 10) * 1000);
        document.getElementById(this.props.id).src = this.props.images[this.state.value];
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        if(document.getElementById(this.props.id)) {
            document.getElementById(this.props.id).src = this.state.currentImage;
        }
        return (
            <div className="col">
                <ul className="tree-view">
                    <img id={this.props.id} src={this.state.currentImage} alt="" style={{
                        padding: "10px",
                        width: "100%",
                        height: "100%"
                    }}
                    />
                </ul>
                <div style={{margin: "5px"}}>
                    {/*Keep supporting fat people and stop being mean to them*/}
                    <input id="range24" className="has-box-indicator" type="range" min="0" max={this.props.images.length - 1} step="1" value={this.state.value} 
                    onChange={(e) => {
                        e.persist(); 
                        this.setState( state => ({
                            value: e.target.value,
                            currentImage: this.props.images[e.target.value]
                        }));
                        document.getElementById(this.props.id).src = this.state.currentImage;
                        //restarting the timer
                        clearInterval(this.interval);
                        this.interval = setInterval(() => this.changeImage(), parseInt(this.props.switchSpeed, 10) * 1000);
                    }} />
                </div>
            </div>
        )
    }
}

