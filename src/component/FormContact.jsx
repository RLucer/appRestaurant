import React, { useState } from 'react';
import './FormContact.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const FormContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    //**/ enviar datos a la api para gestionar / */
  };

  return (

<>
<h3>Contact us</h3>
    <Form onSubmit={handleSubmit} >
      <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlInput1">
        {/* <Form.Label>Email address</Form.Label> */}
        <Form.Control className="mb-3"  type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder='Email'
          required />
        {/* <Form.Label>Name </Form.Label> */}

        <Form.Control className="mb-3" type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder='Name'
          required />

        {/* <Form.Label>Subject </Form.Label> */}
        <Form.Control className="mb-3" type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder='Subject'
          required />
     

        {/* <Form.Label>Message</Form.Label> */}
        <Form.Control
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder='Message....'
          required
          as="textarea" rows={3} />

      </Form.Group >
      <div className="d-grid gap-2 mt-lg-5"> 
        <Button variant="success" type="submit" size="lg" active>
          Submit
        </Button>
      </div>



    </Form>

    </>

  );
};

export default FormContact;
