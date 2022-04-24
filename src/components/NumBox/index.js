import React from "react";
import { Row, Col } from "react-bootstrap";
import './style.css'

const NumBox = ({ num, numObj }) => {

    const { top, topRight, topLeft, middle, bottomRight, bottomLeft, bottom } = numObj;

    return (
        <Col style={{ margin: '1%' }}>
            <Row >
                <Col className="horizontal" style={!top ? { border: 'none' } : { borderTopColor: 'black', borderStyle: 'solid', borderWidth: 'thick' }}>{num}</Col>
            </Row>
            <Row >
                <Col className="vertical" style={!topLeft ? { border: 'none' } : { borderLeftColor: 'black', borderStyle: 'solid', borderWidth: 'thick' }}>{num}</Col>
                <Col className="vertical" style={!topRight ? { border: 'none' } : { borderRightColor: 'black', borderStyle: 'solid', borderWidth: 'thick' }}>{num}</Col>
            </Row>
            <Row >
                <Col className="horizontal" style={!middle ? { border: 'none' } : { borderTopColor: 'black', borderStyle: 'solid', borderWidth: 'thick' }}>{num}</Col>
            </Row>
            <Row >
                <Col className="vertical" style={!bottomLeft ? { border: 'none' } : { borderLeftColor: 'black', borderStyle: 'solid', borderWidth: 'thick' }}>{num}</Col>
                <Col className="vertical" style={!bottomRight ? { border: 'none' } : { borderRightColor: 'black', borderStyle: 'solid', borderWidth: 'thick' }}>{num}</Col>
            </Row>
            <Row >
                <Col className="horizontal" style={!bottom ? { border: 'none' } : { borderBottomColor: 'black', borderStyle: 'solid', borderWidth: 'thick' }}>{num}</Col>
            </Row>
        </Col>
    );
};

export default NumBox;