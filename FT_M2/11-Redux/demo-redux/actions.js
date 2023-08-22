// store.dispatch({type:'AUMENTAR_COUNT'})
// store.dispatch({type:'CAMBIAR_INSTRUCTOR', payload:'Dai'})
// store.dispatch({type:'MODIFICAR_ALUMNOS',payload:['EMM','CAR','CAM','SAM']})

const aumentarCount = () => {type:'AUMENTAR_COUNT'}
const cambiarInstructor = () => {
    return {type:'CAMBIAR_INSTRUCTOR', payload:'Dai'}
}
const modificarAlumnos = () => {
    return {type:'MODIFICAR_ALUMNOS', payload:['EMM','CAR','CAM','SAM']}
}

module.exports={
    aumentarCount,
    cambiarInstructor,
    modificarAlumnos
}