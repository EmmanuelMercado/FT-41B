import React from 'react'
import './Contact.modules.css'
import { useState } from 'react';

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export default function Contact () {
  const [inputs,setInputs]=useState({
    name: '',
    email:'',
    message:''
  })
  const [errors,setErrors]=useState({
    name: 'Campo obligatorio',
    email:'Campo obligatorio',
    message:'Campo obligatorio'
  })

  const handleChange = (event) =>{
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    })
    let errorsValidate = validate();
    let selectedOption = event.target.name
    setErrors({
      ...errors,
      [event.target.name]: errorsValidate[selectedOption]
    })
  }

  const validate = () =>{
    let errors = {}
    //Validar nombre
    if(!inputs.name){
      errors.name = 'Se requiere un nombre'
    }
    else{
      errors.name = ''
    }
    //Valida contraseña
    if(!regexEmail.test(inputs.email)){
      errors.email = 'Se requiere un email válido'
    }
    else{
      errors.email = ''
    }
    //Validar mensaje
    if(!inputs.message){
      errors.message = 'Se requiere un mensaje'
    }
    else{
      errors.message = ''
    }
    return errors;
  }

  return(
    <form>
      <label htmlFor="name">Nombre:</label>
      <input className={errors.name && 'warning'} onChange={handleChange} type="text" name="name" placeholder='Escribe tu nombre'  value={inputs.name}/>
      <p className='danger'>{errors.name}</p>
      <br />
      <label htmlFor="email">Correo electrónico:</label>
      <input className={errors.email && 'warning'} onChange={handleChange} type="text" name="email" placeholder='Escribe tu email'  value={inputs.email}/>
      <p className='danger'>{errors.email}</p>
      <br />
      <label htmlFor="mensaje">Mensaje:</label>
      <input className={errors.message && 'warning'} onChange={handleChange} type="text" name="message" placeholder='Escribe tu mensaje' value={inputs.message}/>
      <p className='danger'>{errors.message}</p>
      <br />
      <button type='submit'>Enviar mensaje</button>
    </form>
  )
}
