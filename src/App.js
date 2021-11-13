import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import About from "./Components/About/About";
import SignIn from "./Components/SignIn/SignIn";
import Register from "./Components/Register/Register";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import MyOrder from "./Components/MyOrder/MyOrder";
import PlaceOrder from "./Components/PlaceOrder/PlaceOrder";
import ManageOrder from "./Components/ManageOrder/ManageOrder";
import Details from "./Components/Details/Details";
import UpdateStatus from "./Components/UpdateStatus/UpdateStatus";
import Dashboard from "./Components/Dashboard/Dashboard";
import NotFound from "./Components/404/NotFound";
import LogIn from "./Components/LogIn/LogIn";
import ModalWindow from "./Components/ModalWindow/ModalWindow";
import OurReview from "./Components/OurReview/OurReview";
import BuildAdmin from "./Components/BuildAdmin/BuildAdmin";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Router>
                    <Header></Header>
                    <Switch>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>
                        <Route exact path="/home">
                            <Home></Home>
                        </Route>
                        <Route path="/service">
                            <Services></Services>
                        </Route>
                        <Route path="/review">
                            <OurReview></OurReview>
                        </Route>
                        <Route path="/signin">
                            <SignIn></SignIn>
                        </Route>
                        <Route path="/register">
                            <Register></Register>
                        </Route>
                        <PrivateRoute path="/placeorder/:placeId">
                            <PlaceOrder></PlaceOrder>
                        </PrivateRoute>

                        <Route path="/manageorder">
                            <ManageOrder></ManageOrder>
                        </Route>
                        <Route path="/myorder">
                            <MyOrder></MyOrder>
                        </Route>

                        <Route path="/update/:updateId">
                            <UpdateStatus></UpdateStatus>
                        </Route>

                        <Route path="/details/:detailsId">
                            <Details></Details>
                        </Route>

                        <Route path="/dashboard">
                            <Dashboard></Dashboard>
                        </Route>
                        <Route path="/buildadmin/:adminId">
                            <BuildAdmin></BuildAdmin>
                        </Route>
                        <Route path="/login">
                            <LogIn></LogIn>
                        </Route>
                        <Route path="*">
                            <NotFound></NotFound>
                        </Route>
                    </Switch>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
