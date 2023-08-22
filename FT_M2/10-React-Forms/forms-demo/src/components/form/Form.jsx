import { useState } from "react";

const Form = () =>{
    const [form,setForm]=useState({
        email:'',
        password:''
    })

    const [errors,setErrors]=useState({
        email:'',
        password:''
    })
    // let [password,setPassword]=useState('')

    const handleOnChange =(event)=>{
        setForm({
            ...form,
            [event.target.name]:event.target.value
        })
        validate()
    }
    
    const validate = () =>{
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if(!emailRegex.test(form.email)){
            setErrors({
                ...errors,
                email:'tas bien wey, email malo'
            })
        }
        else{
            setErrors({
                ...errors,
                email:''
            })
        }
    }

    const handleOnSubmit = (event) =>{
        event.preventDefault();
    }


    return(
        <form onSubmit={handleOnSubmit}>
            <h1>Holi, soy el Form c:</h1>
            <label htmlFor="email">Email:</label>
            <input name='email' type="email" placeholder='Ingrese su mail' value ={form.email} onChange={handleOnChange}/>
            {errors.email && <p>{errors.email}</p>}
            <hr />
            <label htmlFor="password">Password:</label>
            <input name='password' type="text" placeholder='Ingrese su password' value ={form.password}
            onChange={handleOnChange}/>
            <hr />
            <button disabled={!form.email || !form.password || errors.email || errors.password}>Enviar</button>
        </form>
    )
}
export default Form;