import { useState } from "react";

const Form = () =>{
    let [email,setEmail]=useState('')
    let [password,setPassword]=useState('')
    return(
        <form>
            <h1>Holi, soy el Form c:</h1>
            <label htmlFor="email">Email:</label>
            <input type="email" placeholder='Ingrese su mail' value ={email}/>
            <hr />
            <label htmlFor="password">Password:</label>
            <input type="text" placeholder='Ingrese su password' value ={password}/>
            <hr />
            <button>Enviar</button>
        </form>
    )
}
export default Form;