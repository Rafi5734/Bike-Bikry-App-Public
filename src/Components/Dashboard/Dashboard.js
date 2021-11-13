import React, { useEffect, useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
} from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import About from "../About/About";
import AddService from "../AddService/AddService";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageOrder from "../ManageOrder/ManageOrder";
import ManageProducts from "../ManageProducts/ManageProducts";
import MyOrder from "../MyOrder/MyOrder";
import OurReview from "../OurReview/OurReview";
import Pay from "../Pay/Pay";
import "./dashBoard.css";
const Dashboard = () => {
    const { user, googleSignOut, admin } = useAuth();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let { path, url } = useRouteMatch();

    return (
        <div className="dashBoard">
            <div>
                <Button
                    variant="primary"
                    onClick={handleShow}
                    className="mt-3 ms-3"
                >
                    DashBoard
                </Button>

                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <ul>
                            {admin ? (
                                <div>
                                    <li>
                                        <Link to={`${url}/manageorder`}>
                                            Manage All Orders
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to={`${url}/manageproduct`}>
                                            Manage All Products
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to={`${url}/makeadmin`}>
                                            Make Admin
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to={`${url}/addservice`}>
                                            Add a service
                                        </Link>
                                    </li>
                                </div>
                            ) : (
                                <div>
                                    <li>
                                        <Link to={`${url}/myorder`}>
                                            My Orders
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to={`${url}/pay`}>
                                            Pay Your Bill
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to={`${url}/review`}>
                                            Our Reviews
                                        </Link>
                                    </li>
                                </div>
                            )}
                        </ul>
                        {user.email ? (
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
                    </Offcanvas.Body>
                </Offcanvas>

                <Switch>
                    <Route exact path={path}></Route>
                    <Route path={`${path}/myorder`}>
                        <MyOrder></MyOrder>
                    </Route>
                    <Route path={`${path}/manageorder`}>
                        <ManageOrder></ManageOrder>
                    </Route>
                    <Route path={`${path}/manageproduct`}>
                        <ManageProducts></ManageProducts>
                    </Route>
                    <Route path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/addservice`}>
                        <AddService></AddService>
                    </Route>
                    <Route path={`${path}/review`}>
                        <OurReview></OurReview>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default Dashboard;

{
    /* <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </> */
}

//   <ul>
//       <li>
//           <Link to={`${url}/myorder`}>My Orders</Link>
//       </li>
//       <li>
//           <Link to={`${url}/components`}>Components</Link>
//       </li>
//       <li>
//           <Link to={`${url}/props-v-state`}>Props v. State</Link>
//       </li>
//   </ul>
