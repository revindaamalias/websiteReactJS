import React, { Component } from "react";
import "./About.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';

const About = () => {
    return (
        <div className="bg d-flex justify-content-center">
            <Card style={{ width: '24rem' }} className="card mt-4 mb-4">
                <Card.Img variant="top" src="logoAbout.jpg"/>
                <Card.Body style={{ textAlign: "center" }}>
                    <Card.Title>CamBox</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush bio text-center">
                    <ListGroupItem>CamBox</ListGroupItem>
                    <ListGroupItem>Essentially what photography is is life lit up.</ListGroupItem>
                    <ListGroupItem>We Have All Type of Camera</ListGroupItem>
                </ListGroup>
            </Card>
        </div>
    )
}
export default About;