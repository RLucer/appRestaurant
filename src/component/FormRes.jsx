import React, { useState } from 'react';
import './FormContact.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const FormRes = () => {
    const [nombre, setNombre] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [numPersonas, setNumPersonas] = useState('');
    const [mail, setMail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Codigo pararealizar la lógica para enviar la reserva y enviar los datos a un servidor o mostrar un mensaje de confirmación
        console.log('Reserva enviada:', { nombre, fecha, hora, numPersonas });
        // Acá resetear los campos después de enviar la reserva
        setNombre('');
        setMail('');
        setFecha('');
        setHora('');
        setNumPersonas('');
    };

    return (
        <div>
            <h4>Make reservation</h4>
            <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-3 mt-3" >
                    <Form.Control className="mb-3"
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                        placeholder='Name ' />

                    <Form.Control className="mb-3" type="email"
                        id="mail"
                        name="mail"
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                        placeholder='Email'
                        required />


                    <Form.Control className="mb-3"
                        type="date"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                        required
                        placeholder='Date reserver'
                    />

                    <Form.Control className="mb-3"
                        type="time"
                        value={hora}
                        onChange={(e) => setHora(e.target.value)}
                        required
                        placeholder='time'
                    />

                    <Form.Control className="mb-3"
                        type="number"
                        value={numPersonas}
                        onChange={(e) => setNumPersonas(e.target.value)}
                        required
                        placeholder='number of diners'
                    />

                </Form.Group >
                <div className="d-grid gap-2 mt-lg-5">
                    <Button variant="success" type="submit" size="lg" active>
                        Request Reservation
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default FormRes;
