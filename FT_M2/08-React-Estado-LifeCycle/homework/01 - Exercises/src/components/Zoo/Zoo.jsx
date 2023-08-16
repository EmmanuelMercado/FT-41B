import React from "react";

// eslint-disable-next-line no-unused-vars
import Animals from "../Animals/Animals";
// eslint-disable-next-line no-unused-vars
import Species from "../Species/Species";
// import styledZoo from "./Zoo.module.css";

export default function Zoo() {
  /* Escribe acá tu código */
  let [zoo,setZoo]= React.useState({
    zooname : '',
    animals : [],
    species : [],
    allAnimals : [] 
  })


  React.useEffect(()=>{
    fetch('http://localhost:3001/zoo')
   .then((res) => res.json())
   .then((data) =>
      setZoo({
         ...zoo,
         animals: data.animals,
         species: data.species,
         allAnimals: data.animals,
      })
   )
   .catch((error) => console.log(error));
  },[])

  const handleInputChange = (event) =>{
  const newZooName = event.target.value
  
  setZoo(prevZoo => ({
    ...prevZoo,
    zooname:newZooName
  }))
  }

  const handleAllSpecies = () =>{
    const allAnimals= zoo.allAnimals
    setZoo(prevZoo=>({
      ...prevZoo,
      animals:allAnimals
    })) 
  }

  const handleSpecies = (event)=>{
    console.log(zoo);
    handleAllSpecies();
    console.log(zoo);
    const specieSelected = event.target.value
    const filteredSpecie = zoo.animals.filter((specie)=> specie.specie===specieSelected)
    console.log(zoo);
    setZoo(prevZoo=>({
      ...prevZoo,
      animals:filteredSpecie
    }))
  }

  

  return (
    <div>
      <label for='zooName'>Zoo name:</label>
      <input onChange={handleInputChange} type="text" id='zooName' name="zooname" value={zoo.zooname}/>
      <h1>{zoo.zooname}</h1>
      <Species species= {zoo.species} handleSpecies={handleSpecies} handleAllSpecies={handleAllSpecies}/>
      <Animals animals = {zoo.animals}/>
    </div>
  );
}
