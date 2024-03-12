import React from 'react'


const FormContact = () => {
  return (
   <>
        <label htmlFor=""><input name='firstname' type="text" /></label>
        <label htmlFor=""><input name='lastname' type="text" /></label>
        <label htmlFor=""><input name='phone' type="number" /></label>
        <label htmlFor=""><input name='email' type="email" /></label>
   </>

  )
}

export default FormContact;
