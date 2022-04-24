import React from "react";
import { Row, Col } from "react-bootstrap";
import './style.css'

const NumBox = ({ num, numObj }) => {

    const { top, topRight, topLeft, middle, bottomRight, bottomLeft, bottom } = numObj;

    return (
        <Col style={{ margin: '1%' }}>
            <Row>
                <Col className="line" id="vertical" xs={1} style={!topLeft ? { backgroundColor: 'none' } : { backgroundColor: 'black' }}>TL</Col>
                <Col xs md={7}>
                    <Row>
                        <Col className="line" id="horizontal" style={!top ? { backgroundColor: 'none' } : { backgroundColor: 'black' }}>Top</Col>
                    </Row>
                    <Row>
                        <Col id="blank" xs md={7}>B</Col>
                    </Row>
                </Col>
                <Col className="line" id="vertical" xs={1} style={!topRight ? { backgroundColor: 'none' } : { backgroundColor: 'black' }}>TR</Col>
            </Row>
            <Row>
                <Col xs={1}>B</Col>
                <Col className="line" id="horizontal" xs md={7} style={!middle ? { backgroundColor: 'none' } : { backgroundColor: 'black' }}>Mid</Col>
                <Col xs={1}>B</Col>
            </Row>
            <Row>
                <Col className="line" id="vertical" xs={1} style={!bottomLeft ? { backgroundColor: 'none' } : { backgroundColor: 'black' }}>BL</Col>
                <Col xs md={7}>
                    <Row>
                        <Col id="blank" xs md={7}>B</Col>
                    </Row>
                    <Row>
                        <Col className="line" id="horizontal" style={!bottom ? { backgroundColor: 'none' } : { backgroundColor: 'black' }}>Btm</Col>
                    </Row>
                </Col>
                <Col className="line" id="vertical" xs={1} style={!bottomRight ? { backgroundColor: 'none' } : { backgroundColor: 'black' }}>BR</Col>
            </Row>
        </Col>
    );
};

export default NumBox;