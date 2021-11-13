import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import "./register.css";
const Register = () => {
    const history = useHistory();
    const location = useLocation();

    const [logInData, setLogInData] = useState({});
    const { registerUser, user } = useAuth();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        alert("form submitted");

        //post for user collection/////

        const email = data.email;
        // const time = user.metadata.lastSignInTime;

        const userInfo = { email, role: "no admin" };
        // userInfo.role = "no admin";
        fetch("https://stark-spire-82280.herokuapp.com/user", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(userInfo),
        });
        // console.log(data.email, data.password);
        setLogInData(data.email, data.password);
        registerUser(data.email, data.password, location, history);
    };

    return (
        <div>
            <Container className="register">
                <img
                    src="https://www.mrisoftware.com/wp-content/uploads/2021/06/asset6-600x330.png"
                    className="img-fluid register-img"
                ></img>

                <Col className="col-2 order-1 order-sm-1">
                    <h1>Register Account</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            placeholder="User Name"
                            {...register("User Name")}
                            className="input"
                        />
                        <input
                            placeholder="Email Address"
                            {...register("email")}
                            className="input"
                        />

                        <input
                            placeholder="password"
                            {...register("password")}
                            className="input"
                        />

                        {errors.exampleRequired && (
                            <span>This field is required</span>
                        )}

                        <input type="submit" />
                    </form>
                    <Link to="/login">
                        <p>Already Have a new account?Sign in now</p>
                    </Link>
                </Col>
            </Container>
        </div>
    );
};

export default Register;
