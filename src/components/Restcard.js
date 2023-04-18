import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./Restcrd.css";

function Restcard({ restdata }) {
  return (
    <>
      <Link
        to={`/view-restuarant/${restdata.id}`}
        style={{ textDecoration: "none", color: "white" }}
      >
        <Card style={{ width: "18rem" }} id="d1">
          <Card.Img variant="top" src={restdata.photograph} />
          <Card.Body>
            <Card.Title className="text-center">{restdata.name}</Card.Title>
            <Card.Text>
              <p className="text-center">
                <strong>Cuisine Type:</strong> {restdata.cuisine_type}
              </p>
              <p className="text-center">{restdata.address}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
}

export default Restcard;
