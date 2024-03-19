import Carousel from 'react-bootstrap/Carousel';
import ButtonSend from './ButtonSend';
import './Ima.css';

function Ima() {
  return (
    <Carousel data-bs-theme="ligth">
      <Carousel.Item>

        <img
          className="d-block w-auto"
          src="./image/photo_100.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <h5><ButtonSend /></h5>
          <h5>WHATS SOUNDS GOOD TODAY?</h5>
          <h3><p>The buffet breakfast is served in the lounge on the ground floor and also outside on our little patio.</p></h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-auto"
          src="./image/photo3.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5><ButtonSend /></h5>
          <h5>FOOD AND DRINK SPECIALS</h5>
          <h3><p>Flavors that captivate, experiences that inspire. Welcome to our restaurant!.</p></h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h5><ButtonSend /></h5>
          <h5>World flavors in one place: our restaurant.</h5>
          <h3><p>
          Discover a feast of authentic flavors with every visit.
          </p></h3>
        </Carousel.Caption>
        <img
          className="d-block w-auto"
          src="./image/photo5.jpg"
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
  );
}

export default Ima;