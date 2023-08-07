const Alumnos = ({alumnos,cohorte}) => {
    // const {alumnos, cohorte}= props
    
    return (
        <>
        <h3>Alumnos: {cohorte}</h3>
        {
            alumnos.map(alumno => {
                return (
                    <div>
                        <p>Alumno: {alumno.name}  </p>
                        <p>Edad: {alumno.age} </p>
                    </div>
                )
            })
        }
        </>
    )
}

export default Alumnos;