import React, { useState } from 'react';
import './FormContact.css';
import Form from 'react-bootstrap/Form';
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
    //**/ enviar datos a la api / */
  };

  return (


    <Form onSubmit={handleSubmit} >

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required />
        <Form.Label>Name </Form.Label>

        <Form.Control type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required />
        <Form.Label>Subject </Form.Label>

        <Form.Control type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required />
        <Form.Label>Email address</Form.Label>

        <Form.Label>Message</Form.Label>
        <Form.Control
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          as="textarea" rows={3} />

      </Form.Group>
        <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>



  );
};

export default FormContact;
