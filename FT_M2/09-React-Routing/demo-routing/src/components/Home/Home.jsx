import {Link,NavLink} from 'react-router-dom'
const Home = () =>{
    return (
        <>
            <h1>Este es el componente Home</h1>   
            <button>
                <Link to ='/about'>About</Link>
            </button>
            <button>
                <NavLink to ='/profile'>Profile</NavLink>
            </button>    
        </>
    )
}

export default Home;