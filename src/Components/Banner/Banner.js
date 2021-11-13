import React from "react";
import { Container } from "react-bootstrap";
import "./banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <Container>
            <div className="banner-class">
                <div className="banner-description">
                    <p className="lead">New to Motocross</p>
                    <h1 className="banner-heading">RIDER CLASS</h1>
                    <p className="banner-para">
                        We offer new rider classes every week. Theses courses
                        are free for all types of riders from newbies to
                        professional racers.
                    </p>
                    <Link to="/service">
                        <button className="banner-btn lead">
                            Explore More
                        </button>
                    </Link>
                </div>
            </div>
        </Container>
    );
};

export default Banner;
