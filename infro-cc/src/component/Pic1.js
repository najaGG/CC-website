import React from 'react';
import Container from 'react-bootstrap/Container';

function Pic1() {
  return (
    <div style={{ backgroundColor: '#3F3F3F', padding: '0px', marginTop: '0px' }}>
      <Container>
        <div className="text-center">
          <img src={require("../image/p2.png")} alt="..." className="img-thumbnail" style={{ borderColor: '#EC7D30', borderWidth: '7px', borderStyle: 'solid', padding: '0px' }} />
        </div>
      </Container>
    </div>
  );
}

export default Pic1;


