import React from 'react'
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
                <img src={require("../image/a1.png")} alt="..." className="img-thumbnail custom-img-thumbnail" style={{ borderColor: '#EC7D30', borderWidth: '3px', borderStyle: 'solid', padding: '0px' }} />
            </div>
        </Col>
        <Col>
            <div className="text-center">
                <img src={require("../image/a2.png")} alt="..." className="img-thumbnail custom-img-thumbnail" style={{ borderColor: '#EC7D30', borderWidth: '3px', borderStyle: 'solid', padding: '0px' }} />
            </div>
        </Col>
        <Col>
            <div className="text-center">
                <img src={require("../image/a3.png")} alt="..." className="img-thumbnail custom-img-thumbnail" style={{ borderColor: '#EC7D30', borderWidth: '3px', borderStyle: 'solid', padding: '0px' }} />
            </div>
        </Col>
        <Col>
            <div className="text-center">
                <img src={require("../image/a4.png")} alt="..." className="img-thumbnail custom-img-thumbnail" style={{ borderColor: '#EC7D30', borderWidth: '3px', borderStyle: 'solid', padding: '0px' }} />
            </div>
        </Col>
      </Row>

      <Row style={{ padding: '0px', marginTop: '60px', marginBlockEnd: '80px' }}>
        <Col>
            <div className="text-center">
                <img src={require("../image/a5.png")} alt="..." className="img-thumbnail custom-img-thumbnail" style={{ borderColor: '#EC7D30', borderWidth: '3px', borderStyle: 'solid', padding: '0px' }} />
            </div>
        </Col>
        <Col>
            <div className="text-center">
                <img src={require("../image/a6.png")} alt="..." className="img-thumbnail custom-img-thumbnail" style={{ borderColor: '#EC7D30', borderWidth: '3px', borderStyle: 'solid', padding: '0px' }} />
            </div>
        </Col>
        <Col>
            <div className="text-center">
                <img src={require("../image/a7.png")} alt="..." className="img-thumbnail custom-img-thumbnail" style={{ borderColor: '#EC7D30', borderWidth: '3px', borderStyle: 'solid', padding: '0px' }} />
            </div>
        </Col>
        <Col>
            <div className="text-center">
                <img src={require("../image/a8.png")} alt="..." className="img-thumbnail custom-img-thumbnail" style={{ borderColor: '#EC7D30', borderWidth: '3px', borderStyle: 'solid', padding: '0px' }} />
            </div>
        </Col>
      </Row>
    </Container>
    </div>
  )
}
export default Image4;