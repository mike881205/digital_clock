import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NumBox from "../NumBox";

const Clock = React.memo(({ sections, numbers }) => {

    const [hours, mins, secs] = sections;

    return (
        <div className="clockDiv">
            <Container>
                <Row>
                    {
                        hours.map((num, i) => {
                            let numObj;
                            numbers.forEach((number, n) => { if (num === n) numObj = number });
                            return (
                                <NumBox
                                    key={i}
                                    id={`${i} + ${num}`}
                                    num={num}
                                    numObj={numObj}
                                />
                            )
                        })
                    }
                    <Col>
                        <Row>
                            <Col><h1><strong>.</strong></h1></Col>
                        </Row>
                        <Row>
                            <Col style={{ height: '5vh' }}></Col>
                        </Row>
                        <Row>
                            <Col><h1><strong>.</strong></h1></Col>
                        </Row>
                    </Col>
                    {
                        mins.map((num, i) => {
                            let numObj;
                            numbers.forEach((number, n) => { if (num === n) numObj = number });
                            return (
                                <NumBox
                                    key={i}
                                    id={`${i} + ${num}`}
                                    num={num}
                                    numObj={numObj}
                                />
                            )
                        })
                    }
                    <Col>
                        <Row>
                            <Col><h1><strong>.</strong></h1></Col>
                        </Row>
                        <Row>
                            <Col style={{ height: '5vh' }}></Col>
                        </Row>
                        <Row>
                            <Col><h1><strong>.</strong></h1></Col>
                        </Row>
                    </Col>
                    {
                        secs.map((num, i) => {
                            let numObj;
                            numbers.forEach((number, n) => { if (num === n) numObj = number });
                            return (
                                <NumBox
                                    key={i}
                                    id={`${i} + ${num}`}
                                    num={num}
                                    numObj={numObj}
                                />
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    );
});

export default Clock;