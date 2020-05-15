import React from 'react';
import "98.css";
import './../App.css';

export default class ImagePanelSlider extends React.Component {

    constructor(props) {
        super(props);
        if (props.images) {
            this.state = {
                    currentImage: props.images[0],
                    value: 0
            }
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
        if (this.props.images) {
            this.interval = setInterval(() => this.changeImage(), parseInt(this.props.switchSpeed, 10) * 1000);
            this.stuffs = this.props.images[this.state.value];
        }
        console.log(this.props.images);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {

       this.stuffs = this.props.images[this.state.value];
        
        //do not render if there's nothing passed in
        if (this.props.images) {
            return (
                <div className="col">
                    {this.stuffs}
                    <div id={this.props.id} style={{margin: "5px"}}>
                        {/*Keep supporting fat people and stop being mean to them*/}
                        <input className="has-box-indicator slider" type="range" min="0" max={this.props.images.length - 1} step="1" value={this.state.value} 
                        onChange={(e) => {
                            e.persist(); 
                            this.setState( state => ({
                                value: e.target.value,
                                currentImage: this.props.images[e.target.value]
                            }));
                            this.stuffs = this.props.images[this.state.value];
                            //restarting the timer
                            clearInterval(this.interval);
                            this.interval = setInterval(() => this.changeImage(), parseInt(this.props.switchSpeed, 10) * 1000);
                        }} />
                    </div>
                </div>
            )
        }
        else return null;
    }
}

