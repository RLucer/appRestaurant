import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function ButtonSend() {
  return (
    <>

      <Button  variant="success" size="lg" as= {Link} to ="/appRestaurant/Reserve">Reserve</Button>{' '}
   
    </>
  );
}

export default ButtonSend;