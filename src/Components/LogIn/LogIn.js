import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./logIn.css";
const LogIn = () => {
    const history = useHistory();
    const location = useLocation();

    const { user, logIn, isLoading } = useAuth();
    const [logInData, setLogInData] = useState({});
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        logIn(data.email, data.password, location, history);
        // history.push(redirect_uri);
    };
    return (
        <div>
            <Container>
                <img
                    src="https://img.freepik.com/free-vector/businessman-unlocks-his-smartphone-via-fingerprint-scanner-which-provides-cyber-security_491047-143.jpg?size=626&ext=jpg&ga=GA1.2.895263172.1632374025"
                    className="img-fluid login-img"
                ></img>

                <Col className="col-2">
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                        <Link to="/register">
                            <p>Create an account</p>
                        </Link>
                    </form>
                </Col>
            </Container>
        </div>
    );
};

export default LogIn;
