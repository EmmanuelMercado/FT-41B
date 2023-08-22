import {AUMENTAR_CONTADOR} from './action-types'

const initialState ={
    contador:0,
    users:[],
    user:{}
}

const reducer =(state=initialState,{type,payload})=>{
    switch(type){
        case AUMENTAR_CONTADOR:
            return {
                ...state,
                contador: state.contador + 1
            }

        default:
            return{...state}
    }
}

export default reducer;