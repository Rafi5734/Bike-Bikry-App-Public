import React, { useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./addService.css";
import { Link } from "react-router-dom";
const AddService = () => {
    const imgRef = useRef("");
    const nameRef = useRef("");
    const descriptionRef = useRef("");
    const ratingRef = useRef("");
    const priceRef = useRef("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const imgUrl = imgRef.current?.value;
        const name = nameRef.current?.value;
        const description = descriptionRef.current?.value;
        const rating = ratingRef.current?.value;
        const price = priceRef.current?.value;

        const newService = {
            name: name,
            description: description,
            price: price,
            rating: rating,
            image: imgUrl,
        };

        fetch("https://stark-spire-82280.herokuapp.com/services", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newService),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    alert("service added successfully");
                }
            });
        // console.log(typeof imgUrl);
    };
    return (
        <div>
            <h1 className="mt-5 mb-5 text-center add-title">
                Add a new service one.
            </h1>
            <Container className="add-container">
                <Form onSubmit={handleSubmit}>
                    <Form.Floating className="mb-3">
                        <Form.Control
                            id="floatingInputCustom"
                            type="text"
                            placeholder="img-url"
                            ref={imgRef}
                        />
                        <label htmlFor="floatingInputCustom">Image URL</label>
                    </Form.Floating>
                    <Form.Floating className="mb-3">
                        <Form.Control
                            id="floatingPasswordCustom"
                            type="text"
                            placeholder="Tour Name"
                            ref={nameRef}
                        />
                        <label htmlFor="floatingPasswordCustom">
                            Tour Name
                        </label>
                    </Form.Floating>
                    <Form.Floating className="mb-3">
                        <Form.Control
                            id="floatingPasswordCustom"
                            type="text"
                            placeholder="Description"
                            ref={descriptionRef}
                        />
                        <label htmlFor="floatingPasswordCustom">
                            Description
                        </label>
                    </Form.Floating>
                    <Form.Floating className="mb-3">
                        <Form.Control
                            id="floatingPasswordCustom"
                            type="text"
                            placeholder="Rating"
                            ref={ratingRef}
                        />
                        <label htmlFor="floatingPasswordCustom">Rating</label>
                    </Form.Floating>
                    <Form.Floating className="mb-3">
                        <Form.Control
                            id="floatingPasswordCustom"
                            type="text"
                            placeholder="Price"
                            ref={priceRef}
                        />
                        <label htmlFor="floatingPasswordCustom">Price</label>
                    </Form.Floating>
                    {/* <Link to="/service"> */}
                    <Button variant="outline-success" type="submit">
                        Submit
                    </Button>{" "}
                    {/* </Link> */}
                </Form>
            </Container>
        </div>
    );
};

export default AddService;
