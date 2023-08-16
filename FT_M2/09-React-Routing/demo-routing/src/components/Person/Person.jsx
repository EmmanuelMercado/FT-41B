import {Link,Outlet} from 'react-router-dom'
const Person = () =>{
    return(
        <div>
            <h1>Cohorte 41 B</h1>
            <label >Intructora: Cande</label>
            <p>Alumnos: como 100 </p>
            <button>
                <Link to='../'>BACK</Link>
            </button>
        </div>
    )
}

export default Person;