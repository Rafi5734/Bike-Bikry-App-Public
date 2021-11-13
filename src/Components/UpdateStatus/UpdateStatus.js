import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./updateStatus.css";
const UpdateStatus = () => {
    const [update, setUpdate] = useState({});
    const [success, setSuccess] = useState(false);
    const { updateId } = useParams();

    useEffect(() => {
        fetch(`https://stark-spire-82280.herokuapp.com/update/${updateId}`)
            .then((res) => res.json())
            .then((data) => {
                setUpdate(data);
            });
    }, []);

    const handleNameChange = (update) => {
        const updateName = update.target.value;
        const updateStatus = { status: updateName };
        setUpdate(updateStatus);
    };

    const handleUpdateStatus = () => {
        fetch(`https://stark-spire-82280.herokuapp.com/update/${updateId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(update),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    alert("Admin Make Successfully");
                    setSuccess(true);
                }
                console.log(data);
            });
    };

    return (
        <div className="update-div">
            <h1 className="text-center mt-5 mb-5">
                Updating My Current Status.
            </h1>
            <input
                type="text"
                value={update?.status}
                onChange={handleNameChange}
                className="update-input"
            ></input>
            <Link to="/manageorder">
                <Button
                    variant="success"
                    className="ms-3"
                    onClick={handleUpdateStatus}
                >
                    Update
                </Button>{" "}
            </Link>
        </div>
    );
};

export default UpdateStatus;
