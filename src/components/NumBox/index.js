import React from "react";
import { Row, Col } from "react-bootstrap";
import './style.css'

const NumBox = ({ num }) => {

    return (
        <Col>
            <Row >
                <Col className="horizontal">{num}</Col>
            </Row>
            <Row >
                <Col className="vertical">{num}</Col>
                <Col className="vertical">{num}</Col>
            </Row>
            <Row >
                <Col className="horizontal">{num}</Col>
            </Row>
            <Row >
                <Col className="vertical">{num}</Col>
                <Col className="vertical">{num}</Col>
            </Row>
            <Row >
                <Col className="horizontal">{num}</Col>
            </Row>
        </Col>
    );
};

export default NumBox;