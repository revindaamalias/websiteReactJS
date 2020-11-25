import React, { Component } from "react";
import "./Home.css";
import 'bootstrap/dist/css/bootstrap.css';

class Home extends Component {
    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <h1 className="title1">CamBox</h1>
                    <h5> Essentially what photography is is life lit up. </h5>
                </div>
                <div className="row">
                    <div className="card1 col-md-12">
                        <img width="500px" src="home.jpg" />
                        <p>Compel your audience. Capture the moment. Light with purpose.</p>
                        <p>We Have All Type of Camera</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;