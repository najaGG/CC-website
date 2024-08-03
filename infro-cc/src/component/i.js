import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Image4.css';

function Image4() {
  return (
    <div style={{ backgroundColor: '#3F3F3F', padding: '0px', marginTop: '0px' }}>
      <Container>
        <Row>
          <Col>
            <div className="text-center">
              <img
                src={require("../image/p3.jpg")}
                alt="..."
                className="img-thumbnail custom-img-thumbnail"
                style={{
                  borderColor: '#EC7D30',
                  borderWidth: '3px',
                  borderStyle: 'solid',
                  padding: '0px',
                  width: '299px',
                  height: '224px'
                }}
              />
            </div>
          </Col>
          <Col>
            <div className="text-center">
              <img
                src={require("../image/p4.jpg")}
                alt="..."
                className="img-thumbnail custom-img-thumbnail"
                style={{
                  borderColor: '#EC7D30',
                  borderWidth: '3px',
                  borderStyle: 'solid',
                  padding: '0px',
                  width: '299px',
                  height: '224px'
                }}
              />
            </div>
          </Col>
          <Col>
            <div className="text-center">
              <img
                src={require("../image/p5.jpg")}
                alt="..."
                className="img-thumbnail custom-img-thumbnail"
                style={{
                  borderColor: '#EC7D30',
                  borderWidth: '3px',
                  borderStyle: 'solid',
                  padding: '0px',
                  width: '299px',
                  height: '224px'
                }}
              />
            </div>
          </Col>
          <Col>
            <div className="text-center">
              <img
                src={require("../image/p6.jpg")}
                alt="..."
                className="img-thumbnail custom-img-thumbnail"
                style={{
                  borderColor: '#EC7D30',
                  borderWidth: '3px',
                  borderStyle: 'solid',
                  padding: '0px',
                  width: '299px',
                  height: '224px'
                }}
              />
            </div>
          </Col>
        </Row>

        <Row style={{ padding: '0px', marginTop: '60px', marginBlockEnd: '80px' }}>
          <Col>
            <div className="text-center">
              <img
                src={require("../image/p7.jpg")}
                alt="..."
                className="img-thumbnail custom-img-thumbnail"
                style={{
                  borderColor: '#EC7D30',
                  borderWidth: '3px',
                  borderStyle: 'solid',
                  padding: '0px',
                  width: '299px',
                  height: '224px'
                }}
              />
            </div>
          </Col>
          <Col>
            <div className="text-center">
              <img
                src={require("../image/p8.jpg")}
                alt="..."
                className="img-thumbnail custom-img-thumbnail"
                style={{
                  borderColor: '#EC7D30',
                  borderWidth: '3px',
                  borderStyle: 'solid',
                  padding: '0px',
                  width: '299px',
                  height: '224px'
                }}
              />
            </div>
          </Col>
          <Col>
            <div className="text-center">
              <img
                src={require("../image/p9.jpg")}
                alt="..."
                className="img-thumbnail custom-img-thumbnail"
                style={{
                  borderColor: '#EC7D30',
                  borderWidth: '3px',
                  borderStyle: 'solid',
                  padding: '0px',
                  width: '299px',
                  height: '224px'
                }}
              />
            </div>
          </Col>
          <Col>
            <div className="text-center">
              <img
                src={require("../image/p10.jpg")}
                alt="..."
                className="img-thumbnail custom-img-thumbnail"
                style={{
                  borderColor: '#EC7D30',
                  borderWidth: '3px',
                  borderStyle: 'solid',
                  padding: '0px',
                  width: '299px',
                  height: '224px'
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Image4;
