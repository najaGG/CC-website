import React from 'react';
import { Container } from 'react-bootstrap';
import './Inter.css';


function Buttonn() {
  return (
    <div className="">
      <Container style={{ padding: 80, marginTop: 0 }}>
        <div className="d-flex justify-content-center">
          <br />
          <a className="btn btn-lg text-white" style={{ backgroundColor: '#EC7D30', fontFamily: 'Prompt, sans-serif', borderColor: '#EC7D30', fontSize: '36px', fontWeight: 'bold' }} href="https://docs.google.com/forms/d/e/1FAIpQLSdgKElptyc_Qgd-PVQQ3rEPdwfm3BuvfN7d4_kkLIQ8aHnhqg/viewform?pli=1" role="button">แบบสอบถาม</a>
          {/* หรือแบบนี้ก็ได้ <button className="btn btn-lg" style={{ backgroundColor: '#FFA500', borderColor: '#FFA500' }} type="button">แบบสอบถาม</button> */}
          <br />
        </div>
      </Container>
    </div>
  );
}

export default Buttonn;
