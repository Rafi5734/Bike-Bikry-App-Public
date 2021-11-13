import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import "./footer.css";
import { Col, Form, Row, Button, Container } from "react-bootstrap";
class Footer extends Component {
    render() {
        return (
            <div>
                <Container className="footer-bg">
                    <img
                        src="https://cdn.shopify.com/s/files/1/0461/8371/0869/files/rayz-logo-light_x40@2x.png?v=1597905068"
                        className="mb-5 mt-5"
                    ></img>
                    <p className="lead mb-5">
                        Rayz quam elementum pulvinar etiam non quam. Erat velit
                        scelerisque in dictum non consectetur. Nibh cras
                        pulvinar mattis nunc sed.
                    </p>
                    <h1 className="footer-title">FOLLOW US</h1>
                    <div className="all-icons">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-youtube"></i>
                        <i className="fab fa-twitter"></i>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Footer;
