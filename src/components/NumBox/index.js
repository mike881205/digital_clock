import React from "react";
import { Row, Col } from "react-bootstrap";
import './style.css'

const NumBox = ({ num }) => {

    return (
        <Col style={{margin: '1%'}}>
            <Row >
                <Col className="horizontal">{num}</Col>
            </Row>
            <Row >
                <Col className="vertical" xs={1}>{num}</Col>
                <Col xs={7}></Col>
                <Col className="vertical" xs={1}>{num}</Col>
            </Row>
            <Row >
                <Col className="horizontal">{num}</Col>
            </Row>
            <Row >
                <Col className="vertical" xs={1}>{num}</Col>
                <Col xs={7}></Col>
                <Col className="vertical" xs={1}>{num}</Col>
            </Row>
            <Row >
                <Col className="horizontal">{num}</Col>
            </Row>
        </Col>
    );
};

export default NumBox;