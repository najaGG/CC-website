import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import WhiteRectangle from './WhiteRectangle';

function Gallery() {
  return (
    <div className="p-3 mb-2 text-white " style={{ backgroundColor: '#3F3F3F' }}>
      <Container style={{ padding: 10, marginTop: 10 }}>
        <WhiteRectangle/>
        <br/>
            <span className="badge rounded-pill" style={{ backgroundColor: '#EC7D30', fontSize: '22px', color: '#000000' }}>Gallery</span>
        <br/>
      </Container>
    </div>
  );
}

export default Gallery;
