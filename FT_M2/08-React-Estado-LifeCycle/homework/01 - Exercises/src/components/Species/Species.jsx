import React from "react";
// import styledSpecies from "./Species.module.css";

export default function Species({ species, handleSpecies, handleAllSpecies }) {
  // console.log(species);
  return <div>
    <h2>Species</h2>
    {
      species.map((specie,index)=>{
        return(
          <button key={index} value={specie} onClick={handleSpecies}>{specie}</button>
        )
      })
    }
    <button onClick={handleAllSpecies}>All Species</button>
  </div>
}
