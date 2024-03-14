import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function ButtonSend() {
  return (
    <>

      <Button  variant="success" size="lg" as= {Link} to ="/Reserve">Reservar</Button>{' '}
   
    </>
  );
}

export default ButtonSend;