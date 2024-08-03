import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Inter.css';

function Section(props) {
  return (
    <div className="p-3 mb-2 text-white" style={{ backgroundColor: '#3F3F3F', fontFamily: 'Prompt, sans-serif' }}>
      <Container style={{ padding: 10, marginTop: 10 }}>
        <Row>
          <Col>
            <br/>
              <h1 style={{textAlign:'center'}}>{props.heading}</h1>
            <br/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Section;

