import React from "react";

class Contador extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            counter: 0,
            saludo: 'Holis, bienvenidos al contador'
        }
    }

    clickState=()=>{
        this.setState({counter:this.state.counter+1,saludo:'Sumando'})        
    }

    componentDidMount(){
        console.log('Me acabo de mostrar');
    }

    componentDidUpdate(){
        console.log('Me actualicé, el estado ahora es ',this.state.counter);
    }

    componentWillUnmount(){
        console.log('Me desmonté');
    }

    render(){
        return (
            <div>
                <h1>CLASS COMPONENT</h1>
                <h2>{this.state.saludo}</h2>
                <h3>Contador: {this.state.counter}</h3>
                <button onClick={this.clickState}>Aumentar state</button>
            </div>
        )
    }


}

export default Contador;