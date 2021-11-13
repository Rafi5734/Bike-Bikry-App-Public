import React, { useEffect, useState } from "react";
import { Card, Container, Button } from "react-bootstrap";
import "./ourReview.css";
import ReactStars from "react-rating-stars-component";
const OurReview = () => {
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch("https://stark-spire-82280.herokuapp.com/review")
            .then((res) => res.json())
            .then((data) => {
                setReview(data);
            });
    }, []);
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    return (
        <div>
            <Container>
                <h1 className="mt-5 mb-5 review-title">Our Customer Review</h1>
                <hr />
                <div className="cards">
                    {review.map((review) => (
                        <Card style={{ width: "18rem" }}>
                            <p className="ms-3 mt-3">
                                <span className="card-name">User:</span>
                                <span className="ms-1 fw-1 card-item">
                                    {review.userName}
                                </span>
                            </p>

                            <p className="ms-3 mt-3">
                                <span className="card-name">Product:</span>

                                <span className="ms-1 fw-1 card-item">
                                    {review.itemName}
                                </span>
                            </p>

                            <p className="ms-3 mt-3">
                                <span className="card-name">FeedBack:</span>
                                <span className="ms-1 fw-1 card-item">
                                    {review.feedBack}
                                </span>
                            </p>

                            <p className="ms-3 mt-3">
                                <span className="card-name">Rating:</span>

                                <ReactStars
                                    count={review.rating}
                                    onChange={ratingChanged}
                                    size={24}
                                    isHalf={true}
                                    emptyIcon={<i className="far fa-star"></i>}
                                    halfIcon={
                                        <i className="fa fa-star-half-alt"></i>
                                    }
                                    fullIcon={<i className="fa fa-star"></i>}
                                    activeColor="#ffd700"
                                />
                            </p>
                        </Card>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default OurReview;
