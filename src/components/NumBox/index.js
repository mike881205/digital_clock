import React from "react";
import { Row, Col } from "react-bootstrap";
import './style.css'

const NumBox = ({ num, numObj }) => {

    const { top, topRight, topLeft, middle, bottomRight, bottomLeft, bottom } = numObj;

    const setStyle = () => {
        let topStyleArr = ['none', 'none', 'none', 'none'];
        let bottomStyleArr = ['none', 'none', 'none', 'none'];
        let topString;
        let bottomString;


        if (top) topStyleArr[0] = 'solid';
        if (topRight) topStyleArr[1] = 'solid';
        if (topLeft) topStyleArr[3] = 'solid';
        if (bottomRight) bottomStyleArr[1] = 'solid';
        if (bottom) bottomStyleArr[2] = 'solid';
        if (bottomLeft) bottomStyleArr[3] = 'solid';

        topString = `${topStyleArr[0]} ${topStyleArr[1]} ${topStyleArr[2]} ${topStyleArr[3]}`;
        bottomString = `${bottomStyleArr[0]} ${bottomStyleArr[1]} ${bottomStyleArr[2]} ${bottomStyleArr[3]}`;

        return [topString, bottomString];
    };

    const topStyle = setStyle()[0]
    const bottomStyle = setStyle()[1]

    return (
        <Col style={{ margin: '1%' }}>
            <Row>
                <Col
                    className="top"
                    style={{ borderStyle: topStyle, borderWidth: 'thick' }}
                >
                </Col>
            </Row>
            <Row>
                <Col
                    className="middle"
                    style={!middle ? { backgroundColor: 'none' } : { backgroundColor: 'black' }}
                >
                </Col>
            </Row>
            <Row>
                <Col
                    className="bottom"
                    style={{ borderStyle: bottomStyle, borderWidth: 'thick' }}
                >
                </Col>
            </Row>
        </Col>
    );
};

export default NumBox;