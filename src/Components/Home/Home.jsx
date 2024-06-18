import React, { Component } from "react";
import "./MediQueries.css";
import "./Home.css";
export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="left">
                    <p className="top">HI THERE,</p>
                    <h1 className="my-info">I Am Creative <span>WebDeveloper</span> </h1>
                    <p>I'm a Freelance UI/UX Designer and Developer . I strive to build immersive and beautiful <br />web applications through carefully crafted code and user-centric design.</p>
                    <button className="button" type="button">Hire Me</button>
                </div>
                <div className="right">
                    <img
                        src="https://res.cloudinary.com/dqhk94co9/image/upload/v1718640093/close-up-handsome-young-man-removebg-preview_on1ndq.png"
                        alt="image"
                        className="home-image"
                    />
                </div>
            </div>
        );
    }
}
