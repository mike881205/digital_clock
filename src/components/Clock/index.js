import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NumBox from "../NumBox";

const Clock = () => {

    const [hours, setHours] = useState([0, 0])
    const [mins, setMins] = useState([0, 0])
    const [secs, setSecs] = useState([0, 0])

    return (
        <div className="clockDiv">
            <Container>
                <Row>
                    {hours.map((num, i) => { return (<NumBox key={i} id={num} num={num} />) })}
                    <Col>
                        <Row>
                            <Col><h1><strong>.</strong></h1></Col>
                        </Row>
                        <Row>
                            <Col><h1><strong>.</strong></h1></Col>
                        </Row>
                    </Col>
                    {mins.map((num, i) => { return (<NumBox key={i} id={num} num={num} />) })}
                    <Col>
                        <Row>
                            <Col><h1><strong>.</strong></h1></Col>
                        </Row>
                        <Row>
                            <Col><h1><strong>.</strong></h1></Col>
                        </Row>
                    </Col>
                    {secs.map((num, i) => { return (<NumBox key={i} id={num} num={num} />) })}
                </Row>
            </Container>
        </div>
    );
};

export default Clock;