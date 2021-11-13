import React, { useEffect, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import { useParams, Link } from "react-router-dom";
import "./placeOrder.css";
import { useForm } from "react-hook-form";
const PlaceOrder = () => {
    const { user, products } = useAuth();
    const { placeId } = useParams();

    const [placeOrders, setPlaceOrders] = useState([]);

    useEffect(() => {
        const detailOrder = products.find((u) => u._id == placeId);
        setPlaceOrders(detailOrder);
    }, [products]);

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    console.log(products);

    console.log(user.email, user.metadata.lastSignInTime);

    const userPush = (data) => {
        const userName = user.email;
        const itemName = products.name;
        const time = user.metadata.lastSignInTime;

        const userInfo = { userName, time, itemName };
        fetch("https://stark-spire-82280.herokuapp.com/myorder", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(userInfo),
        });
    };

    return (
        <div className="place-order-form">
            <h1 className="mt-5 mb-5 place-order">Place Your Order</h1>
            <Container>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="place-order-form"
                >
                    <input
                        defaultValue={user.email}
                        {...register("email", {
                            required: true,
                        })}
                        placeholder="Email Name"
                    />
                    <input
                        defaultValue={user.displayName}
                        {...register("name", {})}
                        placeholder="Name"
                    />
                    <input
                        type="text"
                        {...register("from", {
                            required: true,
                        })}
                        placeholder="From"
                    />
                    <input
                        type="text"
                        value={placeOrders.name}
                        {...register("to", {})}
                        placeholder="To"
                    />
                    <input
                        value={placeOrders.price}
                        type="number"
                        {...register("price", {})}
                        placeholder="Price"
                    />
                    <input
                        defaultValue="Dhaka"
                        type="text"
                        {...register("destination", {})}
                        placeholder="Destination"
                    />
                    <Link to="/myorder">
                        <button
                            type="submit"
                            value="place order"
                            className="submit-btn"
                            onClick={userPush}
                        >
                            Place Order
                        </button>
                    </Link>
                </form>
            </Container>
        </div>
    );
};

export default PlaceOrder;
