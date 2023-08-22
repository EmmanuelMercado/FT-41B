const initialState ={
    count: 0,
    instructor: '',
    cohorte:'',
    alumnos: []
}
const reducer=(state=initialState,action)=>{
    if(action.type==='AUMENTAR_COUNT'){
        return{
            ...state,
            count: state.count + 1
        }
    }
    if(action.type==='CAMBIAR_INSTRUCTOR'){
        return{
            ...state,
            instructor: action.payload
        }
    }
    if(action.type==='MODIFICAR_ALUMNOS'){
        return{
            ...state,
            alumnos: action.payload
        }
    }
}

module.exports = reducer;