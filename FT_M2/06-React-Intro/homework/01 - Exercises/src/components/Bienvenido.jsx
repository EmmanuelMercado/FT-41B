import React from "react";
import Botones from './Botones'

const studentName = "Mtro. Ing. Emmanuel Mercado";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
  // el código de tu componente acá
  return(
    <>
    <div>
    <h1>¡Hola Mundo!</h1>
    <h3>{studentName}</h3>
    <ul>
    {
      techSkills.map(skill=>{
        return <li>{skill}</li>
        
      })
    }
    </ul>
    <Botones textoBtn1={alerts.m1} textoBtn2={alerts.m2}/>
    </div>
    </>
  )
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
