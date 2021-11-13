import React from "react";
import { Spinner } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation,
} from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./private.css";
const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return (
            <Spinner
                animation="grow"
                variant="danger"
                className="private-spinner"
            />
        );
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/register",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
