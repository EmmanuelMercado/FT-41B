import React from 'react';
// import styledAnimals from './Animals.module.css'

export default class Animals extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return <div>
      {
        this.props.animals.map(animal =>{
          return(
          <div>
          <h5>{animal.name}</h5>
          <img src={animal.image} alt={animal.name} width='300px'/>
          <p>{animal.specie}</p>
          </div>
          )
        })
      }
    </div>
  }
}
