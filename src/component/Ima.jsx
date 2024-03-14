import Carousel from 'react-bootstrap/Carousel';
import ButtonSend from './ButtonSend';
import './Ima.css';

function Ima() {
  return (
    <Carousel data-bs-theme="ligth">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./src/assets/image/photo2.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5><ButtonSend /></h5>
          <h5>xxxxxxxxxxxx</h5>
          <h3><p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p></h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./src/assets/image/photo3.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5><ButtonSend /></h5>
          <h5>Second slide label</h5>
          <h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h5><ButtonSend /></h5>
          <h3><p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p></h3>
        </Carousel.Caption>
        <img
          className="d-block w-100"
          src="./src/assets/image/photo5.jpg"
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
  );
}

export default Ima;