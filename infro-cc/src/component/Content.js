import React from 'react';
import { Container } from 'react-bootstrap';
import './Inter.css';


function Content(props) {
  return (
    <div className='text-white' style={{ backgroundColor: '#3F3F3F', fontFamily: 'Prompt, sans-serif' }}>
      <Container style={{ padding: 10, marginTop: 50 ,marginBottom:0}}>
        <br />
        <h3 style={{ textAlign: 'center' }}>{props.mainHeading}</h3>
        <h3 style={{ textAlign: 'center' }}>{props.mainHeading1}</h3>
        <h3 style={{ textAlign: 'left' }}>{props.subHeading1}</h3>
        <h3 style={{ textAlign: 'left' }}>{props.subHeading2}</h3>
        <h3 style={{ textAlign: 'left' }}>{props.subHeading3}</h3>
        <h3 style={{ textAlign: 'left' }}>{props.subHeading4}</h3>
        <h3 style={{ textAlign: 'left' }}>{props.subHeading5}</h3>
        <h3 style={{ textAlign: 'left' }}>{props.subHeading6}</h3>
        <br />
      </Container>
    </div>
  );
}

export default Content;
