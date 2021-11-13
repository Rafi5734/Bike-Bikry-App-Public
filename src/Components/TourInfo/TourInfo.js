import React from "react";
import { Container, FloatingLabel, Form, Button, Card } from "react-bootstrap";

const TourInfo = (props) => {
    const { name, image, description } = props.filterProducts;
    return (
        <Container>
            <h1 className="mt-5">Our Products Review</h1>
            <hr />
        </Container>
    );
};

export default TourInfo;
