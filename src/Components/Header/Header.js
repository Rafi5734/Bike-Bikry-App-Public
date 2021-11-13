import React, { useContext, useEffect, useState } from "react";
import {
    Navbar,
    Container,
    Nav,
    Form,
    FormControl,
    Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { RingContext } from "../../App";
import useAuth from "../../Hooks/useAuth";
import useFirebase from "../../Hooks/useFirebase";
import useNumber from "../../Hooks/useNumber";
import "./header.css";
const Header = () => {
    const { user, googleSignOut, btn } = useAuth();

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#" className="navbar-title">
                        <img
                            src="https://cdn.shopify.com/s/files/1/0461/8371/0869/t/2/assets/logo.png?v=13690937016588724828"
                            className="logo-img"
                        ></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: "100px" }}
                            navbarScroll
                        >
                            <Link to="/home" className="navbar-link">
                                Home
                            </Link>
                            <Link to="/service" className="navbar-link">
                                Explore
                            </Link>

                            {/* <Link to="/review" className="navbar-link">
                                Our Review
                            </Link> */}
                            {user.email ? (
                                <div>
                                    <Link
                                        to="/dashboard"
                                        className="navbar-link"
                                    >
                                        Dashboard
                                    </Link>
                                    {/* <Link
                                        to="/manageorder"
                                        className="navbar-link"
                                    >
                                        Manage Orders
                                    </Link>
                                    <Link
                                        to="/addservice"
                                        className="navbar-link"
                                    >
                                        Add a Service
                                    </Link> */}
                                </div>
                            ) : null}
                        </Nav>
                        <Form className="d-flex">
                            <h5 className="user-name me-3 mt-2">
                                {user.email}
                            </h5>
                            {/* <img
                                src={user.photoURL}
                                className="sign-in-img img-fluid"
                            ></img> */}
                            {user?.email ? (
                                <div>
                                    <Button
                                        variant="outline-success sign-btn text-nowrap"
                                        onClick={googleSignOut}
                                    >
                                        Sign Out
                                    </Button>
                                </div>
                            ) : (
                                <div>
                                    <Button variant="outline-success sign-btn text-nowrap">
                                        <Link to="/register">Sign In</Link>
                                    </Button>
                                </div>
                            )}
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
