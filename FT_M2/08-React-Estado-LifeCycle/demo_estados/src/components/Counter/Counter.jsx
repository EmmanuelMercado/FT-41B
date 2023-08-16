import { useState , useEffect} from "react";

const Counter = () =>{
    let [count,setCount] = useState(0) //La primer posicion es el estado y el segundo es el CB que nos va a permitir cambia el estado 
    
    const handleClick = () =>{
        setCount(count+1)
    }

    useEffect(()=>{
        console.log('Se montó el componente funcional');
        return ()=>alert('Se desmonta')
    },[count])
    return(
        <div>
            <h1>FUNCTION COMPONENT</h1>
            <p>{count}</p>
            <button onClick={handleClick} >aumenta</button>
        </div>
    )
}

export default Counter;