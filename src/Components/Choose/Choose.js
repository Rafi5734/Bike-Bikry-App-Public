import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./choose.css";
const Choose = () => {
    return (
        <div>
            <Container className="choose-header">
                <h1 className="mb-5 mt-5 main-about choose-main">About Us</h1>
                <hr />
                <Container>
                    <Row>
                        <Col className="mb-5">
                            <img
                                src="https://img.freepik.com/free-photo/driving-green-neon-color-motorcycle-road_114579-5031.jpg?size=626&ext=jpg&ga=GA1.2.895263172.1632374025"
                                className="img-fluid"
                            ></img>
                        </Col>
                        <Col className="mb-5 about-2">
                            <h3 className="choose-title">
                                MOTORIZED QUADRACYCLE
                            </h3>
                            <p className="lead">
                                Magna fringilla urna porttitor rhoncus dolor
                                purus non enim. Nec sagittis aliquam malesuada
                                bibendum arcu vitae elementum curabitur. Amet
                                volutpat consequat mauris nunc congue nisi vitae
                                suscipit. Aliquam id diam maecenas ultricies mi
                                eget. Nulla aliquet enim tortor at.
                            </p>
                            <Button variant="secondary">Read More</Button>{" "}
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    );
};

export default Choose;
