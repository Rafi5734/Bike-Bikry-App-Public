import React, { useEffect, useState } from "react";
import "./makeAdmin.css";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";
import { FormControl, InputGroup, Button, Table, Card } from "react-bootstrap";

const MakeAdmin = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const { user } = useAuth();

    const [email, setEmail] = useState([]);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        fetch("https://stark-spire-82280.herokuapp.com/user")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setEmail(data);
            });
    }, []);

    return (
        <div className="admin-form">
            <h1 className="mb-5">Making Admin Here</h1>
            <img src="https://teleme.io/assets/feature_updates/tg_group_admins.jpg"></img>
            {/* <form onSubmit={handleAdminSubmit}>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="user email"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        className="mt-5"
                        type="email"
                        onBlur={handleOnBlur}
                    />
                </InputGroup>
                <Button variant="success" type="submit">
                    Make Admin
                </Button>{" "}
            </form> */}

            {/* HOOK FORM */}

            {/* <form onSubmit={handleSubmit(onSubmit)} className="form">
                
                <input
                    placeholder="Press New Admin Address"
                    type="email"
                    {...register("email")}
                    className="form-input mt-5 mb-4"
                />

                
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" className="form-btn" />
            </form> */}
            {email.map((i, index) => (
                // <Table striped bordered hover>
                //     <thead>
                //         <tr>
                //             <th>#</th>
                //             <th>User Name</th>
                //             <th>User Status</th>
                //             <th>Action</th>
                //         </tr>
                //     </thead>
                //     <tbody>
                //         <tr>
                //             <td>{index + 1}</td>
                //             <td>{i.email}</td>
                //             <td>
                //                 <input type="text" value={i.role}></input>
                //             </td>
                //             <td>
                //                 <Link to={`/buildadmin/${i._id}`}>
                //                     <Button variant="danger">Make Admin</Button>
                //                 </Link>
                //             </td>
                //         </tr>
                //     </tbody>
                // </Table>
                <Card style={{ width: "18rem" }}>
                    <Card.Body>
                        <Card.Title>User: {i.email}</Card.Title>
                        <Card.Text>Role: {i.role}</Card.Text>
                        <Link to={`/buildadmin/${i._id}`}>
                            <Button variant="danger">Make Admin</Button>
                        </Link>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default MakeAdmin;
