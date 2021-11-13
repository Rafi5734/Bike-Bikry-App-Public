import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./modal.css";
import { useForm } from "react-hook-form";
import { useParams, Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const ModalWindow = ({ show, handleClose }) => {
    const { products, user } = useAuth();
    const { modalId } = useParams();

    const [modalInfo, setModalInfo] = useState({});

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        const userName = user.email;
        const itemName = data.item_name;
        const feedBack = data.feedBack;
        const rating = data.rate;
        const sendData = { itemName, feedBack, rating, userName: userName };
        fetch("https://stark-spire-82280.herokuapp.com/review", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(sendData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
        console.log(data);
    };

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Review This Product.</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit(onSubmit)} className="modal-form">
                    <input
                        placeholder="Your Product"
                        {...register("item_name")}
                        className="modal-input mb-3"
                    />
                    <input
                        placeholder="Your feedback"
                        {...register("feedBack")}
                        className="modal-input mb-3"
                    />
                    <input
                        placeholder="Your rating"
                        {...register("rate")}
                        className="modal-input mb-3"
                    />

                    {errors.exampleRequired && (
                        <span>This field is required</span>
                    )}
                    <input type="submit" className="modal-btn" />
                </form>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ModalWindow;
