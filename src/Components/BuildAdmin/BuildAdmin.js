import React, { useEffect, useState } from "react";
import "./buildAdmin.css";
import { Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";

const BuildAdmin = () => {
    const [updateAdmin, setUpdateAdmin] = useState({});
    const { adminId } = useParams();

    useEffect(() => {
        fetch(`https://stark-spire-82280.herokuapp.com/buildadmin/${adminId}`)
            .then((res) => res.json())
            .then((data) => {
                setUpdateAdmin(data);
            });
    }, []);

    const handleRoleChange = (update) => {
        const updateRole = update.target.value;
        const updateStatus = { role: updateRole };
        setUpdateAdmin(updateStatus);
    };

    const handleUpdateStatus = () => {
        fetch(`https://stark-spire-82280.herokuapp.com/buildadmin/${adminId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updateAdmin),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    };
    return (
        <div>
            <h1>Making Admin Role</h1>
            <input
                type="text"
                value={updateAdmin?.role}
                onChange={handleRoleChange}
                className="update-input"
            ></input>
            <Link to="/dashboard">
                <Button
                    variant="success"
                    className="ms-3"
                    onClick={handleUpdateStatus}
                >
                    Update Role
                </Button>{" "}
            </Link>
        </div>
    );
};

export default BuildAdmin;
