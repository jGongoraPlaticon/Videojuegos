import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../Img/img1.png';
import Img2 from '../Img/img2.jpg';
import Img3 from '../Img/img3.jpg';
import Img4 from '../Img/img4.jpg';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Fortnite</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Grand Theft Auto V</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>The Legend of Zelda: Breath of the Wild</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img4}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>League Of Legends</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;