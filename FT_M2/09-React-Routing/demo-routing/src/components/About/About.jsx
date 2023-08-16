import { useLocation } from "react-router-dom";
const About = () => {
    const location = useLocation()
    console.log(location);
    return(
        <>
            <h1>Este es el componente About</h1>
            <p>Estamos aprendiendo Routing</p>
        </>
    )
}

export default About;