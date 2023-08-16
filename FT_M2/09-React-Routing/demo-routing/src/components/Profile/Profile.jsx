import {Link,Outlet} from 'react-router-dom'

const Profile = () =>{
    return(
        <div>
            <h1>Este perfil pertenece al Winnie </h1>
            <h2>Cohorte 41B</h2>

            <button>
                <Link to='/person'>Person</Link>
            </button>
            <button>
                <Link to='/'>BACK</Link>
            </button>

            {/* <Outlet/> */}
        </div>
    )
}

export default Profile