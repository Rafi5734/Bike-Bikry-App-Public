import React, { useEffect, useState } from "react";
import { Card, CardGroup, Button, Container, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Footer from "../Footer/Footer";
import "./service.css";
import ModalWindow from "../ModalWindow/ModalWindow";
const Services = () => {
    const { handleAddToCart } = useAuth();
    const [explore, setExplore] = useState([]);

    useEffect(() => {
        fetch("https://stark-spire-82280.herokuapp.com/services")
            .then((res) => res.json())
            .then((data) => {
                setExplore(data);
            });
    }, []);

    //for modal window...

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <>
                <h1 className="services-title mb-5 mt-5">Our Products</h1>
                <Container className="service-section">
                    {explore.map((item, index) => (
                        <Card style={{ width: "18rem" }}>
                            <Card.Img variant="top" src={item.image} />
                            <Card.Body>
                                <Card.Title className="card-title">
                                    {item.name}
                                </Card.Title>
                                <Card.Text className="card-text">
                                    {item.description}
                                </Card.Text>
                                <Card.Text>
                                    <span className="price">Price: $</span>
                                    {item.price}
                                </Card.Text>
                                <Link to={`/placeorder/${item?._id}`}>
                                    <button
                                        className="btn btn-primary me-4 service-btn"
                                        onClick={() => handleAddToCart(index)}
                                    >
                                        Purchase Now
                                    </button>
                                </Link>
                                {/* <Link to={`/modalwindow/${item?._id}`}> */}
                                <Button
                                    variant="success"
                                    onClick={handleShow}
                                    explore={explore}
                                    className="service-btn"
                                >
                                    Review It
                                </Button>{" "}
                                {/* </Link> */}
                            </Card.Body>
                        </Card>
                    ))}

                    <ModalWindow
                        show={show}
                        handleClose={handleClose}
                    ></ModalWindow>
                </Container>
            </>
            <Footer></Footer>
        </div>
    );
};

export default Services;
