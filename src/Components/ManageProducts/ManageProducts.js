import React, { useEffect, useState } from "react";
import { Table, Button, Card, Container } from "react-bootstrap";
import "./manageProducts.css";
const ManageProducts = () => {
    const [manageProducts, setManageProducts] = useState([]);
    useEffect(() => {
        fetch("https://stark-spire-82280.herokuapp.com/services")
            .then((res) => res.json())
            .then((data) => {
                setManageProducts(data);
            });
    }, []);

    const handleDelete = (id) => {
        const proceedToDelete = window.confirm(
            "Are you sure you want to delete this order?"
        );
        if (proceedToDelete) {
            fetch(
                `https://stark-spire-82280.herokuapp.com/manageproduct/${id}`,
                {
                    method: "DELETE",
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert("item deleted successfully.");
                        const remainingItems = manageProducts.filter(
                            (item) => item._id !== id
                        );
                        setManageProducts(remainingItems);
                        // setDeleteItem(true);
                    } else {
                        // setDeleteItem(false);
                    }
                });
        }
    };
    return (
        <Container>
            <h1>Manage All Products</h1>
            <div className="manage-card">
                {manageProducts.map((item, index) => (
                    <Card style={{ width: "18rem" }}>
                        <Card.Img
                            variant="top"
                            src={item.image}
                            className="img-fluid table-img"
                        />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Title>$ {item.price}</Card.Title>
                            <Card.Text>{item.description}</Card.Text>
                            <Button
                                variant="danger"
                                onClick={() => handleDelete(item._id)}
                            >
                                delete
                            </Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </Container>
    );
};

export default ManageProducts;
