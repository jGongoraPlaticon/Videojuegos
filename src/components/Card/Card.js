import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Img5 from '../Img/img5.jpg';
import Img6 from '../Img/img6.jpg';
import Img7 from '../Img/img7.jpg';

function GroupExample() {
  return (
    <div class="container">
    <CardGroup className='tarjetas'>
      <Card>
        <Card.Img variant="top" src={Img5} />
        <Card.Body className='tj-body'>
          <Card.Title>League Of Legends</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card >
        <Card.Img variant="top" src={Img6}/>
        <Card.Body className='tj-body'>
          <Card.Title>Spider-Man (PS4)</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body> 
      </Card>

      <Card>
        <Card.Img variant="top" src={Img7} />
        <Card.Body className='tj-body'>
          <Card.Title>Star Wars Battlefront</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </CardGroup>
    </div>
  );
}

export default GroupExample;