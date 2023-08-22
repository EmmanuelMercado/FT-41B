import React from "react";
import {connect} from 'react-redux';
import {aumentarContador} from '../../Redux/actions'
import { AUMENTAR_CONTADOR } from "../../Redux/action-types";

class Contador extends React.Component{
    constructor(props){ //{contador : state.contador, aumentarContador: fn()}
        super(props)
    }

    render(){
        return(
            <>
                <h1>Este es el componente Contador</h1>
                <h3>Contador:{this.props.contador}</h3>
                <button onClick={this.props.aumentarContador}>AUMENTAR_CONTADOR</button>
            </>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        contador : state.contador
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        aumentarContador: ()=> dispatch(aumentarContador())
    }
}

export default connect(
    mapStateToProps, //Me permite acceder al estado global
    mapDispatchToProps //Me permite despachar acciones
)(Contador);